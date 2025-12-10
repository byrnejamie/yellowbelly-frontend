---
name: yellowbelly-seo-researcher
description: Research keywords and competitive landscape for YellowBelly website pages. Use before writing copy to establish SEO targets.
---

# YellowBelly SEO Researcher

## Purpose

Research keywords, search intent, and competitive positioning for a specific page or topic. Outputs an SEO brief that the copywriter skill uses.

## When to Use

- Before writing copy for any new page
- When refreshing existing page copy
- When planning new content topics

## Workflow

### Step 1: Gather Input

Ask the user:
1. What page or topic are you researching? (e.g., "home page", "about page", "wordpress caching plugins")
2. Any specific angles or differentiators to emphasize?

### Step 2: Research via Web Search

Use WebSearch to find:

**Keyword Discovery:**
- Search: "[topic] wordpress plugins"
- Search: "best [topic] wordpress"
- Search: "[topic] wordpress plugin reviews"
- Look for: common terms, phrases people use, question formats

**Competitor Analysis:**
- Search: "[competitor] wordpress plugins" for top players
- Search: "wordpress plugin [category] comparison"
- Look for: how competitors position, gaps in messaging, overused phrases to avoid

**Search Intent:**
- Search: "how to [topic] wordpress"
- Search: "[topic] wordpress problems"
- Look for: what problems people are trying to solve, questions they ask

### Step 3: Analyze & Synthesize

From the research, identify:

1. **Primary Keyword** - The main term to target (1 only)
2. **Secondary Keywords** - Supporting terms (3-5)
3. **Long-tail Opportunities** - Specific phrases with clearer intent
4. **Questions People Ask** - FAQ and content opportunities
5. **Competitor Positioning** - How others talk about this, angles to avoid or differentiate

### Step 4: Output SEO Brief

Create a markdown file at `.claude/context/seo/[page-name].md` with this structure:

```markdown
# SEO Brief: [Page Name]

Generated: [date]

## Target Keywords

**Primary:** [keyword]
**Secondary:**
- [keyword 2]
- [keyword 3]
- [keyword 4]

**Long-tail:**
- [phrase 1]
- [phrase 2]

## Search Intent

What people are looking for when they search these terms:
- [intent 1]
- [intent 2]

## Questions People Ask

- [question 1]
- [question 2]
- [question 3]

## Competitive Landscape

**Common angles (consider differentiating):**
- [what competitors say]

**Gaps/opportunities:**
- [what's missing in the market]

## Recommendations for Copy

- [specific suggestion for this page]
- [another suggestion]
```

### Step 5: Confirm with User

Present the brief summary and ask:
- "Does this keyword focus make sense?"
- "Any terms you want to prioritize differently?"
- "Ready to proceed to copywriting?"

## Guidelines

- **Prioritize relevance over volume** - A specific term that matches intent beats a high-volume generic term
- **Consider YellowBelly's positioning** - Reliable, simple, performant. Keywords should align.
- **Note what to avoid** - Overused phrases, competitor-owned terms
- **Be realistic** - A new site won't rank for "wordpress plugins" immediately. Find winnable terms.

## Context Files

Always read before researching:
- `.claude/context/yellowbelly-brand.md` - Brand positioning to align keywords with

## Example Invocations

- "Research SEO for the home page"
- "Do keyword research for wordpress caching plugins"
- "What should we target for the about page?"
