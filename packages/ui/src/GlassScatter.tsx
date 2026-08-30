/*
 * Figma "Background" frame inside the Events section: eight white rounded
 * rectangles with a glass blur, scattered behind the cards. Coordinates below
 * are the Figma values translated into the 1440x1211 section frame
 * (the source frame is offset by -190, -214).
 *
 * Purely decorative, and hidden below xl where the section reflows.
 */
const shapes = [
  { left: -190, top: 145, w: 411, h: 507 },
  { left: 72, top: 567, w: 297, h: 366 },
  { left: 998, top: 717, w: 297, h: 366 },
  { left: -43, top: 819, w: 229, h: 288 },
  { left: 289, top: 434, w: 353, h: 435 },
  { left: 1653, top: 863, w: 411, h: 507 },
  { left: 1391, top: 526, w: 297, h: 366 },
  { left: 1174, top: 687, w: 353, h: 435 },
];

export default function GlassScatter() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden xl:block"
    >
      <div className="absolute left-1/2 h-full w-[1440px] -translate-x-1/2">
        {shapes.map((s, i) => (
          <span
            key={i}
            className="rounded-card absolute bg-white/10 backdrop-blur-[2px]"
            style={{
              left: s.left,
              top: s.top,
              width: s.w,
              height: s.h,
              boxShadow: "0 4px 4px 0 rgb(0 0 0 / 0.08)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
