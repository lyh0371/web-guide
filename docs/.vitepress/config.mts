import { defineConfig } from 'vitepress';
import { sidebar } from './theme/sidebar/index.mjs';

export default defineConfig({
  title: 'web-guide',
  description: 'web-guide',

  head: [],
  vue: {
    reactivityTransform: true,
  },
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [{ icon: 'github', link: 'https://github.com/lyh0371/web-guide' }],
    nav: [
      { text: '指南', link: '/guide/start' },
      { text: 'API', link: '/config' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
  },
});
