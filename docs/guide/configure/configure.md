# 配置环境

最基础的CICD运行环境需要
- [代码仓库](/guide/configure/coderepo)
  ::: info
  支持主流的git代码仓库：`gitlab`，`gitea`, `github`, (即将支持)`gitee`
  :::
- [构建节点](/guide/configure/buildnode)
  ::: info
  构建节点基于k8s，通过预置的脚本将代码克隆后执行构建脚本并将产物推送至制品仓库
  :::
- [制品仓库](/guide/configure/artifact)
  ::: warning
  目前只提供基于registry v2标准的镜像仓库，后续将推出支持nuget、npm等制品的仓库
  :::
- [部署环境](/guide/configure/deploy)
  > 基于k8s的生产环境
