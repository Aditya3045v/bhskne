
// Import the correct version of createClient
import { createClient } from '@supabase/supabase-js';

// Supabase client setup
export const supabaseUrl = 'https://your-project-url.supabase.co';
export const supabaseKey = 'your-anon-key';
export const supabase = createClient(supabaseUrl, supabaseKey);
