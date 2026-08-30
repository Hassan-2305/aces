import { articles, publishSteps } from "@/data/content";
import { Button, Container, SectionHeading, Reveal } from "@aces/ui";

/*
 * Figma "Frame 38": 1440x1313 on the #F5F7FA panel.
 *   Article cards   three-up, white, radius 30
 *   Publish block   split layout: copy + CTA on the left, numbered steps right
 */
export default function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-tertiary relative scroll-mt-24 overflow-hidden py-16 md:py-[100px]"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="blog-heading"
            accent="Developers"
            description="Recognizing the top problem solvers and analytical minds in our community! Earn XP by solving post-session problem sets and competing in specialized technical challenges."
          >
            From Our
          </SectionHeading>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-10 grid grid-cols-1 gap-6 md:mt-[62px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-3">
            {articles.map((article) => (
              <li
                key={article.title}
                className="card-lift rounded-card shadow-soft flex flex-col bg-white p-6 md:p-[26px]"
              >
                <h3 className="font-display text-card text-balance text-black">
                  {article.title}
                </h3>

                <p className="text-meta text-secondary mt-[14px] font-medium tracking-wide uppercase">
                  {article.tag}
                </p>

                <dl className="text-meta mt-[14px] space-y-[4px] text-black">
                  <div className="flex gap-1">
                    <dt className="sr-only">Author</dt>
                    <dd>Author: {article.author}</dd>
                  </div>
                  <div className="flex gap-1">
                    <dt className="sr-only">Published</dt>
                    <dd>Published on: {article.published}</dd>
                  </div>
                </dl>

                <p className="text-meta mt-[18px] flex-1 text-pretty text-black">
                  {article.excerpt}
                </p>

                <a
                  href="#blog"
                  className="text-meta text-secondary mt-[20px] inline-flex items-center gap-2 self-start transition-opacity hover:opacity-70"
                >
                  Read Article
                  <span className="sr-only">: {article.title}</span>
                  <span aria-hidden>&rarr;</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-[42px] flex justify-center">
          <Button href="#blog" variant="secondary" className="group w-[325px]">
            Explore All Articles
          </Button>
        </div>

        {/* Publish call-to-action */}
        <div className="mt-14 grid grid-cols-1 items-start gap-8 md:mt-[86px] md:gap-[40px] lg:grid-cols-2">
          <div>
            <h3 className="font-display text-[clamp(2rem,4vw,50px)] leading-[1.3] text-black">
              Want to{" "}
              <span className="text-gradient-brand">publish your post</span> ?
            </h3>
            <p className="text-body mt-[24px] max-w-[560px] text-pretty text-black">
              Got a technical breakthrough to share, a project walkthrough to
              showcase, or insights from your latest interview experience? The
              ACES Blog is a platform built by students, for students. Share
              your knowledge with the community, build your technical writing
              portfolio, and inspire your peers.
            </p>
            <div className="mt-[28px] flex flex-col items-start gap-[14px]">
              <Button
                href="mailto:aces@cusat.ac.in?subject=ACES%20Blog%20Draft%20Submission"
                variant="secondary"
                className="group w-[216px]"
              >
                Submit Your Draft
              </Button>
              <a
                href="#blog"
                className="text-meta text-neutral underline-offset-4 transition-opacity hover:underline hover:opacity-70"
              >
                View Submission Guidelines
              </a>
            </div>
          </div>

          <div className="rounded-card shadow-soft bg-white p-6 md:p-[32px]">
            <h4 className="font-display text-card text-black">
              How to Publish ?
            </h4>
            <ol className="mt-[24px] space-y-[22px]">
              {publishSteps.map((step, i) => (
                <li key={step.title} className="flex gap-[16px]">
                  <span
                    aria-hidden
                    className="bg-secondary text-meta grid size-[34px] shrink-0 place-items-center rounded-full font-medium text-white"
                  >
                    {i + 1}
                  </span>
                  <p className="text-meta text-pretty text-black">
                    <strong className="font-medium">{step.title}:</strong>{" "}
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
