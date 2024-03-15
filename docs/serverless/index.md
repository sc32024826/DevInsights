# Serverless

## Serverless Framework  框架

```shell
# 安装
npm install -g serverless

# 配置账号
# provider 指定云服务提供者
# key
# secret
serverless config credentials --provider aws --key xxx --secret xxx

# 远程调试
serverless invoke --function hello --data '{"name": "serverless"}' --debug

# 本地调试
serverless invoke local --function hello --data '{"name": "serverless"}'

# 部署
serverless deploy

```

## 阿里 函数计算 Fun

```shell
# 安装
npm i @alicloud/fun -g

# 配置账号
fun config add --accessKeyId xxx --accessKeySecret xxx

# 也可以配置.env

# 远程调试
fun invoke hello

# 本地调试 需要docker
fun invoke local  hello

# 部署
fun deploy
```
