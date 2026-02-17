# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Luca MedTech landing page — a Norwegian (bokmål) marketing site for a diabetes data integration platform. Single-page Next.js app deployed on Vercel at lucamedtech.no.

## Commands

```bash
npm run dev          # Dev server with Turbopack at http://localhost:3000
npm run build        # Production build (uses --webpack flag, see note below)
npm run start        # Serve production build locally
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
```

## Build Note

Build uses `--webpack` instead of Turbopack because the working directory is a network drive (Y:) and Turbopack doesn't handle UNC paths. Vercel uses its own build environment so this only affects local builds.

## Deployment

Push to `master` → Vercel auto-deploys to lucamedtech.no. No CI pipeline or manual deploy steps.

## Architecture

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4

**App Router** (no `src/` directory — files at project root):
- `app/layout.tsx` — Root layout with Google fonts (DM Serif Display, DM Sans), metadata, `lang="nb"`
- `app/page.tsx` — Assembles all section components in order
- `app/globals.css` — Design system (CSS custom properties for colors, shadows, radii), Tailwind v4 theme config, keyframe animations

**Components** (`components/` — flat, no subdirectories):

| Component | Client/Server | Role |
|-----------|--------------|------|
| Nav | Client | Fixed navbar with mobile hamburger, scroll effect |
| Hero | Client | Headline, CTAs, phone mockup |
| PhoneMockup | Client | SVG glucose app screen with animations |
| ScrollReveal | Client | Reusable IntersectionObserver animation wrapper |
| Problem | Server | Flow comparison (today vs. Luca) + stats |
| Modules | Server | 3 product cards |
| TrustBar | Server | Partner logos |
| Story | Server | Founder quote |
| CTA | Server | Contact section (mailto:) |
| Footer | Server | Links + copyright |

No API routes, no backend, no database, no middleware.

## Conventions

- **Content language:** Norwegian bokmål. Code and variable names in English.
- **Path alias:** `@/*` maps to project root (e.g., `@/components/Nav`)
- **Tailwind source:** Explicitly set in `globals.css` to avoid scanning the `.claude` directory.
- **Design tokens:** Defined as CSS custom properties in `globals.css` (colors like `--primary: #2B5F83`, `--accent: #E8734A`, `--sand: #F5E6D3`).
- **Fonts:** `--font-dm-serif` (headings) and `--font-dm-sans` (body) loaded via `next/font/google`.
