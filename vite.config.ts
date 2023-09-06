import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import path from "path";
import WindiCSS from "vite-plugin-windicss";
import copyPackage from "./build/plugin/copyPackage";
// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  const plugins = [svelte({}), WindiCSS()];
  if (command === "build") {
    plugins.push(copyPackage());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": resolve(__dirname, "/src"),
      },
    },
    build: {
      cssCodeSplit: true,
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        name: "web-guide",
        fileName: (format) => `index.${format}.js`,
      },
    },
  };
});
