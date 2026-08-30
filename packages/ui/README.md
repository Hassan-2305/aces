# @aces/ui

Shared design-system components used across ACES CUSAT apps: `Button`,
`Container`, `SectionHeading`, `IconBadge`, `Reveal` (scroll-in animation),
the glass/blur decorative effects (`GlassBlinds`, `GlassScatter`,
`GlassSheen`), `NoiseOverlay`, and the icon set.

Ships as raw TypeScript source with no build step — consuming Next.js apps
compile it directly via `transpilePackages`. See `apps/web/next.config.ts`
and the `@source` line in `apps/web/app/globals.css` for the two places a
new app needs to wire this package up.

```tsx
import { Button, Container, SectionHeading } from "@aces/ui";
```

`figma-paths.ts` holds raw vector path data exported from Figma — don't
hand-edit it; `icons.tsx` wraps those paths into named components.
