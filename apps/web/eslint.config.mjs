import { dirname } from "path";
import { fileURLToPath } from "url";
import { nextEslintConfig } from "@aces/config/eslint/next.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default nextEslintConfig(__dirname);
