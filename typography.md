# Othalo Website — Typography Reference

## Font Stack

| Role | Family | Source |
|------|--------|--------|
| `font-heading` | Inter, sans-serif | Google Fonts |
| `font-body` | Inter, sans-serif | Google Fonts |
| Base `body` | Inter, sans-serif | CSS global |

**Single typeface throughout.** Both `font-heading` and `font-body` resolve to Inter. The distinction is semantic only — headings use `font-heading`, body copy uses the default or `font-body`.

**Weights loaded:** 300 · 400 · 500 · 600 · 700

**Base size:** 16px · **Base line-height:** 1.6

---

## Tailwind Size Scale Reference

| Class | px equivalent |
|-------|--------------|
| `text-xs` | 12px |
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-lg` | 18px |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-3xl` | 30px |
| `text-4xl` | 36px |
| `text-5xl` | 48px |
| `text-6xl` | 60px |
| `text-[20px]` | 20px (custom) |
| `text-[22px]` | 22px (custom) |
| `text-[24px]` | 24px (custom) |
| `text-[28px]` | 28px (custom) |
| `text-[2rem]` | 32px (custom) |
| `text-[36px]` | 36px (custom) |
| `text-[50px]` | 50px (custom) |
| `text-[70px]` | 70px (custom) |

---

## Page-by-Page Typography

### HOME (`src/pages/Home.jsx`)

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Hero H1 | `font-heading text-5xl lg:text-[70px]` | 48px → 70px | Bold (700) |
| Hero subtitle | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Hero CTA button | `text-[20px] uppercase` | 20px | Bold (700) |
| Section H2 (Market Leading, Solutions, Dual Impact, ESG) | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Feature card H3 | `font-heading text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Feature card body | `text-lg lg:text-[24px]` | 18px → 24px | Medium (500) |
| Solutions audience H3 (Governments etc.) | `font-heading text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Solutions LEARN MORE button | `text-[20px] uppercase` | 20px | Bold (700) |
| Dual Impact item title | `font-heading text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Dual Impact item body | `text-lg lg:text-[24px]` | 18px → 24px | Medium (500) |
| Dual Impact CTA button | `text-[20px] uppercase` | 20px | Bold (700) |
| ESG section H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |

---

### PRODUCTS (`src/pages/Products.jsx`)

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Hero subtitle text | `font-heading text-2xl md:text-3xl lg:text-[2rem] xl:text-4xl` | 24px → 32px → 36px | Semibold (600) |
| Technology section H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Technology section subheading | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Tech feature card H3 | `font-heading text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Tech feature card body | `text-lg lg:text-[24px]` | 18px → 24px | Medium (500) |
| Quote (Dr. Vincent Kitio) | `font-heading text-lg md:text-xl lg:text-2xl` | 18px → 20px → 24px | Bold (700) |
| Quote author name | `text-sm font-heading` | 14px | Semibold (600) |
| Quote author title | `text-xs` | 12px | Normal (400) |
| Approach section H2 | `font-heading text-2xl md:text-3xl` | 24px → 30px | Semibold (600) |
| Approach item H3 | `font-heading text-base` | 16px | Semibold (600) |
| Approach item body | `text-sm` | 14px | Normal (400) |
| Product line label | `font-heading text-xs sm:text-sm` | 12px → 14px | Semibold (600) |
| Comparison table header | `text-xs font-heading` | 12px | Semibold (600) |
| Comparison table cell | `text-xs` | 12px | Semibold (600) / Normal |

---

### ABOUT (`src/pages/About.jsx`)

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Vision / Mission / Values H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Vision / Mission body | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Values list items | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Discover button | `text-[20px] uppercase` | 20px | Bold (700) |
| Our Story H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Story blockquote | `text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Story attribution name | `font-heading text-xl lg:text-[24px]` | 20px → 24px | Bold (700) |
| Story attribution title | `text-base` | 16px | Normal (400) |
| Team section H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Team section subtitle | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Team member name | `font-heading text-xl lg:text-[22px]` | 20px → 22px | Bold (700) |
| Team member title | `text-sm lg:text-[16px]` | 14px → 16px | Normal (400) |
| Our Culture H2 | `font-heading text-4xl lg:text-[50px]` | 36px → 50px | Bold (700) |
| Our Culture subtitle | `text-xl lg:text-[28px]` | 20px → 28px | Medium (500) |
| Culture value H3 | `font-heading text-2xl lg:text-[36px]` | 24px → 36px | Bold (700) |
| Culture value body | `text-lg lg:text-[24px]` | 18px → 24px | Medium (500) |
| Impact H2 | `font-heading text-2xl` | 24px | Bold (700) |
| Impact item H3 | `font-heading text-sm` | 14px | Semibold (600) |
| Impact item body | `text-xs` | 12px | Normal (400) |

---

### SOLUTIONS — Overview (`src/pages/solutions/Solutions.jsx`)

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Solution card label (tag) | `font-heading text-sm uppercase` | 14px | Semibold (600) |
| Solution card H2 | `font-heading text-3xl lg:text-4xl` | 30px → 36px | Semibold (600) |
| Solution card bullets | `text-sm` | 14px | Normal (400) |
| Solution card CTA button | `text-sm` | 14px | Semibold (600) |
| Bottom CTA H2 | `font-heading text-3xl` | 30px | Semibold (600) |
| Bottom CTA body | default / `text-base` | 16px | Normal (400) |
| Bottom CTA button | `text-base` | 16px | Semibold (600) |

---

### SOLUTIONS — Governments / Housing Developers / Corporations
(`src/pages/solutions/Governments.jsx`, `HousingDevelopers.jsx`, `Corporations.jsx`)

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Page H1 | `font-heading text-3xl md:text-4xl` | 30px → 36px | Semibold (600) |
| Section H2 (Challenge / Solution / Benefits) | `font-heading text-xl` | 20px | Bold (700) |
| Bullet list items | `text-sm` | 14px | Normal (400) |
| Partner tagline | `font-heading text-sm` | 14px | Semibold (600) |
| Form labels | `text-xs font-heading uppercase` | 12px | Semibold (600) |
| Form inputs / textarea | `text-sm` (default) | 14px | Normal (400) |
| Submit button | `text-sm uppercase` | 14px | Semibold (600) |
| Success H3 | `font-heading text-2xl` | 24px | Semibold (600) |
| Success body | `text-sm` | 14px | Normal (400) |
| Field error | `text-xs` | 12px | Normal (400) |

---

### CONTACT (`src/pages/Contact.jsx`)

| Element | Classes | Size | Weight |
|---------|---------|------|--------|
| Form labels | `text-xs font-heading uppercase` | 12px | Semibold (600) |
| Form inputs | default | 14px | Normal (400) |
| Submit button | `text-sm uppercase` | 14px | Semibold (600) |
| Success H3 | `font-heading text-2xl` | 24px | Semibold (600) |
| Success body | `text-sm` | 14px | Normal (400) |
| Field error | `text-xs` | 12px | Normal (400) |

---

### TERMS OF SERVICE / PRIVACY POLICY

| Element | Classes | Size (mobile → desktop) | Weight |
|---------|---------|--------------------------|--------|
| Page H1 | `font-heading text-4xl md:text-5xl` | 36px → 48px | Semibold (600) |
| Section label (Legal) | `text-xs font-heading uppercase` | 12px | Semibold (600) |
| Date line | `text-sm` | 14px | Normal (400) |
| Section H2 | `font-heading text-xl` | 20px | Semibold (600) |
| Section body | `text-sm` | 14px | Normal (400) |

---

### NAVBAR (`src/components/layout/Navbar.jsx`)

| Element | Classes | Size | Weight |
|---------|---------|------|--------|
| Nav links | `text-sm font-heading` | 14px | Medium / Semibold |
| Solutions mega-menu label | `text-sm` | 14px | Semibold (600) |
| Solutions mega-menu desc | `text-xs` | 12px | Normal (400) |
| Contact CTA button | `text-sm` | 14px | Semibold (600) |

---

### FOOTER (`src/components/layout/Footer.jsx`)

| Element | Classes | Size | Weight |
|---------|---------|------|--------|
| "Follow us" label | `text-[10px] uppercase font-heading` | 10px | Normal (400) |
| Footer nav links | `text-xs` | 12px | Normal (400) |

---

## Summary: Sizes in Use

| px | Tailwind class | Used for |
|----|---------------|----------|
| 10px | `text-[10px]` | Footer label |
| 12px | `text-xs` | Labels, captions, errors, footer links, table text |
| 14px | `text-sm` | Body copy, bullets, form inputs, nav links, buttons |
| 16px | `text-base` | Base body, some buttons |
| 18px | `text-lg` | Feature card body (mobile) |
| 20px | `text-xl` / `text-[20px]` | Section subheadings (mobile), CTA buttons |
| 22px | `text-[22px]` | Team member names (desktop) |
| 24px | `text-2xl` / `text-[24px]` | Feature card body (desktop), story quote (mobile), success headings |
| 28px | `text-[28px]` | Section subheadings (desktop), vision/mission body |
| 30px | `text-3xl` | Solution card headings (mobile) |
| 32px | `text-[2rem]` | Products hero subtitle (mid breakpoint) |
| 36px | `text-4xl` / `text-[36px]` | Section H2 (mobile), feature H3 (desktop), story quote (desktop) |
| 48px | `text-5xl` | Hero H1 (mobile) |
| 50px | `text-[50px]` | Section H2 (desktop) — primary heading size |
| 70px | `text-[70px]` | Hero H1 (desktop) — largest size on site |

---

## Summary: Weights in Use

| Weight | Class | Used for |
|--------|-------|----------|
| 400 | `font-normal` (default) | Body copy, bullets, form inputs, descriptions |
| 500 | `font-medium` | Subtitles, feature body, hero subtitle |
| 600 | `font-semibold` | Section headings (secondary pages), nav, buttons, labels |
| 700 | `font-bold` | Primary headings (Home, About, Products), hero H1, CTAs |

---

## Inconsistencies to Note

1. **Heading weight split** — Home, About, and Products use `font-bold` (700) for H2s. Solutions and Contact pages use `font-semibold` (600). No functional difference but worth standardising.
2. **Custom px values** — Several sizes use arbitrary values (`text-[50px]`, `text-[70px]`, `text-[36px]`) rather than Tailwind scale steps. These could be mapped to `text-5xl` (48px), `text-6xl` (60px), and `text-4xl` (36px) respectively if a stricter scale is desired.
3. **Products hero subtitle** uses `lg:text-[2rem]` (32px) as a mid-step between `text-3xl` (30px) and `text-4xl` (36px) — a minor quirk.
