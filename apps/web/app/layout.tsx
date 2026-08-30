import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

/*
 * Stack Sans Notch is not on Google Fonts — it ships from the open-source
 * Stack Sans project (SIL Open Font License 1.1) and is self-hosted here as a
 * single variable woff2 covering the 200-700 weight axis. See app/fonts/OFL.txt.
 */
const stackSansNotch = localFont({
  src: "./fonts/StackSansNotch-Variable.woff2",
  weight: "200 700",
  style: "normal",
  variable: "--font-stack-sans-notch",
  display: "swap",
  fallback: ["DM Sans", "system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#002147",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aces-cusat.example.com"), // set real domain before launch
  title: "ACES CUSAT — Code. Connect. Create.",
  description:
    "The Association of Computer Engineering Students is a student-led collective at CUSAT dedicated to advancing technical excellence, open-source contributions, and architectural innovation.",
  openGraph: {
    title: "ACES CUSAT — Code. Connect. Create.",
    description:
      "A student-led technical community bridging academic learning and industry execution.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${stackSansNotch.variable}`}>
      <body>{children}</body>
    </html>
  );
}
