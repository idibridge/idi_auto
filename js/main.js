// Nav scroll
const nav = document.getElementById('mainNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

// Menu
function openMenu()  { document.getElementById('menuOverlay').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeMenu() { document.getElementById('menuOverlay').classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
