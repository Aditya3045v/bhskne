
import { useState } from 'react';
import { supabase, uploadFile } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/hooks/useAuth';

export type StudentApplication = {
  id: string;
  user_id: string;
  student_name: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
  category: string;
  nationality: string;
  religion: string | null;
  address: string;
  mobile: string;
  email: string;
  emergency_contact: string;
  father_name: string;
  father_occupation: string;
  father_mobile: string;
  mother_name: string;
  mother_occupation: string;
  mother_mobile: string;
  last_school: string;
  last_class: string;
  applying_for_class: string;
  academic_year: string;
  medical_conditions: string | null;
  photo_url: string | null;
  birth_certificate_url: string | null;
  marksheet_url: string | null;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
};

// Update the NewStudentApplication type to make all URL fields optional
export type NewStudentApplication = Omit<StudentApplication, 'id' | 'created_at' | 'updated_at' | 'user_id' | 'status'> & {
  photo_url?: string | null;
  birth_certificate_url?: string | null;
  marksheet_url?: string | null;
};

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

      const timestamp = Date.now();
      const fileName = `${file.name.split('.')[0]}-${timestamp}.${file.name.split('.').pop()}`;
      const path = `${user?.id}/${type}/${fileName}`;
      
      try {
        const { data, error } = await supabase.storage
          .from('admission_documents')
          .upload(path, file, {
            cacheControl: '3600',
            upsert: false
          });
          
        if (error) throw error;
        
        // Get the public URL
        const { data: publicUrlData } = supabase.storage
          .from('admission_documents')
          .getPublicUrl(data.path);
          
        switch (type) {
          case 'photo':
            urls.photo_url = publicUrlData.publicUrl;
            break;
          case 'birth_certificate':
            urls.birth_certificate_url = publicUrlData.publicUrl;
            break;
          case 'marksheet':
            urls.marksheet_url = publicUrlData.publicUrl;
            break;
        }
      } catch (error) {
        console.error(`Error uploading ${type} file:`, error);
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
      const fileUrls = files && files.length > 0 ? await uploadFiles(files) : {};

      // Create structured data object for database
      const applicationData = {
        user_id: user.id,
        ...data,
        ...fileUrls,
        status: 'pending',
        // Store additional structured metadata
        metadata: {
          submission_timestamp: new Date().toISOString(),
          device_info: navigator.userAgent,
          submission_type: "web_form"
        }
      };

      console.log("Submitting structured application data:", applicationData);

      const { data: result, error } = await supabase
        .from('student_applications')
        .insert(applicationData)
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
      return [];
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

      return applications as StudentApplication[];
    } catch (error: any) {
      console.error('Application status error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to fetch applications",
        variant: "destructive",
      });
      return [];
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
