import { FlatCompat } from "@eslint/eslintrc";

/**
 * next/core-web-vitals and next/typescript are still shipped as legacy
 * (.eslintrc-style) configs, so FlatCompat bridges them into flat config.
 * `baseDirectory` must be the consuming app's own directory — that's where
 * `eslint-config-next` and `next` actually live in node_modules — so this
 * is a factory rather than a ready-made config.
 */
export function nextEslintConfig(baseDirectory) {
  const compat = new FlatCompat({ baseDirectory });

  return [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
      ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
    },
  ];
}
