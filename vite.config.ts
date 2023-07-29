import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'),
      name: 'web-guide',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
