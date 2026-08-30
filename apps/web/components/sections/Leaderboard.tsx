import Image from "next/image";
import { podium, runnersUp } from "@/data/content";
import { Button, Container, Reveal, SectionHeading, cn } from "@aces/ui";

/*
 * Figma "Frame 37": 1878x1766.
 *   Podium   354px wide; rank 1 is 415px tall and sits 59px higher than
 *            ranks 2 and 3 (356px). Radius 30, drop shadow + inset ring.
 *   Rows     1208x140 cards with a 100px avatar and the score right-aligned.
 */
/** Podium accent bars, straight from the Figma inner-shadow colours. */
const MEDALS = { 1: "#FFD700", 2: "#C0C0C0", 3: "#CD7F32" } as const;

export default function Leaderboard() {
  return (
    <section
      id="leaderboard"
      aria-labelledby="leaderboard-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 md:py-[100px]"
    >
      {/* Soft blue wash behind the podium. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] z-0 h-[55%]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 45%, rgb(0 127 255 / 0.10) 0%, rgb(0 127 255 / 0) 70%)",
        }}
      />

      {/* Figma tiles a faint 626x883 grid across this section. */}
      <div
        aria-hidden
        className="bg-lattice pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            id="leaderboard-heading"
            accent="Leaderboard"
            description="Recognizing the top problem solvers and analytical minds in our community! Earn XP by solving post-session problem sets and competing in specialized technical challenges."
          >
            Community
          </SectionHeading>
        </Reveal>

        {/* Podium */}
        <ol className="mt-14 flex flex-col items-center justify-center gap-8 md:mt-[126px] md:flex-row md:items-end md:gap-[73px]">
          {podium.map((entry) => {
            const isFirst = entry.rank === 1;
            const medal = MEDALS[entry.rank as 1 | 2 | 3];
            return (
              <li
                key={entry.name}
                className={cn(
                  "rounded-card shadow-card flex w-full max-w-[354px] flex-col items-center bg-white px-6 py-[34px]",
                  isFirst
                    ? "order-first md:order-none md:mb-[59px] md:h-[415px]"
                    : "md:h-[356px]",
                )}
                style={{
                  boxShadow: `0 6px 20px 0 rgb(0 0 0 / 0.25), inset 0 -8px 0 0 ${medal}`,
                }}
              >
                <p
                  className={cn(
                    "font-display text-black",
                    isFirst ? "text-card" : "text-body",
                  )}
                >
                  Rank {entry.rank}
                </p>

                <Image
                  src={entry.avatar}
                  alt=""
                  width={124}
                  height={124}
                  className="mt-[13px] size-[124px] rounded-full bg-[#D9D9D9] object-cover"
                />

                <p
                  className={cn(
                    "font-display mt-[20px] text-center text-black",
                    isFirst ? "text-card" : "text-body",
                  )}
                >
                  {entry.name}
                </p>
                <p
                  className={cn(
                    "text-black",
                    isFirst ? "text-body" : "text-meta",
                  )}
                >
                  {entry.batch}
                </p>
                <p
                  className={cn(
                    "font-display mt-[25px] text-black",
                    isFirst ? "text-card" : "text-body",
                  )}
                >
                  Score: {entry.score}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Runners-up */}
        <ol className="mt-10 flex flex-col gap-6 md:mt-[56px] md:gap-[56px]">
          {runnersUp.map((entry) => (
            <li
              key={entry.name}
              className="rounded-card shadow-soft flex min-h-[104px] items-center gap-4 bg-white px-5 md:min-h-[140px] md:gap-[30px] md:px-[46px]"
              style={{
                boxShadow:
                  "0 4px 20px 0 rgb(0 0 0 / 0.25), inset 8px 0 0 0 #007FFF",
              }}
            >
              <span className="font-display text-body md:text-card text-black">
                {entry.rank}
              </span>
              <Image
                src={entry.avatar}
                alt=""
                width={100}
                height={100}
                className="size-16 shrink-0 rounded-full bg-[#D9D9D9] object-cover md:size-[100px]"
              />
              <div className="min-w-0 flex-1">
                <p className="font-display text-body md:text-card truncate text-black">
                  {entry.name}
                </p>
                <p className="text-meta md:text-body text-black">
                  {entry.batch}
                </p>
              </div>
              <span className="font-display text-body md:text-card whitespace-nowrap text-black">
                {entry.score}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-[50px] flex flex-col items-center gap-5">
          <Button
            href="#leaderboard"
            variant="secondary"
            className="group w-[325px]"
          >
            View Complete Standings
          </Button>
          <a
            href="#events"
            className="text-body text-neutral inline-flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            Join Next DSA &amp; CTF Challenge
            <svg
              viewBox="0 0 15 16"
              aria-hidden
              className="size-[15px] shrink-0"
              fill="none"
            >
              <path
                d="M4 12L11 4M11 4H5M11 4V10"
                stroke="#8D8D8D"
                strokeWidth="1.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
