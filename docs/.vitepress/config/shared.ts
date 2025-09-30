import { DefaultTheme, defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
  title: "MicroApp",
  description: "一款简约、高效、功能强大的微前端框架",

  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jd-opensource/micro-app' }
    ],
  }
})
