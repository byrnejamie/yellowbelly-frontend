# YellowBelly Visual Depth Design

## Design Direction

**Personality:** Sophisticated & Trustworthy - rich but restrained, premium without flashy.

**Goal:** Add visual interest and depth while maintaining professionalism appropriate for WordPress plugins.

---

## Color Palette Evolution

### Light Sections
- Background: `slate-50` (#f8fafc)
- Cards: `white` with warm tint
- Text: `slate-900` headlines, `slate-600` body

### Dark Sections (New)
- Background: `slate-900` (#0f172a) or `slate-950` (#020617)
- Cards: `slate-800` with `slate-700/50` border
- Text: `white` headlines, `slate-300` body

### Teal Accent - More Vibrant
- Primary: `teal-500` (#14b8a6) - punchier than current teal-600
- Glow: `teal-400/20` for hover effects
- Gradient: `teal-500` → `teal-600` for buttons

### Section Rhythm
Hero (dark) → Features (light) → Testimonials (dark) → CTA (light)

---

## Background Depth & Texture

### Hero Section - Gradient Mesh
Dark base (`slate-950`) with soft, blurred color accents:
- Top-right: Teal blob (`teal-500/10`), ~400px diameter, blur 100px
- Bottom-left: Slate-blue blob (`slate-400/5`), ~300px, blur 80px
- Creates ambient light effect, not distinct shapes

### Feature Sections - Geometric Texture
Light sections get subtle dot grid pattern:
- 1px dots, `slate-200`, 24px spacing, 50% opacity
- CSS background-pattern (no images)
- Barely visible - subconscious polish

### Section Dividers - Soft Curves
SVG curves or clip-path between sections:
- Dark-to-light: curve swoops down
- Light-to-dark: curve swoops up
- 60-80px overlap height
- Creates visual flow, breaks rigid boxes

---

## Cards & Components

### Card Base Style

**Light mode:**
```css
background: white;
border: 1px solid rgba(226, 232, 240, 0.6); /* slate-200/60 */
box-shadow: 0 4px 20px rgba(0,0,0,0.06);
border-radius: 12px;
```

**Dark mode:**
```css
background: rgba(30, 41, 59, 0.8); /* slate-800/80 */
border: 1px solid rgba(51, 65, 85, 0.5); /* slate-700/50 */
box-shadow: 0 4px 20px rgba(0,0,0,0.3);
border-radius: 12px;
```

### Hover State - Glow Effect
```css
transform: translateY(-4px);
border-color: rgba(20, 184, 166, 0.3); /* teal-500/30 */
box-shadow:
  0 8px 30px rgba(0,0,0,0.08),
  0 0 20px rgba(20,184,166,0.1);
transition: all 300ms ease-out;
```

### Buttons
Primary buttons with gradient and glow:
```css
background: linear-gradient(to bottom, #14b8a6, #0d9488); /* teal-500 → teal-600 */
/* Hover: */
box-shadow: 0 0 20px rgba(20,184,166,0.3);
```

---

## Motion & Animation

### Hover States
- Cards: lift + glow (300ms ease-out)
- Buttons: brighten + glow ring
- Links: color shift (150ms)

### Scroll Animations
- Fade-in-up on scroll for cards and sections
- Stagger: 100ms delay between items in a grid
- Duration: 500ms
- Use Intersection Observer or Framer Motion

### Principles
- Subtle, not showy
- Performance-first (prefer CSS transforms)
- Respect reduced-motion preferences

---

## Implementation Priority

1. **Hero section** - Dark background, gradient mesh, updated typography
2. **Section dividers** - SVG curves between sections
3. **Cards** - New shadow/glow treatment
4. **Buttons** - Gradient + glow
5. **Scroll animations** - Fade-in effects
6. **Dot texture** - Background pattern for light sections
