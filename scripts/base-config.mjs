import chalk from 'chalk';

/**
 * @param options {{ external: string[]; entry: string; name: string; globalName: string; outDir?: string; react?: boolean; globals: Record<string, string>; watch?: boolean }}
 */
export function defineConfig(options) {
  return {
    build: {
      sourcemap: true,
      outDir: options.outDir || `dist/${options.name}`,
      lib: {
        entry: options.entry,
        name: options.globalName,
        formats: options.globalName ? ['umd'] : ['es', 'cjs'],
        fileName: (format) => {
          if (format === 'umd') {
            return `index.umd.js`;
          }
          if (format === 'es') {
            return `esm/${options.name}.mjs`;
          }
          return `${format}/${options.name}.js`;
        },
      },
      minify: 'terser',
      plugins: [],
      watch: options.watch,
      rollupOptions: {
        treeshake: true,
        external: options.external,
        output: {
          globals: options.globals,
          inlineDynamicImports: !!options.globalName,
        },
      },
    },
  };
}

export const defaultExternal = [
  "@edsilv/http-status-codes",
  "@iiif/vocabulary",
  "isomorphic-unfetch",
  "lodash",
  "vite",
  '@iiif/parser'
];


export function buildMsg(name) {
  console.log(chalk.grey(`\n\nBuilding ${chalk.blue(name)}\n`));
}

export function listItem(name) {
  console.log(chalk.gray(`- ${chalk.green(name)}`));
}
