import Image from "next/image";
import { excellencePillars } from "@/data/content";
import {
  Container,
  GlassSheen,
  NoiseOverlay,
  SectionHeading,
  Reveal,
} from "@aces/ui";

/*
 * Figma "Frame 36": 1440x3041.
 *   Cards      652x580, radius 50, 20px white border, brand gradient fill
 *   Panel      612x294 white sheet, radius 20, at y=266 inside the card
 *   Photo      each image is placed with its own offset so it bleeds under
 *              the panel differently per card:
 *                workshop        x -58  y  -18   708x439
 *                hackathon       x  20  y  -79   612x408
 *                tech talk       x   0  y -106   652x435
 *                collab project  x  20  y  -58   611x407
 *              Those offsets are reproduced below via objectPosition so the
 *              same crop survives responsive resizing.
 */
export default function Excellence() {
  return (
    <section
      id="achievements"
      aria-labelledby="excellence-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-16 md:py-[100px]"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="excellence-heading"
            accent="Excellence"
            description="Through hands-on events, interactive sessions, and team-driven builds, ACES provides the platform, resources, and community needed to take your technical skills beyond the classroom and into the real world."
          >
            How We Drive Tech
          </SectionHeading>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:mt-[63px] md:gap-x-[47px] md:gap-y-[33px] lg:grid-cols-2">
            {excellencePillars.map((pillar) => (
              <li
                key={pillar.title}
                className="card-lift bg-gradient-brand shadow-card relative isolate flex flex-col overflow-hidden rounded-[30px] border-[10px] border-white md:rounded-[50px] md:border-[20px] lg:h-[580px]"
              >
                <GlassSheen />
                <NoiseOverlay />

                {/* Photo band — 266px tall, matching the panel's y-offset */}
                <div className="relative h-[200px] shrink-0 overflow-hidden md:h-[246px]">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 612px"
                    className="object-cover"
                    style={{ objectPosition: pillar.focalPoint }}
                  />
                </div>

                {/* White content sheet */}
                <div className="rounded-inner relative mx-3 mb-3 flex flex-1 flex-col overflow-hidden bg-white px-4 py-4 md:mx-[20px] md:mb-[20px] md:px-[16px] md:py-[18px]">
                  <h3 className="font-display text-card text-balance text-black">
                    {pillar.title}
                  </h3>
                  <p className="text-body mt-[14px] text-pretty text-black">
                    {pillar.body}
                  </p>
                  <p className="text-body mt-[18px] text-pretty text-black">
                    <strong className="font-medium">Key Focus:</strong>{" "}
                    {pillar.keyFocus}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
