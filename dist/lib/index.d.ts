import webGuide from "./webGuide/index.svelte";
import type { Settings } from "./webGuide/types";
export interface Config {
    target: Element;
    props: {
        settings: Settings;
    };
}
export * from "./webGuide/types";
export declare const defineConfig: (config: Config) => Config;
export default webGuide;
