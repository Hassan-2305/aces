/*
 * Every gradient card in Figma carries two large white vectors with a 100px
 * foreground blur, which read as soft light pooling inside the glass. Their
 * placement is proportionally the same on the About pillars (416x303) and the
 * Excellence cards (652x580), so both are expressed here in percentages.
 *
 *   blob A  ~41% / 37% offset, 85% x 90% of the card
 *   blob B  ~-13% / -28% offset, 109% x 113% of the card
 */
export default function GlassSheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <span
        className="absolute rounded-full bg-white/20 blur-[70px]"
        style={{ left: "41%", top: "37%", width: "85%", height: "90%" }}
      />
      <span
        className="absolute rounded-full bg-white/16 blur-[70px]"
        style={{ left: "-13%", top: "-28%", width: "109%", height: "113%" }}
      />
    </span>
  );
}
