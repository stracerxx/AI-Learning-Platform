import { createClient } from '@supabase/supabase-js';
import type { Database } from '~/types/supabase';

declare global {
  interface Window {
    env: {
      SUPABASE_URL: string;
      SUPABASE_ANON_KEY: string;
    };
  }
}

export function getSupabaseClient() {
  if (typeof window === 'undefined') {
    return null;
  }

  const supabaseUrl = window.env?.SUPABASE_URL;
  const supabaseAnonKey = window.env?.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase credentials');
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}
