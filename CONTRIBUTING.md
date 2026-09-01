# Contributing

## Setup

```bash
git clone https://github.com/aces-cusat/aces-cusat.git
cd aces-cusat
nvm use        # or just make sure you're on Node 20.9+
npm install
npm run dev    # starts apps/web on http://localhost:3000
```

This is an npm workspaces + Turborepo monorepo. Running any script from the
root (`dev`, `build`, `lint`, `typecheck`) fans out to every app and package
via Turborepo; you can also `cd apps/web` and run scripts directly if you
only care about the one workspace.

## Where things live

- `apps/web` — the actual site. Page composition, page-specific data, and
  images that only this app uses.
- `packages/ui` — shared, reusable components (buttons, glass effects,
  icons). If you're building something another app could plausibly reuse,
  it belongs here, not in `apps/web`.
- `packages/types` — TypeScript types shared by more than one workspace.
  Don't move a type here just because it could theoretically be shared —
  wait until a second consumer actually needs it.
- `packages/config` — shared `tsconfig` base and the ESLint flat-config
  factory.

## Before opening a PR

```bash
npm run lint
npm run typecheck
npm run build
```

All three run in CI on every PR — if they don't pass locally they won't
pass there either. Format with `npm run format` if anything looks off
(Prettier + the Tailwind class-sorting plugin).

## Commit style

Keep commits scoped to one logical change. A short imperative subject line
(`fix leaderboard avatar sizing`, `add alumni section`) is enough — we're
not enforcing Conventional Commits or anything strict here.

## Design source of truth

Comments across the codebase referencing exact pixel values, Figma frame
names, or gradient stops are transcribed straight from the `.fig` file —
they're intentional, not filler. If you're adjusting layout and a number
looks oddly specific, check the comment above it before changing it.
