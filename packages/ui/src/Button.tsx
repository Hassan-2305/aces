import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "./cn";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "md" | "sm";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  /** Render the trailing arrow. On by default; matches the Figma button spec. */
  withArrow?: boolean;
  /** Optional leading element, e.g. the WhatsApp mark. */
  icon?: ReactNode;
  children: ReactNode;
}

/*
 * Figma button geometry:
 *   md -> h 64px, px 16, py 19, radius 30 (hero) / 50 (section CTAs)
 *   sm -> h 38px, px 7,  py 9,  radius 30   (event card "Register")
 * Variants map to the four fills in the style-guide "Buttons" frame.
 */
const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-inset-light hover:bg-[#00305f]",
  secondary: "bg-secondary text-white shadow-inset-light hover:bg-[#0b6fd6]",
  ghost:
    "bg-white/10 text-black shadow-glass backdrop-blur-sm hover:bg-white/20",
  outline: "bg-white text-black shadow-glass hover:bg-tertiary",
};

const sizes: Record<Size, string> = {
  md: "h-16 px-4 text-body gap-[11px] rounded-pill",
  sm: "h-[38px] px-[7px] text-meta gap-[5px] rounded-card",
};

export default function Button({
  variant = "primary",
  size = "md",
  withArrow = true,
  icon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      {...rest}
      className={cn(
        "inline-flex items-center justify-center font-sans whitespace-nowrap",
        "transition-colors duration-200 ease-out",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className={cn(
            "shrink-0 transition-transform duration-200 ease-out",
            "motion-safe:group-hover:translate-x-0.5",
            size === "sm" ? "w-[10px]" : "w-5",
          )}
        />
      )}
    </a>
  );
}
