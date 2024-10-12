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


## 阿里服务器 80端口被`阿里云盾` 占用 解决办法

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
## centos 版本问题可能导致 无法安装  报错如下

```shell
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: libstdc++.so.6(GLIBCXX_3.4.20)(64bit)
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: libc.so.6(GLIBC_2.28)(64bit)
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: libstdc++.so.6(GLIBCXX_3.4.21)(64bit)
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: libstdc++.so.6(CXXABI_1.3.9)(64bit)
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: libm.so.6(GLIBC_2.27)(64bit)
Error: Package: 2:nodejs-18.20.3-1nodesource.x86_64 (nodesource-nodejs)
           Requires: glibc >= 2.28
           Installed: glibc-2.17-326.el7_9.x86_64 (installed)
               glibc = 2.17-326.el7_9
           Available: glibc-2.17-317.el7.i686 (base)
               glibc = 2.17-317.el7
           Available: glibc-2.17-322.el7_9.i686 (updates)
               glibc = 2.17-322.el7_9
           Available: glibc-2.17-323.el7_9.i686 (updates)
               glibc = 2.17-323.el7_9
           Available: glibc-2.17-324.el7_9.i686 (updates)
               glibc = 2.17-324.el7_9
           Available: glibc-2.17-325.el7_9.i686 (updates)
               glibc = 2.17-325.el7_9
 You could try using --skip-broken to work around the problem
 You could try running: rpm -Va --nofiles --nodigest
```
    问题原因: 从nodejs v18开始, 不再支持centos7 和其他一些Linux发行版, 因为glibc版本不兼容

    解决办法: 升级centos 版本


## 查看端口占用情况

```shell
lsof -i :3000
```

## 查看服务器系统os版本

```shell
cat /etc/centos-release
```


## 修改hostname 即 控制台 显示名称, [root@k8s-master01 ~]#

```shell
hostnamectl set-hostname k8s-master01

hostnamectl 可以查看当前的hostname等信息
```


## 动态查看日志文件的命令

`tail -f`

```shell
tail -f /var/log/access.log
```