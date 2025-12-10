---
name: yellowbelly-copywriter
description: Write marketing copy for YellowBelly website pages. Uses brand guidelines and SEO briefs to create friendly, benefit-focused copy.
---

# YellowBelly Copywriter

## Purpose

Write marketing copy for YellowBelly website pages that:
- Matches the brand voice (friendly, approachable, confident)
- Incorporates SEO targets naturally
- Fits the actual component structure
- Converts visitors into customers

## When to Use

- Writing copy for new pages
- Rewriting existing page copy
- Creating headlines, CTAs, value propositions

## Required Context

Before writing, ALWAYS read:

1. **Brand guidelines:** `.claude/context/yellowbelly-brand.md`
2. **SEO brief (if exists):** `.claude/context/seo/[page-name].md`
3. **Actual page component:** `src/app/[page]/page.tsx` or relevant component files

## Workflow

### Step 1: Gather Context

1. Read the brand guidelines
2. Check for an SEO brief for this page
3. Read the actual component file to understand the structure
4. Ask the user: "Any specific direction or constraints for this page?"

### Step 2: Understand the Page Structure

Look at the component and identify:
- What sections exist (hero, features, CTA, etc.)
- What props/content each section expects
- Current placeholder or existing copy

### Step 3: Write Copy

For each section, write copy that:

**Follows brand voice:**
- Friendly, not corporate
- Confident, not boastful
- Clear, not clever
- "We" not "I"

**Incorporates SEO naturally:**
- Primary keyword in headline if possible
- Secondary keywords woven into body copy
- Never forced or awkward

**Focuses on benefits:**
- What does the reader gain?
- What pain does this solve?
- Why should they care?

### Step 4: Present Copy by Section

Present copy section by section:

```
## Hero Section

**Headline:** [headline]
**Subhead:** [subhead]
**CTA:** [button text]

---

## Value Props Section

**Heading:** [section heading]

**Prop 1:**
- Title: [title]
- Description: [description]

[etc.]
```

After each section, ask: "Does this feel right? Any adjustments?"

### Step 5: Iterate

Based on feedback:
- Adjust tone (punchier, warmer, more direct)
- Refine specific phrases
- Try alternative headlines
- Tighten or expand as needed

## Page-Specific Guidelines

### Home Page
- **Job:** Hook visitors, communicate what YellowBelly does, drive to plugins
- **Hero:** Clear value prop, one strong headline, one CTA
- **Tone:** Confident, welcoming
- **Length:** Concise - respect the visitor's time
- **Must include:** What we do, why we're different, clear next step

### About Page
- **Job:** Build trust, humanize the brand, tell the story
- **Hero:** Who we are in one sentence
- **Tone:** Warm, genuine, slightly more personal
- **Length:** Medium - people reading this want detail
- **Must include:** Our philosophy, why we exist, what we believe
- **SEO:** Low priority - focus on trust over keywords

### Contact Page
- **Job:** Make it easy to reach out, set expectations
- **Tone:** Helpful, low-friction
- **Length:** Short - utility page
- **Must include:** What to expect (response time), invitation to reach out
- **SEO:** Minimal - utility page

### Plugins Listing Page
- **Job:** Showcase products, help visitors find what they need
- **Tone:** Helpful, informative
- **Must include:** Clear categories/filtering, brief descriptions
- **SEO:** High priority - people search for plugin categories

## Copy Principles

### Headlines
- Lead with benefit or outcome
- Be specific over clever
- 6-12 words ideal
- Test: Would a stranger understand this?

### Body Copy
- One idea per paragraph
- Short sentences, short paragraphs
- Use "you" and "your" - speak to the reader
- Avoid jargon unless audience expects it

### CTAs
- Action-oriented verbs
- Clear outcome ("Browse Plugins" not "Learn More")
- One primary CTA per section

### SEO Integration
- Primary keyword in H1 if natural
- Secondary keywords in H2s and body
- Never sacrifice clarity for keywords
- If it sounds forced, rewrite

## Example Output

```
## Hero Section

**Headline:** WordPress Plugins That Just Work
**Subhead:** Lightweight, reliable, and built to last. No bloat, no abandoned updates, no headaches.
**CTA:** Browse Plugins

---

## Value Props Section

**Heading:** Why developers choose YellowBelly

**Prop 1: Reliable**
- Title: Always maintained
- Description: We don't abandon plugins after launch. Regular updates, ongoing support, year after year.

**Prop 2: Simple**
- Title: No feature bloat
- Description: Each plugin does one thing well. Clean settings, clear documentation, quick setup.

**Prop 3: Performant**
- Title: Won't slow you down
- Description: Lightweight code that respects your server. Your site stays fast.
```

## Iteration Prompts

If the user wants changes, common requests:

- "Make it punchier" → Shorter sentences, stronger verbs, cut filler
- "Too salesy" → Dial back claims, add specificity, more helpful tone
- "More personality" → Add light humor, warmer phrasing, less formal
- "Needs more urgency" → Focus on pain points, what they're missing
- "Simpler" → Shorter words, fewer ideas, clearer structure
