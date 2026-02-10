(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const els = Array.from(document.querySelectorAll('.reveal'));
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el => io.observe(el));

  // Micro-parallax on hero image (subtle)
  const media = document.querySelector('.hero__media img');
  if (media && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const onMove = () => {
      const y = window.scrollY || 0;
      media.style.transform = `scale(1.03) translateY(${Math.min(10, y * 0.02)}px)`;
    };
    window.addEventListener('scroll', onMove, { passive: true });
    onMove();
  }
})();
