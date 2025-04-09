
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Supabase client setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hndhiscjlwbsykjaqupq.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZGhpc2NqbHdic3lramFxdXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NjgyMDQsImV4cCI6MjA1OTM0NDIwNH0.9qXsvT2OBFidoM6XXlirxYosXlnDHyffFpMfKcuncHQ';

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
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

// Log a warning if in development mode
if (import.meta.env.DEV) {
  console.log('Running in development mode with Supabase configuration.');
}
