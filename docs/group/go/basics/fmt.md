# fmt

## Go语言fmt.Printf使用指南
fmt标准库是我们在学习Go语言过程中接触最早最频繁的一个了，本文介绍了fmtb包的一些常用函数。
::: tip 
#### fmt
fmt包实现了类似C语言printf和scanf的格式化I/O。主要分为向外输出内容和获取输入内容两大部分。    

#### 向外输出
标准库fmt提供了以下几种输出相关函数。

>#### Print
>- Print系列函数会将内容输出到系统的标准输出，区别在于Print函数直接输出内容
>>```go
>>package main
>>
>>import "fmt"
>>
>>func main() {
>>	fmt.Print("Welcome Golang Print")
>>}
>>```
>- Printf函数支持格式化输出字符串
>- Println函数会在输出内容的结尾添加一个换行符
>#### Fprint
>- Fprint系列函数会将内容输出到一个io.Writer接口类型的变量w中，我们通常用这个函数往文件中写入内容。
>
>#### Sprint
>- Sprint系列函数会把传入的数据生成并返回一个字符串。

:::

::: info 通用占位符
| 占位符         | 说明           | 
| ------------- |:-------------:|
| %v            | 值的默认格式表示 | 
| %+v           | 类似%v，但输出结构体时会添加字段名 | 
| %#v           | 值的Go语法表示  | 
| %T            | 打印值的类型    | 
| %%            | 百分号         | 

```go
package main

import "fmt"

func main(){
    fmt.Printf("%v\n",100)
}
```

:::

## fmt.Print
::: info
Print函数直接输出内容，Print 中不能使用%s ,%d 或%c
:::
## fmt.Printf
::: tip
Printf函数支持格式化输出字符串，Printf 中能使用%s ,%d 或%c
:::
## fmt.Println


## 概述

包fmt使用类似于C的printf和scanf的函数实现格式化I/O。格式“动词”源自C，但更简单。

::: info General
- %v
- %+v
- %#v
- %T
- %%

:::

::: info 布尔值
- %t   
the word true or false
:::

::: tip 整数
- %b
- %c
- %d
- %o
- %O
- %q
- %x
- %X
- %U
:::

::: info 浮点型和复数
- %b
- %e
- %E
- %f
- %F
- %g
- %G
- %x
- %X
:::

::: info 字符串
- %s
- %q
- %x
- %X
:::

::: info 切片
- %p
:::

::: info 指针
- %p
:::

::: info 默认格式
- bool: %t
- int, int8 etc.: %d
- uint,uint8 etc.: %d, %#x if printed with %#v
- float32, complex64, etc: %g
- string: %s
- chan: %p
- pointer: %p
:::