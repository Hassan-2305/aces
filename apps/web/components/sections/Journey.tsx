import { journeyPillars } from "@/data/content";
import {
  journeyIcons,
  WhatsAppIcon,
  Button,
  Container,
  IconBadge,
  Reveal,
} from "@aces/ui";

/*
 * Figma "Frame 40": 1351x878.
 *   Heading wraps to two lines with "Journey" and "Starts" in the gradient.
 *   Cards are 416x300, radius 30, with a 75px inset-ring icon badge.
 *   CTA is 350x68 with a leading WhatsApp mark.
 */
export default function Journey() {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-white py-16 md:py-[100px]"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2
            id="journey-heading"
            className="font-display max-w-[1104px] text-[clamp(2.5rem,6vw,80px)] leading-[1.3] text-balance text-black"
          >
            Your Developer <span className="text-gradient-brand">Journey</span>{" "}
            <span className="text-gradient-brand">Starts</span> Here
          </h2>
          <p className="text-body mt-[46px] max-w-[1086px] text-pretty text-black">
            Whether you want to master modern tech stacks, compete in
            hackathons, solve technical challenges, or build portfolio-worthy
            projects, ACES gives you the platform, community, and mentorship to
            get there.
          </p>
        </div>

        <Reveal delay={80}>
          <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-[74px] md:grid-cols-2 md:gap-[51px] lg:grid-cols-3">
            {journeyPillars.map((pillar) => {
              const Icon = journeyIcons[pillar.icon];
              return (
                <li
                  key={pillar.title}
                  className="card-lift rounded-card shadow-card flex flex-col items-center bg-white px-6 py-8 text-center md:min-h-[300px] md:px-[36px] md:py-[35px]"
                >
                  <IconBadge icon={Icon} size={75} tone="ring" />
                  <h3 className="font-display text-card mt-[30px] text-balance text-black">
                    {pillar.title}
                  </h3>
                  <p className="text-body mt-[30px] text-pretty text-black">
                    {pillar.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="mt-14 flex justify-center px-4 md:mt-[100px]">
          <Button
            href="https://whatsapp.com" // TODO: channel invite link

            variant="secondary"
            withArrow={false}
            className="group h-[60px] w-full max-w-[350px] md:h-[68px]"
            icon={<WhatsAppIcon className="size-[30px] shrink-0" />}
            rel="noopener noreferrer"
            target="_blank"
          >
            Join Our WhatsApp Channel
          </Button>
        </div>
      </Container>
    </section>
  );
}
