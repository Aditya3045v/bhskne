import { useState } from 'react';
import { supabase, uploadFile } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { Database } from '@/types/supabase';

export type StudentApplication = Database['public']['Tables']['student_applications']['Row'];
type NewStudentApplication = Omit<StudentApplication, 'id' | 'created_at' | 'updated_at' | 'user_id' | 'status'>;

interface FileUpload {
  file: File;
  type: 'photo' | 'birth_certificate' | 'marksheet';
}

export const useApplications = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { user, isAdmin } = useAuth();

  const uploadFiles = async (files: FileUpload[]): Promise<Record<string, string | null>> => {
    const urls: Record<string, string | null> = {
      photo_url: null,
      birth_certificate_url: null,
      marksheet_url: null
    };

    for (const { file, type } of files) {
      if (!file) continue;

      const path = `${user?.id}/${type}s/${Date.now()}-${file.name}`;
      const url = await uploadFile('admission_documents', path, file);
      
      switch (type) {
        case 'photo':
          urls.photo_url = url;
          break;
        case 'birth_certificate':
          urls.birth_certificate_url = url;
          break;
        case 'marksheet':
          urls.marksheet_url = url;
          break;
      }
    }

    return urls;
  };

  const submitApplication = async (
    data: NewStudentApplication,
    files?: FileUpload[]
  ) => {
    if (!user) {
      throw new Error("User not authenticated");
    }

    try {
      setIsLoading(true);

      // Upload files if provided
      const fileUrls = files ? await uploadFiles(files) : {};

      const { data: result, error } = await supabase
        .from('student_applications')
        .insert({
          user_id: user.id,
          ...data,
          ...fileUrls,
          status: 'pending'
        })
        .select()
        .single();

      if (error) {
        console.error('Error submitting application:', error);
        throw new Error(error.message);
      }

      toast({
        title: "Success",
        description: "Your application has been submitted successfully.",
      });

      return result;
    } catch (error: any) {
      console.error('Error in submitApplication:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to submit application",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getApplications = async () => {
    if (!user?.id) {
      toast({
        title: "Authentication Error",
        description: "Please sign in to view applications",
        variant: "destructive",
      });
      return null;
    }

    try {
      setIsLoading(true);

      const query = supabase
        .from('student_applications')
        .select('*');

      // If not admin, only show user's own applications
      if (!isAdmin) {
        query.eq('user_id', user.id);
      }

      const { data: applications, error } = await query
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error);
        throw error;
      }

      return applications;
    } catch (error: any) {
      console.error('Application status error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch applications",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: StudentApplication['status']) => {
    if (!isAdmin) {
      throw new Error("Unauthorized to update application status");
    }

    try {
      setIsLoading(true);

      const { error } = await supabase
        .from('student_applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Application status updated to ${status}`,
      });
    } catch (error: any) {
      console.error('Error updating application status:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to update application status",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    submitApplication,
    getApplications,
    updateApplicationStatus,
  };
}; 