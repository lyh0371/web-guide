import { defineConfig } from "vitepress";
import { sidebar } from "./theme/sidebar/index.mjs";

export default defineConfig({
  title: "web-guide",
  description: "web-guide",
  lang: "zh-CN",

  head: [],
  vue: {
    reactivityTransform: true,
  },
  locales: {
    root: { label: "简体中文" },
  },

  themeConfig: {
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/lyh0371/web-guide" },
    ],
    outline: {
      label: "本页目录",
    },
    nav: [
      { text: "指南", link: "/guide/start" },
      { text: "案例", link: "/example/index" },
    ],
    sidebar: [
      {
        text: "指南",
        items: [{ text: "", link: "" }],
      },
    ],
  },
});
