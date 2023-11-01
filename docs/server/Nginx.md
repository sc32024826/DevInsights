# Nginx

## 安装

```shell
yum install nginx
```

## 指令

### index

该指令拥有默认值，`index index.html` ，即，如果没有给出`index`，默认初始页为`index.html`


### alias

实际路径就是: alias 值

### root

实际路径就是: root值 + location值


### proxy_pass

 - 绝对路径
  ```
  location /proxy {
    proxy_pass http://192.168.137.181:8080/;
  }
  ```
 当访问 http://127.0.0.1/proxy/test/test.txt时，nginx匹配到/proxy路径，把请求转发给192.168.137.181:8080服务，实际请求路径为
http://10.0.0.1:8080/test/test.txt，nginx会去掉匹配的“/proxy”。

 - 相对路径
  ```
  location /proxy {
    proxy_pass http://192.168.137.181:8080;
  }
  ```
  当访问 http://127.0.0.1/proxy/test/test.txt时，nginx匹配到/proxy路径，把请求转发给192.168.137.181:8080服务，实际请求代理服务器的路径为
http://192.168.137.181:8080/proxy/test/test.txt， 此时nginx会把匹配的“/proxy”也代理给代理服务器。

### 测试配置语法是否正确

  nginx -t

### 重启服务

  nginx -s reload

### 配置 ssl 证书

```shell
   server {
      listen              443 ssl;
      server_name         bpm.jbhcorp.cn;
      # 证书 目录
      ssl_certificate     cert/bpm.jbhcorp.cn.pem;
      ssl_certificate_key cert/bpm.jbhcorp.cn.key;
      ssl_session_timeout 5m;
      ssl_ciphers  ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;

      ssl_protocols TLSv1.2 TLSv1.3;

      ssl_prefer_server_ciphers  on;

      root /usr/share/nginx/html;

      location / {
        alias /usr/share/nginx/operate/;
        index index.html index.html;
      }
      # 将 login 代理到 login页面 并且保留 url 中的 login
      location /login/ {
        proxy_pass https://bpm.jbhcorp.cn/login;
      }
      # 监听 /api 并代理到 http://bpm.jbhcorp.cn:8082/ 并且 重写 去掉 'api'
      location /api/ {
        proxy_pass http://bpm.jbhcorp.cn:8082/;
      }
   }
```