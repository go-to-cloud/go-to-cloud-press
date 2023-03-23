# 部署环境

> 阅读时间大约需要3分钟

## 绑定部署环境

> `部署环境`特指*开发、测试、预发、生产*等的k8s环境

![绑定部署环境](/assets/deploy_bind.png)


:::details 所属组织
表示这个部署环境仅供选中的组织使用，可以隔离不同项目组的产品
:::

:::info KubeConfig

kubeconfig通常位于宿主机的$HOME/.kube目录, 如果是k3s，则位于/etc/rancher/k3s目录

使用kubeconfig用来与部署环境进行交互，由于kubeconfig较敏感，因此在`GTC`中会进行加密保存
:::


## 部署环境列表

![部署环境列表](/assets/deploy_list.png)
