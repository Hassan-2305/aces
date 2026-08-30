# ACES CUSAT — Website

Pixel-accurate implementation of the ACES CUSAT landing page, built from the
Figma source file. Part of the [ACES CUSAT monorepo](../../README.md) — see
the root README for workspace-wide commands.

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — no `tailwind.config.js`;
  the theme lives in `@theme` inside `app/globals.css`
- **next/font** — DM Sans (Google) + Stack Sans Notch (self-hosted, OFL 1.1)
- `@aces/ui` and `@aces/types` — shared workspace packages (see
  `../../packages`)

## Getting started

From the repo root:

```bash
npm install
npm run dev      # http://localhost:3000
```

Or scoped to just this app:

```bash
cd apps/web
npm run dev
npm run build
npm run typecheck
```

## Structure

```
app/
  layout.tsx        fonts, metadata, <html> shell
  page.tsx           section composition
  globals.css        design tokens (@theme) + custom utilities
  fonts/              Stack Sans Notch variable woff2 + OFL notice
components/
  sections/          NavBar, Hero, About, Excellence, Events,
                      Leaderboard, Blog, Alumni, Journey, Footer
data/content.ts       all page copy + image bindings, typed
assets/                images (statically imported, optimised by next/image)
```

Shared UI primitives (`Button`, `Container`, `SectionHeading`, the glass/blur
effects, icons) live one level up in `packages/ui`, not in this app —
import them from `@aces/ui`.

## Design tokens

Extracted from the Figma "Colours" and type style-guide frames:

| Token | Value |
|---|---|
| `--color-primary` | `#002147` |
| `--color-secondary` | `#007FFF` |
| `--color-tertiary` | `#F5F7FA` |
| `--color-neutral` | `#1A1A1A` |
| brand gradient | `#9BCDFF → #007FFF → #004C99` |

Two things worth knowing about the source design:

1. The Primary swatch was **labelled** `#002417` in an earlier version of the
   style guide, but every actual fill is `#002147`. The label was a typo.
2. Figma reports line-height as `100%`, which means 100% of the font's natural
   leading — not of the font size. Measured node heights give a **1.3** ratio
   (80→104, 30→39, 20→26), which is what the type ramp encodes. The hero is the
   exception: its three lines sit 145px apart at 150px type, so it uses `0.967`.

## Tailwind v4 notes

**If styles ever vanish (page renders unstyled), run `rm -rf .next` and
rebuild.** Warm builds occasionally reuse a stale CSS chunk containing only the
preflight (~2 KB instead of ~30 KB). A cold build always regenerates correctly.

## Tailwind v4 source scanning

`app/globals.css` declares explicit `@source` directives for `components/`,
`data/`, and the shared `packages/ui/src` workspace package. Without them
Tailwind only scans `app/` and silently tree-shakes every utility used
elsewhere, producing a ~2 KB stylesheet instead of ~28 KB. Keep those
directives if you add new top-level folders or a new workspace package with
Tailwind classes.

## Assets

Images were extracted from the `.fig` archive at source resolution (the photos
in the original code export were low-res stock placeholders, not the real
CUSAT photography).

Alumni portraits in `assets/alumni-*.jpg` are **placeholders** reusing the
leaderboard headshots. Swap those three files to go live.
