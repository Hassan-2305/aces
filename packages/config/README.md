# @aces/config

Shared config, not a runtime package.

- `typescript/base.json` — strict compiler options every workspace extends.
- `typescript/nextjs.json` — adds the Next.js plugin + JSX settings on top
  of the base.
- `eslint/next.mjs` — exports `nextEslintConfig(baseDirectory)`, a factory
  rather than a ready-made config, because `FlatCompat` needs to resolve
  `eslint-config-next` relative to the *consuming* app's `node_modules`, not
  this package's. Call it from the app's own `eslint.config.mjs`:

  ```js
  import { dirname } from "path";
  import { fileURLToPath } from "url";
  import { nextEslintConfig } from "@aces/config/eslint/next.mjs";

  const __dirname = dirname(fileURLToPath(import.meta.url));
  export default nextEslintConfig(__dirname);
  ```
