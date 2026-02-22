// Smooth scroll for anchor links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// FAQ accordion
const accordionItems = document.querySelectorAll('.accordion__item');
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const expanded = item.getAttribute('aria-expanded') === 'true';
    // Collapse others
    accordionItems.forEach(i => i.setAttribute('aria-expanded', 'false'));
    item.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  });
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
