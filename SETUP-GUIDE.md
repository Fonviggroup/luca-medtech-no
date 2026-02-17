# Luca MedTech — Setup Guide

## What's Done

- [x] Next.js 16 + TypeScript + Tailwind v4 project built
- [x] All landing page sections (Nav, Hero, Problem, Modules, TrustBar, Story, CTA, Footer)
- [x] GitHub repo: https://github.com/Fonviggroup/luca-medtech-no
- [x] Build passes (`npm run build`)
- [x] Signed up for Vercel with GitHub login

---

## Next Steps (in order)

### Step 1: Import repo to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Select **`luca-medtech-no`** from your GitHub repos
4. Leave all defaults — Vercel auto-detects Next.js
5. Click **"Deploy"**
6. Wait ~1 min — you'll get a preview URL like `luca-medtech-no.vercel.app`

### Step 2: Add your domain in Vercel

1. In Vercel, go to **Project Settings > Domains**
2. Add `lucamedtech.no`
3. Add `www.lucamedtech.no`
4. Vercel will show you the DNS records to set

### Step 3: Update DNS at Simply.com

Log in to Simply.com DNS administration for `lucamedtech.no`.

**CHANGE these records:**

| Action | Type | Hostname | New Value |
|--------|------|----------|-----------|
| **Edit** | A | `lucamedtech.no` | `76.76.21.21` |
| **Delete** | A | `*.lucamedtech.no` | *(remove entirely)* |
| **Delete** | A | `www.lucamedtech.no` | *(remove entirely)* |
| **Add** | CNAME | `www.lucamedtech.no` | `cname.vercel-dns.com` |

**DO NOT TOUCH these records (email + security):**

| Type | Hostname | Keep as-is |
|------|----------|------------|
| MX | `lucamedtech.no` | `mx.simply.com` |
| TXT | `lucamedtech.no` | `v=spf1 include:spf.simply.com -all` |
| CNAME | `_dmarc` | `dmarc.simply.com` |
| CNAME | `simplycom1._domainkey` | `dkim1.simply.com` |
| CNAME | `simplycom2._domainkey` | `dkim2.simply.com` |
| SRV | `_autodiscover._tcp` | `maildiscover.simply.com` |
| SRV | `_caldavs._tcp` | `dav.simply.com` |
| SRV | `_carddavs._tcp` | `dav.simply.com` |
| CNAME | `autoconfig` | `maildiscover.simply.com` |

### Step 4: Wait for DNS propagation

- Usually takes 5-30 minutes, can take up to 48 hours
- Check status at https://dnschecker.org/#A/lucamedtech.no
- Vercel will auto-provision SSL certificate once DNS points to them

---

## Local Development

```bash
# Start dev server (hot reload at http://localhost:3000)
cd Y:\lucamedtech.no
npm run dev

# Build for production
npm run build
```

## Deploy Workflow

```
Edit code locally → npm run dev to preview → git add & commit & push → Vercel auto-deploys
```

Every push to `master` branch = automatic deploy to lucamedtech.no.

---

## Project Structure

```
app/
  layout.tsx        ← fonts, metadata, lang="nb"
  page.tsx          ← assembles all sections
  globals.css       ← design system, animations
components/
  Nav.tsx           ← fixed nav with mobile hamburger
  Hero.tsx          ← headline + CTAs
  PhoneMockup.tsx   ← SVG glucose app screen
  Problem.tsx       ← flow comparison + stats
  Modules.tsx       ← 3 product cards
  TrustBar.tsx      ← DIPS, Helsenorge, FHIR etc.
  Story.tsx         ← founder quote
  CTA.tsx           ← contact section
  Footer.tsx        ← links + copyright
  ScrollReveal.tsx  ← reusable scroll animation
```

## Important Notes

- Build uses `--webpack` flag (in package.json) because Y: is a network drive and Turbopack doesn't handle UNC paths. Vercel uses its own build environment so this doesn't affect deployment.
- Tailwind source is explicitly set in globals.css to avoid scanning the .claude directory.
- All content is in Norwegian (bokmål). Code/variables in English.
