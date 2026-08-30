import { IconGradientDefs } from "@aces/ui";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Excellence from "@/components/sections/Excellence";
import Events from "@/components/sections/Events";
import Leaderboard from "@/components/sections/Leaderboard";
import Blog from "@/components/sections/Blog";
import Alumni from "@/components/sections/Alumni";
import Journey from "@/components/sections/Journey";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      {/* Shared <defs> for the gradient-filled icons. */}
      <IconGradientDefs />

      <a
        href="#main"
        className="focus:bg-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <Hero />

      <main id="main">
        <About />
        <Excellence />
        <Events />
        <Leaderboard />
        <Blog />
        <Alumni />
        <Journey />
      </main>

      <Footer />
    </>
  );
}
