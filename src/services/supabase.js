import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rcqmlzewakukykeagzpx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjcW1semV3YWt1a3lrZWFnenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MDA1NDQsImV4cCI6MjA2NTk3NjU0NH0.rNLYNRwVvr5uubyqSlDnm46HnfhjCZrZSCW0NNeTi-4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
