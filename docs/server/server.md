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