-- Create necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create student_applications table
CREATE TABLE IF NOT EXISTS public.student_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_name TEXT NOT NULL,
    gender TEXT NOT NULL CHECK (gender IN ('male', 'female', 'other')),
    dob DATE NOT NULL,
    category TEXT NOT NULL,
    nationality TEXT NOT NULL,
    religion TEXT,
    address TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT NOT NULL,
    emergency_contact TEXT NOT NULL,
    father_name TEXT NOT NULL,
    father_occupation TEXT NOT NULL,
    father_mobile TEXT NOT NULL,
    mother_name TEXT NOT NULL,
    mother_occupation TEXT NOT NULL,
    mother_mobile TEXT NOT NULL,
    last_school TEXT NOT NULL,
    last_class TEXT NOT NULL,
    applying_for_class TEXT NOT NULL,
    academic_year TEXT NOT NULL,
    medical_conditions TEXT,
    photo_url TEXT,
    birth_certificate_url TEXT,
    marksheet_url TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create important_links table
CREATE TABLE IF NOT EXISTS public.important_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    priority INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.important_links ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- Student Applications policies
CREATE POLICY "Users can view their own applications"
    ON public.student_applications
    FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own applications"
    ON public.student_applications
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications"
    ON public.student_applications
    FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all applications"
    ON public.student_applications
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

CREATE POLICY "Admins can update all applications"
    ON public.student_applications
    FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- Important Links policies
CREATE POLICY "Anyone can view active important links"
    ON public.important_links
    FOR SELECT
    USING (is_active = true);

CREATE POLICY "Admins can manage important links"
    ON public.important_links
    FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
            AND profiles.role = 'admin'
        )
    );

-- Grant necessary privileges
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.student_applications TO authenticated;
GRANT ALL ON public.important_links TO authenticated;
GRANT SELECT ON public.important_links TO anon;

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (new.id, new.raw_user_meta_data->>'full_name', 'user');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user creation
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 