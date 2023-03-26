# 二进制部署

## 前置准备

- Mysql `8.0+`
- K8S `1.18+`
- Registry `V2`

:::tip Registry V2
正式环境可以使用sonatype提供的[nexus](https://github.com/sonatype/docker-nexus3)

体验环境可以使用Docker提供的镜像[registry:2](https://hub.docker.com/_/registry/tags)，如下：

```shell
docker run -d -p 5000:5000 --restart always --name registry registry:2
```
:::

## 下载地址

:::code-group

```shell [macos arm64]
wget https://github.com/go-to-cloud/go-to-cloud/releases/download/1.0.0-beta/gotocloud-macos_arm64.tar.gz
```

```shell [macos amd64]
wget https://github.com/go-to-cloud/go-to-cloud/releases/download/1.0.0-beta/gotocloud-macos_x64.tar.gz
```

```shell [linux x64]
wget https://github.com/go-to-cloud/go-to-cloud/releases/download/1.0.0-beta/gotocloud-linux_x64.tar.gz
```

```shell [windows]
# 下载地址
wget https://github.com/go-to-cloud/go-to-cloud/releases/download/1.0.0-beta/gotocloud-windows_x64.tar.gz
```

:::

### 解压文件

```shell
#!bin/bash
tar -zxvf ./gotocloud-<目标平台>.tar.gz
```

### 修改配置

```yaml
db: # 数据库配置
  user: # 数据库用户名
  password: # 数据库密码
  host: # 数据库地址
  schema: gotocloud # 数据库名，默认不用修改
jwt: # jwt配置，建议修改security，其他保持不变
  security: thisisunsafeuntilyouchangit
  realm: GOTOCLOUD
  idkey: id
builder: # 打包镜像的服务，一般不用修改
  kaniko: go-to-cloud-docker.pkg.coding.net/devops/kaniko/executor:v1.9.1-debug
```

:::info
请参照注释做相应的配置
:::

## 运行程序

::: code-group

```shell [默认方式]
<二进制文件目录>/gotocloud
```

```shell [指定端口]
<二进制文件目录>/gotocloud -port 8080
```
:::
