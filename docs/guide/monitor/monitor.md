# 应用监控

> 阅读时间大约需要3分钟

应用监控是一个简化的针对由GTC部署的应用状态监测工具

`GTC`中的**应用**，对应`k8s`的**Deployment**和**Service**

> *Deployment*负责管理`pod`、*Service*负责将`pod`暴露在网络上供外部访问

:::details 应用监控提供的能力
1. 容器状态显示
2. 副本数量管理
3. 查看容器运行日志
4. 进入容器执行命令 
5. 应用重启 
6. 删除应用
:::

界面如下图:

![应用监控](/assets/monitor.png)

左侧可以选择部署的环境

选择环境后，右侧将会列出由`GTC`部署的应用列表,列表右侧的`操作`按钮可以管理副本、重启和删除应用，以及查看应用的详情

:::tip 
关于应用的状态，请[查看k8s相关资料](https://kubernetes.io/zh-cn/docs/concepts/workloads/controllers/deployment/#deployment-status)
:::

:::warning 删除应用

此处删除应用只是将应用从监控中删除，并不会从k8s中实际删除应用

GTC暂时不提供从k8s中删除应用的操作，确实需要删除应用的，可以使用GTC将副本数据`收缩至0`

也可以在K8s的Dashboard或者其他客户端工具(如`Lens`)等操作

:::

**应用**是由*容器*组成的，利用应用监控我们可以查看应用中的容器信息

:::info
需要查看容器时，在应用列表右侧的`操作`中选择`查看详情`

如果一个应用有多个副本(即多个Pod)，则在详情列表中会列出所有Pod
:::

![容器详情](/assets/monitor_container.png)

:::info

**查看日志**和**登录容器**，如果Pod内部有多个容器，可以在下拉框中选择切换容器

![查看日志](/assets/monitor_viewlog.png)


![登入容器](/assets/monitor_shell.png)
:::

:::danger 删除Pod

如果被删除的Pod正在执行任务中，可能会造成预期外的结果，请做好**优雅退出**的设计

由于有Deployment管理Pod的副本，因此删除后应用会自动创建一个新的Pod

:::
