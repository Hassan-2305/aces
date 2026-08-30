// Matches the shape Next.js gives static image imports at build time
// (see next/image-types/global.d.ts in a consuming Next app). Declared here
// too so `tsc --noEmit` on this package alone doesn't need a Next.js context.
declare module "*.png" {
  const value: {
    src: string;
    width: number;
    height: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  export default value;
}
