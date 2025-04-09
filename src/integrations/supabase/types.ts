export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          academic_year: number
          accepted_terms: boolean
          address_line1: string
          address_line2: string | null
          age: number
          application_id: string
          applying_for_class: string
          birth_certificate_url: string | null
          category: string
          city: string
          date_of_birth: string
          emergency_contact: string
          father_mobile: string
          father_name: string
          father_occupation: string
          full_name: string
          gender: string
          id: string
          last_class: string
          last_school: string
          marksheet_url: string | null
          medical_conditions: string | null
          mother_mobile: string
          mother_name: string
          mother_occupation: string
          nationality: string
          photo_url: string | null
          pincode: string
          religion: string | null
          state: string
          status: string
          submitted_at: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          academic_year: number
          accepted_terms?: boolean
          address_line1: string
          address_line2?: string | null
          age: number
          application_id: string
          applying_for_class: string
          birth_certificate_url?: string | null
          category: string
          city: string
          date_of_birth: string
          emergency_contact: string
          father_mobile: string
          father_name: string
          father_occupation: string
          full_name: string
          gender: string
          id?: string
          last_class: string
          last_school: string
          marksheet_url?: string | null
          medical_conditions?: string | null
          mother_mobile: string
          mother_name: string
          mother_occupation: string
          nationality: string
          photo_url?: string | null
          pincode: string
          religion?: string | null
          state: string
          status?: string
          submitted_at?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          academic_year?: number
          accepted_terms?: boolean
          address_line1?: string
          address_line2?: string | null
          age?: number
          application_id?: string
          applying_for_class?: string
          birth_certificate_url?: string | null
          category?: string
          city?: string
          date_of_birth?: string
          emergency_contact?: string
          father_mobile?: string
          father_name?: string
          father_occupation?: string
          full_name?: string
          gender?: string
          id?: string
          last_class?: string
          last_school?: string
          marksheet_url?: string | null
          medical_conditions?: string | null
          mother_mobile?: string
          mother_name?: string
          mother_occupation?: string
          nationality?: string
          photo_url?: string | null
          pincode?: string
          religion?: string | null
          state?: string
          status?: string
          submitted_at?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      important_links: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          priority: number | null
          title: string
          updated_at: string | null
          url: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          title: string
          updated_at?: string | null
          url: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          priority?: number | null
          title?: string
          updated_at?: string | null
          url?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      student_applications: {
        Row: {
          academic_year: string | null
          address: string
          applying_for_class: string
          birth_certificate_url: string | null
          category: string
          created_at: string
          dob: string
          email: string
          emergency_contact: string | null
          father_name: string
          father_occupation: string | null
          gender: string
          id: string
          last_class: string
          last_school: string
          marksheet_url: string | null
          medical_conditions: string | null
          mobile: string
          mother_mobile: string | null
          mother_name: string
          mother_occupation: string | null
          nationality: string | null
          photo_url: string | null
          religion: string | null
          status: string
          student_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          academic_year?: string | null
          address: string
          applying_for_class: string
          birth_certificate_url?: string | null
          category: string
          created_at?: string
          dob: string
          email: string
          emergency_contact?: string | null
          father_name: string
          father_occupation?: string | null
          gender: string
          id?: string
          last_class: string
          last_school: string
          marksheet_url?: string | null
          medical_conditions?: string | null
          mobile: string
          mother_mobile?: string | null
          mother_name: string
          mother_occupation?: string | null
          nationality?: string | null
          photo_url?: string | null
          religion?: string | null
          status?: string
          student_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          academic_year?: string | null
          address?: string
          applying_for_class?: string
          birth_certificate_url?: string | null
          category?: string
          created_at?: string
          dob?: string
          email?: string
          emergency_contact?: string | null
          father_name?: string
          father_occupation?: string | null
          gender?: string
          id?: string
          last_class?: string
          last_school?: string
          marksheet_url?: string | null
          medical_conditions?: string | null
          mobile?: string
          mother_mobile?: string | null
          mother_name?: string
          mother_occupation?: string | null
          nationality?: string | null
          photo_url?: string | null
          religion?: string | null
          status?: string
          student_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
