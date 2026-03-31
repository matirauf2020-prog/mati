/* =============================================
   SUPABASE.JS — Supabase Client Initialization
   Muhammad Muti-ur-Rauf | PV Designer Portfolio
   =============================================
   
   SETUP INSTRUCTIONS:
   1. Create a free account at https://supabase.com
   2. Create a new project
   3. Go to Settings > API
   4. Copy your Project URL and anon public key
   5. Replace the values below
   6. Run the SQL schema from supabase-schema.sql
   ============================================= */

// ====================================================
// CONFIGURATION — Replace with your Supabase credentials
// ====================================================
const SUPABASE_URL = 'https://pqnepleubdecwndwxctv.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NImVrQmkNBWiPB24f4IxUg_pSneyxIA';

// Initialize Supabase client
// The supabase-js library is loaded via CDN in each HTML file
let supabase = null;

function initSupabase() {
  if (typeof window.supabase !== 'undefined') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return supabase;
  }
  console.warn('Supabase library not loaded. Make sure to include the CDN script.');
  return null;
}

// ====================================================
// PROJECT OPERATIONS
// ====================================================

async function getAllProjects() {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('Error fetching projects:', error); return []; }
  return data;
}

async function getProjectsByCategory(category) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });
  if (error) { console.error('Error fetching projects:', error); return []; }
  return data;
}

async function getProjectById(id) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();
  if (error) { console.error('Error fetching project:', error); return null; }
  return data;
}

async function createProject(projectData) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('projects')
    .insert([projectData])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function updateProject(id, projectData) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('projects')
    .update(projectData)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function deleteProject(id) {
  if (!supabase) initSupabase();
  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
}

// ====================================================
// ORDER OPERATIONS
// ====================================================

async function submitOrder(orderData) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('orders')
    .insert([{ ...orderData, status: 'new' }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function getAllOrders() {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('Error fetching orders:', error); return []; }
  return data;
}

async function updateOrderStatus(id, status) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function deleteOrder(id) {
  if (!supabase) initSupabase();
  const { error } = await supabase
    .from('orders')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
}

// ====================================================
// AUTH OPERATIONS
// ====================================================

async function adminLogin(email, password) {
  if (!supabase) initSupabase();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function adminLogout() {
  if (!supabase) initSupabase();
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

async function getSession() {
  if (!supabase) initSupabase();
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = '/admin/login.html';
    return null;
  }
  return session;
}

// Export for use in other scripts
window.SupabaseDB = {
  init: initSupabase,
  projects: { getAll: getAllProjects, getByCategory: getProjectsByCategory, getById: getProjectById, create: createProject, update: updateProject, delete: deleteProject },
  orders: { getAll: getAllOrders, submit: submitOrder, updateStatus: updateOrderStatus, delete: deleteOrder },
  auth: { login: adminLogin, logout: adminLogout, getSession, requireAuth }
};
