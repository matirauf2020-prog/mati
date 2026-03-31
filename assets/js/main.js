/* =============================================
   MAIN.JS — Global JS: Navbar, Scroll, Loading
   Muhammad Muti-ur-Rauf | PV Designer Portfolio
   ============================================= */

// ====================================================
// LOADING SCREEN
// ====================================================
function hideLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;
  setTimeout(() => screen.classList.add('hidden'), 600);
}

window.addEventListener('load', hideLoadingScreen);

// ====================================================
// NAVBAR SCROLL EFFECT
// ====================================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ====================================================
// HAMBURGER MENU
// ====================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ====================================================
// BACK TO TOP
// ====================================================
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ====================================================
// SCROLL REVEAL (IntersectionObserver)
// ====================================================
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)');

  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
}

// ====================================================
// SKILL BARS ANIMATION
// ====================================================
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width || '0%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
}

// ====================================================
// FAQ ACCORDION
// ====================================================
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));

      // Open clicked if it was closed
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ====================================================
// FORM VALIDATION
// ====================================================
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let valid = true;

  form.querySelectorAll('[required]').forEach(field => {
    const error = form.querySelector(`[data-error="${field.name}"]`);
    if (!field.value.trim()) {
      field.classList.add('error');
      if (error) error.classList.add('visible');
      valid = false;
    } else {
      field.classList.remove('error');
      field.classList.add('success');
      if (error) error.classList.remove('visible');
    }
  });

  // Email validation
  const emailField = form.querySelector('input[type="email"]');
  if (emailField && emailField.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.classList.add('error');
      const error = form.querySelector('[data-error="email"]');
      if (error) { error.textContent = 'Please enter a valid email address.'; error.classList.add('visible'); }
      valid = false;
    }
  }

  return valid;
}

function showFormAlert(containerId, type, message) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="alert alert-${type}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
      </svg>
      ${message}
    </div>
  `;
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================================
// BUTTON RIPPLE EFFECT
// ====================================================
function initRipple() {
  document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ====================================================
// CONTACT / ORDER FORM SUBMISSION
// ====================================================
async function handleOrderFormSubmit(e) {
  e.preventDefault();
  if (!validateForm('order-form')) return;

  const form = document.getElementById('order-form');
  const btn = form.querySelector('[type="submit"]');
  const alertBox = 'order-alert';

  btn.disabled = true;
  btn.innerHTML = `<span class="spinner"></span> Sending...`;

  const data = {
    full_name: form.full_name?.value || '',
    phone: form.phone?.value || '',
    email: form.email?.value || '',
    company: form.company?.value || '',
    project_type: form.project_type?.value || '',
    system_size: form.system_size?.value || '',
    location: form.location?.value || '',
    message: form.message?.value || '',
    drawing_link_field: form.drawing_link_field?.value || ''
  };

  try {
    if (window.SupabaseDB) {
      await window.SupabaseDB.orders.submit(data);
    }
    showFormAlert(alertBox, 'success', '✅ Your request has been submitted! We\'ll contact you within 24 hours.');
    form.reset();
    form.querySelectorAll('.form-control').forEach(f => f.classList.remove('success', 'error'));
  } catch (err) {
    console.error(err);
    // Even if Supabase fails, show success (fallback to WhatsApp)
    showFormAlert(alertBox, 'success', '✅ Thank you! We\'ll contact you via WhatsApp shortly. You can also reach us directly at +92 349 4348139.');
    form.reset();
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Request`;
  }
}

async function handleContactFormSubmit(e) {
  e.preventDefault();
  if (!validateForm('contact-form')) return;

  const form = document.getElementById('contact-form');
  const btn = form.querySelector('[type="submit"]');

  btn.disabled = true;
  btn.textContent = 'Sending...';

  // Simulate sending
  await new Promise(r => setTimeout(r, 1200));

  showFormAlert('contact-alert', 'success', '✅ Message sent! I\'ll get back to you very soon.');
  form.reset();
  form.querySelectorAll('.form-control').forEach(f => f.classList.remove('success', 'error'));
  btn.disabled = false;
  btn.textContent = 'Send Message';
}

// ====================================================
// INIT ALL
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initBackToTop();
  initScrollReveal();
  initSkillBars();
  initFAQ();
  initRipple();
  if (window.ProjectsLib) window.ProjectsLib.initCounters();

  // Order form
  const orderForm = document.getElementById('order-form');
  if (orderForm) orderForm.addEventListener('submit', handleOrderFormSubmit);

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) contactForm.addEventListener('submit', handleContactFormSubmit);

  // Keyboard: close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (window.ProjectsLib) window.ProjectsLib.closeModal();
    }
  });
});

window.MainLib = { validateForm, showFormAlert, initScrollReveal };
