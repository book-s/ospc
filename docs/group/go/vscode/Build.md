# Golang打包

##  Golang打包Linux环境运行的程序
- Mac 下打包 Linux 环境下运行的程序
```sh
env GOOS=linux GOARCH=amd64 go build  main.go
```

## Golang打包Windows平台运行程序
- Mac 下打包Windows运行程序
```sh
env GOOS=windows GOARCH=amd64 go build  main.go
```
