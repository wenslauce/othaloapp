# Othalo Website — Changelog

---

## Session: June 2026 — Comprehensive Content & UX Fixes

### BUTTONS (global)

| # | Change | File |
|---|--------|------|
| 1 | All **LEARN MORE** buttons resized to `h-8 px-4 text-xs`, corner radius `rounded-[6px]`, no arrow icon | `Home.jsx`, `Solutions.jsx` |
| 2 | Navbar **Contact** button resized to `h-8 px-4 text-xs rounded-[6px]` | `Navbar.jsx` |
| 3 | Hero CTA (**Products**) resized to `h-8 px-5 text-xs`, arrow icon removed | `Home.jsx` |
| 4 | Vincent Kitio **Learn More** button standardised to `h-8 rounded-[6px] text-xs` | `Products.jsx` |
| 5 | Solutions sub-pages **Send Message** button updated to `rounded-[6px]` | `Governments.jsx`, `HousingDevelopers.jsx`, `Corporations.jsx` |

---

### HOME PAGE

| # | Change | File |
|---|--------|------|
| 6 | Hero subtitle: added full stop after "from recycled plastic" | `en.json` |
| 7 | **Cost Effective** feature description rewritten: "Pre-fabricated offsite with low waste. Limited manpower and machinery needed on site. Built 100% from cost effective recycled plastic material. • Fast Construction: a 2-bedroom house can be set up within one day due to market leading interlock assembling technology." | `en.json` |
| 8 | **Carbon efficient** renamed to **Carbon negative / Highly Sustainable** | `en.json` |
| 9 | Solutions section: "Governments" → **"Governments — Municipalities"** | `Home.jsx` |
| 10 | Solutions LEARN MORE buttons: style changed from white/transparent to `bg-[#E7E9EC] text-teal border-0` | `Home.jsx` |
| 11 | Solutions audience headings (Governments, Housing Developers, Corporations) reduced to `text-lg` to match section crossheads | `Home.jsx` |
| 12 | Dual Impact section: background changed from `bg-surface` → `bg-[#E7E9EC]` | `Home.jsx` |
| 13 | Dual Impact: green left border bar (`border-l-2 border-teal`) removed from each item | `Home.jsx` |
| 14 | Dual Impact headline changed to: **"Othalo using one global challenge to solve another"** | `Home.jsx` |
| 15 | Plastic waste figure updated: "9 billion tons" → **"10 billion tonnes"** (consistent with Learn More modal) | `en.json` |
| 16 | Affordable housing figure updated: "1.6 billion" → **"3.4 billion people globally lack adequate housing"** | `en.json` |
| 17 | UN-Habitat source updated to **2026** in affordable housing description | `en.json` |
| 18 | "Affordable homes" item title renamed to **"Affordable housing"** | `en.json` |

---

### NAVBAR & NAVIGATION

| # | Change | File |
|---|--------|------|
| 19 | Navbar dropdown: "Governments" → **"Governments — Municipalities"** | `en.json` (`nav.gov`) |
| 20 | Solutions overview page card label: "Governments" → **"Governments — Municipalities"** | `en.json` (`solutions.cards.0.label`) |
| 21 | Governments section locale label updated to **"Solutions — Governments & Municipalities"** | `en.json` |

---

### ABOUT PAGE

| # | Change | File |
|---|--------|------|
| 22 | Team section subtitle: added full stop after "sustainable housing solutions" | `About.jsx` |
| 23 | Culture section subtitle: added full stop after "impact on the world" | `About.jsx` |
| 24 | Our Values list items: added teal bullet point markers (`●`) | `About.jsx` |
| 25 | **Discover button**: changed from local video player to **YouTube embed** (`https://youtu.be/alKO9meYgrU`) — autoplay with sound via `?autoplay=1` in iframe | `About.jsx` |
| 26 | Discover button restyled to `h-8 px-5 text-xs rounded-[6px]` for consistency | `About.jsx` |
| 27 | Our Vision section: `lg:min-h-[560px]` set on flex container; image uses `object-center` for proper alignment | `About.jsx` |
| 28 | Our Story section: `lg:min-h-[480px]` set; image uses `object-center` for proper alignment | `About.jsx` |

---

### PRODUCTS PAGE

| # | Change | File |
|---|--------|------|
| 29 | **Section order corrected** to match spec: Hero → Technology → Product images → Build the future of housing → Comparison table → Vincent Kitio quote | `Products.jsx` |
| 30 | Vincent Kitio quote section moved to **last position** (after comparison table) | `Products.jsx` |
| 31 | Build the Future section background changed from `bg-surface` → `bg-white` to better separate from comparison table | `Products.jsx` |
| 32 | Comparison table heading: `font-semibold` → `font-bold` | `Products.jsx` |

---

### SOLUTIONS — OVERVIEW PAGE

| # | Change | File |
|---|--------|------|
| 33 | LEARN MORE button: removed `<ChevronRight>` arrow, resized to `h-8 rounded-[6px] text-xs` | `Solutions.jsx` |

---

### SOLUTIONS — ALL THREE SUB-PAGES (Governments, Housing Developers, Corporations)

All three pages completely redesigned from a narrow centered text column to a **full-width split layout**:

| # | Change | Files |
|---|--------|-------|
| 34 | **New layout**: content left (50%) + image right (50%), `lg:min-h-[520px]` | All three |
| 35 | **Images added**: Governments → `The District 2a.png`; Housing Developers → `The community 2c.png`; Corporations → `The House Kenya crop.png` | All three |
| 36 | All section headings (Challenge, Othalo Solution, Key Benefits) changed from centered to left-aligned, `font-bold` weight | All three |
| 37 | All list items now render with **teal bullet markers** (`●`) instead of plain text | All three |
| 38 | Governments page H1: "You are a Government" → **"You are a Government — Municipality"** | `Governments.jsx` |
| 39 | Contact form moved to a separate `bg-surface` section below the hero, with its own "Contact our team" heading | All three |
| 40 | Contact form card padding reduced to `p-6 sm:p-8` for better mobile fit | All three |
| 41 | Submit button updated to `rounded-[6px] h-10` | All three |

---

### EN.JSON (Locale)

| Key | Old value | New value |
|-----|-----------|-----------|
| `home.hero_subtitle` | …from recycled plastic | …from recycled plastic**.**  |
| `products.panel_features[0].desc` | Use of plastic waste… | Pre-fabricated offsite… + Fast Construction bullet |
| `products.panel_features[3].title` | Carbon efficient | **Carbon negative / Highly Sustainable** |
| `products.dual_items[0].desc` | 9 billion tons | **10 billion tonnes** |
| `products.dual_items[1].title` | Affordable homes | **Affordable housing** |
| `products.dual_items[1].desc` | 1.6 billion… | **3.4 billion people globally lack adequate housing (UN-Habitat, 2026)** |
| `nav.gov` | Governments | **Governments — Municipalities** |
| `solutions.cards[0].label` | Governments | **Governments — Municipalities** |
| `governments.label` | Solutions — Governments | **Solutions — Governments & Municipalities** |
| `about.claus.title` | COO | **President & COO** *(earlier session)* |

---

## Earlier Sessions

| Date | Change | File |
|------|--------|------|
| Jun 2026 | Removed UN-Habitat badge from Market Leading Technology section (Home) | `Home.jsx` |
| Jun 2026 | Added UN-Habitat badge overlay to Products hero right panel | `Products.jsx` |
| Jun 2026 | Removed full dark overlay (`bg-navy/35`) from Vincent Kitio photo; replaced with bottom-only gradient | `Products.jsx` |
| Jun 2026 | Vincent Kitio section background changed to solid `#E7E9EC` (both panels) | `Products.jsx` |
| Jun 2026 | "Build the future of homes" → **"Build the future of housing"** (consistency) | `en.json` |
| Jun 2026 | Technology subtitle: added full stop at end | `Products.jsx` |
| Jun 2026 | Product images moved to immediately after Technology section | `Products.jsx` |
| Jun 2026 | Plastic waste modal: "2022" stat → **"In 2022"** | `Home.jsx` |
| Jun 2026 | Martin Dokkedal removed from team (conflict of interest, temporary) | `About.jsx` |
| Jun 2026 | Comparison table: `table-fixed` + `w-1/5` on all columns for equal widths | `Products.jsx` |
| Jun 2026 | About page font sizes increased: headings `text-2xl lg:text-3xl`, body `text-base lg:text-lg` | `About.jsx` |
| Jun 2026 | Affordable housing modal rebuilt with 4 sections + 2050 projections table | `Home.jsx` |
| Jun 2026 | Claus Skadkjaer title: COO → **President & COO** | `en.json` |
| Jun 2026 | Products hero subtitle updated to brief text ("Our patented, UN-Habitat endorsed…") | `en.json` |
| Jun 2026 | Emergency Shelter slider fixed: removed `%20` URL encoding from image paths | `Products.jsx` |
| Jun 2026 | About impact items updated to brief text (short, factual) | `en.json` |
| Jun 2026 | All pages: font sizes reduced from oversized (`text-[50px]`, `text-[70px]`) to proportional scale | All pages |
| Jun 2026 | All section images on About: removed `style={{ minHeight }}`, switched to Tailwind `min-h-*` | `About.jsx` |
| Jun 2026 | Solutions sub-page image overlays (dark tints) removed | `Solutions.jsx`, `Products.jsx` |
