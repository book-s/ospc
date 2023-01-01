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