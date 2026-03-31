/* =============================================
   FILTER.JS — Search, Filter & Sort Logic
   Muhammad Muti-ur-Rauf | PV Designer Portfolio
   ============================================= */

let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';
let filteredProjects = [];

// ====================================================
// INIT FILTER SYSTEM
// ====================================================
function initFilterSystem(category = null) {
  // If a category is pre-set (e.g. on industrial.html), lock it
  if (category) {
    currentFilter = category.toLowerCase();
  }

  filteredProjects = [...PROJECTS_DATA];
  applyFilters();
  setupFilterListeners();
}

function setupFilterListeners() {
  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      applyFilters();
    });
  });

  // Search input
  const searchInput = document.getElementById('projects-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      applyFilters();
    }, 280));
  }

  // Sort select
  const sortSelect = document.getElementById('projects-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }
}

// ====================================================
// APPLY FILTERS
// ====================================================
function applyFilters() {
  let results = [...PROJECTS_DATA];

  // Category filter
  if (currentFilter !== 'all') {
    results = results.filter(p => p.category.toLowerCase() === currentFilter);
  }

  // Search filter
  if (currentSearch) {
    results = results.filter(p =>
      p.title.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch)
    );
  }

  // Sort
  switch (currentSort) {
    case 'title-asc':
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'title-desc':
      results.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'category':
      results.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case 'featured':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      // keep original order (by id)
      break;
  }

  filteredProjects = results;
  renderFilteredProjects(results);
}

// ====================================================
// RENDER RESULTS
// ====================================================
function renderFilteredProjects(projects) {
  const grid = document.getElementById('projects-grid');
  const countEl = document.getElementById('result-count');

  if (!grid) return;

  // Update count
  if (countEl) {
    countEl.textContent = `${projects.length} project${projects.length !== 1 ? 's' : ''}`;
  }

  if (projects.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="grid-column:1/-1; text-align:center; padding: 4rem 2rem;">
        <div style="font-size:3rem; margin-bottom:1rem;">🔍</div>
        <h3 style="font-size:1.25rem; color:var(--color-text); margin-bottom:0.5rem;">No projects found</h3>
        <p style="color:var(--color-text-secondary); font-size:0.875rem;">Try a different search term or category filter.</p>
        <button class="btn btn-outline" style="margin-top:1.5rem;" onclick="resetFilters()">Clear Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = projects.map(p => renderProjectCard(p)).join('');

  // Re-init scroll reveal for new cards
  initScrollReveal();
}

// ====================================================
// RESET
// ====================================================
function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  currentSort = 'default';

  const searchInput = document.getElementById('projects-search');
  const sortSelect = document.getElementById('projects-sort');
  if (searchInput) searchInput.value = '';
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === 'all');
  });

  applyFilters();
}

// ====================================================
// UTILITIES
// ====================================================
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.FilterLib = { init: initFilterSystem, apply: applyFilters, reset: resetFilters };
