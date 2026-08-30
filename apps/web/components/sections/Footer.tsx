import Image from "next/image";
import { contact, footerLinks } from "@/data/content";
import {
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  WhatsAppOutlineIcon,
} from "@aces/ui";
import logo from "@/assets/aces-logo.png";

/*
 * Figma "footer": 1440x568, #007FFF -> #002147 gradient.
 *   Wordmark "CODE CONNECT CREATE" is 125px display type in the brand
 *   gradient, sitting behind the copyright line at the base of the frame.
 */
const socials = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com" }, // TODO: exact company URL,
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/aces.cusat",
  },
  {
    label: "WhatsApp",
    Icon: WhatsAppOutlineIcon,
    href: "https://whatsapp.com",
  },
];

const FOOTER_HREFS: Record<string, string> = {
  About: "#about",
  Events: "#events",
  Achievements: "#achievements",
  Leaderboard: "#leaderboard",
  Placements: "#alumni",
  "Study Materials": "#blog",
  Newsletter: "#contact",
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-footer relative overflow-hidden pt-[44px]"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[45px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:gap-[40px]">
          {/* Brand */}
          <div className="max-w-[560px] sm:col-span-2 lg:col-span-1">
            <div className="flex items-end gap-2">
              <Image
                src={logo}
                alt="ACES CUSAT"
                width={199}
                height={41}
                className="h-[41px] w-[199px] object-contain"
              />
              <span className="pb-1 text-[9px] text-white">CUSAT</span>
            </div>

            <p className="text-meta text-tertiary mt-[24px] text-pretty">
              Association of Computer Engineering Students is a student led
              collective dedicated to advancing technical excellence,
              open-source contributions, and architectural innovation.
            </p>

            <ul className="mt-[30px] flex items-center gap-[30px]">
              {socials.map(({ label, Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ACES CUSAT on ${label}`}
                    className="text-tertiary -m-2 block rounded-full p-2 transition-opacity hover:opacity-70"
                  >
                    <Icon className="size-[30px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-body text-tertiary">
              Quick links
            </h2>
            <ul className="mt-[20px] space-y-[15px]">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a
                    href={FOOTER_HREFS[link] ?? "#top"}
                    className="text-meta text-tertiary transition-opacity hover:opacity-70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-body text-tertiary">Contact us</h2>
            <ul className="mt-[20px] space-y-[15px]">
              <li className="flex items-center gap-[8px]">
                <MailIcon className="text-primary size-[20px] shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-meta text-tertiary transition-opacity hover:opacity-70"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-[8px]">
                <LocationIcon className="text-primary h-[20px] w-[16px] shrink-0" />
                <span className="text-meta text-tertiary">
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark + copyright */}
      <div className="relative mt-[66px]">
        <p
          aria-hidden
          className="font-display text-gradient-brand px-[6px] text-center text-[8.68vw] leading-[1.3] whitespace-nowrap"
        >
          CODE CONNECT CREATE
        </p>
        <p className="text-body text-tertiary pb-[28px] text-center">
          &copy; 2026 ACES CUSAT
        </p>
      </div>
    </footer>
  );
}
