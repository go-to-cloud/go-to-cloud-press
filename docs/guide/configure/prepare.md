# 轻松上手

> 阅读时间大约需要1分钟

## 首次使用

1. 创建数据库`gotocloud`
```sql
create database gotocloud character set utf8mb4;
```

2. 打开`<项目所在文件夹>/conf/appsettings.yaml`，参考注释填写
```yaml
db: # 数据库配置
  user: # 数据库用户名
  password: # 数据库密码
  host: # 数据库地址
  schema: gotocloud # 数据库名，默认不用修改
jwt: # jwt配置，建议修改security，其他可以保持不变
  security: thisisunsafeuntilyouchangit
  realm: GOTOCLOUD
  idkey: id
builder: # 打包镜像的服务，一般不用修改
  kaniko: go-to-cloud-docker.pkg.coding.net/devops/kaniko/executor:v1.9.1-debug
```

## 启动服务

```shell
# 以二进制部署为例
# cd <项目所在文件夹>
./gtc -port 18080
```

系统首次启动时会自动创建最高管理员权限账号`root`，默认密码也是`root`。

登录后的界面如下图所示：
![img.png](../../assets/project_01.png)

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
