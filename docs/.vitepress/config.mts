import { defineConfig } from "vitepress";

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
      { text: "指南", link: "/guide/start", activeMatch: "/guide/" },
      { text: "案例", link: "/example/demo1", activeMatch: "/example/" },
    ],
    sidebar: {
      "/guide/": [
        {
          items: [
            { text: "API", link: "/guide/api" },
            { text: "使用", link: "/guide/use" },
          ],
        },
      ],
      "/example/": [
        {
          text: "案例",
          items: [
            { text: "自动开启", link: "/example/demo1" },
            { text: "手动开启", link: "/example/demo2" },
          ],
        },
      ],
    },
  },
});
