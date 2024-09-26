import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ciibhcepbcufwbhorhax.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpaWJoY2VwYmN1ZndiaG9yaGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NjQyNDAsImV4cCI6MjA0MjE0MDI0MH0.2CIdncfiFPYqkdst0lXl_TW088f5D6s39LaueyRy8dA`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
