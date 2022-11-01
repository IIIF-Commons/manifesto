import { defineConfig, buildMsg, listItem } from './base-config.mjs';
import { build } from 'vite';
import { execa } from "execa";

(async () => {

  const DIST = 'dist';

  // Main UMD build.
  buildMsg('UMD');
  await build(
    defineConfig({
      entry: `src/index.ts`,
      name: 'index',
      outDir: DIST,
      globalName: 'Manifesto',
    })
  );

  buildMsg('manifesto.js');
  await build(
    defineConfig({
      entry: `src/index.node.ts`,
      name: 'index',
      outDir: `${DIST}/bundle`,
    })
  );

  buildMsg('Types');

  listItem('manifesto.js');
  await execa('./node_modules/.bin/dts-bundle-generator', [`--out-file=${DIST}/index.d.ts`, './src/index.ts'])
})();
