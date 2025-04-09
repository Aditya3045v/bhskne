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
          application_id: string
          id: string
          user_id: string
        }
        Insert: {
          application_id: string
          id?: string
          user_id: string
        }
        Update: {
          application_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_applications_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
