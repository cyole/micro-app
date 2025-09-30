// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import 'virtual:group-icons.css'
import Layout from './Layout.vue'

import './style.css'


export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },
} satisfies Theme
