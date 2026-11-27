// ApexTow — Shared Header & Footer Renderer
(function () {
  const TK = 'apx_theme', DK = 'apx_dir';
  const th = localStorage.getItem(TK) || 'light';
  const dr = localStorage.getItem(DK) || 'ltr';
  document.documentElement.setAttribute('data-theme', th);
  document.documentElement.setAttribute('dir', dr);

  function page() {
    const p = location.pathname.split('/').pop();
    return p === '' ? 'index.html' : p;
  }

  function logo() {
    return `<a href="index.html" class="brand" aria-label="ApexTow Home">
      <span class="brand-mark">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L4 6v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V6l-8-4z"/>
        </svg>
      </span>
      <span>ApexTow<span class="brand-sub">24/7 Dispatch</span></span>
    </a>`;
  }

  function navA(href, label, cur) {
    return `<a href="${href}" class="nav-a${cur === href ? ' on' : ''}">${label}</a>`;
  }
  function dropA(href, label, cur, tag) {
    return `<a href="${href}" class="drop-a${cur === href ? ' on' : ''}${tag ? ' phase2-trigger' : ''}" ${tag ? `data-db="${label}"` : ''}>${label}${tag ? '<span class="p2-tag">Phase 2</span>' : ''}</a>`;
  }

  function renderHdr() {
    const m = document.getElementById('hdr-mount');
    if (!m) return;
    const cur = page();
    const homeOn = cur === 'index.html' || cur === 'home-2.html';
    m.innerHTML = `
    <header class="site-header">
      <div class="wrap hdr-inner">
        ${logo()}
        <nav class="nav" aria-label="Main">
          <div class="nav-item" data-dd="home">
            <button type="button" class="nav-btn${homeOn ? ' on' : ''}" aria-expanded="false">
              Home <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="drop">
              ${dropA('index.html','Home 1 — Main Dispatch',cur,false)}
              ${dropA('home-2.html','Home 2 — Fleet Network',cur,false)}
            </div>
          </div>
          ${navA('about.html','About',cur)}
          ${navA('services.html','Services',cur)}
          ${navA('pricing.html','Pricing',cur)}
          ${navA('coverage.html','Coverage',cur)}
          ${navA('contact.html','Contact',cur)}
          <div class="nav-item" data-dd="dash">
            <button type="button" class="nav-btn" aria-expanded="false">
              Dashboard <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="drop">
              <a href="user-dashboard.html" class="drop-a${cur==='user-dashboard.html'?' on':''}">User Dashboard</a>
              <a href="admin-dashboard.html" class="drop-a${cur==='admin-dashboard.html'?' on':''}">Admin Dashboard</a>
            </div>
          </div>
        </nav>
        <div class="hdr-ctrls">
          <!-- Desktop-only controls (hidden on mobile via CSS) -->
          <button type="button" id="th-btn" class="icon-btn desk-only" title="Toggle theme"><span id="th-icon"></span></button>
          <button type="button" id="dir-btn" class="icon-btn desk-only" title="Toggle LTR/RTL"><span id="dir-lbl"></span></button>
          <a href="login.html" class="btn btn-fill btn-sm desk-only${cur==='login.html'?' on':''}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
            Login
          </a>
          <!-- Hamburger — always visible on mobile -->
          <button type="button" id="ham-btn" class="ham" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div id="mob-drawer" class="mob-drawer" aria-hidden="true">
      <div class="mob-links">
        <div class="mob-link${homeOn?' on':''}">Home
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="mob-sub">
          <a href="index.html" class="mob-link${cur==='index.html'?' on':''}">Home 1 — Main Dispatch</a>
          <a href="home-2.html" class="mob-link${cur==='home-2.html'?' on':''}">Home 2 — Fleet Network</a>
        </div>
        <a href="about.html" class="mob-link${cur==='about.html'?' on':''}">About</a>
        <a href="services.html" class="mob-link${cur==='services.html'?' on':''}">Services</a>
        <a href="pricing.html" class="mob-link${cur==='pricing.html'?' on':''}">Pricing</a>
        <a href="coverage.html" class="mob-link${cur==='coverage.html'?' on':''}">Coverage</a>
        <a href="contact.html" class="mob-link${cur==='contact.html'?' on':''}">Contact</a>
        <div class="mob-link">Dashboard
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="mob-sub">
          <a href="user-dashboard.html" class="mob-link${cur==='user-dashboard.html'?' on':''}">User Dashboard</a>
          <a href="admin-dashboard.html" class="mob-link${cur==='admin-dashboard.html'?' on':''}">Admin Dashboard</a>
        </div>
      </div>
      <div class="mob-ctrls">
        <button class="icon-btn mob-th" id="mob-th-btn" style="flex:1;gap:.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Theme
        </button>
        <button class="icon-btn mob-dir" id="mob-dir-btn" style="flex:1;gap:.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span id="mob-dir-lbl">RTL</span>
        </button>
        <a href="login.html" class="btn btn-fill btn-sm" style="flex:1;justify-content:center;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          Login
        </a>
      </div>
    </div>
    <!-- Phase 2 modal -->
    <div id="p2-modal" class="modal-bg" role="dialog" aria-modal="true">
      <div class="modal-box">
        <span class="chip chip-accent" style="margin-bottom:.85rem;">Phase 2 Placeholder</span>
        <h3 id="p2-title" style="margin-bottom:.6rem;">Dashboard — Coming in Phase 2</h3>
        <p style="color:var(--muted);font-size:.9rem;margin-bottom:1.5rem;">All public pages — dispatch, pricing, coverage, contact, and login — are live in Phase 1.</p>
        <div style="display:flex;gap:.65rem;justify-content:flex-end;">
          <a href="login.html" class="btn btn-stroke btn-sm">Go to Login</a>
          <button type="button" id="p2-close" class="btn btn-fill btn-sm">Got It</button>
        </div>
      </div>
    </div>
    <div id="toast" class="toast" role="status" aria-live="polite"></div>`;
  }

  function renderFtr() {
    const m = document.getElementById('ftr-mount');
    if (!m) return;
    m.innerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          <div>
            <div class="foot-logo">${logo()}</div>
            <p class="foot-desc">24/7 GPS-dispatched flatbed towing, roadside assistance, and commercial heavy recovery with upfront pricing and zero hidden fees.</p>
            <div class="social-row">
              <a href="#" class="soc" aria-label="Facebook" onclick="ApexTow.toast('Social (Demo)')"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" class="soc" aria-label="X" onclick="ApexTow.toast('Social (Demo)')"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
              <a href="#" class="soc" aria-label="LinkedIn" onclick="ApexTow.toast('Social (Demo)')"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            </div>
          </div>
          <div>
            <h4 class="foot-h">Navigation</h4>
            <ul class="foot-links">
              <li><a href="index.html">Home 1</a></li>
              <li><a href="home-2.html">Home 2</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="pricing.html">Pricing</a></li>
              <li><a href="coverage.html">Coverage</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 class="foot-h">Services</h4>
            <ul class="foot-links">
              <li><a href="services.html#flatbed">Flatbed Towing</a></li>
              <li><a href="services.html#battery">Battery Jump</a></li>
              <li><a href="services.html#tire">Tire Change</a></li>
              <li><a href="services.html#heavy">Heavy Rotator</a></li>
              <li><a href="services.html#ev">EV & Exotic</a></li>
            </ul>
          </div>
          <div>
            <h4 class="foot-h">24/7 Dispatch</h4>
            <p class="foot-desc"><strong style="color:#fff;">+1 (800) 555-0199</strong><br>420 Logistics Pkwy, Suite 300<br>dispatch@apextow.example</p>
            <form id="news-form"><div class="news-form">
              <input type="email" placeholder="Your email…" required aria-label="Newsletter">
              <button type="submit" class="btn btn-fill btn-sm">Join</button>
            </div></form>
          </div>
        </div>
        <div class="foot-btm">
          <span>© 2026 ApexTow Roadside & Recovery Inc.</span>
          <div class="foot-legal">
            <a href="#" onclick="ApexTow.toast('Privacy Policy: Zero location data sold.')">Privacy</a>
            <a href="#" onclick="ApexTow.toast('Terms: Upfront SLA & rate guarantee.')">Terms</a>
          </div>
        </div>
      </div>
    </footer>`;
  }

  function syncTheme() {
    const t = document.documentElement.getAttribute('data-theme');
    const el = document.getElementById('th-icon');
    if (el) el.innerHTML = t === 'dark'
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function syncDir() {
    const d = document.documentElement.getAttribute('dir');
    const el = document.getElementById('dir-lbl');
    if (el) el.textContent = d === 'rtl' ? 'LTR' : 'RTL';
    const mel = document.getElementById('mob-dir-lbl');
    if (mel) mel.textContent = d === 'rtl' ? 'LTR' : 'RTL';
  }

  function toggleTheme() {
    const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', n);
    localStorage.setItem(TK, n);
    syncTheme();
  }

  function toggleDir() {
    const n = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', n);
    localStorage.setItem(DK, n);
    syncDir();
  }

  function toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window.__tx);
    window.__tx = setTimeout(() => t.classList.remove('show'), 3000);
  }

  window.ApexTow = { toast, toggleTheme, toggleDir };

  function initReveal() {
    const els = document.querySelectorAll('.rv,.rv-l,.rv-r');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('vis')); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(e => io.observe(e));
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHdr();
    renderFtr();
    syncTheme();
    syncDir();

    // Dropdowns
    document.querySelectorAll('.nav-item[data-dd]').forEach(item => {
      const btn = item.querySelector('.nav-btn');
      btn?.addEventListener('click', e => {
        e.stopPropagation();
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
        document.querySelectorAll('.nav-item[data-dd]').forEach(o => { if (o !== item) { o.classList.remove('open'); o.querySelector('.nav-btn')?.setAttribute('aria-expanded','false'); }});
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.nav-item[data-dd]').forEach(o => { o.classList.remove('open'); o.querySelector('.nav-btn')?.setAttribute('aria-expanded','false'); });
    });

    // Theme & Dir
    document.getElementById('th-btn')?.addEventListener('click', toggleTheme);
    document.getElementById('dir-btn')?.addEventListener('click', toggleDir);
    document.querySelector('.mob-th')?.addEventListener('click', toggleTheme);
    document.querySelector('.mob-dir')?.addEventListener('click', toggleDir);
    document.getElementById('mob-th-btn')?.addEventListener('click', toggleTheme);
    document.getElementById('mob-dir-btn')?.addEventListener('click', toggleDir);

    // Mobile drawer
    const ham = document.getElementById('ham-btn');
    const drawer = document.getElementById('mob-drawer');
    ham?.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      ham.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open);
      drawer.setAttribute('aria-hidden', !open);
    });

    // Phase 2 modal
    const modal = document.getElementById('p2-modal');
    const p2title = document.getElementById('p2-title');
    document.querySelectorAll('.phase2-trigger').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        if (p2title) p2title.textContent = `${el.dataset.db} — Coming in Phase 2`;
        modal?.classList.add('open');
        drawer?.classList.remove('open');
        ham?.classList.remove('open');
      });
    });
    document.getElementById('p2-close')?.addEventListener('click', () => modal?.classList.remove('open'));
    modal?.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });

    // Footer newsletter
    document.getElementById('news-form')?.addEventListener('submit', e => {
      e.preventDefault(); e.target.reset();
      toast('Subscribed to ApexTow fleet updates.');
    });

    initReveal();
  });
})();
