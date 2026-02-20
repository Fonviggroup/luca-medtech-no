# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Luca MedTech marketing site — a Norwegian (bokmål) website for a diabetes data integration platform (DiaLuca). Multi-page Next.js app deployed on Vercel at lucamedtech.no.

## Commands

```bash
npm run dev          # Dev server with Turbopack at http://localhost:3000
npm run build        # Production build (uses --webpack flag, see note below)
npm run start        # Serve production build locally
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
```

**Build note:** Build uses `--webpack` instead of Turbopack because the working directory is a network drive (Y:) and Turbopack doesn't handle UNC paths. Vercel uses its own build environment so this only affects local builds.

## Deployment

Push to `master` → Vercel auto-deploys to lucamedtech.no. No CI pipeline or manual deploy steps.

## Architecture

**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4

**App Router** (no `src/` directory — files at project root):

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing page (Hero → Problem → Modules → TrustBar → Story → CTA) |
| `/dialuca` | `app/dialuca/page.tsx` | Product page — three DiaLuca modules |
| `/om` | `app/om/page.tsx` | About us / founder story |
| `/kontakt` | `app/kontakt/page.tsx` | Contact page (email + phone) |
| `/login` | `app/login/page.tsx` | Maintenance mode login gate |

**Maintenance mode:** All routes are behind a cookie-based login gate. `middleware.ts` checks for an `auth-token` cookie matching `MAINTENANCE_SECRET`. Unauthenticated visitors are redirected to `/login`. The login page has no Nav/Footer (controlled by `LayoutShell`).

**API routes:**
- `POST /api/auth` — Login (validates against `ADMIN_USERNAME`/`ADMIN_PASSWORD` env vars, sets cookie)
- `GET /api/auth/logout` — Clears auth cookie, redirects to `/login`
- `GET /api/health` — Kubernetes health probe endpoint

**Environment variables** (set in Vercel, no `.env` file committed):
- `ADMIN_USERNAME`, `ADMIN_PASSWORD` — Login credentials
- `MAINTENANCE_SECRET` — Cookie value for authenticated sessions

**Key layout structure:**
- `app/layout.tsx` — Root layout with fonts, metadata, JSON-LD structured data (Organization, WebSite, WebPage, Products)
- `components/LayoutShell.tsx` — Client component that conditionally renders Nav/Footer (hidden on `/login`)

**Components** (`components/` — flat, no subdirectories):

| Component | Client/Server | Role |
|-----------|--------------|------|
| LayoutShell | Client | Conditional Nav/Footer wrapper (hides on /login) |
| Nav | Client | Fixed navbar with mobile hamburger, scroll effect |
| Hero | Client | Headline, CTAs, phone mockup |
| PhoneMockup | Client | SVG glucose app screen with animations |
| ScrollReveal | Client | Reusable IntersectionObserver animation wrapper |
| Problem | Server | Flow comparison (today vs. Luca) + stats |
| Modules | Server | 3 product cards |
| TrustBar | Server | Partner logos |
| Story | Server | Founder quote |
| CTA | Server | Contact section |
| Footer | Server | Links + copyright |

**SEO infrastructure:**
- `app/robots.ts` — Programmatic robots.txt (allows major bots, blocks Bytespider/CCBot)
- `app/sitemap_index.xml/route.ts`, `app/page-sitemap.xml/route.ts`, `app/post-sitemap.xml/route.ts` — XML sitemaps
- `app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx` — Dynamic OG/favicon generation
- `public/llms.txt` — LLM-readable site information
- `next.config.ts` — Security headers (CSP, HSTS, X-Frame-Options) and `output: "standalone"`

## Conventions

- **Content language:** Norwegian bokmål. Code and variable names in English.
- **Path alias:** `@/*` maps to project root (e.g., `@/components/Nav`).
- **Tailwind source:** Explicitly set in `globals.css` (`@source "../app"` and `@source "../components"`) to avoid scanning `.claude` and `node_modules`.
- **Design tokens:** Defined as CSS custom properties in `globals.css` — colors like `--primary: #2B5F83`, `--accent: #E8734A`, `--sand: #F5E6D3`. Mapped to Tailwind via `@theme inline` block.
- **Fonts:** `--font-dm-serif` (headings) and `--font-dm-sans` (body) loaded via `next/font/google`.
- **CSS variables for radii/shadows:** Use `var(--radius-*)` and `var(--shadow-*)` in inline Tailwind classes (e.g., `rounded-[var(--radius-lg)]`, `shadow-[var(--shadow-md)]`).
