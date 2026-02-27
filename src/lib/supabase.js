import { createClient } from '@supabase/supabase-js'

// Get credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if credentials exist
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables! Check your .env file.')
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)