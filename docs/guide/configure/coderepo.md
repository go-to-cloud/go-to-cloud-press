# 代码仓库

> 阅读时间大约需要2分钟

## 绑定仓库

首次使用时，需要绑定git仓库，如下图
![绑定代码仓库](/assets/code_repo_bind.png)

:::details 所属组织
`所属组织`是指当前仓库可以被哪些组织的成员使用
:::

:::details 仓库类型
目前仅支持`私有`项目，即必需提供AccessToken才可以访问的仓库
:::

:::details 仓库地址
是指仓库的URL，而不是~~代码仓库~~地址，

比如go-to-cloud在github上的仓库地址是

`https://www.github.com/go-to-cloud/go-to-cloud.git` 

那么**仓库地址**是指 

`https://www.github.com/go-to-cloud`
:::

:::details 访问令牌

在代码仓库中的个人信息页创建的，通常叫`Personal Access Token`

使用访问令牌的原因除了安全因素外，还可以在创建项目的时候获取代码仓库以及分支，通过选择而不是输入的方式降低配置出错的概率

:::

> 可以在绑定仓库前点击`测试`按钮校验提供的信息是否可以正确访问以代码仓库

点击`确定`后即完成了仓库的绑定

## 仓库列表

![代码仓库列表](/assets/code_repo_list.png)

在每个仓库的右侧`操作`栏可以查看、编辑或解除绑定

![img.png](/assets/code_repo_action.png)
