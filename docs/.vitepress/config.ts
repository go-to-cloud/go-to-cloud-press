import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go-To-Cloud",
  description: "Go-To-Cloud Official Website",
  // base: "/go-to-cloud-press",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/configure/prepare' },
      { text: '安装', link: '/markdown-examples' },
      { text: '日志', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '轻松上手', link: '/guide/configure/prepare',
        items: [
          {
            text:'配置环境', link: '/guide/configure/configure',
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
          {
            text: '项目管理', link: '/guide/project/intro',
            items: [{
              text: '创建项目', link: '/guide/project/new'
            },{
              text: '管理模块', link: '/guide/project/manage'
            }]
          },
          { text: '应用监控', link: '/guide/monitor/monitor' },
          {
            text: '账号管理', link: '/guide/authz/authz',
            items: [{
              text: '用户管理', link: '/guide/authz/users'
            }, {
              text: '组织管理', link: '/guide/authz/orgs'
            }]
          },
          {
            text: '附录1', link: '/guide/appendix_01'
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/go-to-cloud' }
    ]
  }
})
