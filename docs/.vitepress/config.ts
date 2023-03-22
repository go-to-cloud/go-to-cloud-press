import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/go-to-cloud-press/docs/.vitepress/dist",
  title: "Go-To-Cloud",
  description: "Go-To-Cloud Official Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '安装', link: '/markdown-examples' },
      { text: '日志', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '轻松上手', link: '/guide/prepare',
        items: [
          {
            text:'配置环境',
            items: [{
              text: '代码仓库'
            }, {
              text: '制品仓库'
            }, {
              text: '构建节点'
            }, {
              text: '部署环境'
            }]
          },
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
