// ApexTow — utils: scroll header, smooth anchors, mobile burger CSS sync
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // Scroll header shadow
    const hdr = document.querySelector('.site-header');
    if (hdr) {
      window.addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), { passive: true });
    }
    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      a.addEventListener('click', e => {
        const t = document.getElementById(id);
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  });
})();
