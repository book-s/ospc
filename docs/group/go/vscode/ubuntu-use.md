## Ubuntu基础用法
## 修改root密码
### root密码设置
```sh
sudo passwd root
new password:输入新密码
Retype new password:再次输入新密码
Passwd:password updated successfully 密码更新成功
```
### ubuntu主机名修改
```sh
hostname 查看主机名称
sudo vi /etc/hostname
```
### ssh连接远程服务器
```sh
ssh user@ip+回车输入密码登录
```
### tree根据文件层级列出目录
```sh
tree -L 2
```

### 端口查看命令
```sh
sudo netstat -ntlp
sudo kill -9 PID进程号
```
## Ubuntu创建用户和目录

### 创建新用户
```sh
# 注意要在后面加-m，否则不会在home路径下创建该用户的文件夹
sudo useradd username -m

# 执行如下命令查看passwd文件中是否有刚才添加的用户名，如果有，则表示添加成功
cat /etc/passwd
```

### 新用户设置密码
```sh
# 执行如下命令弹出提示窗口中设置密码即可
sudo passwd username
```

### 用户加入指定工作组
```sh
sudo gpasswd -a username groupname            # 将用户加入工作组
sudo gpasswd -M username,username2 groupname  # 将用户批量加入工作组

```

### 查看新的用户
```sh
cat /etc/passwd | grep username
cat -n /etc/passwd                # 查看用户详细信息，参数-n显示行号
cat -n /etc/group                 # 查看组详细信息
who                               # 查看当前所有登录的用户列表
whoami                            # 查看当前登录用户的账号
```

### 新用户增加sudo权限

在使用Linux系统过程中，通常情况下，我们都会使用普通用户进行日常操作，而root用户只有在权限分配及系统设置时才会使用，而root用户的密码也不可能公开。普通用户执行到系统程序时，需要临时提升权限，sudo就是我们常用的命令，仅需要输入当前用户密码，便可以完成权限的临时提升。在使用sudo命令的过程中，我们经常会遇到当前用户不在sudoers文件中的提示信息，解决方法如下

### 修改/etc/sudoers权限
```sh
# 执行如下命令 增加写权限
sudo chmod u+w /etc/sudoers
```

### 编辑/etc/sudoers
```sh
sudo vim /etc/sudoers
username ALL=(ALL:ALL) ALL
```
在root用户下面增加，username为新的用户，根据需要自sing修改

### 恢复原来/etc/sudoers权限
```sh
sudo chmod u-w /etc/sudoers
```

### 新用户远程登录无法显示路径
```sh
sudo vim /etc/passwd
username:x:1002:1002::/home/gitbook:/bin/sh
改为
gitbook:x:1002:1002::/home/gitbook:/bin/bash
```
## 删除用户

```sh
# 加上-r可以删除/home/路径下的用户文件夹，否则不能
sudo userdel -r username
```
## 查看组方法
### 组查看
```sh
groups
```
查看groups当前用户所在组

### 查看用户所在组
```sh
groups username
```
### 查看ID在所属组
```sh
id username
```

### 直接查看组文件 more /etc/group
```sh
more /etc/group
```


## 删除组
```sh
groupdel users
```


## Samba安装
使用以下命令安装samba程序
```sh
sudo apt update             # 更新程序列表
sudo apt install samba      # 安装samba程序
```
通过运行`whereis samba`命令、检查samba安装是否成功，显示一下内容表示安装成功
```sh
samba: /usr/sbin/samba /usr/lib/x86_64-linux-gnu/samba /etc/samba /usr/share/samba /usr/share/man/man8/samba.8.gz /usr/share/man/man7/samba.7.gz
```
### 配置创建共享目录
```sh
# 新建目录，用于共享
sudo mkdir /home/<userfile>/Share

# 更改权限信息
sudo chown nobody:nogroup /home/<userfile>/share

# 给所有用户添加读写权限
sudo chmod 777 /home/<userfile>/Share
```

### 添加Samba用户
- 添加 Samba 用户，用于在访问共享目录时使用。这里添加的用户在 Linux 中必须存在。
```sh
sudo smbpasswd -a username
```

### Samba配置
使用以下命令编辑samba配置文件
```sh
sudo vim /etc/samba/smb.conf
```
smb.conf文件最后面追加如下配置信息
```sh
[share]
  comment = SHARE
  path = /home/<userfile>/share
  browseable = yes
  writable = yes
  available = yes
  valid users = sshare,@sshare      # 插入组用@sshare让跟多用户可以访问
```
运行命令`systemctl restart`重新启动Samba服务
```sh
sudo service smbd restart
```
更新防火墙规则以允许Samba流量
```sh
sudo ufw allow samba
```
## ufw防火墙状态
- `sudo ufw status` 查看防火墙当前状态
- `sudo ufw enable` 开启防火墙
- `sudo ufw disable` 关闭防火墙
- `sudo ufw version` 查看防火墙版本
- `sudo ufw default allow` 默认允许外部访问本机
- `sudo ufw default deny` 默认拒绝外部访问主机
- `sudo ufw allow 443` 允许外部访问443端口
- `sudo ufw deny 443` 拒绝外部访问443端口
- `sudo ufw allow from 192.168.0.1` 允许某个IP地址访问本机所有端口

## 静态IP设置

编辑`sudo vim /etc/netplan/50-cloud-init.yaml`文件

```sh
# 内容如下
network:
    ethernets:
        ens32:
            addresses:
            - 192.168.120.8/24
            dhcp4: false
            gateway4: 192.168.120.1
           nameservers:
                addresses:
                - 8.8.8.8
                search: []
    version: 2
```

重新加载配置
```sh
sudo netplan apply
```
**说明**
- ens33:网络接口名称
- dhcp4:接收IPV4接口的dhcp属性
- dhcp6:接收IPV6接口的dhcp属性
- addresses:接口的静态地址序列
- gateway4:默认网关的IPV4地址
- Nameservers:DNS服务器地址


