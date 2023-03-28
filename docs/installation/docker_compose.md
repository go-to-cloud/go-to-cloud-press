# Docker部署

## 前置准备

- Docker
- docker-compose

:::tip 
`docker compose`帮助我们一次性部署多个镜像

以`GTC`为例，共需要两个镜像(_后端服务、前端服务_)以及一个Mysql数据库实例

借助 `docker compose`，可以一键同时部署这三个镜像，并完成他们之间互相访问的配置

更多关于[Docker Compose的内容请看这里](https://github.com/docker/compose/blob/v2/README.md#where-to-get-docker-compose)
:::


## 一键安装

下载[docker-compose.yaml](/assets/docker-compose.yaml)文件，然后切换到存放目录

:::tip
建议将docker-compose.yaml文件存放空目录（部署成功后会产生mysql持久化文件），执行以下命令

```shell
docker-compose up
```
:::

:::info
首次执行会下载三个镜像包，其中mysql:8.0较大，需要耐心等待一些时间。

执行成功后，可以在宿主机打开网址：[http://localhost:8080](http://localhost:8080)

看到登录页面后表示部署成功
:::

## docker-compose文件说明

### gtc-frontend

> 镜像`gtc-frontend`表示前端服务，占用宿主机8080端口

> 如果宿主机的8080端口被占用，则请修改`docker-compose.yaml`文件

```yaml:line-numbers {1}
...略
    restart: always
    networks:
        - gtc-network
    ports:
      - "8080:80"

  gtc-service:
    image: go-to-cloud
...略

```

:::tip
上方代码第`6`行 端口`8080`修改为其他有效端口即可

部署后的访问地址也变为新的端口
:::

:::warning
如果之前已经部署过，则可以再次执行`docker-compose up`重新部署

mysql数据不会丢失
:::

### gtc-service

> gtc-service是后端服务，不占用宿主机端口，按默认部署即可

### mysql

> 数据库`mysql`镜像，为了方便体验内置在docker-compose中，如果想使用已有实例，可以移除本镜像，但需要注意修改`gtc-service`的相关参数

```yaml:line-numbers {1}

...略
    environment:
      - ENV=dev
      - dbuser=root
      - dbpwd=123456
      - dburl=mysql
      - schema=gotocloud
...略

```

:::tip
`docker-compose.yaml`文件中找到上方代码的位置，并将db*和schema按实际情况调整
:::

:::warning
如果移除 `mysql` 镜像，还要注意将所有依赖此镜像的节点删除，如下述代码需要移除

```yaml
depends_on:
  - mysql
```
