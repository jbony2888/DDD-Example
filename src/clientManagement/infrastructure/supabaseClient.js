// src/clientManagement/infrastructure/supabaseClient.js
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || 'your-anon-key';

const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabaseClient;
