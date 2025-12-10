# Yellowbelly Design System

## Design Philosophy

A refined, minimal design system that communicates expertise through restraint. Every element earns its place. Generous whitespace lets content breathe. Subtle shadows and transitions provide depth without distraction.

**Aesthetic:** Refined & Minimal
**Color Direction:** Cool Neutrals + Teal Accent
**Typography:** Modern Geometric Sans (Geist)
**Foundation:** shadcn/ui (Radix primitives)
**Dark Mode:** Light-first, dark supported
**Motion:** Subtle & Refined (150-200ms transitions)

---

## Color Palette

### Light Mode
```
Background:      slate-50   (#f8fafc)    — Primary canvas
Surface:         white      (#ffffff)    — Cards, elevated elements
Border:          slate-200  (#e2e8f0)    — Subtle separators

Text Primary:    slate-900  (#0f172a)    — Headlines
Text Secondary:  slate-600  (#475569)    — Body text
Text Muted:      slate-400  (#94a3b8)    — Captions, metadata

Accent:          teal-600   (#0d9488)    — Primary buttons, links
Accent Hover:    teal-700   (#0f766e)    — Interactive states
Accent Light:    teal-50    (#f0fdfa)    — Subtle backgrounds
Accent Ring:     teal-500   (#14b8a6)    — Focus indicators
```

### Dark Mode
```
Background:      slate-950  (#020617)
Surface:         slate-900  (#0f172a)
Border:          slate-800  (#1e293b)
Text Primary:    slate-50   (#f8fafc)
Text Secondary:  slate-400  (#94a3b8)
Accent:          teal-400   (#2dd4bf)    — Lighter for contrast
```

---

## Typography

**Font Family:** Geist Sans (already installed)

| Element | Size | Weight | Tracking | Color |
|---------|------|--------|----------|-------|
| H1 | text-4xl/5xl | medium (500) | -0.02em | slate-900 |
| H2 | text-3xl | medium (500) | -0.02em | slate-900 |
| H3 | text-xl | medium (500) | normal | slate-900 |
| Body | text-base | regular (400) | normal | slate-600 |
| Small | text-sm | regular (400) | normal | slate-500 |

**Line Height:** 1.6 for body text (relaxed, readable)

---

## Spacing Scale

4px base unit. Generous whitespace is key.

| Token | Value | Use Case |
|-------|-------|----------|
| xs | 4px (1) | Tight gaps, icon padding |
| sm | 8px (2) | Compact elements |
| md | 16px (4) | Default component padding |
| lg | 24px (6) | Section gaps, card padding |
| xl | 32px (8) | Component separation |
| 2xl | 48px (12) | Major section breaks |
| 3xl | 64px (16) | Page section padding |
| 4xl | 96px (24) | Hero/large section padding |

---

## Shadows

Subtle depth, slate-tinted for cohesion.

```css
--shadow-sm:  0 1px 2px rgba(15,23,42,0.04);    /* Subtle lift (buttons) */
--shadow-md:  0 4px 6px rgba(15,23,42,0.05);    /* Cards at rest */
--shadow-lg:  0 10px 15px rgba(15,23,42,0.06);  /* Cards on hover, dropdowns */
--shadow-xl:  0 20px 25px rgba(15,23,42,0.08);  /* Modals, popovers */
```

---

## Border Radius

```css
--radius-sm:   6px;     /* Buttons, inputs, badges */
--radius-md:   8px;     /* Cards, smaller containers */
--radius-lg:   12px;    /* Large cards, sections */
--radius-full: 9999px;  /* Pills, avatars */
```

---

## Motion

```css
--duration-fast:   150ms;  /* Hover states, micro-interactions */
--duration-normal: 200ms;  /* Most transitions */
--duration-slow:   300ms;  /* Page transitions, complex animations */
--easing:          cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth, natural */
```

---

## Components

### Button

| Variant | Background | Text | Hover |
|---------|------------|------|-------|
| Primary | teal-600 | white | teal-700 |
| Secondary | slate-100 | slate-900 | slate-200 |
| Ghost | transparent | slate-600 | slate-100 |
| Outline | transparent + border | slate-700 | slate-50 |

**Sizes:** sm (h-8 px-3), md (h-10 px-4), lg (h-12 px-6)
**Radius:** 6px
**Shadow:** shadow-sm (primary only)
**Transition:** 150ms all

### Card

- **Background:** white
- **Border:** 1px slate-200
- **Shadow:** shadow-md → shadow-lg on hover
- **Padding:** 24px (p-6)
- **Radius:** 8px
- **Transition:** shadow 200ms

### Input/Form Fields

- **Background:** white
- **Border:** slate-200 → teal-500 on focus
- **Text:** slate-900
- **Placeholder:** slate-400
- **Height:** 40px (h-10)
- **Radius:** 6px
- **Focus:** ring-2 ring-teal-500/20 border-teal-500

### Navigation

- **Links:** slate-600 → slate-900 hover → teal-600 active
- **Spacing:** 32px between items
- **Style:** No underline, color shift only

---

## Page Layouts

### Container
```
max-width: 1280px (max-w-7xl)
padding: 16px → 24px → 32px (responsive)
margin: auto
```

### Header
```
height: 64px
position: sticky top-0
background: white/80 + backdrop-blur-sm
border-bottom: 1px slate-200/50
z-index: 50
```

### Page Sections
```
padding: 64px → 96px vertical (responsive)
background: alternate white / slate-50
```

### Hero
```
padding: 128px top, 96px bottom
headline: text-5xl → text-6xl, max-w-3xl, centered
subhead: text-xl, slate-600, max-w-2xl, mt-6
cta: mt-10, gap-4
```

### Card Grid
```
columns: 1 → 2 → 3 (responsive)
gap: 24px
```

### Footer
```
background: slate-900
text: slate-400, links hover:white
padding: 64px vertical
```

---

## Implementation Approach

### 1. Initialize shadcn/ui
- Configure with slate base + teal accent
- Set up CSS variables matching this spec

### 2. Core Components (in order)
1. Button (all variants)
2. Card
3. Input, Label, Form elements
4. Badge
5. Dropdown Menu
6. Dialog/Modal
7. Navigation components

### 3. Custom Extensions
- Update existing Header, Footer, Hero to match system
- Create consistent page templates
- Add motion/transition utilities

### 4. Quality Checks
- Verify color contrast (WCAG AA minimum)
- Test dark mode consistency
- Validate responsive breakpoints
- Ensure focus states are visible
