# Visual Depth Implementation Plan

Based on design spec: `docs/plans/2025-12-10-visual-depth-design.md`

---

## Task 1: Update Hero Section (Dark + Gradient Mesh)

**Files:** `src/components/home/Hero.tsx`

Already implemented in preview. Copy from main branch.

**Verification:** `npm run build`

---

## Task 2: Add Section Divider Component

**Files:**
- Create: `src/components/ui/SectionDivider.tsx`
- Update: `src/components/ui/index.ts`

**Step 1:** Create SectionDivider component with SVG curve

```tsx
// Two variants: "dark-to-light" and "light-to-dark"
// Height: 60-80px
// Uses clip-path or inline SVG
```

**Verification:** `npm run build`

---

## Task 3: Update Card Component (Glow Effect)

**Files:** `src/components/ui/Card.tsx`

**Changes:**
- Increase border-radius to 12px
- Add softer, more spread shadow
- Add hover glow effect with teal tint
- Add translateY(-4px) on hover

**Verification:** `npm run build`

---

## Task 4: Update Button Component (Gradient)

**Files:** `src/components/ui/Button.tsx`

**Changes:**
- Primary variant: gradient background (teal-500 → teal-600)
- Hover: glow shadow effect
- Keep existing variants working

**Verification:** `npm run build`

---

## Task 5: Update FeaturedPlugins Section

**Files:** `src/components/home/FeaturedPlugins.tsx`

**Changes:**
- Add dot pattern background texture
- Ensure cards use new glow treatment
- Keep light background (alternates with dark hero)

**Verification:** `npm run build`

---

## Task 6: Add Section Dividers to Homepage

**Files:** `src/app/page.tsx`

**Changes:**
- Add SectionDivider between Hero and FeaturedPlugins
- Test visual flow

**Verification:** `npm run build` + visual check

---

## Task 7: Final Verification

- Run build
- Run lint
- Visual check all sections
- Commit with descriptive message

---

## Summary

| Task | Component | Key Change |
|------|-----------|------------|
| 1 | Hero | Dark bg + gradient mesh |
| 2 | SectionDivider | New curved divider component |
| 3 | Card | Glow hover effect |
| 4 | Button | Gradient + glow |
| 5 | FeaturedPlugins | Dot texture background |
| 6 | Homepage | Wire up dividers |
| 7 | Final | Verify + commit |
