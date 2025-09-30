// .vitepress/config/index.ts
import { defineConfig } from 'vitepress'
import { enUs } from './en-us'
import { shared } from './shared'
import { zhCn } from './zh-cn'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import lightbox from "vitepress-plugin-lightbox"


export default defineConfig({
  ...shared,
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
      md.use(groupIconMdPlugin)
      md.use(lightbox)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          'nginx': 'vscode-icons:file-type-nginx',
          'nodejs': 'vscode-icons:file-type-node',
        }
      })
    ],
  },
  locales: {
    'zh-cn': { label: '简体中文', ...zhCn },
    'en-us': { label: 'English', ...enUs },
  },
  themeConfig: {
    logo: '/logo.svg',
    externalLinkIcon: true,
    search: {
      provider: 'local',
    }
  }
})
