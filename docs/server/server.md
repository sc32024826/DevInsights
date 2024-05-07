# 服务器

## 生成密钥
```shell
ssh-keygen -t ed25519 -C '32024826@qq.com'
```

## 使用ssh-copy-id将公钥部署到服务器上

```shell
ssh-copy-id -i .ssh/id_ed25519.pub 用户名@服务器地址 -p 端口号
```

## 配置连接alias

```
Host ali
HostName 112.124.56.32
User root
IdentityFile ~/.ssh/id_ed25519
```

## 连接服务器

```shell
ssh ali
```


## 阿里服务器 80端口被阿里云盾 占用 解决办法

```shell
# 查看80端口的占用情况
netstat   -nultp | grep :80
# 结束进程
fuser -k 80/tcp
```

## 部署pdfjs 遇到的问题

服务器报

```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/octet-stream". Strict MIME type checking is enforced for module scripts per HTML spec.
```
原因是 服务器期望的是`JavaScript` 但是 收到的是 `application/octet-stream`,
考虑 是否使用了`mjs` 等 类型

在 `/etc/nginx/mime.types` 中 增加该类型即可

```shell
#由
application/javascript  js;
#改为
application/javascript  js mjs;

```

## 服务器安装 nodejs

```shell
# 指定版本
curl --silent --location https://rpm.nodesource.com/setup_18.x | bash

yum install nodejs

```