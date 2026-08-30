import type { ComponentType, SVGProps } from "react";
import { cn } from "./cn";

interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** 80px on the About pillars, 75px on the Journey cards. */
  size?: 80 | 75;
  /** "glass" = drop shadow (About); "ring" = inset blue glow (Journey). */
  tone?: "glass" | "ring";
  className?: string;
}

/*
 * Figma "Icon frame": white circle, radius 50, containing a gradient vector.
 * Two shadow treatments exist in the design; both are represented here.
 */
export default function IconBadge({
  icon: Icon,
  size = 80,
  tone = "glass",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "inline-grid shrink-0 place-items-center rounded-full bg-white",
        size === 80 ? "size-20" : "size-[75px]",
        tone === "glass" ? "shadow-glass" : "shadow-inset-ring",
        className,
      )}
    >
      <Icon className={size === 80 ? "size-[50px]" : "size-[30px]"} />
    </span>
  );
}
