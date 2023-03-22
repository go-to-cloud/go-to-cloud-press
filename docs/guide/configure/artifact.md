# 制品仓库

> 阅读时间大约需要3分钟

## 绑定制品仓库

> 目前仅支持Docker镜像制品，即`registry v2`协议的制品仓库

![制品仓库](/assets/artifact_bind.png)

:::info 测试
填写制品仓库地址、用户名与密码后，点击测试，如果能够测试通讯成功，则可以保存
:::

## 制品仓库列表

![制品仓库列表](/assets/artifact_list.png)

## 管理制品仓库

![img.png](/assets/artifact_image_action.png)

在每个制品仓库的右侧`操作`栏可以查看、编辑或移除制品仓库

:::warning
制品仓库移除后，仓库中的镜像不会被删除，也不会影响部署，但重新绑定后镜像地址不会恢复
:::

![管理制品仓库](/assets/artifact_action.png)
