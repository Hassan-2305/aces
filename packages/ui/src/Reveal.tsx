"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "./cn";

/*
 * Fade-and-rise on first scroll into view. Pure CSS transition driven by a
 * data attribute; IntersectionObserver only flips the flag once. Under
 * prefers-reduced-motion the .reveal class renders fully visible (globals.css),
 * so nothing ever hides content from those users.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** Milliseconds; used to stagger siblings. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = "true";
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
