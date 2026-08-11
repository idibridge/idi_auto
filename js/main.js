// Nav scroll
const nav = document.getElementById('mainNav');
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

// Menu
function openMenu()  { document.getElementById('menuOverlay').classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeMenu() { document.getElementById('menuOverlay').classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
// Close half-screen menu when clicking outside the panel
document.addEventListener('click', e => {
  const overlay = document.getElementById('menuOverlay');
  if (!overlay || !overlay.classList.contains('open')) return;
  if (!e.target.closest('.menu-overlay') && !e.target.closest('.nav-burger')) closeMenu();
});

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Custom circle cursor (desktop / fine-pointer devices only)
if (window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
  const ring = document.createElement('div');
  ring.className = 'cursor-ring hidden';
  document.body.appendChild(ring);
  document.body.classList.add('has-cursor');

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my, shown = false;

  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!shown) { shown = true; ring.classList.remove('hidden'); }
  });
  document.addEventListener('mouseleave', () => ring.classList.add('hidden'));
  document.addEventListener('mouseenter', () => ring.classList.remove('hidden'));

  const hoverSel = 'a, button, input, textarea, .fleet-card, .nav-burger, .menu-close, .lang-btn, .whatsapp-float, .social-item, [onclick]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest && e.target.closest(hoverSel)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', e => {
    const from = e.target.closest && e.target.closest(hoverSel);
    const to = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(hoverSel);
    if (from && !to) ring.classList.remove('hover');
  });

  (function loop() {
    rx += (mx - rx) * 0.4;
    ry += (my - ry) * 0.4;
    ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
    requestAnimationFrame(loop);
  })();
}
