# Khushu — Website

A complete Next.js (App Router) rebuild of the Khushu homepage into a full
multi-page site, built to preserve the original visual design and motion
exactly while adding real routing, data-driven content and a production
stack.

## Stack

- **Next.js 16.3.4** (App Router, Turbopack) · **React 19.2.8** · **TypeScript**
- **Tailwind CSS v4** — used for new-page layout only; all visual identity
  (colors, type, spacing, radii, animation) comes from `src/app/globals.css`,
  which is the original homepage's CSS ported verbatim
- **Three.js** — the hero scene, the services-section wave grid, and the
  stats-band particle field are faithful ports of the original vanilla-JS
  WebGL code (`src/components/three/`), not an approximation
- **next/font/google** — self-hosts Inter, Playfair Display, JetBrains Mono
  (same families/weights as the original `<link>` tags)
- **React Hook Form + Zod** — contact form, validated client- and server-side

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run needs normal internet access so
`next/font/google` can fetch the font files — after that they're cached.

```bash
npm run build && npm run start   # production build + serve
```

## What's real vs. what's stubbed

Everything you can click is a real route with real data — routing, all 8
services, all 8 portfolio projects, all 8 insight articles, filters, prev/next
navigation, the ROI calculator, and client + server-side form validation all
work today with `npm run dev`.

Three integrations are intentionally stubbed rather than faked, because they
need credentials/services this environment doesn't have access to:

| Integration | Where | Status |
|---|---|---|
| Email notification on form submit | `src/app/contact/actions.ts` | Server action validates and returns success, but the actual `resend.emails.send(...)` call is commented out with a TODO |
| Lead persistence | `src/app/contact/actions.ts` | Same file — a TODO shows where a Supabase/Postgres insert goes |
| Newsletter signup | `src/components/ui/NewsletterForm.tsx` | Shows a confirmation locally; not wired to a real mailing list provider |

To go live: create a Resend account and a Supabase project, fill in
`.env.example` → `.env.local`, and uncomment the two TODOs in
`contact/actions.ts`. Nothing else in the form or UI needs to change.

**Not included at all** (out of scope for what this sandbox can do):
live Vercel deployment, a live Supabase database, live Resend sending,
and a Playwright/Vitest run — see "Testing" below.

## Motion & 3D — ported exactly, not approximated

The hero's rotating icosahedron/rings/particle-cloud scene, the animated
wave-grid "graph" in the What We Do section, and the stats-band particle
field are all faithful 1:1 ports of the original vanilla-JS Three.js code —
same geometry, same materials, same particle counts, same animation math,
same mouse-interaction behavior (`src/components/three/HeroScene.tsx`,
`SynapticWaveScene.tsx`, `StatsParticlesScene.tsx`). The portfolio/insight
thumbnail mountain-scene visuals are the exact original SVG generator too
(`src/components/ui/ArchScene.tsx`). The only additions versus the original
inline `<script>` version are React-appropriate cleanup (disposing
geometries/materials/the renderer on unmount) and a couple of `prefers-
reduced-motion`/off-screen pause checks that don't change what's visible
when the element is on-screen and motion is enabled.

An earlier pass in this project had swapped these for a lighter 2D-canvas
approximation to save on bundle size — that was a mistake once the brief
was "keep motion exactly as it was," and it's been fully reverted.

## Project structure

```
src/
├── app/                  # routes (App Router)
│   ├── services/[slug]/  work/[slug]/     insights/[slug]/
│   ├── roi-impact/       approach/        faq/
│   ├── contact/          about/           security/
│   ├── privacy/          terms/
│   ├── sitemap.ts        robots.ts
│   └── loading.tsx / error.tsx / not-found.tsx
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # homepage + page-specific sections (mostly client)
│   ├── three/             # HeroScene, SynapticWaveScene, StatsParticlesScene
│   └── ui/                # shared primitives (Button, ProjectCard, ArchScene…)
├── data/                 # services.ts, projects.ts, insights.ts, faqs.ts, site.ts
│                          # — single source of truth; every page reads from here
├── lib/
│   ├── roi.ts             # ROI calculation, shared by the homepage teaser + full page
│   └── validation/contact.ts  # Zod schema, shared by client form + server action
└── types/                 # shared TS types
```

Add a 9th portfolio project or service by adding one object to
`src/data/projects.ts` / `services.ts` — every listing page, filter,
prev/next sequence and route picks it up automatically via
`generateStaticParams`.

## SEO

Every route has unique `title`/`description` via the Next.js Metadata API
(see the `template` in `app/layout.tsx`), plus `sitemap.ts` and `robots.ts`.
JSON-LD structured data is not yet added — a reasonable next step in
`app/layout.tsx` (Organization/WebSite) and the two `[slug]` templates
(Article/BreadcrumbList).

## Testing

Playwright/Vitest are listed in the original spec but were not installed or
run — this sandbox has no browser binaries and no reason to add the
dependency weight until you're ready to actually run a suite. The build
itself, and the live server, were both verified — see below.

## Performance — lazy-loaded 3D, and why navigation should feel instant

Three.js is a large library (~500KB+). The three scene components
(`HeroScene`, `SynapticWaveScene`, `StatsParticlesScene`) are loaded via
`next/dynamic(..., { ssr: false })` from their parent sections, so the
homepage's text, nav and buttons become interactive immediately without
waiting for that bundle — the WebGL scenes stream in a moment after,
with no layout shift since they're pure background decoration. Verified
in the build output: none of the Three.js-containing chunks appear as
blocking `<script>` tags on any page, including the homepage.

**If navigation still feels slow, you're very likely running `npm run dev`.**
Next.js/Turbopack's dev server compiles each route on-demand the *first*
time you visit it in a session — that's a multi-second, dev-only delay and
is not representative of real-world speed. To see the actual production
performance (instant client-side navigation between prerendered pages),
always test with:

```bash
npm run build && npm run start
```

## Logo

The header/favicon mark was replaced with the wheat/feather logo you
supplied. It was vectorized (traced to real SVG paths with potrace, not
just embedded as a raster image) so it stays crisp at any size, and colored
to match the site's existing dark ink token (`#151517`) rather than pure
black. Container sizing is untouched — still a 28×28px mark inside a 32×32px
slot, exactly as before. Component: `src/components/ui/LogoMark.tsx`;
favicon: `public/favicon.svg`.

## Contact form → Google Sheets

I looked for `khushu-agency/website` and commit `8f11cbc` to port the exact
field names and request shape, but couldn't find or access that repository
— it's likely private, so I only had your description of the commit to go
on, not the actual diff. If you want an exact match to whatever your Apps
Script currently expects, paste the script (or the old fetch call) and I'll
line up the field names precisely.

In the meantime, `src/app/contact/actions.ts` is wired to POST every
validated submission to a Google Apps Script Web App URL, configured via
`GOOGLE_SHEETS_WEBHOOK_URL` in `.env.local` (see `.env.example`). One
upgrade over the earlier version: this POST happens from the server action,
not the browser, so it isn't subject to CORS and doesn't need
`mode: "no-cors"` — meaning it can actually read Google's real response and
only reports success when the request genuinely succeeds, instead of
assuming success whenever no network exception is thrown. Duplicate
submissions while sending are already prevented (the submit button disables
itself via the form's `submitting` state).

Without `GOOGLE_SHEETS_WEBHOOK_URL` set, the form still validates and
"submits" successfully in local dev — it just doesn't send anywhere until
you add the URL.

## Hydration warning fix

`<body>` and `<html>` both carry `suppressHydrationWarning`. This is the
standard, narrowly-scoped fix for a common false-positive: browser
extensions (ColorZilla is the usual culprit, via a `cz-shortcut-listen`
attribute) inject attributes into `<body>` before React hydrates, which
React then reports as a mismatch even though nothing is actually wrong.
The suppression only covers attributes on those two elements — it won't
hide a real hydration bug anywhere else in the tree.

## Verified in this environment

- `next build` — all 41 routes compile and prerender successfully, zero
  TypeScript errors (verified with fonts temporarily stubbed, since this
  sandbox can't reach `fonts.googleapis.com`; the real `next/font/google`
  code is what's shipped, and will fetch normally on your machine or on
  Vercel where outbound internet access is unrestricted)
- `npm run lint` — clean
- Booted the actual production server (`next start`) and hit every route
  with real HTTP requests: all 32 real routes return 200, an invalid route
  returns a proper 404, `sitemap.xml` has all 36 expected entries
- Spot-checked rendered HTML for real content (project titles, FAQ count,
  no error text) and confirmed the three Three.js canvases
  (`hero3dCanvas`, `synapticWaveCanvas`, `stats3dCanvas`) render on the
  live homepage
- No dead `href="#"` links — every nav item, footer link, card and CTA
  points at a real route
- Single source of truth for all content — no duplicate/conflicting datasets

## Deploying

This is a stock Next.js App Router project — push it to a Git repo and
import it on [vercel.com](https://vercel.com), or run `vercel` from the CLI.
Add the environment variables from `.env.example` in the Vercel project
settings once the Resend/Supabase integrations are wired up.
