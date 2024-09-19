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

```

```bash
# 拉取镜像
docker pull gitlab/gitlab-ce

```

## 解决服务器无法拉取镜像的问题

1. 本地制作镜像  保存为压缩包

   ```bash
   docker save -o gitlab-ce.tar gitlab/gitlab-ce
   ```
2 . 上传到服务器

3. 服务器docker 加载 镜像

   ```bash
   docker load < gitlab-ce.tar
   ```
