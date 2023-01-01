## 基本语法
```go
package main

import "fmt"

func main() {
	//  1.这是单行注释

	/*
		2.多行注释
		3.块注释
	*/

	//  4. 在函数内声明变量必须使用，否则无法编译成功
	fmt.Println("Welcome Golang")
}
```
格式化Go语言的格式命令
```go
go fmt main.go
```
Go语言建议使用驼峰命名规则定义变量
```go


```


## Go语言基础语法

- 包声明：Go 语言源文件以 `package` 开头，表示这个文件属于哪个包。例如：
```sh
package main
```
- 导入包：使用 import 关键字导入其他包。例如：
```sh
import "fmt"
```
- 函数：Go 语言中的函数以 `func` 开头，例如：
```sh
func main() {
    fmt.Println("Hello, World!")
}
```
- 变量：使用 `var` 关键字定义变量。例如：
```sh
var x int
```
也可以这样定义：
```sh
var x,y int
```
或者这样:
```sh
var (
	x int
	y float64
	z string
)
```
- 常量：使用 `const` 关键字定义常量。例如：
```sh
const Pi = 3.14159265358979323846
const (
    StatusOK = 200
    StatusNotFound = 404
)
```
- 类型转换：使用类型名作为函数名来进行类型转换。例如：
```sh
x := 10
y := float64(x)
```
- 控制语句：Go 语言支持 `if`、`for` 和 `switch` 等控制语句。例如：
```sh
if x > 0 {
    fmt.Println("x is positive")
}
```
```sh
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

```sh
switch x {
case 0:
    fmt.Println("x is zero")
case 1:
    fmt.Println("x is one")
default:
    fmt.Println("x is something else")
}
```





## Go历史
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::



