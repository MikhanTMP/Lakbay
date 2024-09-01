
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://coajubfkrixburnebjfa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvYWp1YmZrcml4YnVybmViamZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxNzc2MDEsImV4cCI6MjA0MDc1MzYwMX0.lHgc-EZKmCUBFmIOHjsNFIIUXgXYyvf6gQQSGfDdtco'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;