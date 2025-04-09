import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { format } from "date-fns";
import { 
  Upload, 
  Calendar, 
  FileText, 
  User, 
  Home, 
  Book, 
  Briefcase,
  Phone,
  Users,
  Info,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";
import { ApplicationStatus } from "@/components/admission/ApplicationStatus";
import { ApplicationsList } from "@/components/admission/ApplicationsList";
import { DocumentUploader } from "@/components/admission/DocumentUploader";

const formSchema = z.object({
  full_name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  gender: z.enum(["male", "female", "other"], { 
    required_error: "Please select a gender" 
  }),
  date_of_birth: z.string().refine((date) => {
    return new Date(date) <= new Date();
  }, { message: "Birth date cannot be in the future" }),
  age: z.number().min(3, { message: "Age must be at least 3 years" }),
  category: z.string().min(1, { message: "Please select a category" }),
  religion: z.string().optional(),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  
  address_line1: z.string().min(5, { message: "Address is required" }),
  address_line2: z.string().optional(),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  pincode: z.string().min(6, { message: "Valid pincode is required" }),
  
  father_name: z.string().min(3, { message: "Father's name is required" }),
  father_occupation: z.string().min(2, { message: "Father's occupation is required" }),
  father_mobile: z.string().min(10, { message: "Valid mobile number is required" }),
  mother_name: z.string().min(3, { message: "Mother's name is required" }),
  mother_occupation: z.string().min(2, { message: "Mother's occupation is required" }),
  mother_mobile: z.string().min(10, { message: "Valid mobile number is required" }),
  emergency_contact: z.string().min(10, { message: "Emergency contact is required" }),
  
  last_school: z.string().min(3, { message: "Previous school name is required" }),
  last_class: z.string().min(1, { message: "Previous class is required" }),
  applying_for_class: z.string().min(1, { message: "Please select a class" }),
  academic_year: z.number().min(2023, { message: "Please select an academic year" }),
  
  medical_conditions: z.string().optional(),
  accepted_terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const Admission = () => {
  const [currentTab, setCurrentTab] = useState("application");
  const [loading, setLoading] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [birthCertFile, setBirthCertFile] = useState<File | null>(null);
  const [marksheetFile, setMarksheetFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      gender: "male",
      date_of_birth: format(new Date(), "yyyy-MM-dd"),
      age: 0,
      category: "",
      religion: "",
      nationality: "Indian",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      pincode: "",
      father_name: "",
      father_occupation: "",
      father_mobile: "",
      mother_name: "",
      mother_occupation: "",
      mother_mobile: "",
      emergency_contact: "",
      last_school: "",
      last_class: "",
      applying_for_class: "",
      academic_year: new Date().getFullYear(),
      medical_conditions: "",
      accepted_terms: false,
    },
  });

  useEffect(() => {
    const dob = form.watch("date_of_birth");
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      form.setValue("age", age);
    }
  }, [form.watch("date_of_birth")]);

  const uploadFile = async (file: File, folder: string) => {
    if (!user) return null;
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${folder}/${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data, error } = await supabase.storage
        .from('admission_documents')
        .upload(fileName, file);
        
      if (error) throw error;
      
      const { data: urlData } = supabase.storage
        .from('admission_documents')
        .getPublicUrl(data.path);
        
      return urlData.publicUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit an application",
        variant: "destructive",
      });
      navigate("/sign-in");
      return;
    }

    setLoading(true);

    try {
      let photoUrl = null;
      let birthCertUrl = null;
      let marksheetUrl = null;

      if (photoFile) {
        photoUrl = await uploadFile(photoFile, 'photos');
      }
      
      if (birthCertFile) {
        birthCertUrl = await uploadFile(birthCertFile, 'birth_certificates');
      }
      
      if (marksheetFile) {
        marksheetUrl = await uploadFile(marksheetFile, 'marksheets');
      }

      const { data: applicationData, error: applicationError } = await supabase
        .from('applications')
        .insert({
          ...values,
          photo_url: photoUrl,
          birth_certificate_url: birthCertUrl,
          marksheet_url: marksheetUrl,
        })
        .select()
        .single();

      if (applicationError) throw applicationError;

      const { error: linkError } = await supabase
        .from('student_applications')
        .insert({
          user_id: user.id,
          application_id: applicationData.id,
        });

      if (linkError) throw linkError;

      toast({
        title: "Application submitted successfully!",
        description: `Your application ID is: ${applicationData.application_id}`,
        variant: "default",
      });

      form.reset();
      setPhotoFile(null);
      setBirthCertFile(null);
      setMarksheetFile(null);
      
      setCurrentTab("status");
    } catch (error: any) {
      console.error("Error submitting application:", error);
      toast({
        title: "Failed to submit application",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout 
      title="Admission" 
      description="Apply for admission to Balika Madhya Vidyalaya"
    >
      <div className="container mx-auto px-4 py-12">
        {!user ? (
          <Card>
            <CardHeader>
              <CardTitle>Authentication Required</CardTitle>
              <CardDescription>
                Please sign in to apply for admission or check your application status.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => navigate("/sign-in")}>Sign In</Button>
            </CardFooter>
          </Card>
        ) : (
          <Tabs defaultValue="application" value={currentTab} onValueChange={setCurrentTab}>
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="application">Apply for Admission</TabsTrigger>
              <TabsTrigger value="status">Application Status</TabsTrigger>
            </TabsList>
            
            <TabsContent value="application">
              <Card>
                <CardHeader>
                  <CardTitle>Student Admission Form</CardTitle>
                  <CardDescription>
                    Fill in all the required details to apply for admission. Required fields are marked with an asterisk (*).
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <User className="h-5 w-5 text-school-blue" />
                          <h3 className="text-xl font-semibold text-school-blue-dark">Personal Details</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="full_name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter full name" {...field} />
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
                                <FormLabel>Gender *</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex space-x-4"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="male" id="male" />
                                      <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="female" id="female" />
                                      <label htmlFor="female">Female</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="other" id="other" />
                                      <label htmlFor="other">Other</label>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="date_of_birth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Date of Birth *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input 
                                      type="date" 
                                      className="pl-10" 
                                      {...field} 
                                    />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Age *</FormLabel>
                                <FormControl>
                                  <Input 
                                    type="number" 
                                    {...field}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                    value={field.value}
                                    disabled
                                  />
                                </FormControl>
                                <FormDescription>
                                  Automatically calculated from date of birth
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
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
                                    <SelectItem value="ews">EWS</SelectItem>
                                  </SelectContent>
                                </Select>
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
                                  <Input placeholder="Religion (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="nationality"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nationality *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nationality" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="md:col-span-2">
                            <DocumentUploader
                              label="Upload Photo"
                              accept="image/*"
                              maxSize={2}
                              file={photoFile}
                              setFile={setPhotoFile}
                              icon={<Upload className="h-4 w-4" />}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Home className="h-5 w-5 text-school-blue" />
                          <h3 className="text-xl font-semibold text-school-blue-dark">Address Details</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-6">
                          <FormField
                            control={form.control}
                            name="address_line1"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Address Line 1 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Street address" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="address_line2"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Address Line 2</FormLabel>
                                <FormControl>
                                  <Input placeholder="Apartment, suite, etc. (optional)" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <FormField
                              control={form.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>City *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="City" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="state"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>State *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="State" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="pincode"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Pincode *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Pincode" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-school-blue" />
                          <h3 className="text-xl font-semibold text-school-blue-dark">Family Details</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="father_name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Father's Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Father's name" {...field} />
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
                                <FormLabel>Father's Occupation *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Father's occupation" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="father_mobile"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Father's Mobile Number *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input placeholder="Mobile number" className="pl-10" {...field} />
                                  </div>
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
                                <FormLabel>Mother's Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Mother's name" {...field} />
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
                                <FormLabel>Mother's Occupation *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Mother's occupation" {...field} />
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
                                <FormLabel>Mother's Mobile Number *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input placeholder="Mobile number" className="pl-10" {...field} />
                                  </div>
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
                                <FormLabel>Emergency Contact Number *</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                    <Input placeholder="Emergency contact" className="pl-10" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Book className="h-5 w-5 text-school-blue" />
                          <h3 className="text-xl font-semibold text-school-blue-dark">Educational Details</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="last_school"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Previous School *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Name of previous school" {...field} />
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
                                <FormLabel>Previous Class *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select class" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="nursery">Nursery</SelectItem>
                                    <SelectItem value="kg">Kindergarten</SelectItem>
                                    <SelectItem value="1">Class 1</SelectItem>
                                    <SelectItem value="2">Class 2</SelectItem>
                                    <SelectItem value="3">Class 3</SelectItem>
                                    <SelectItem value="4">Class 4</SelectItem>
                                    <SelectItem value="5">Class 5</SelectItem>
                                    <SelectItem value="6">Class 6</SelectItem>
                                    <SelectItem value="7">Class 7</SelectItem>
                                    <SelectItem value="8">Class 8</SelectItem>
                                    <SelectItem value="9">Class 9</SelectItem>
                                    <SelectItem value="10">Class 10</SelectItem>
                                    <SelectItem value="11">Class 11</SelectItem>
                                    <SelectItem value="12">Class 12</SelectItem>
                                    <SelectItem value="none">None</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="applying_for_class"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Applying for Class *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select class" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="nursery">Nursery</SelectItem>
                                    <SelectItem value="kg">Kindergarten</SelectItem>
                                    <SelectItem value="1">Class 1</SelectItem>
                                    <SelectItem value="2">Class 2</SelectItem>
                                    <SelectItem value="3">Class 3</SelectItem>
                                    <SelectItem value="4">Class 4</SelectItem>
                                    <SelectItem value="5">Class 5</SelectItem>
                                    <SelectItem value="6">Class 6</SelectItem>
                                    <SelectItem value="7">Class 7</SelectItem>
                                    <SelectItem value="8">Class 8</SelectItem>
                                    <SelectItem value="9">Class 9</SelectItem>
                                    <SelectItem value="10">Class 10</SelectItem>
                                    <SelectItem value="11">Class 11</SelectItem>
                                    <SelectItem value="12">Class 12</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="academic_year"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Academic Year *</FormLabel>
                                <Select
                                  onValueChange={(value) => field.onChange(parseInt(value))}
                                  defaultValue={field.value.toString()}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select year" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value={(new Date().getFullYear()).toString()}>
                                      {new Date().getFullYear()}-{new Date().getFullYear() + 1}
                                    </SelectItem>
                                    <SelectItem value={(new Date().getFullYear() + 1).toString()}>
                                      {new Date().getFullYear() + 1}-{new Date().getFullYear() + 2}
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="md:col-span-2">
                            <DocumentUploader
                              label="Upload Birth Certificate"
                              accept=".pdf,.jpg,.jpeg,.png"
                              maxSize={5}
                              file={birthCertFile}
                              setFile={setBirthCertFile}
                              icon={<FileText className="h-4 w-4" />}
                            />
                          </div>
                          
                          <div className="md:col-span-2">
                            <DocumentUploader
                              label="Upload Previous Marksheet"
                              accept=".pdf,.jpg,.jpeg,.png"
                              maxSize={5}
                              file={marksheetFile}
                              setFile={setMarksheetFile}
                              icon={<FileText className="h-4 w-4" />}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Info className="h-5 w-5 text-school-blue" />
                          <h3 className="text-xl font-semibold text-school-blue-dark">Other Details</h3>
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="medical_conditions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Medical Conditions (if any)</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please mention any medical conditions or allergies (optional)"
                                  className="min-h-[100px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="accepted_terms"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  I hereby declare that all the information provided is accurate and complete. I understand that providing false information may result in rejection of the application.
                                </FormLabel>
                                <FormDescription>
                                  By checking this box, you agree to our terms and conditions.
                                </FormDescription>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-school-blue hover:bg-school-blue-dark"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Application"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="status">
              <ApplicationsList />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </PageLayout>
  );
};

export default Admission;
