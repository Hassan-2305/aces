import noise from "./assets/noise-texture.png";

/*
 * Figma places a "noise" instance over every gradient card. Purely decorative
 * texture, so it stays out of the accessibility tree.
 */
export default function NoiseOverlay() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.10]"
      style={{
        backgroundImage: `url(${noise.src})`,
        backgroundSize: "220px 220px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
