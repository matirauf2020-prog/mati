/* =============================================
   ADMIN.JS — Admin Panel CRUD Operations
   Muhammad Muti-ur-Rauf | PV Designer Portfolio
   ============================================= */

// ====================================================
// AUTH GUARD — Redirect if not logged in
// ====================================================
async function checkAdminAuth() {
  if (!window.SupabaseDB) return;
  const session = await window.SupabaseDB.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
  }
  return session;
}

// ====================================================
// LOGIN
// ====================================================
async function handleAdminLogin(e) {
  e.preventDefault();
  const email = document.getElementById('admin-email').value.trim();
  const password = document.getElementById('admin-password').value;
  const btn = document.getElementById('login-btn');
  const alert = document.getElementById('login-alert');

  if (!email || !password) {
    showAdminAlert(alert, 'error', 'Please enter email and password.');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Signing in...';

  try {
    await window.SupabaseDB.auth.login(email, password);
    window.location.href = 'dashboard.html';
  } catch (err) {
    showAdminAlert(alert, 'error', 'Invalid credentials. Please try again.');
    btn.disabled = false;
    btn.textContent = 'Sign In';
  }
}

// ====================================================
// DASHBOARD STATS
// ====================================================
async function loadDashboardStats() {
  const projects = await window.SupabaseDB.projects.getAll();
  const orders = await window.SupabaseDB.orders.getAll();

  const total = projects.length;
  const industrial = projects.filter(p => p.category === 'Industrial').length;
  const commercial = projects.filter(p => p.category === 'Commercial').length;
  const residential = projects.filter(p => p.category === 'Residential').length;
  const newOrders = orders.filter(o => o.status === 'new').length;

  setEl('stat-total', total);
  setEl('stat-industrial', industrial);
  setEl('stat-commercial', commercial);
  setEl('stat-residential', residential);
  setEl('stat-orders', orders.length);
  setEl('stat-new-orders', newOrders);

  // Recent orders
  renderRecentOrders(orders.slice(0, 5));
}

function renderRecentOrders(orders) {
  const tbody = document.getElementById('recent-orders-body');
  if (!tbody) return;

  if (!orders.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--color-text-muted)">No orders yet.</td></tr>';
    return;
  }

  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><strong>${o.full_name}</strong></td>
      <td>${o.phone}</td>
      <td><span class="badge badge-${o.project_type?.toLowerCase()}">${o.project_type}</span></td>
      <td>${o.system_size || '—'}</td>
      <td><span class="badge" style="background:${statusColor(o.status)}">${o.status}</span></td>
    </tr>
  `).join('');
}

function statusColor(status) {
  const map = { new: 'rgba(245,158,11,0.15)', reviewed: 'rgba(37,99,235,0.12)', completed: 'rgba(16,185,129,0.12)', cancelled: 'rgba(239,68,68,0.1)' };
  return map[status] || 'rgba(148,163,184,0.12)';
}

// ====================================================
// MANAGE PROJECTS
// ====================================================
async function loadProjectsTable() {
  const projects = await window.SupabaseDB.projects.getAll();
  renderProjectsTable(projects);
}

function renderProjectsTable(projects) {
  const tbody = document.getElementById('projects-table-body');
  if (!tbody) return;

  if (!projects.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--color-text-muted)">No projects found.</td></tr>';
    return;
  }

  tbody.innerHTML = projects.map(p => `
    <tr>
      <td><span class="badge badge-${p.category?.toLowerCase()}">${p.category}</span></td>
      <td style="max-width:280px"><strong>${p.title}</strong></td>
      <td>
        <a href="${p.youtube_url}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Video</a>
      </td>
      <td>
        ${p.drawing_link ? `<a href="${p.drawing_link}" target="_blank" rel="noopener" class="btn btn-ghost btn-sm">Link</a>` : '<span style="color:var(--color-text-muted)">—</span>'}
      </td>
      <td>
        <div style="display:flex;gap:0.5rem">
          <button class="btn btn-outline btn-sm" onclick="openEditProject(${p.id})">Edit</button>
          <button class="btn btn-sm" style="background:rgba(239,68,68,0.1);color:#991b1b;border:1px solid rgba(239,68,68,0.2)" onclick="confirmDeleteProject(${p.id}, '${p.title.replace(/'/g, "\\'")}')">Delete</button>
        </div>
      </td>
    </tr>
  `).join('');
}

// ---- ADD PROJECT ----
function openAddProject() {
  document.getElementById('project-form-title').textContent = 'Add New Project';
  document.getElementById('project-form').reset();
  document.getElementById('project-id-hidden').value = '';
  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ---- EDIT PROJECT ----
async function openEditProject(id) {
  const project = await window.SupabaseDB.projects.getById(id);
  if (!project) return;

  document.getElementById('project-form-title').textContent = 'Edit Project';
  document.getElementById('project-id-hidden').value = project.id;
  document.getElementById('pf-category').value = project.category;
  document.getElementById('pf-title').value = project.title;
  document.getElementById('pf-youtube').value = project.youtube_url;
  document.getElementById('pf-description').value = project.description;
  document.getElementById('pf-drawing').value = project.drawing_link || '';
  document.getElementById('pf-thumbnail').value = project.thumbnail_url || '';

  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- SAVE PROJECT ----
async function handleProjectFormSubmit(e) {
  e.preventDefault();
  const projectId = document.getElementById('project-id-hidden').value;
  const btn = document.getElementById('project-save-btn');
  const alert = document.getElementById('project-form-alert');

  const projectData = {
    category: document.getElementById('pf-category').value,
    title: document.getElementById('pf-title').value.trim(),
    youtube_url: document.getElementById('pf-youtube').value.trim(),
    description: document.getElementById('pf-description').value.trim(),
    drawing_link: document.getElementById('pf-drawing').value.trim(),
    thumbnail_url: document.getElementById('pf-thumbnail').value.trim() ||
      `https://img.youtube.com/vi/${getYTId(document.getElementById('pf-youtube').value)}/hqdefault.jpg`
  };

  if (!projectData.category || !projectData.title || !projectData.youtube_url) {
    showAdminAlert(alert, 'error', 'Category, title, and YouTube link are required.');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Saving...';

  try {
    if (projectId) {
      await window.SupabaseDB.projects.update(parseInt(projectId), projectData);
      showAdminAlert(alert, 'success', '✅ Project updated successfully!');
    } else {
      await window.SupabaseDB.projects.create(projectData);
      showAdminAlert(alert, 'success', '✅ Project added successfully!');
    }
    await loadProjectsTable();
    setTimeout(closeProjectModal, 1500);
  } catch (err) {
    console.error(err);
    showAdminAlert(alert, 'error', 'Error saving project. Check console for details.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Save Project';
  }
}

// ---- DELETE ----
async function confirmDeleteProject(id, title) {
  if (!confirm(`Delete project:\n"${title}"?\n\nThis cannot be undone.`)) return;
  try {
    await window.SupabaseDB.projects.delete(id);
    await loadProjectsTable();
  } catch (err) {
    alert('Error deleting project: ' + err.message);
  }
}

// ====================================================
// MANAGE ORDERS
// ====================================================
async function loadOrdersTable() {
  const orders = await window.SupabaseDB.orders.getAll();
  const tbody = document.getElementById('orders-table-body');
  if (!tbody) return;

  if (!orders.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--color-text-muted)">No orders yet.</td></tr>';
    return;
  }

  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><strong>${o.full_name}</strong><br><small style="color:var(--color-text-muted)">${o.company || ''}</small></td>
      <td>${o.phone}<br><small style="color:var(--color-text-muted)">${o.email || ''}</small></td>
      <td><span class="badge badge-${o.project_type?.toLowerCase()}">${o.project_type}</span></td>
      <td>${o.system_size || '—'}</td>
      <td>${o.location || '—'}</td>
      <td>
        <select class="sort-select" style="font-size:0.75rem;padding:0.25rem 1.5rem 0.25rem 0.5rem" onchange="updateOrderStatus(${o.id}, this.value)">
          ${['new','reviewed','completed','cancelled'].map(s => `<option ${o.status===s?'selected':''} value="${s}">${s}</option>`).join('')}
        </select>
      </td>
      <td>
        <button class="btn btn-sm" style="background:rgba(239,68,68,0.1);color:#991b1b;border:1px solid rgba(239,68,68,0.2)" onclick="confirmDeleteOrder(${o.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

async function updateOrderStatus(id, status) {
  try {
    await window.SupabaseDB.orders.updateStatus(id, status);
  } catch (err) {
    console.error('Error updating order status:', err);
  }
}

async function confirmDeleteOrder(id) {
  if (!confirm('Delete this order? This cannot be undone.')) return;
  try {
    await window.SupabaseDB.orders.delete(id);
    await loadOrdersTable();
  } catch (err) {
    alert('Error deleting order: ' + err.message);
  }
}

// ====================================================
// SEED SUPABASE WITH CSV DATA
// ====================================================
async function seedProjectsData() {
  const btn = document.getElementById('seed-btn');
  if (btn) btn.disabled = true;

  try {
    for (const project of PROJECTS_DATA) {
      const { id, ...data } = project;
      await window.SupabaseDB.projects.create(data);
    }
    alert('✅ All 49 projects seeded to Supabase successfully!');
    await loadProjectsTable();
  } catch (err) {
    alert('Error seeding data: ' + err.message);
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ====================================================
// LOGOUT
// ====================================================
async function adminLogout() {
  await window.SupabaseDB.auth.logout();
  window.location.href = 'login.html';
}

// ====================================================
// UTILITIES
// ====================================================
function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function showAdminAlert(el, type, msg) {
  if (!el) return;
  if (typeof el === 'string') el = document.getElementById(el);
  el.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getYTId(url) {
  const m = url.match(/(?:v=|youtu\.be\/)([^&?#]+)/);
  return m ? m[1] : '';
}

// ====================================================
// INIT
// ====================================================
document.addEventListener('DOMContentLoaded', async () => {
  if (!window.SupabaseDB) return;
  window.SupabaseDB.init();

  const page = window.location.pathname.split('/').pop();

  if (page === 'login.html') {
    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) loginForm.addEventListener('submit', handleAdminLogin);

  } else if (page === 'dashboard.html') {
    await checkAdminAuth();
    await loadDashboardStats();

  } else if (page === 'manage-projects.html') {
    await checkAdminAuth();
    await loadProjectsTable();

    const addBtn = document.getElementById('add-project-btn');
    if (addBtn) addBtn.addEventListener('click', openAddProject);

    const projectForm = document.getElementById('project-form');
    if (projectForm) projectForm.addEventListener('submit', handleProjectFormSubmit);

    const seedBtn = document.getElementById('seed-btn');
    if (seedBtn) seedBtn.addEventListener('click', seedProjectsData);

    const logoutBtns = document.querySelectorAll('.admin-logout-btn');
    logoutBtns.forEach(b => b.addEventListener('click', adminLogout));

  } else if (page === 'manage-orders.html') {
    await checkAdminAuth();
    await loadOrdersTable();

    const logoutBtns = document.querySelectorAll('.admin-logout-btn');
    logoutBtns.forEach(b => b.addEventListener('click', adminLogout));
  }
});
