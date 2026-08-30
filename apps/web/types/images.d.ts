// Next.js normally supplies these via the auto-generated next-env.d.ts
// (created the first time you run `next dev` or `next build`), which is
// gitignored by convention. Declaring them here too means `tsc --noEmit`
// works on a fresh clone even before that file has ever been generated.
//
// Shape matches next/image's own StaticImageData — deliberately not
// importing that type here, to avoid a global vs. module ambiguity in this
// declaration file.
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

declare module "*.jpg" {
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

declare module "*.jpeg" {
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

declare module "*.webp" {
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
