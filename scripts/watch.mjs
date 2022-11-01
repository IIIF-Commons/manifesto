import { build } from "vite";
import { buildMsg, defaultExternal, defineConfig } from "./base-config.mjs";

buildMsg('Watching libraries');
await build(
  defineConfig({
    entry: `src/index.ts`,
    name: 'index',
    outDir: 'dist/bundle',
    external: [...defaultExternal],
    react: true,
    react18: true,
    watch: true,
  })
);
