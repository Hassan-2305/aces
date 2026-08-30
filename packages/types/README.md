# @aces/types

TypeScript types shared by more than one workspace — right now that's
`NavLink`, `Stat`, and `ContactInfo`.

Page-specific data shapes (events, blog posts, leaderboard entries) stay
next to the data they describe in `apps/web/data/content.ts`. Only promote a
type here once a second app or package actually needs it — don't
pre-emptively move things "just in case."
