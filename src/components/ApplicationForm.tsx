import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useApplications, NewStudentApplication } from '@/hooks/useApplications';
import { cn } from '@/lib/utils';
import { sendToGoogleSheets } from '@/lib/googleSheets';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const ACCEPTED_DOC_TYPES = [...ACCEPTED_IMAGE_TYPES, 'application/pdf'];

const applicationSchema = z.object({
  student_name: z.string().min(2, 'Name must be at least 2 characters'),
  father_name: z.string().min(2, 'Father\'s name must be at least 2 characters'),
  mother_name: z.string().min(2, 'Mother\'s name must be at least 2 characters'),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date'),
  gender: z.enum(['male', 'female', 'other']),
  category: z.enum(['general', 'obc', 'sc', 'st']),
  nationality: z.string().min(2, 'Nationality must be at least 2 characters'),
  religion: z.string().min(2, 'Religion must be at least 2 characters'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  mobile: z.string().regex(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  email: z.string().email('Invalid email address'),
  emergency_contact: z.string().regex(/^[0-9]{10}$/, 'Emergency contact must be 10 digits'),
  father_occupation: z.string().min(2, 'Father\'s occupation must be at least 2 characters'),
  mother_occupation: z.string().min(2, 'Mother\'s occupation must be at least 2 characters'),
  mother_mobile: z.string().regex(/^[0-9]{10}$/, 'Mother\'s mobile must be 10 digits'),
  last_school: z.string().min(2, 'Last school must be at least 2 characters'),
  last_class: z.string().min(1, 'Last class is required'),
  applying_for_class: z.string().min(1, 'Applying class is required'),
  academic_year: z.string().regex(/^[0-9]{4}-[0-9]{4}$/, 'Academic year must be in YYYY-YYYY format'),
  medical_conditions: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<{
    photo?: File;
    birth_certificate?: File;
    marksheet?: File;
  }>({});
  const { toast } = useToast();
  const { submitApplication } = useApplications();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      academic_year: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
    },
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: 'photo' | 'birth_certificate' | 'marksheet'
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "Error",
        description: "File size should be less than 5MB",
        variant: "destructive",
      });
      return;
    }

    const acceptedTypes = type === 'photo' ? ACCEPTED_IMAGE_TYPES : ACCEPTED_DOC_TYPES;
    if (!acceptedTypes.includes(file.type)) {
      toast({
        title: "Error",
        description: `Invalid file type. Accepted types: ${acceptedTypes.join(', ')}`,
        variant: "destructive",
      });
      return;
    }

    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      setIsSubmitting(true);

      const fileUploads = Object.entries(files).map(([type, file]) => ({
        file,
        type: type as 'photo' | 'birth_certificate' | 'marksheet'
      }));

      const applicationData: NewStudentApplication = {
        student_name: data.student_name,
        father_name: data.father_name,
        mother_name: data.mother_name,
        dob: data.dob,
        gender: data.gender,
        category: data.category,
        nationality: data.nationality,
        religion: data.religion,
        address: data.address,
        mobile: data.mobile,
        email: data.email,
        emergency_contact: data.emergency_contact,
        father_occupation: data.father_occupation,
        father_mobile: data.mobile,
        mother_occupation: data.mother_occupation,
        mother_mobile: data.mother_mobile,
        last_school: data.last_school,
        last_class: data.last_class,
        applying_for_class: data.applying_for_class,
        academic_year: data.academic_year,
        medical_conditions: data.medical_conditions || null,
        photo_url: null,
        birth_certificate_url: null,
        marksheet_url: null
      };

      const applicationResult = await submitApplication(applicationData, fileUploads);
      
      const googleSheetsResult = await sendToGoogleSheets({
        ...data,
        photo_url: applicationResult?.photo_url,
        birth_certificate_url: applicationResult?.birth_certificate_url,
        marksheet_url: applicationResult?.marksheet_url,
        status: 'pending',
        father_mobile: data.mobile
      });
      
      console.log('Application submitted to Supabase:', applicationResult);
      console.log('Application submitted to Google Sheets:', googleSheetsResult);
      
      if (googleSheetsResult.success) {
        toast({
          title: "Success",
          description: "Your application has been submitted successfully and saved to our records.",
        });
      } else {
        toast({
          title: "Application Submitted",
          description: "Your application has been saved, but there was an issue with backup to Google Sheets. Our team has been notified.",
        });
        console.error('Google Sheets submission error:', googleSheetsResult.message);
      }

      form.reset();
      setFiles({});
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="student_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter student name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="father_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father's Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter father's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mother_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mother's Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mother's name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="obc">OBC</SelectItem>
                    <SelectItem value="sc">SC</SelectItem>
                    <SelectItem value="st">ST</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder="Enter nationality" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="religion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Religion</FormLabel>
                <FormControl>
                  <Input placeholder="Enter religion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter complete address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter 10-digit mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="emergency_contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact</FormLabel>
                <FormControl>
                  <Input placeholder="Enter emergency contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="father_occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Father's Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="Enter father's occupation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mother_occupation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mother's Occupation</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mother's occupation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mother_mobile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mother's Mobile</FormLabel>
                <FormControl>
                  <Input placeholder="Enter mother's mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_school"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last School</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last school name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="last_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Class</FormLabel>
                <FormControl>
                  <Input placeholder="Enter last class" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="applying_for_class"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Applying for Class</FormLabel>
                <FormControl>
                  <Input placeholder="Enter applying class" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="academic_year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Academic Year</FormLabel>
                <FormControl>
                  <Input placeholder="YYYY-YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="medical_conditions"
            render={({ field }) => (
              <FormItem className="col-span-full">
                <FormLabel>Medical Conditions (if any)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter any medical conditions" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormItem>
            <FormLabel>Photo</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept={ACCEPTED_IMAGE_TYPES.join(',')}
                onChange={(e) => handleFileChange(e, 'photo')}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel>Birth Certificate</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept={ACCEPTED_DOC_TYPES.join(',')}
                onChange={(e) => handleFileChange(e, 'birth_certificate')}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel>Last Class Marksheet</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept={ACCEPTED_DOC_TYPES.join(',')}
                onChange={(e) => handleFileChange(e, 'marksheet')}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </form>
    </Form>
  );
}
