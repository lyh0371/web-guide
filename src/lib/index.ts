import "virtual:windi.css";
import "../app.css";
// @ts-ignore
import webGuide from "./webGuide/index.svelte";
import type { Settings } from "./webGuide/types";

export interface Config {
  target: Element;
  props: {
    settings: Settings;
  };
}

export * from "./webGuide/types";

export const defineConfig = (config: Config): Config => config;
export default webGuide;
