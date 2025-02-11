# DOCKER

```bash
# 查找
docker search gitlab

# 拉取镜像
docker pull 镜像名


# --rm 停止之后自动删除容器
docker run --rm
docker run -p 80:80  # 映射端口  主机-容器
-v #映射数据卷
-it #使用交互方式运行，进入容器查看内容
-d #后台守护进程运行
docker images # 列出所有镜像

docker --version  # 显示docker的版本信息
docker info    # 显示docker的系统信息
docker 命令 --help    # 显示帮助命令

#删除指定id的镜像
docker rmi 镜像id
docker rmi 镜像id 镜像id 镜像id 镜像id
#删除指定名称的镜像
docker rmi mysql:5.7


docker ps # 查看运行中的容器

# 启动容器
docker start 容器id
# 重启容器
docker restart 容器id
# 停止容器
docker stop 容器id
# 强制杀死容器
docker kill 容器id

# 进入到指定容器内部进行修改  开启一个新的终端
docker exec -it 0cd4d9d94de2 bash
# 添加gitlab的yum源仓库
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash

# 安装
yum  -y  install  gitlab-ce

# 添加tag  构建镜像之后  需要添加tag 才能push 到远程仓库
docker tag A:v1 B:v2


```

```bash
# 拉取镜像
docker pull gitlab/gitlab-ce

```


## 解决服务器无法拉取镜像的问题

- 压缩包直传

   1. 本地制作镜像  保存为压缩包

      ```bash
      docker save -o gitlab-ce.tar gitlab/gitlab-ce
      ```
   2. 上传到服务器

   3. 服务器docker 加载 镜像

      ```bash
      docker load < gitlab-ce.tar
   ```

- 可以使用阿里云容器镜像服务


## Macos 镜像构建说明

在macos上使用`docker build ...` 构建镜像的时候 会默认构建适合于macos 即 arm64 的镜像  无法直接部署在linux上

因此 需要使用到  `buildx` 来构建 多平台的镜像

```shell
docker buildx build --platform linux/amd64 --push --tag nest-microservice .
```



```shell
# 实际操作中发现 --name 放在后边会导致 命名失败  -d 放在 -e 前边 会导致 -e 失效  不知为什么
docker run --name postgresSQL -p 5432:5432 -e POSTGRES_PASSWORD=142857 -d postgres
```
