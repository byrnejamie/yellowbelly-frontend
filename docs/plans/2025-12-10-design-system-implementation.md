# Design System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement a refined, minimal design system with cool neutral palette + teal accent using shadcn/ui.

**Architecture:** shadcn/ui components built on Radix primitives, customized with our design tokens. Light-first with dark mode support. Geist Sans typography (swap from Inter).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, Radix UI

---

## Task 1: Initialize shadcn/ui

**Files:**
- Create: `components.json`
- Modify: `src/app/globals.css`
- Modify: `package.json` (via npm)

**Step 1: Run shadcn/ui init**

Run:
```bash
cd /Users/jamiebyrne/Local\ Sites/yellowbelly-frontend/.worktrees/design-system
npx shadcn@latest init
```

When prompted, select:
- Style: Default
- Base color: Slate
- CSS variables: Yes
- Tailwind config: Use existing (tailwind.config.ts or let it create)
- Components directory: src/components/ui
- Utils: src/lib/utils

**Step 2: Verify components.json created**

Run: `cat components.json`
Expected: JSON config file with paths configured

**Step 3: Commit initialization**

```bash
git add -A
git commit -m "chore: initialize shadcn/ui"
```

---

## Task 2: Configure Design Tokens

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Replace globals.css with design system tokens**

Replace entire contents of `src/app/globals.css` with:

```css
@import "tailwindcss";

@layer base {
  :root {
    /* Background & Surface */
    --background: 210 40% 98%;       /* slate-50 #f8fafc */
    --foreground: 222 47% 11%;       /* slate-900 #0f172a */
    --card: 0 0% 100%;               /* white */
    --card-foreground: 222 47% 11%;  /* slate-900 */
    --popover: 0 0% 100%;
    --popover-foreground: 222 47% 11%;

    /* Muted/Secondary */
    --muted: 210 40% 96%;            /* slate-100 */
    --muted-foreground: 215 16% 47%; /* slate-500 */

    /* Accent - Teal */
    --primary: 175 84% 32%;          /* teal-600 #0d9488 */
    --primary-foreground: 0 0% 100%; /* white */
    --secondary: 210 40% 96%;        /* slate-100 */
    --secondary-foreground: 222 47% 11%;
    --accent: 166 76% 97%;           /* teal-50 #f0fdfa */
    --accent-foreground: 175 84% 32%;

    /* Borders & Input */
    --border: 214 32% 91%;           /* slate-200 #e2e8f0 */
    --input: 214 32% 91%;
    --ring: 172 66% 50%;             /* teal-500 #14b8a6 */

    /* Semantic */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    /* Radius */
    --radius: 0.5rem;

    /* Shadows (slate-tinted) */
    --shadow-sm: 0 1px 2px rgba(15,23,42,0.04);
    --shadow-md: 0 4px 6px rgba(15,23,42,0.05);
    --shadow-lg: 0 10px 15px rgba(15,23,42,0.06);
    --shadow-xl: 0 20px 25px rgba(15,23,42,0.08);
  }

  .dark {
    --background: 222 47% 3%;        /* slate-950 #020617 */
    --foreground: 210 40% 98%;       /* slate-50 */
    --card: 222 47% 11%;             /* slate-900 */
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 11%;
    --popover-foreground: 210 40% 98%;

    --muted: 217 33% 17%;            /* slate-800 */
    --muted-foreground: 215 20% 65%; /* slate-400 */

    --primary: 172 66% 50%;          /* teal-400 #2dd4bf */
    --primary-foreground: 222 47% 11%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --accent: 217 33% 17%;
    --accent-foreground: 172 66% 50%;

    --border: 217 33% 17%;           /* slate-800 */
    --input: 217 33% 17%;
    --ring: 172 66% 50%;

    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 100%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* Typography defaults */
  h1, h2, h3, h4, h5, h6 {
    @apply font-medium tracking-tight text-foreground;
  }

  h1 {
    @apply text-4xl sm:text-5xl lg:text-6xl;
  }

  h2 {
    @apply text-3xl sm:text-4xl;
  }

  h3 {
    @apply text-xl sm:text-2xl;
  }

  p {
    @apply leading-relaxed;
  }
}

/* Custom shadow utilities */
@layer utilities {
  .shadow-card {
    box-shadow: var(--shadow-md);
  }
  .shadow-card-hover {
    box-shadow: var(--shadow-lg);
  }
  .shadow-elevated {
    box-shadow: var(--shadow-xl);
  }
}

/* Transition defaults */
@layer utilities {
  .transition-default {
    @apply transition-all duration-200 ease-out;
  }
  .transition-fast {
    @apply transition-all duration-150 ease-out;
  }
}
```

**Step 2: Verify CSS compiles**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit design tokens**

```bash
git add src/app/globals.css
git commit -m "feat: add design system tokens to globals.css"
```

---

## Task 3: Update Typography - Switch to Geist

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update layout.tsx to use Geist font**

Replace the font import and configuration in `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    default: "YellowBelly - Premium WordPress Plugins",
    template: "%s | YellowBelly",
  },
  description:
    "Premium WordPress plugins to supercharge your website. Built with care, designed for performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

**Step 2: Install geist font package**

Run: `npm install geist`

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add src/app/layout.tsx package.json package-lock.json
git commit -m "feat: switch to Geist Sans typography"
```

---

## Task 4: Install shadcn/ui Button Component

**Files:**
- Create: `src/components/ui/button.tsx` (shadcn version)
- Modify: `src/components/ui/index.ts`

**Step 1: Add shadcn button**

Run:
```bash
npx shadcn@latest add button
```

**Step 2: Customize button variants for our design system**

Replace contents of `src/components/ui/button.tsx` with:

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    // If href provided, render as Link
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

**Step 3: Update ui/index.ts exports**

Replace `src/components/ui/index.ts` with:

```ts
export { Button, buttonVariants } from "./button";
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
```

**Step 4: Remove old Button.tsx**

Run: `rm src/components/ui/Button.tsx`

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds (may need to update imports in other files)

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: replace Button with shadcn/ui version"
```

---

## Task 5: Install and Configure shadcn/ui Card

**Files:**
- Modify: `src/components/ui/Card.tsx`

**Step 1: Add shadcn card**

Run:
```bash
npx shadcn@latest add card
```

**Step 2: Customize card for our design system**

Replace `src/components/ui/card.tsx` with:

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-card text-card-foreground shadow-card transition-default hover:shadow-card-hover",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

**Step 3: Update ui/index.ts exports**

Replace `src/components/ui/index.ts` with:

```ts
export { Button, buttonVariants } from "./button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
```

**Step 4: Remove old Card.tsx**

Run: `rm src/components/ui/Card.tsx`

**Step 5: Update imports in FeaturedPlugins.tsx**

The imports should still work due to barrel export. Verify build.

Run: `npm run build`
Expected: Build succeeds

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: replace Card with shadcn/ui version"
```

---

## Task 6: Update Header Component

**Files:**
- Modify: `src/components/layout/Header.tsx`

**Step 1: Update Header with design system styles**

Replace `src/components/layout/Header.tsx` with:

```tsx
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 transition-fast hover:opacity-80"
        >
          <span className="text-xl font-medium tracking-tight text-foreground">
            YellowBelly
          </span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat: update Header with design system styles"
```

---

## Task 7: Update Navigation Component

**Files:**
- Modify: `src/components/layout/Navigation.tsx`

**Step 1: Update Navigation with design system styles**

Replace `src/components/layout/Navigation.tsx` with:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Plugins", href: "/plugins" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-fast",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/layout/Navigation.tsx
git commit -m "feat: update Navigation with active state and design tokens"
```

---

## Task 8: Update Footer Component

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update Footer with design system styles**

Replace `src/components/layout/Footer.tsx` with:

```tsx
import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Plugins", href: "/plugins" },
    { label: "Pricing", href: "/plugins" },
    { label: "Documentation", href: "/docs" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-medium tracking-tight text-white transition-fast hover:text-slate-200"
            >
              YellowBelly
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Premium WordPress plugins to supercharge your website.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Product</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-fast hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-fast hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-fast hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} YellowBelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: update Footer with dark slate design"
```

---

## Task 9: Update Hero Component

**Files:**
- Modify: `src/components/home/Hero.tsx`

**Step 1: Update Hero with design system styles**

Replace `src/components/home/Hero.tsx` with:

```tsx
import { Button } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Premium WordPress Plugins
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Supercharge your WordPress website with our carefully crafted
            plugins. Built for performance, designed for simplicity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/plugins" size="lg">
              Browse Plugins
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/home/Hero.tsx
git commit -m "feat: update Hero with refined minimal design"
```

---

## Task 10: Update FeaturedPlugins Component

**Files:**
- Modify: `src/components/home/FeaturedPlugins.tsx`

**Step 1: Update FeaturedPlugins with design system styles**

Replace `src/components/home/FeaturedPlugins.tsx` with:

```tsx
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  Button,
} from "@/components/ui";
import { WPPlugin } from "@/lib/types/wordpress";

interface FeaturedPluginsProps {
  plugins: WPPlugin[];
}

export default function FeaturedPlugins({ plugins }: FeaturedPluginsProps) {
  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            Featured Plugins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our most popular WordPress plugins
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(!plugins || plugins.length === 0) ? (
            // Placeholder cards
            [1, 2, 3].map((i) => (
              <Card key={i} className="flex flex-col overflow-hidden">
                <div className="aspect-video w-full bg-muted" />
                <CardHeader>
                  <CardTitle>Coming Soon</CardTitle>
                  <CardDescription>
                    Exciting plugins are on the way. Stay tuned!
                  </CardDescription>
                </CardHeader>
              </Card>
            ))
          ) : (
            plugins.map((plugin) => (
              <Card key={plugin.id} className="flex flex-col overflow-hidden">
                {plugin.featuredImage?.node && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={plugin.featuredImage.node.sourceUrl}
                      alt={plugin.featuredImage.node.altText || plugin.title}
                      fill
                      className="object-cover transition-default hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plugin.title}</CardTitle>
                  <CardDescription>
                    {plugin.pluginDetails?.tagline || plugin.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button
                    href={`/plugins/${plugin.slug}`}
                    variant="secondary"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        <div className="mt-12 text-center">
          <Button href="/plugins" variant="outline">
            View All Plugins
          </Button>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/home/FeaturedPlugins.tsx
git commit -m "feat: update FeaturedPlugins with design system"
```

---

## Task 11: Add Input Component

**Files:**
- Create: `src/components/ui/input.tsx`
- Modify: `src/components/ui/index.ts`

**Step 1: Add shadcn input**

Run:
```bash
npx shadcn@latest add input
```

**Step 2: Update ui/index.ts exports**

Add to `src/components/ui/index.ts`:

```ts
export { Button, buttonVariants } from "./button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
export { Input } from "./input";
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Input component from shadcn/ui"
```

---

## Task 12: Add Label Component

**Files:**
- Create: `src/components/ui/label.tsx`
- Modify: `src/components/ui/index.ts`

**Step 1: Add shadcn label**

Run:
```bash
npx shadcn@latest add label
```

**Step 2: Update ui/index.ts exports**

Add Label export to `src/components/ui/index.ts`:

```ts
export { Button, buttonVariants } from "./button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
export { Input } from "./input";
export { Label } from "./label";
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Label component from shadcn/ui"
```

---

## Task 13: Add Badge Component

**Files:**
- Create: `src/components/ui/badge.tsx`
- Modify: `src/components/ui/index.ts`

**Step 1: Add shadcn badge**

Run:
```bash
npx shadcn@latest add badge
```

**Step 2: Update ui/index.ts exports**

Add Badge export to `src/components/ui/index.ts`:

```ts
export { Button, buttonVariants } from "./button";
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
export { Input } from "./input";
export { Label } from "./label";
export { Badge, badgeVariants } from "./badge";
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Badge component from shadcn/ui"
```

---

## Task 14: Final Verification and Cleanup

**Files:**
- Review all modified files

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors

**Step 2: Run lint**

Run: `npm run lint`
Expected: No new errors (warnings acceptable)

**Step 3: Visual verification**

Run: `npm run dev`
Check: Open http://localhost:3000 and verify:
- Header is sticky with backdrop blur
- Hero section has teal accent and proper spacing
- Cards have subtle shadows and hover effects
- Footer is dark slate
- Typography is clean and consistent
- Colors match the design spec

**Step 4: Final commit if any cleanup needed**

```bash
git add -A
git commit -m "chore: design system implementation complete"
```

---

## Summary

This plan implements a refined, minimal design system with:

1. **shadcn/ui foundation** - Accessible, customizable components
2. **Teal accent on slate neutrals** - Professional, modern color palette
3. **Geist Sans typography** - Clean, contemporary font
4. **Design tokens** - CSS variables for consistency
5. **Updated components** - Button, Card, Input, Label, Badge
6. **Updated layouts** - Header, Navigation, Footer, Hero
7. **Subtle motion** - 150-200ms transitions throughout

Total tasks: 14
Estimated commits: 14
