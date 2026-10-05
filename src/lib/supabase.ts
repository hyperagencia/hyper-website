import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY env vars');
}

/**
 * Server-only client authenticated with the secret key. RLS on `contact_submissions` has
 * no policies, so this is the only key able to read or write it — never expose it to the client.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
  auth: { persistSession: false },
});

export interface ContactSubmissionRow {
  first_name: string;
  last_name: string | null;
  email: string;
  company: string | null;
  job_title: string;
  country: string;
  service: string;
  message: string;
  consent_accepted: boolean;
  locale: string;
  ip_address: string | null;
}
