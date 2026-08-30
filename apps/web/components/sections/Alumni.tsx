import Image from "next/image";
import { alumni } from "@/data/content";
import { Button, Container, SectionHeading, Reveal, cn } from "@aces/ui";

/*
 * Figma "Frame 39": 1440x1295.
 *   Cards are 427x579, radius 30, and are deliberately staggered vertically
 *   (y = 341 / 301 / 368) to give the row a hand-placed rhythm.
 */
const stagger = ["lg:mt-[40px]", "lg:mt-0", "lg:mt-[67px]"];

export default function Alumni() {
  return (
    <section
      id="alumni"
      aria-labelledby="alumni-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 md:py-[100px]"
    >
      {/* Figma tiles a faint 626x883 grid across this section. */}
      <div
        aria-hidden
        className="bg-lattice pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            id="alumni-heading"
            accent="Industry"
            description="Discover how ACES helps students build practical skills, win hackathons, launch collaborative projects, and land engineering roles."
          >
            From Campus to
          </SectionHeading>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-12 grid grid-cols-1 justify-items-center gap-6 md:mt-[80px] md:grid-cols-2 md:gap-[35px] lg:grid-cols-3">
            {alumni.map((person, i) => (
              <li
                key={person.name}
                className={cn(
                  "card-lift rounded-card shadow-soft flex w-full max-w-[427px] flex-col items-center bg-white px-6 py-10 md:px-[30px] md:py-[67px]",
                  stagger[i],
                )}
              >
                <Image
                  src={person.photo}
                  alt=""
                  width={146}
                  height={146}
                  className="size-[146px] shrink-0 rounded-full bg-[#D9D9D9] object-cover"
                />
                <figure className="mt-[20px] flex flex-1 flex-col items-center">
                  <figcaption className="flex flex-col items-center">
                    <span className="font-display text-card text-black">
                      {person.name}
                    </span>
                    <span className="text-meta text-black">{person.role}</span>
                  </figcaption>
                  <blockquote className="text-meta mt-[24px] text-center text-pretty text-black">
                    &ldquo;{person.quote}&rdquo;
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 flex justify-center md:mt-[100px]">
          <Button
            href="#contact"
            variant="secondary"
            className="group w-[325px]"
          >
            Hear Stories of Alumni
          </Button>
        </div>
      </Container>
    </section>
  );
}
