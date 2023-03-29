# K8S部署

## 前置准备

- K8S `1.18+`

:::tip
`k8s部署`脚本帮助我们在k8s集群中一次性部署GTC所需要的基础服务

以`GTC`为例，共需要两个镜像(_后端服务、前端服务_)以及一个Mysql数据库实例

借助 `k8s部署脚本`，可以一键同时部署这三个镜像，并完成他们之间互相访问的配置

:::


## 一键安装

下载[k8s_deployment.yaml](/k8s_deployment.yaml)文件，保存至k8s环境的主节点服务器

:::tip
执行以下命令

```shell
kubectl apply -f <文件存放目录>/k8s_deployment.yaml 
```
:::

:::info
首次执行会下载三个镜像包，其中mysql:8.0较大，需要耐心等待一些时间。

执行成功后，可以在宿主机打开网址

```txt
http://localhost:32080
```

看到登录页面后表示部署成功
:::

:::danger 部署文件中的Mysql
k8s部署的yaml仅供示例使用，其中mysql只是为了支撑服务运行，生产环境中不建议将mysql部署在k8s集群中
:::
