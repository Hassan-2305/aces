# ACES CUSAT

Monorepo for the ACES CUSAT website — the Association of Computer Engineering
Students at CUSAT.

## Structure

```
apps/
  web/            the Next.js site (see apps/web/README.md)
packages/
  ui/             shared components: buttons, glass/blur effects, icons
  types/          TypeScript types shared across workspaces
  config/         shared tsconfig base + ESLint config factory
```

npm workspaces links the packages together; Turborepo orchestrates running
scripts across all of them.

## Getting started

```bash
npm install
npm run dev      # apps/web on http://localhost:3000
```

| Script            | What it does                                  |
| ------------------ | ---------------------------------------------- |
| `npm run dev`       | Starts the web app in dev mode                |
| `npm run build`     | Production build of every app                 |
| `npm run lint`      | ESLint across all workspaces                  |
| `npm run typecheck` | `tsc --noEmit` across all workspaces           |
| `npm run format`    | Prettier, writes                              |

Each of these is a thin wrapper around `turbo run <script>`, so Turborepo
only re-runs work for packages that actually changed.

## Adding a new app

Drop a new directory under `apps/`, give it a `package.json` with a
`@aces/<name>` name, and it's automatically picked up by the workspace glob
in the root `package.json`. Reach for `packages/ui` and `packages/types`
before duplicating something that already exists there.

## License

Code is MIT licensed — see [LICENSE](./LICENSE). Photography, the ACES logo,
and other brand assets under `apps/web/assets/` are not covered by that
license and remain the property of ACES CUSAT.
