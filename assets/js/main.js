// ApexTow — Page-specific interactions (all pages in one file)
document.addEventListener('DOMContentLoaded', () => {
  const toast = msg => window.ApexTow?.toast(msg);

  /* ── Home 1: ETA form ── */
  document.getElementById('eta-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const loc = document.getElementById('eta-loc')?.value.trim();
    if (loc) toast(`Unit dispatching to "${loc}" — Est. ETA 17 mins. Driver SMS incoming.`);
  });

  /* ── Home 2: Vehicle class pills ── */
  const vData = {
    'Passenger & EV':    { unit: 'UNIT: 21FT ALUMINUM FLATBED', info: 'Zero-drag wheel-strap · ETA 18 min · From $85' },
    'Luxury':            { unit: 'UNIT: 6° RACE-RAMP CARRIER', info: 'Enclosed or soft-ramp load · ETA 22 min · From $110' },
    'Van / Box':         { unit: 'UNIT: MEDIUM-DUTY UNDER-LIFT', info: 'Up to 26,000 lb GVWR · ETA 24 min · From $165' },
    'Semi / Rotator':    { unit: 'UNIT: 50-TON HEAVY ROTATOR', info: 'Tractor-trailer & rollover · ETA 28 min · Custom SLA' },
  };
  document.getElementById('v-pills')?.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#v-pills .tab').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const d = vData[btn.dataset.v];
      if (d) { document.getElementById('v-unit').textContent = d.unit; document.getElementById('v-info').textContent = d.info; }
    });
  });

  /* ── Home 2: Fleet tabs ── */
  const fleetD = {
    flatbed:  { badge: 'Light & Medium Duty', title: '21ft Low-Angle Hydraulic Flatbeds', desc: 'Engineered for AWD, EVs, and lowered sports cars. 8-degree approach angle. All four wheels off road.', specs: ['12,000 lb hydraulic winch','8-point soft nylon wheel straps','EV high-voltage safety kit'], img: 'https://xlspecializedtrailer.com/wp-content/uploads/2023/08/xl-hfg-yellow-rear-quarter.jpg' },
    rotator:  { badge: 'Heavy Commercial', title: '50-Ton 360° Heavy Rotators', desc: 'For loaded tractor-trailers, buses, construction machinery, and complex highway recoveries.', specs: ['100,000 lb dual-winch recovery','360-degree rotating boom','Air-cushion uprighting'], img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80' },
    service:  { badge: 'On-Site Rescue', title: 'Rapid Mobile Rescue Vans', desc: 'Compact vans stocked for dead batteries, flat tires, lockouts, and fuel drops in minutes.', specs: ['Surge-protected 12V/24V jump packs','Non-marring lockout & air-wedge kits','Calibrated torque wrenches & compressors'], img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80' },
    enclosed: { badge: 'Exotic & Collector', title: 'Climate-Protected Enclosed Carriers', desc: 'Discreet, weather-sealed transport for supercars, classics, and prototype vehicles.', specs: ['Hydraulic lift-gate zero-incline entry','Soft fleece-lined wheel straps','Full-value cargo transit protection'], img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80' },
  };
  document.getElementById('fleet-tabs')?.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#fleet-tabs .tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      const d = fleetD[tab.dataset.f];
      if (!d) return;
      document.getElementById('f-badge').textContent = d.badge;
      document.getElementById('f-title').textContent = d.title;
      document.getElementById('f-desc').textContent = d.desc;
      document.getElementById('f-img').src = d.img;
      document.getElementById('f-specs').innerHTML = d.specs.map(s => `<li style="display:flex;align-items:center;gap:.6rem;font-size:.9rem;"><span style="color:var(--accent);">▸</span>${s}</li>`).join('');
    });
  });

  /* ── Services: category filter ── */
  document.getElementById('svc-tabs')?.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#svc-tabs .tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      const cat = tab.dataset.s;
      document.querySelectorAll('.svc-card').forEach(c => {
        c.style.display = (cat === 'all' || c.dataset.s === cat) ? '' : 'none';
      });
    });
  });

  /* ── Coverage: zone filter ── */
  document.getElementById('zone-tabs')?.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#zone-tabs .tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      const z = tab.dataset.z;
      document.querySelectorAll('.zone-card').forEach(c => {
        c.style.display = (z === 'all' || c.dataset.z === z) ? '' : 'none';
      });
    });
  });

  /* ── Pricing: live estimator ── */
  const cSvc = document.getElementById('c-svc');
  const cMi = document.getElementById('c-miles');
  const cW = document.getElementById('c-winch');
  if (cSvc && cMi && cW) {
    const rates = { flatbed:{b:85,m:4}, ev:{b:110,m:4.5}, heavy:{b:195,m:7.5}, roadside:{b:70,m:0} };
    function recalc() {
      const r = rates[cSvc.value]; const mi = +cMi.value; const w = cW.value==='yes'?45:0;
      const total = r.b + mi*r.m + w;
      document.getElementById('mi-lbl').textContent = mi+' miles';
      document.getElementById('est-total').textContent = '$'+Math.round(total);
      document.getElementById('est-breakdown').textContent = r.m>0
        ? `$${r.b} base + ${mi} mi × $${r.m}/mi${w?` + $45 winch`:''}` : `$${r.b} flat on-site${w?` + $45 winch`:''}`;
    }
    cSvc.addEventListener('change',recalc);
    cMi.addEventListener('input',recalc);
    cW.addEventListener('change',recalc);
    recalc();
  }

  /* ── Pricing: billing toggle ── */
  const bMo = document.getElementById('bill-mo');
  const bYr = document.getElementById('bill-yr');
  if (bMo && bYr) {
    function setPlans(mode) {
      document.querySelectorAll('.plan-price').forEach(p => {
        p.innerHTML = `${mode==='mo'?p.dataset.mo:p.dataset.yr}<span style="font-size:1rem;color:${p.style.color==='rgb(255, 255, 255)'?'rgba(255,255,255,.65)':'var(--muted)'};">/mo</span>`;
      });
    }
    bMo.addEventListener('click',()=>{ bMo.classList.add('on');bYr.classList.remove('on');setPlans('mo'); });
    bYr.addEventListener('click',()=>{ bYr.classList.add('on');bMo.classList.remove('on');setPlans('yr'); });
  }

  /* ── Contact: form validation ── */
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault(); let ok = true;
    const checks = [
      {id:'c-name', t:v=>v.trim().length>=2},
      {id:'c-phone', t:v=>v.replace(/\D/g,'').length>=7},
      {id:'c-email', t:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
      {id:'c-topic', t:v=>v!==''},
      {id:'c-msg', t:v=>v.trim().length>=10},
    ];
    checks.forEach(({id,t}) => {
      const inp = document.getElementById(id);
      const fg = inp?.closest('.fg');
      if (!inp||!fg) return;
      const pass = t(inp.value);
      fg.classList.toggle('err',!pass);
      if (!pass) ok = false;
    });
    if (ok) {
      document.getElementById('c-success').style.display='block';
      e.target.reset();
      toast('Request submitted — Dispatch ticket #AT-8492 created.');
    }
  });

  /* ── Accordion ── */
  document.querySelectorAll('.acc-hd').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.acc')?.classList.toggle('open'));
  });

  /* ── Login: show/hide password ── */
  const togglePwd = document.getElementById('toggle-pwd');
  const pwdInp = document.getElementById('l-pwd');
  if (togglePwd && pwdInp) {
    togglePwd.addEventListener('click', () => {
      const show = pwdInp.type==='password';
      pwdInp.type = show?'text':'password';
      togglePwd.textContent = show?'Hide':'Show';
    });
  }

  /* ── Login: auth tabs ── */
  const authTabs = document.getElementById('auth-tabs');
  const authBtn = document.getElementById('auth-btn');
  let mode = 'login';
  authTabs?.querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => {
      authTabs.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));
      t.classList.add('on'); mode = t.dataset.auth;
      if (authBtn) authBtn.textContent = mode==='login'?'Sign In to Portal':'Create Member Account';
    });
  });

  /* ── Login: forgot password ── */
  document.getElementById('forgot-link')?.addEventListener('click', e => {
    e.preventDefault(); toast('Password reset link sent to your email (Demo).');
  });

  /* ── Login: form submit ── */
  document.getElementById('login-form')?.addEventListener('submit', e => {
    e.preventDefault(); let ok = true;
    const em = document.getElementById('l-email');
    const pw = document.getElementById('l-pwd');
    em?.closest('.fg').classList.toggle('err', em.value.trim().length<3);
    pw?.closest('.fg').classList.toggle('err', pw.value.length<6);
    if (em.value.trim().length<3||pw.value.length<6) ok=false;
    if (ok) {
      const fb = document.getElementById('auth-feedback');
      if (fb) { fb.style.display='block'; fb.textContent = mode==='login'?`✓ Signed in as ${em.value.trim()}. Dashboards live in Phase 2.`:`✓ Account created for ${em.value.trim()}.`; }
      toast(mode==='login'?'Signed in (Phase 1 Demo)':'Account created (Phase 1 Demo)');
    }
  });
});
