import Image from "next/image";
import { events, type EventStatus } from "@/data/content";
import {
  Button,
  Container,
  SectionHeading,
  Reveal,
  GlassScatter,
  cn,
} from "@aces/ui";

/*
 * Figma "Frame 19": full-bleed brand gradient, 1440x1211.
 *   Cards   422x556, #F5F7FA fill, radius 30, 15px white border
 *   Badge   80x30 pill, radius 30, 1px border, 10px DM Sans
 *   Panel   392x257 white sheet, radius 20
 */
const badgeStyles: Record<EventStatus, string> = {
  UPCOMING:
    "bg-status-upcoming-bg text-status-upcoming-fg border-status-upcoming-fg",
  COMPLETED: "bg-status-done-bg text-status-done-fg border-status-done-fg",
};

export default function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-gradient-brand relative scroll-mt-24 overflow-hidden py-16 md:py-[108px]"
    >
      <GlassScatter />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="events-heading"
            tone="light"
            description="From interactive hackathons to deep-dive technical workshops, stay updated on our live sessions and explore past events that shaped our developer ecosystem."
          >
            What&rsquo;s happening @ACES
          </SectionHeading>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-1 justify-items-center gap-8 md:mt-[57px] md:grid-cols-2 md:gap-[54px] lg:grid-cols-3">
            {events.map((event) => (
              <li
                key={event.title}
                className="card-lift rounded-card bg-tertiary flex w-full max-w-[422px] flex-col overflow-hidden border-[12px] border-white md:border-[15px] lg:h-[556px]"
              >
                {/* Poster area — cards without artwork keep the empty tertiary panel */}
                <div className="relative h-[269px] shrink-0 overflow-hidden">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 768px) 100vw, 392px"
                      className="object-cover"
                    />
                  ) : (
                    /* Branded placeholder for events without artwork yet. */
                    <div className="bg-gradient-brand absolute inset-0 grid place-items-center">
                      <span className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px] opacity-20" />
                      <svg
                        viewBox="0 0 24 24"
                        className="size-16 text-white/90"
                        fill="none"
                        aria-hidden
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="16"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M3 9h18M8 3v4M16 3v4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <rect
                          x="7"
                          y="12"
                          width="4"
                          height="4"
                          rx="1"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  )}
                  <span
                    className={cn(
                      "absolute top-[233px] right-[19px] grid h-[30px] w-20 place-items-center",
                      "rounded-card text-pill border font-medium tracking-wide",
                      badgeStyles[event.status],
                    )}
                  >
                    {event.status}
                  </span>
                </div>

                {/* White detail sheet */}
                <div className="rounded-inner flex flex-1 flex-col overflow-hidden bg-white px-[21px] py-[16px]">
                  <h3 className="font-display text-card leading-[1.15] text-balance text-black">
                    {event.title}
                  </h3>
                  <p className="text-meta mt-[10px] text-pretty text-black">
                    {event.blurb}
                  </p>

                  <dl className="text-meta mt-auto space-y-[5px] pt-[10px] text-black">
                    <div className="flex gap-1">
                      <dt className="font-medium">Date:</dt>
                      <dd>{event.date}</dd>
                    </div>
                    <div className="flex gap-1">
                      <dt className="font-medium">Time:</dt>
                      <dd>{event.time}</dd>
                    </div>
                    <div className="flex gap-1">
                      <dt className="font-medium">Venue:</dt>
                      <dd>{event.venue}</dd>
                    </div>
                  </dl>

                  <Button
                    href="#events"
                    size="sm"
                    variant="primary"
                    className="group mt-[14px] w-[136px] self-center"
                  >
                    <span className="sr-only">Register for {event.title}</span>
                    <span aria-hidden>Register</span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-16 flex justify-center md:mt-[124px]">
          <Button href="#events" variant="primary" className="group w-[325px]">
            Explore More Events
          </Button>
        </div>
      </Container>
    </section>
  );
}
