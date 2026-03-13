// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// Client Supabase côté client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);