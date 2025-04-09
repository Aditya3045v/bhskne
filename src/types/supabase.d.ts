
interface Tables {
  applications: {
    Row: {
      id: string;
      application_id: string;
      full_name: string;
      gender: string;
      date_of_birth: string;
      age: number;
      category: string;
      religion?: string;
      nationality: string;
      address_line1: string;
      address_line2?: string;
      city: string;
      state: string;
      pincode: string;
      father_name: string;
      father_occupation: string;
      father_mobile: string;
      mother_name: string;
      mother_occupation: string;
      mother_mobile: string;
      emergency_contact: string;
      last_school: string;
      last_class: string;
      applying_for_class: string;
      academic_year: number;
      photo_url?: string;
      birth_certificate_url?: string;
      marksheet_url?: string;
      medical_conditions?: string;
      accepted_terms: boolean;
      status: string;
      submitted_at: string;
      updated_at: string;
    };
  };
  
  profiles: {
    Row: {
      id: string;
      full_name?: string;
      role: string;
      created_at: string;
      updated_at: string;
    };
  };
  
  student_applications: {
    Row: {
      id: string;
      user_id: string;
      application_id: string;
    };
  };
  
  important_links: {
    Row: {
      id: string;
      title: string;
      url: string;
      description?: string;
      category: string;
      priority?: number;
      is_active?: boolean;
      created_at?: string;
      updated_at?: string;
    };
  };
}

declare module '@supabase/supabase-js' {
  interface Database {
    public: {
      Tables: Tables;
    };
  }
}
