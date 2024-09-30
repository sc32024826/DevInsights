# K8S

## 环境初始化

### 1. **主机名解析, 将所有节点的ip 配置在每个节点中 `/etc/hosts`**
```text
    106.15.41.8 master
    47.96.64.4 node1
    112.124.56.32 node2
```
### 2. **时间同步**

    `kubernetes`要求集群中的节点时间必须精确一直，这里使用`chronyd`服务从网络同步时间
```shell
    systemctl start chronyd
    systemctl enable chronyd
    date
```

### 3. **禁用`iptable` 和 `firewalld`服务**

    因为`kubernetes`要求集群中的节点必须关闭防火墙和`iptables`服务，否则会导致集群无法正常工作

```shell
    # 1 关闭firewalld服务
    systemctl stop firewalld
    systemctl disable firewalld

    # 2 关闭iptables服务
    systemctl stop iptables
    systemctl disable iptables
```

### 4. **禁用`selinux`**

     `selinux`是`linux`系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇葩问题

```shell
    # 这个命令的作用是临时关闭 SELinux，即将 SELinux 运行模式切换为“Permissive”（宽容模式）。
    setenforce 0

    # 这个命令使用 sed（流编辑器）永久禁用 SELinux。
    sed -i 's/^SELINUX=enforcing$/SELINUX=disabled/' /etc/selinux/config

```

- `sed` 是用于文本处理的工具，能够根据指定的模式查找并替换文本。
- `-i` 选项表示直接修改文件，即修改后会覆盖原文件。
- `s/^SELINUX=enforcing$/SELINUX=disabled/` 是 `sed` 的替换命令：
- `s/` 是 `sed` 的替换操作符，意思是“替换”。
- `^SELINUX=enforcing$` 表示匹配文件中以 `SELINUX=enforcing` 开头并结束的行（这意味着完全匹配 `SELINUX=enforcing`）。
- `SELINUX=disabled` 是替换的内容，即将匹配到的行替换`SELINUX=disabled`，以禁用 `SELinux`。
- `/etc/selinux/config` 是 `SELinux` 的配置文件，保存了系统启动时 `SELinux` 的运行模式。
- 作用：这条命令会永久禁用 `SELinux`，即修改 `/etc/selinux/config` 文件，将其启动模式从 `enforcing`（强制模式）改为 `disabled`（禁用）。修改完成后，必须重启系统才能生效。

### 5.  **禁用swap分区**

    swap分区指的是虚拟内存分区，它的作用是物理内存使用完，之后将磁盘空间虚拟成内存来使用，启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备，但是如果因为某些原因确实不能关闭swap分区，就需要在集群安装过程中通过明确的参数进行配置说明

```shell
vim /etc/fstab

# 注释掉 /dev/mapper/centos-swap swap
```

### 6. **修改linux的内核参数**

```shell
# 修改linux的内核采纳数，添加网桥过滤和地址转发功能
# 编辑/etc/sysctl.d/kubernetes.conf文件，添加如下配置：
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1

# 重新加载配置
 sysctl -p
# 加载网桥过滤模块
 modprobe br_netfilter
# 查看网桥过滤模块是否加载成功
 lsmod | grep br_netfilter
```
- 遇到报错:

    <span style="color: red">modprobe: FATAL: Module nf_conntrack_ipv4 not found in directory /lib/modules/4.18.0-348.7.1.el8_5.x86_64</span>

### 7. **安装Kubernetes组件**

    - 由于kubernetes的镜像在国外，速度比较慢，这里切换成国内的镜像源
    - 添加下面的配置

```shell
cat > /etc/yum.repos.d/kubernetes.repo <<EOF
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgchech=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
            http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF
```

##### - 安装kubeadm、kubelet和kubectl

    ```shell
    yum install --setopt=obsoletes=0 kubeadm-1.23.6 kubelet-1.23.6 kubectl-1.23.6 -y
    ```
##### - 配置kubelet的cgroup

    #编辑/etc/sysconfig/kubelet, 添加下面的配置

    ```vim
    KUBELET_CGROUP_ARGS="--cgroup-driver=systemd"
    KUBE_PROXY_MODE="ipvs"
    ```

##### - 设置kubelet开机自启

    ```shell
    systemctl enable kubelet
    ```

kubeadm init \
	--apiserver-advertise-address=106.15.41.8 \
	--image-repository registry.aliyuncs.com/google_containers \
	--kubernetes-version=v1.23.6 \
	--service-cidr=10.96.0.0/12 \
	--pod-network-cidr=10.244.0.0/16



rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
yum -y install https://www.elrepo.org/elrepo-release-7.0-4.el7.elrepo.noarch.rpm
yum --enablerepo="elrepo-kernel" -y install kernel-lt.x86_64
grub2-set-default 0
grub2-mkconfig -o /boot/grub2/grub.cfg



cat > /etc/sysconfig/modules/ipvs.modules <<EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF

