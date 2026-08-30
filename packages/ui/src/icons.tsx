import type { SVGProps } from "react";
import p from "./figma-paths";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Every icon is decorative by default (`aria-hidden`), because in this design
 * each one sits next to a visible text label. Pass `aria-hidden={false}` plus a
 * `<title>` if an icon is ever used on its own.
 */
const base = { "aria-hidden": true, focusable: false } as const;

/** The gradient used by the circular pillar/journey icons. */
export function IconGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="aces-icon-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#007FFF" />
          <stop offset="100%" stopColor="#004C99" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const GRAD = "url(#aces-icon-gradient)";

/** Right-pointing arrow used in every button. */
export function ArrowRight({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 22 14.7279"
      fill="none"
      className={className}
    >
      <path d={p.p3285fe00} fill="currentColor" />
    </svg>
  );
}

/** Hamburger / menu toggle in the navigation bar. */
export function MenuIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 42 19"
      fill="none"
      className={className}
    >
      <path
        d={p.p18006100}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
}

export function CommunityIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path d={p.p1b6c6180} fill={GRAD} />
    </svg>
  );
}

export function HandshakeIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path d={p.pf82b200} fill={GRAD} />
    </svg>
  );
}

export function BulbIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      <path d={p.p1f030900} fill={GRAD} />
    </svg>
  );
}

export function BarriersIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 75 75"
      fill="none"
      className={className}
    >
      <path d={p.pacdd080} fill={GRAD} />
    </svg>
  );
}

export function ExperienceIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 29.9923 30"
      fill="none"
      className={className}
    >
      <path d={p.p2e62ad00} fill={GRAD} />
      <path d={p.p2416df00} fill={GRAD} />
    </svg>
  );
}

export function EcosystemIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 75 75"
      fill="none"
      className={className}
    >
      <path d={p.pded1000} fill={GRAD} />
    </svg>
  );
}

export function WhatsAppIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
    >
      <path d={p.p3825be00} fill="currentColor" />
    </svg>
  );
}

export function InstagramIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
    >
      <path d={p.pd641670} fill="currentColor" />
    </svg>
  );
}

/** Outline WhatsApp mark used in the footer (the Journey CTA uses the solid one). */
export function WhatsAppOutlineIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 29.8499 30"
      fill="none"
      className={className}
    >
      <path d={p.p3aa60700} fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
    >
      <path d={p.p189d6000} fill="currentColor" />
    </svg>
  );
}

export function MailIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 20 16"
      fill="none"
      className={className}
    >
      <path d={p.p24487700} fill="currentColor" />
    </svg>
  );
}

export function LocationIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...base}
      {...rest}
      viewBox="0 0 16.0002 20.01"
      fill="none"
      className={className}
    >
      <path d={p.p1c13b2c0} fill="currentColor" />
    </svg>
  );
}

export const pillarIcons = {
  community: CommunityIcon,
  handshake: HandshakeIcon,
  bulb: BulbIcon,
} as const;

export const journeyIcons = {
  barriers: BarriersIcon,
  experience: ExperienceIcon,
  ecosystem: EcosystemIcon,
} as const;

// Derived from the icon maps above so a new key can't be used in content
// without a matching icon existing (and vice versa).
export type PillarIcon = keyof typeof pillarIcons;
export type JourneyIcon = keyof typeof journeyIcons;
