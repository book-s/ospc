## Ubuntu Go环境

### Ubuntu安装Go
卸载旧版本
```sh
sudo apt-get remove golang-go
sudo apt-get remove --auto-remove golang-go
```
下载最新[Go源码安装](https://go.dev/dl/)

```sh
// 下载最新版Go linux安装包
wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz

//解压go压缩包文件
tar -zxvf go1.19.4.linux-amd64.tar.gz

//移动到指定目录下
sudo mv go /usr/local/
```
配置   
vim打开.bashrc配置文件`vim .bashrc`
```sh
export GOROOT="/usr/local/go"                   # 安装目录。
export GOPATH="/home/ubuntu/go/github.com"      # 工作环境
export PATH=$PATH:$GOROOT/bin                   # 添加PATH路径
```
重新加载.bashrc配置文件命令`source ~/.bashrc`立即生效

修改 `go mod`代理
```
go env -w GO111MODULE=auto
go env -w GOPROXY=https://goproxy.cn,direct
```
初始化mod
```sh
go mod init Project/m/v2  #使用Go Modules v2 管理依赖项
```

## ubuntu更新命令
常用的APT命令参数：

- `apt-cache search package` 搜索包
- `apt-cache show package` 获取包的相关信息，如说明、大小、版本等
- `sudo apt-get install package` 安装包
- `sudo apt-get install package – – reinstall` 重新安装包
- `sudo apt-get -f install` 修复安装”-f = ——fix-missing”
- `sudo apt-get remove package` 删除包
- `sudo apt-get remove package – – purge` 删除包，包括删除配置文件等
- `sudo apt-get update` 更新源
- `sudo apt-get upgrade` 更新已安装的包
- `sudo apt-get dist-upgrade` 升级系统
- `sudo apt-get dselect-upgrade` 使用 dselect 升级
- `apt-cache depends package` 了解使用依赖
- `apt-cache rdepends package` 是查看该包被哪些包依赖
- `sudo apt-get build-dep package` 安装相关的编译环境
- `apt-get source package` 下载该包的源代码
- `sudo apt-get clean && sudo apt-get autoclean` 清理无用的包
- `sudo apt-get check` 检查是否有损坏的依赖