import { DefaultTheme, defineConfig } from "vitepress";
import { version } from '../../../package.json'

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: '介绍', link: '/zh-cn/guide/' },
  { text: '快速开始', link: '/zh-cn/guide/start' },
  { text: '0.x迁移到1.0', link: '/zh-cn/guide/transfer' },
]

const Features: DefaultTheme.NavItemWithLink[] = [
  { text: '配置项', link: '/zh-cn/features/configure' },
  { text: '生命周期', link: '/zh-cn/features/life-cycles' },
  { text: '环境变量', link: '/zh-cn/features/env' },
  { text: 'JS沙箱', link: '/zh-cn/features/sandbox' },
  { text: '虚拟路由系统', link: '/zh-cn/features/router' },
  { text: '样式隔离', link: '/zh-cn/features/scopecss' },
  { text: '元素隔离', link: '/zh-cn/features/dom-scope' },
  { text: '数据通信', link: '/zh-cn/features/data' },
  { text: '资源系统', link: '/zh-cn/features/static-source' },
  { text: '预加载', link: '/zh-cn/features/prefetch' },
  { text: 'umd模式', link: '/zh-cn/features/umd' },
  { text: 'keep-alive', link: '/zh-cn/features/keep-alive' },
  { text: '多层嵌套', link: '/zh-cn/features/nest' },
  { text: '插件系统', link: '/zh-cn/features/plugins' },
  { text: '高级功能', link: '/zh-cn/features/advanced' },
]

const Integration: DefaultTheme.NavItemWithLink[] = [
  { text: '说明', link: '/zh-cn/framework/introduce' },
  { text: 'React', link: '/zh-cn/framework/react' },
  { text: 'Vue', link: '/zh-cn/framework/vue' },
  { text: 'Vite', link: '/zh-cn/framework/vite' },
  { text: 'Angular', link: '/zh-cn/framework/angular' },
  { text: 'Nextjs', link: '/zh-cn/framework/nextjs' },
  { text: 'Nuxtjs', link: '/zh-cn/framework/nuxtjs' },
]

const API: DefaultTheme.NavItemWithLink[] = [
  { text: '主应用API', link: '/zh-cn/api/base-app' },
  { text: '子应用API', link: '/zh-cn/api/child-app' },
]

const Other: DefaultTheme.NavItemWithLink[] = [
  { text: '常见问题', link: '/zh-cn/others/questions' },
  { text: '部署', link: '/zh-cn/others/deploy' },
  { text: '更新日志', link: '/zh-cn/others/changelog' },
]

const Nav: DefaultTheme.NavItem[] = [
  { text: '指南', link: '/zh-cn/guide', activeMatch: '/guide/' },
  { text: '功能', items: Features },
  { text: 'API', items: API },
  { text: 'Micro-App-DevTools', link: '/zh-cn/micro-app-devtools', activeMatch: '/others/micro-app-devtools/' },
  { text: '常见问题', link: '/zh-cn/others/questions', activeMatch: '/others/questions/' },
  { text: '在线案例', link: 'https://zeroing.jd.com/micro-app/demo/'},
  {
    text: `v${version}`,
    items: [
      {
        text: '0.x文档',
        link: 'https://jd-opensource.github.io/micro-app/0.x/docs.html#/',
      },
      {
        text: '更新日志',
        link: 'https://github.com/jd-opensource/micro-app/releases',
      },
    ],
  },
]

const SidebarGuides: DefaultTheme.SidebarItem[] = [
  { text: '指南', items: Guides, },
  { text: '功能', items: Features },
  { text: '框架集成', items: Integration },
  { text: 'API', items: API },
]

const SidebarOthers: DefaultTheme.SidebarItem[] = [
  { text: '其他', items: Other },
]

export const zhCn = defineConfig({
  lang: 'zh-CN',
  title: 'MicroApp',
  description: '一款简约、高效、功能强大的微前端框架',
  themeConfig: {
    nav: Nav,

    sidebar: {
      '/zh-cn/guide/': SidebarGuides,
      '/zh-cn/features/': SidebarGuides,
      '/zh-cn/framework/': SidebarGuides,
      '/zh-cn/api/': SidebarGuides,
      '/zh-cn/others/': SidebarOthers,
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            displayDetails: '显示详情',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: 'Enter 键',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上箭头',
              navigateDownKeyAriaLabel: '向下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Esc 键',
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/jd-opensource/micro-app/edit/master/docs/:path',
      text: '在 Github 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '回到首页',
      linkText: '回到首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  }
})
