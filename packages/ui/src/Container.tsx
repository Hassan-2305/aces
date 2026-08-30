import type { ReactNode } from "react";
import { cn } from "./cn";

/*
 * The Figma frame is 1440px wide with 45px gutters, giving a 1351px content
 * column. That maps to max-w-[1351px] with responsive padding below 1440px.
 */
export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1351px] px-6 md:px-10 xl:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
