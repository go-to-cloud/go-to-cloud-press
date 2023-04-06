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
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" style="color:#939393;">浙ICP备2023008330号</a> <div style="width:300px;margin:0 auto; padding:20px 0;"><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602013016" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/icons/beian.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33010602013016号</p></a></div>',
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
