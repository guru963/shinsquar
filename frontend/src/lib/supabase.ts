import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://gptnagzpmgkcirghzqau.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwdG5hZ3pwbWdrY2lyZ2h6cWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwMDY3ODksImV4cCI6MjA5NjU4Mjc4OX0.9X2-cKLmRJ5j3nwosBFM0U2KGzrefBbcGo-H7VJAEYg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
