"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/data/content";
import { MenuIcon, cn } from "@aces/ui";
import logo from "@/assets/aces-logo.png";

/*
 * Floating pill nav per Figma (1351x71, radius 50, navy at 20% + blur).
 * Production upgrades over the mock:
 *   - fixed instead of absolute, so it stays available while scrolling
 *   - once scrolled past the hero top, the fill deepens for legibility
 *   - mobile panel gets full-height links with 44px+ touch targets
 */
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 px-4 transition-[top] duration-300 sm:px-6 md:px-10 xl:px-[45px]",
        scrolled ? "top-3" : "top-[51px] max-lg:top-6",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex w-full max-w-[1351px] items-center justify-between",
          "rounded-pill px-5 py-3 backdrop-blur-xl transition-colors duration-300 sm:px-[29px] sm:py-[15px]",
          scrolled
            ? "bg-primary/85 shadow-[0_8px_30px_rgb(0_0_0/0.18)]"
            : "bg-primary/20",
        )}
      >
        <a
          href="#top"
          className="shrink-0 rounded-md"
          aria-label="ACES CUSAT — home"
        >
          <Image
            src={logo}
            alt=""
            width={150}
            height={41}
            priority
            className="h-8 w-auto object-contain sm:h-[41px]"
          />
        </a>

        <ul className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-nav rounded-md text-white transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-m-2 grid size-11 place-items-center rounded-full text-white transition-opacity hover:opacity-70 lg:hidden"
        >
          <MenuIcon className="h-4 w-[34px]" />
        </button>

        {/* Desktop keeps the decorative menu glyph from the design. */}
        <span className="hidden text-white lg:grid lg:place-items-center">
          <MenuIcon className="h-4 w-[39px]" />
        </span>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="bg-primary/95 mx-auto mt-2 max-w-[1351px] overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgb(0_0_0/0.3)] backdrop-blur-xl lg:hidden"
      >
        <ul className="flex flex-col py-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-body block px-6 py-4 font-medium text-white transition-colors active:bg-white/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
