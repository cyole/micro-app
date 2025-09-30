import { DefaultTheme, defineConfig } from "vitepress";
import { version } from '../../../package.json'

const Nav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/en-us' },
  { text: 'API', link: '/en-us/api' },
  { text: 'Micro-App-DevTools', link: '/en-us/micro-app-devtools' },
  { text: 'Q&A', link: '/en-us/questions' },
  {
    text: `v${version}`,
    items: [
      {
        text: '0.x Document',
        link: 'https://jd-opensource.github.io/micro-app/0.x/docs.html#/',
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/jd-opensource/micro-app/releases',
      },
    ],
  },
]

export const enUs = defineConfig({
  title: 'MicroApp',
  description: 'A lightweight, efficient and powerful micro front-end framework',
  themeConfig: {
    nav: Nav,
  },
})
