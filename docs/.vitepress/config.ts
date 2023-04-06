import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go-To-Cloud",
  description: "Go-To-Cloud Official Website",
  lastUpdated: true,
  // base: "/docs",
  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '最近更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '<span style="display: inline-block"><a style="float:left;display: inline-block; vertical-align: middle;"  href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023008330号</a> <img src="/icons/beian.png" style="float:left;margin-left: 5px;" /><a style="float:left;display: inline-block; vertical-align: middle;" href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602013016" target="_blank">浙公网安备 33010602013016号</a></span>',
      copyright: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a> | Copyright © 2022-present Go-To-Cloud'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/configure/prepare' },
      { text: '安装', link: '/installation/how' },
    ],

    sidebar: {
      '/guide/': [{
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
      }],
      '/installation/': [{
        text: '如何安装', link: '/installation/how',
        items: [{
          text: '二进制部署', link: 'installation/binary'
        }, {
          text: 'Docker部署', link: 'installation/docker_compose'
        }, {
          text: 'K8S部署', link: 'installation/k8s'
        }]
      }]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/go-to-cloud' }
    ]
  }
})
