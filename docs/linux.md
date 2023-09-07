# Linux 系统

## rpm 命令 安装 rpm 包

```bash
rpm -ivhe zsh

# 说明
# -i install
# -v 查看更详细的安装信息
# -h 显示安装进度
# -e erase 卸载清除安装包
```

## curl 访问 url

[参考链接](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

- 不带任何参数, curl 就是发出 get 请求

- `curl -A` 参数指定客户端的用户代理标头，即 User-Agent
  也可以通过-H 参数直接指定标头，更改 User-Agent。
- `curl -b` 参数用来向服务器发送 Cookie。

```bash
curl -b 'foo=bar' https://google.com
```

- `curl -d` 参数用于发送 POST 请求的数据体。

```bash
$ curl -d'login=emma＆password=123'-X POST https://google.com/login
# 或者
$ curl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login
```

- `curl --data-urlencode` --data-urlencode 参数等同于-d，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。

- `curl -e` 参数用来设置 HTTP 的标头 Referer，表示请求的来源。

- `curl -L` 参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向。
