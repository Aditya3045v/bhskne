export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      student_applications: {
        Row: {
          id: string
          user_id: string
          student_name: string
          gender: 'male' | 'female' | 'other'
          dob: string
          category: string
          nationality: string
          religion: string | null
          address: string
          mobile: string
          email: string
          emergency_contact: string
          father_name: string
          father_occupation: string
          father_mobile: string
          mother_name: string
          mother_occupation: string
          mother_mobile: string
          last_school: string
          last_class: string
          applying_for_class: string
          academic_year: string
          medical_conditions: string | null
          photo_url: string | null
          birth_certificate_url: string | null
          marksheet_url: string | null
          status: 'pending' | 'approved' | 'rejected'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          student_name: string
          gender: 'male' | 'female' | 'other'
          dob: string
          category: string
          nationality: string
          religion?: string | null
          address: string
          mobile: string
          email: string
          emergency_contact: string
          father_name: string
          father_occupation: string
          father_mobile: string
          mother_name: string
          mother_occupation: string
          mother_mobile: string
          last_school: string
          last_class: string
          applying_for_class: string
          academic_year: string
          medical_conditions?: string | null
          photo_url?: string | null
          birth_certificate_url?: string | null
          marksheet_url?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          student_name?: string
          gender?: 'male' | 'female' | 'other'
          dob?: string
          category?: string
          nationality?: string
          religion?: string | null
          address?: string
          mobile?: string
          email?: string
          emergency_contact?: string
          father_name?: string
          father_occupation?: string
          father_mobile?: string
          mother_name?: string
          mother_occupation?: string
          mother_mobile?: string
          last_school?: string
          last_class?: string
          applying_for_class?: string
          academic_year?: string
          medical_conditions?: string | null
          photo_url?: string | null
          birth_certificate_url?: string | null
          marksheet_url?: string | null
          status?: 'pending' | 'approved' | 'rejected'
          created_at?: string
          updated_at?: string
        }
      }
      important_links: {
        Row: {
          id: string
          title: string
          url: string
          description: string | null
          category: string
          priority: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          url: string
          description?: string | null
          category: string
          priority?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          url?: string
          description?: string | null
          category?: string
          priority?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
