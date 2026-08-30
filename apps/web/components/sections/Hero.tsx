import NavBar from "./NavBar";
import { GlassBlinds, Button, Container } from "@aces/ui";

/*
 * Figma "Landing": 1440x1024.
 *   Gradient        #002147 -> #007FFF (25%) -> transparent white
 *   Fractal Glass   12 blurred columns at 20% white, overlay blend
 *   Headline        150px Stack Sans Notch ExtraLight at x=45, y=230/375/520
 *   Body            20px DM Sans, 795px wide, y=715
 *   Buttons         y=832, 216x64
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-hero relative isolate min-h-[calc(100svh)] overflow-hidden lg:min-h-[1024px]"
    >
      <GlassBlinds />

      <NavBar />

      <Container className="relative flex min-h-[calc(100svh)] flex-col justify-center pt-[140px] pb-16 lg:min-h-[1024px] lg:pt-[180px] lg:pb-20">
        {/* Figma stacks the three lines 145px apart at 150px type -> 0.967 leading,
            tighter than the 1.3 ratio used for body copy. */}
        <h1 className="font-display text-[clamp(3.5rem,10.4vw,150px)] leading-[0.967] font-extralight text-white">
          <span className="animate-fade-up block [animation-delay:60ms]">
            Code.
          </span>
          <span className="animate-fade-up block [animation-delay:180ms]">
            Connect.
          </span>
          <span className="animate-fade-up text-secondary block [animation-delay:300ms]">
            Create.
          </span>
        </h1>

        {/* Caption sits in a frosted panel so it belongs to the glass scene
            instead of floating as raw black text over the gradient. */}
        <div className="animate-fade-up mt-[35px] max-w-[680px] [animation-delay:420ms]">
          <div className="glass-panel rounded-[24px] p-5 sm:p-6">
            <p className="text-body text-primary text-pretty">
              Association of Computer Engineering Students is a student-led
              collective dedicated to advancing technical excellence,
              open-source contributions, and architectural innovation.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                href="#events"
                variant="primary"
                className="group w-full sm:w-[216px]"
              >
                Explore Events
              </Button>
              <Button
                href="#achievements"
                variant="outline"
                className="group w-full sm:w-[216px]"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
