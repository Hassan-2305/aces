import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Workspace packages ship raw TS/TSX source (no build step of their own),
  // so Next needs to run its own compiler over them too.
  transpilePackages: ["@aces/ui", "@aces/types"],
  images: {
    // Static imports are optimised at build time; these formats keep the
    // photography crisp while cutting weight.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
