# `scoop`: `windows`下的包管理工具

## 设置PowerShell权限

为了让`PowerShell`可以执行脚本，首先需要设置`PowerShell`执行策略，通过输入以下命令即可。（如果之前已开启，可忽略。）
```shell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# 或
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

## 更改默认的安装目录

```shell
$env:SCOOP='E:\Applications\Scoop'

[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')

# 配置你的 scoop 全局安装路径，最好自己配置，不然默认安在 c 盘了
$env:SCOOP_GLOBAL='E:\GlobalScoopApps'
[Environment]::SetEnvironmentVariable('SCOOP_GLOBAL', $env:SCOOP_GLOBAL, 'User')
```


## 安装

```shell
# 执行安装命令
iwr -useb scoop.201704.xyz | iex  # 使用的gitee 镜像
```

```shell
# 更换scoop的repo地址
scoop config SCOOP_REPO 'https://gitee.com/glsnames/scoop-installer'
# 切换分支到develop
scoop config scoop_branch develop
# 拉取新库地址
scoop update
```

## 使用scoop 安装软件

```shell
scoop install starship
```
