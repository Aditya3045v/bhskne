
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Supabase client setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hndhiscjlwbsykjaqupq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZGhpc2NqbHdic3lramFxdXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NjgyMDQsImV4cCI6MjA1OTM0NDIwNH0.9qXsvT2OBFidoM6XXlirxYosXlnDHyffFpMfKcuncHQ';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Create the Supabase client
export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    },
    db: {
      schema: 'public'
    }
  }
);

// Helper function to get storage URL
export const getStorageUrl = (bucket: string, path: string) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

// Helper function to upload file
export const uploadFile = async (
  bucket: string,
  path: string,
  file: File
): Promise<string | null> => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) throw error;

    return getStorageUrl(bucket, data.path);
  } catch (error) {
    console.error('Error uploading file:', error);
    return null;
  }
};

// Log a warning if using development environment
if (import.meta.env.DEV) {
  console.log('Running in development mode with Supabase configuration.');
}
