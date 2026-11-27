# ApexTow — Tow Truck & Roadside Assistance Website

> **Phase 1 Complete.** A fully responsive, multi-page commercial website built with pure HTML, CSS, and JavaScript.

---

## Quick Start

Open any `.html` file directly in a browser — no build step, server, or npm required.

**Start here:** `index.html` (Home 1 — Main Dispatch Landing Page)

---

## File Structure

```
d:\SET 7\Tow Truck\
│
├── index.html          ← Home 1 (Primary Landing Page)
├── home-2.html         ← Home 2 (Fleet & Network Alternative)
├── about.html          ← About Page
├── services.html       ← Services Directory
├── pricing.html        ← Transparent Pricing & Estimator  ← Additional Page 1
├── coverage.html       ← Coverage Zones & Fleet Equipment ← Additional Page 2
├── contact.html        ← Contact & Dispatch Request
├── login.html          ← Member & Fleet Portal Login
│
└── assets/
    ├── css/
    │   ├── styles.css      ← Full Design System, Theme Tokens, Components
    │   └── animations.css  ← Scroll Reveals, Hover FX, Page Transitions
    └── js/
        ├── components.js   ← Header + Footer Renderer, Theme/RTL/Dropdown Logic
        ├── utils.js        ← Scroll Header Behaviour, Anchor Smooth-Scroll
        └── main.js         ← All Page-Specific Interactive Features
```

---

## Page Inventory — 6 Sections Each

| Page | URL | Purpose |
|---|---|---|
| Home 1 | `index.html` | Primary dispatch landing, ETA lookup, features, how it works, comparison, testimonials |
| Home 2 | `home-2.html` | Vehicle-class selector hero, fleet showcase tabs, coverage matrix, commercial B2B, stats, plans |
| About | `about.html` | Hero, milestones timeline, mission/vision cards, goals standards, team, accreditations CTA |
| Services | `services.html` | Dark hero, filterable service cards, winch & fuel, equipment safety, process steps, CTA |
| Pricing | `pricing.html` | Hero, interactive cost estimator, on-demand rates, membership plans, insurance receipts, CTA |
| Coverage | `coverage.html` | Dark hero, filterable zone directory, fleet lineup, weather readiness, partner garages, CTA |
| Contact | `contact.html` | Dark hero, info cards, validated contact form, hub locations, accordion FAQ, emergency CTA |
| Login | `login.html` | Dark hero, sign-in/register form with show/hide password, role cards, security, benefits, CTA |

---

## Features Implemented

### Navigation
- Sticky glass-blur header with Logo + Brand  
- Full dropdown menus: **Home** (Home1 / Home2), **Dashboard** (Phase 2 placeholders)
- Active page visual indicators (orange underline pip)
- Smooth dropdown open/close with arrow rotation
- Mobile hamburger drawer with full nav links

### Theme & Layout
- **Dark / Light Mode** toggle — persisted via `localStorage`
- **LTR / RTL** layout toggle — persisted via `localStorage`, full directional CSS support
- Smooth `data-theme` attribute switching on `<html>`

### Interactive Features (working, no backend needed)
| Page | Feature |
|---|---|
| Home 1 | Live ETA dispatch lookup form with toast notification |
| Home 2 | Vehicle-class pill selector updates unit recommendation |
| Home 2 | Fleet tab switcher changes title, description, image, specs |
| Services | Category filter pills show/hide service cards |
| Coverage | Zone filter pills show/hide coverage zone cards |
| Pricing | Slider + dropdown estimator updates total and breakdown live |
| Pricing | Monthly/Annual billing toggle swaps plan prices |
| Contact | Full form validation with per-field inline errors |
| Contact | FAQ accordion open/close |
| Login | Show/Hide password toggle |
| Login | Sign In / Register tab switch |
| Login | Forgot password toast notification |
| Login | Frontend credential validation with feedback message |
| All pages | Dashboard dropdown → Phase 2 info modal |
| All pages | Footer newsletter subscribe toast |
| All pages | Scroll-reveal animation on all cards/sections |
| All pages | Header scrolled shadow state |

### Design System
- CSS custom properties for all color tokens, spacing, radius, shadows
- Google Fonts: **Plus Jakarta Sans** (headings) + **Inter** (body) + **JetBrains Mono** (data)
- Accent palette: **Orange #ea580c** primary, yellow secondary, blue accent
- 6 reusable layout patterns: `split-grid`, `grid-2/3/4`, `card`, `icon-box`, `eyebrow`
- Smooth `0.25s cubic-bezier` micro-interactions on all interactive elements
- Staggered scroll-reveal with IntersectionObserver

### Responsive Breakpoints
- ≥ 1025px — Full desktop layout
- 769px–1024px — Tablet: 2-col grids, mobile menu activated
- ≤ 768px — Mobile: 1-col stacked, full-width CTAs, compressed hero images

---

## Phase 2 — Planned (Do Not Start Yet)

- **User Dashboard** — Rescue history, saved vehicles, membership plan management
- **Admin Dashboard** — Fleet dispatch board, driver management, zone analytics, billing

Dashboard links in the nav are prepared as Phase 2 placeholders with an info modal.

---

## Brand Identity

| Element | Value |
|---|---|
| Brand Name | **ApexTow** |
| Tagline | *24/7 Dispatch · Upfront Pricing · Damage-Free Recovery* |
| Primary Color | `#ea580c` (Burnt Orange) |
| Accent Color | `#eab308` (Amber Yellow) |
| Heading Font | Plus Jakarta Sans 800 |
| Emergency Line | +1 (800) 555-0199 |

---

*Built as Phase 1 of the ApexTow commercial website project.*
