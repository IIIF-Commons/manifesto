import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    include: ['__tests__/**/*.{test,tests,spec}.{js,mjs,cjs,ts,mts,cts}'],
    environment: 'happy-dom',
    globals: true,
  },
  server: {
    port: 3008,
  },
});
