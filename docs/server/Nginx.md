# Nginx


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