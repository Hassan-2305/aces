/**
 * Generic content shapes shared across ACES CUSAT apps. Page-specific data
 * (events, blog posts, leaderboard entries, ...) lives with the app that
 * owns it — only put a type here once a second consumer actually needs it.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  caption: string;
}

export interface ContactInfo {
  email: string;
  address: string;
}
