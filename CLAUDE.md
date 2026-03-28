# CLAUDE.md — Portfolio Héctor Muñoz Palacios

## Project overview

Personal portfolio website for Héctor Muñoz Palacios, a Java Backend Developer.
Single-page landing with bilingual content (ES/EN) and a project detail page.
Deployed on Vercel.

## Tech stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`)
- Framer Motion (animations)
- react-icons (technology logos)
- No CMS, no database — content hardcoded in `src/lib/constants.ts`

## Project structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, LanguageProvider)
│   ├── page.tsx            # Landing page (composes sections)
│   └── globals.css         # Design system tokens + Tailwind config
├── components/
│   ├── sections/           # Full-width page sections (Hero, About, etc.)
│   └── ui/                 # Reusable UI components (Button, SectionHeading, etc.)
├── context/
│   └── LanguageContext.tsx  # i18n React Context (ES/EN toggle)
└── lib/
    └── constants.ts        # Single source of truth for all bilingual copy
```

## Design system

### Color tokens (CSS variables in globals.css)

```
--background:     #0A0A0F     (near-black, blue-tinted)
--surface:        #12121A     (elevated surfaces, cards)
--border:         #1E1E2E     (subtle borders)
--text-primary:   #E8E8ED     (main text, not pure white)
--text-secondary: #8888A0     (secondary text)
--accent:         #5558E3     (indigo, primary accent)
--accent-hover:   #6366F1     (hover state)
--accent-glow:    rgba(85, 88, 227, 0.18)  (glows, backgrounds)
```

### Typography

- **Headings:** Space Grotesk (loaded via `next/font/google`, exposed as `--font-heading`)
- **Body:** Inter (loaded via `next/font/google`, exposed as `--font-body`)
- Tailwind mapping: `font-heading`, `font-body` via `@theme inline`

### Gradient utility

`.text-gradient` — applies accent → accent-hover gradient on text (defined in globals.css)

## Architecture conventions

- **Server Components by default.** Only add `"use client"` when needed (hooks, Framer Motion).
- **No barrel files.** Import directly by path: `@/components/sections/Hero`, not `@/components/sections`.
- **Single source of truth for copy.** All text lives in `src/lib/constants.ts` with `es`/`en` keys. Never hardcode text in JSX.
- **i18n via React Context.** Use `useLanguage()` hook from `@/context/LanguageContext` to get `locale`. Access copy as `SECTION[locale].field`.
- **SectionHeading reusable component.** Every section uses `<SectionHeading label={...} title={...} />` for visual consistency. The `title` renders as `<h2>`.
- **Named exports** for all section components. Exception: `Button.tsx` uses default export (legacy from Phase 1).

## Coding standards

- **Comments in English.** Brief and useful, not decorative.
- **No `useEffect`** except in `LanguageContext.tsx` (for updating `<html lang="">`).
- **No additional dependencies** unless explicitly instructed in the briefing.
- **No `<img>` tags.** Use `next/image` if images are needed.

## Framer Motion patterns

All animated sections follow this pattern:

```tsx
const reduced = useReducedMotion();

const container: import("framer-motion").Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
};

const item: import("framer-motion").Variants = {
  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};
```

- Always use `whileInView` with `viewport={{ once: true }}` for section animations.
- Always respect `prefers-reduced-motion` via `useReducedMotion()`.
- The `as [number, number, number, number]` cast is needed to satisfy Framer Motion's Transition type.

## Frontend design principles

- **Dark, developer vibe.** Atmospheric, technical, memorable. Not generic.
- **Bold but intentional.** Saturated indigo accent with deep near-black background creates depth.
- **Motion with purpose.** Staggered reveals on scroll. No gratuitous animation. High-impact page load.
- **Spatial composition.** Generous padding (`py-20 md:py-28 lg:py-32`), breathing room between sections.
- **No generic AI aesthetics.** No stock photos, no progress bars for skills, no cookie-cutter layouts.
- **Code and architecture are the visual argument.** The decorative code block in Hero uses a real Java snippet from Infratrack.

## Accessibility

- WCAG AA contrast on all visible text
- `<html lang="">` updates dynamically with locale
- Heading hierarchy: single `<h1>` in Hero, `<h2>` for each section title
- Semantic HTML: `<section>`, `<nav>`, `<main>`
- `aria-hidden` on decorative elements
- `prefers-reduced-motion` respected in all animations

## Responsive

- Mobile-first with breakpoints `md:` (768px) and `lg:` (1024px)
- Desktop is the primary experience for recruiter impact
- All layouts stack vertically on mobile

## Content reference

All copy is defined in `src/lib/constants.ts`. The authoritative content document is the CONTENT_SPEC.md in the Opus Project chat. When implementing from a briefing, copy text exactly as specified — do not rephrase or improve.

## Phase briefings

Each phase has a `FASE-{N}-BRIEFING.md` that Héctor provides as a prompt. Follow it exactly. If something is ambiguous, ask before deciding.
