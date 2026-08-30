import type { ReactNode } from "react";
import { cn } from "./cn";

interface SectionHeadingProps {
  /** Plain leading text, e.g. "How We Drive Tech" */
  children: ReactNode;
  /** Trailing word rendered in the brand gradient, e.g. "Excellence" */
  accent?: ReactNode;
  /** Supporting paragraph under the heading. */
  description?: ReactNode;
  /** Light type for use on the dark/blue sections. */
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}

/*
 * Figma: 80px display type, centred, with the final word filled by the
 * #007FFF -> #004C99 gradient. Description is 20px DM Sans, max ~1086px.
 */
export default function SectionHeading({
  children,
  accent,
  description,
  tone = "dark",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <h2
        id={id}
        className={cn(
          "font-display text-[clamp(2.5rem,6vw,80px)] leading-[1.3] text-balance",
          tone === "light" ? "text-white" : "text-black",
        )}
      >
        {children}
        {accent && (
          <>
            {" "}
            <span
              className={cn(
                tone === "light" ? "text-white" : "text-gradient-brand",
              )}
            >
              {accent}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "text-body mt-6 max-w-[1086px] text-pretty md:mt-[46px]",
            tone === "light" ? "text-tertiary" : "text-black",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
