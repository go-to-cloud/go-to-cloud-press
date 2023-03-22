import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go-To-Cloud",
  description: "Go-To-Cloud Official Website",
  // base: "/go-to-cloud-press",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/prepare' },
      { text: '安装', link: '/markdown-examples' },
      { text: '日志', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '轻松上手', link: '/guide/prepare',
        items: [
          {
            text:'配置环境', link: '/guide/configure',
            items: [{
              text: '代码仓库', link: '/guide/configure/coderepo'
            }, {
              text: '构建节点', link: '/guide/configure/buildnode'
            }, {
              text: '制品仓库', link: '/guide/configure/artifact'
            }, {
              text: '部署环境', link: '/guide/configure/deploy'
            }]
          },
          { text: '创建项目', link: '/api-examples' },
          { text: '开始构建', link: '/api-examples' },
          { text: '部署应用'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/go-to-cloud' }
    ]
  }
})
