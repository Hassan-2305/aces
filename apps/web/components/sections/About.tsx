import { pillars, stats, techStacks } from "@/data/content";
import {
  pillarIcons,
  Container,
  IconBadge,
  GlassSheen,
  NoiseOverlay,
  SectionHeading,
  Reveal,
} from "@aces/ui";

/*
 * Figma "Frame 35": #F5F7FA panel, 1440x1137.
 *   Tech pills   216x64, radius 30, white -> #007FFF gradient, 20px gaps
 *   Heading      "About ACES" 80px, centred at y=192
 *   Stats        80px gradient numeral + 20px label + 15px caption
 *   Pillars      416x303 gradient cards, radius 30, 52px gaps
 */
export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-tertiary relative scroll-mt-24 overflow-hidden py-16 md:py-[100px]"
    >
      {/* Figma tiles a faint 626x883 grid across this section. */}
      <div
        aria-hidden
        className="bg-lattice pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      {/* Tech-stack marquee: the design shows the row bleeding past both
          edges, so it loops continuously. Track holds the list twice and
          slides -50%; hover pauses; reduced-motion freezes it via globals. */}
      <div className="edge-fade-x marquee-paused relative z-10 mb-16 overflow-hidden md:mb-[100px]">
        <ul className="animate-marquee flex w-max gap-5 pr-5">
          {[0, 1].map((copy) =>
            techStacks.map((stack) => (
              <li
                key={`${copy}-${stack}`}
                aria-hidden={copy === 1 || undefined}
                className="rounded-card bg-gradient-pill text-body shadow-glass grid h-16 w-[216px] shrink-0 place-items-center text-black"
              >
                {stack}
              </li>
            )),
          )}
        </ul>
      </div>

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading id="about-heading" accent="ACES">
            About
          </SectionHeading>
        </Reveal>

        <p className="text-body mx-auto mt-[50px] max-w-[1351px] text-center text-pretty text-black">
          The Association of Computer Engineering Students (ACES) is a
          student-led technical community dedicated to bridging the gap between
          academic learning and industry execution. Driven by a passion for
          innovation and collaboration, ACES provides Computer Science and
          Engineering students with a platform to build practical skills, work
          on real-world projects, and stay ahead of rapidly evolving tech
          trends.
        </p>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 md:mt-[112px]">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="flex flex-col items-center">
                <span className="font-display text-gradient-brand text-[80px] leading-[1.3]">
                  {stat.value}
                </span>
                <span className="font-display text-body text-black">
                  {stat.label}
                </span>
                <span className="text-meta mt-[10px] max-w-[220px] text-center text-pretty text-black">
                  {stat.caption}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* Pillars */}
        <Reveal delay={80}>
          <ul className="mt-14 grid grid-cols-1 gap-8 md:mt-[81px] md:grid-cols-2 md:gap-[52px] lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.icon];
              return (
                <li
                  key={pillar.title}
                  className="rounded-card bg-gradient-brand shadow-card relative isolate flex flex-col overflow-hidden p-[21px] md:h-[303px]"
                >
                  <GlassSheen />
                  <NoiseOverlay />
                  <div className="relative flex items-center justify-between pt-5 pr-[30px] pl-[18px]">
                    <IconBadge icon={Icon} size={80} />
                    <h3 className="font-display text-card text-white">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-body text-tertiary relative mt-[37px] text-center text-pretty">
                    {pillar.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
