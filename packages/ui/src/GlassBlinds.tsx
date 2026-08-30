/*
 * Figma "Fractal Glass".
 *
 * Symbol is 1726x1339 holding 12 columns; each column is a 1339 x 143.83
 * rounded rectangle rotated 90deg, so in the 1440x1024 instance each column
 * renders 120px wide and full height.
 *
 * Per column, straight from the file:
 *   fill    linear-gradient, opacity 0.2, blend OVERLAY
 *           #FFFFFF 0% -> #040914 28.125% -> #FFFFFF 100%
 *   stroke  #000000 at 0.2, weight 1  (not 8 - that was a misread)
 *   effect  BACKGROUND_BLUR radius 400
 *
 * Figma's OVERLAY blend is reproduced here with pre-multiplied alphas rather
 * than `mix-blend-mode`. Blend modes plus `backdrop-filter` are the two things
 * most likely to be dropped by a browser or compositor, and when they are the
 * blinds vanish entirely. Explicit rgba stops always paint.
 */
const COLUMNS = 12;

export default function GlassBlinds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 flex">
      {Array.from({ length: COLUMNS }).map((_, i) => (
        <div
          key={i}
          // 12 stripes read as noise at phone width; every other one drops
          // below md, leaving 6 broader bands.
          className={i % 2 ? "hidden h-full flex-1 md:block" : "h-full flex-1"}
          style={{
            backgroundImage:
              "linear-gradient(90deg," +
              " rgb(255 255 255 / 0.30) 0%," +
              " rgb(4 9 20 / 0.22) 28.125%," +
              " rgb(255 255 255 / 0.30) 100%)",
            borderLeft: "1px solid rgb(0 0 0 / 0.18)",
            boxShadow: "inset -1px 0 0 0 rgb(255 255 255 / 0.10)",
          }}
        />
      ))}

      {/* Symbol-level inner shadow: white 30%, offset 8/8, radius 4. */}
      <div
        className="absolute inset-0"
        style={{ boxShadow: "inset 8px 8px 4px 0 rgb(255 255 255 / 0.3)" }}
      />

      {/* Fade the blinds out so the hero dissolves into the next section. */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgb(245 247 250 / 0) 0%, rgb(245 247 250 / 1) 100%)",
        }}
      />
    </div>
  );
}
