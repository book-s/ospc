## 变量与常量

## 标识符与关键字
::: info 标识符
在编程语言中标识符就是程序员定义的具有特殊意义的词，比如变量名、常量名、函数名等等。Go语言中标识符由字母数字和`_`(下划线)组成，并且只能以字母和`_`开头。
```go
abc
-
_123
a123
```
:::

::: danger 关键字
关键字是指编程语言中预先定义好的具有特殊含义的标识符。关键字和保留字都不建议用做变量。
```go
//Go语言中有25个关键字
break    default     func   interface select
case     defer       go     map       struct
chan     else        goto   package   switch
const    fallthrough if     range     type
continue for         import return    var

// Go语言中37个保留字
Constants: true    false   iota      nil
Types:     int     int8    int16     int32      int64
           uint    uint8   uint16    uint32     uint64
           float32 float64 complex64 complex128
           bool    byte    rune      string     error
Functions: make    len     cap       new        append  copy close delete
           complex real    imag
           panic   recover
```
:::

## 变量

### 内建变量类型
- 变量类型写在变量名之后
- 编译器可推测变量类型
- 没有char，只有rune
- 原生支持复数类型

::: info
- bool, string
- (u)int,(u)int8,(u)int16,(u)int32,(u)int64,uintptr
- tyte,rune
>- byte 8字节大小
>- rune 32字节大小
- float32,float64,complex64,complex128
:::



::: info 变量的来历
程序运行过程中的数据都是保存在内存中，我们想要在代码中操作某个数据时就需要去内存上找到这个变量，但是如果我们直接在代码中通过内存地址去操作变量的话，代码的可读性会非常差而且还容易出错，所以我们就利用变量将这个数据的内存地址保存起来，以后直接通过这个变量就能找到内存上对应的数据了。
:::

::: tip 变量类型
变量（Variable）的功能是存储数据。不同的变量保存的数据类型可能会不一样。经过半个多世纪的发展，编程语言已经基本形成了一套固定的类型，常见变量的数据类型有：整型、浮点型、布尔型等。

Go语言中的每一个变量都有自己的类型，并且变量必须经过声明才能开始使用。
:::

::: danger 变量声明
Go语言中的变量需要声明后才能使用，同一作用域内不支持重复声明。 并且Go语言的变量声明后必须使用。
:::
## 标准声明   
- Go语言的变量声明格式为
```go
var 变量名 变量类型
```
- 变量声明以关键字`var`开头，变量类型放在变量后面，行尾无需分号。
```go 
//举几个例子
var name string
var age int
var isOk bool
```
## 批量声明 
- 每声明一个变量就需要写`var`关键字会比较繁琐，Go语言中还支持批量声明
```go
// 批量声明变量
var(
    a string
    b int
    c bool
    d float32
)
```
- 在一行生成多个变量
```go
var a,b,c,s = 3,4,true,"vgo"
```
## 变量初始化
- Go语言在声明变量的时候，会自动对变量对应的内存区域进行初始化操作。每个变量会被初始化成其类型的默认值，例如： 整型和浮点型变量的默认值为`0`。 字符串变量的默认值为`空字符串`。 布尔型变量默认为`false`。 切片、函数、指针变量的默认为`nil`。

- 当然我们也可在声明变量的时候为其指定初始值。
```go
// 初始化的标准格式
var 变量名 类型 = 表达式

//举个例子
var name string = "Welcome Go"
var age int = 20

//一次初始化多个变量
var name,age = "Welcome Go", 20
```
## 类型推导    
- 有时候我们会将变量的类型省略，这个时候编译器会根据等号右边的值来推导变量的类型完成初始化。
```go
var name = "Welcome Go"
var age = 20
```
## 短变量声明    
- 在函数内部，可以使用更简略的 `:=` 方式声明并初始化变量。
- 短变量只能在函数内部调用。
```go
package main

import(
    "fmt"
)

//全局变量m
var m = 100

func main(){
    n := 10
    m := 100  //此处声明局部变量m
    fmt.Println(m,n)
}
```
## 匿名变量    
- 在使用多重赋值时，如果想要忽略某个值，可以使用`匿名变量`。匿名变量用一个下划线`_`表示。
```go
// 举例
package main

import (
    "fmt"
)

func foo() (int, string) {
	return 10, "Welcome Go"
}

func main(){
    x, _ := foo()
    _, y := foo()
    fmt.Println("x=",x)
    fmt.Println("y=",y)
}
// 匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明。
```
**注意事项：**
- 函数外的每个语句都必须以关键字开始（var、const、func等）
- `:=`不能使用在函数外。
- _多用于占位，表示忽略值。



## 常量

### 常量的定义
::: tip 
- const filename = "abc.txt"
- const 数值可作为各种类型使用
- const a,b = 3,4
- var c int = int(math.Sqrt(a*a + b*b))
:::

```go
package main

import (
	"fmt"
	"math"
)

func consts() {
	const filename = "abc.txt"
	const a, b = 3, 4
	var c int
	c = int(math.Sqrt(a*a + b*b))
	fmt.Println(filename, c)
}

func main() {
	fmt.Println("Welcome Golang")
	consts()
}
```
::: info
相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。 常量的声明和变量声明非常类似，只是把`var`换成了`const`，常量在定义的时候必须赋值。
```go
package main

import "fmt"

const pi = 3.1415
const e = 2.7182

func main() {
	fmt.Println(pi,e)
}
```
声明了`pi`和`e`这两个常量之后，在整个程序运行期间它们的值都不能再发生变化了。

```go
package main

import "fmt"

// 多个常量一起声明
const (
    pi = 3.1415
    e = 2.7182
)
func main() {
	fmt.Println(pi,e)
}
```

const同时声明多个常量时，如果省略了值则表示和上面一行的值相同。
```go
package main

import "fmt"

const (
	n1 = 100
	n2
	n3
)

func main() {
	fmt.Println(n1, n2, n3)
}
常量n1、n2、n3的值都是100
```
:::

## 枚举类型
::: tip
- 普通枚举类型
- 自增长枚举类型
:::

```go
package main

import (
	"fmt"
)

func enums() {
	const (
		cpp    = iota
		java   = 1
		python = 2
		Golang = 3
	)
	fmt.Println(cpp, java, python, Golang)

	const (
		b = 1 << (10 * iota)
		kb
		mb
		gb
		tb
		pb
	)
	fmt.Println(b, kb, mb, gb, tb, pb)
	fmt.Printf(" B = %v\n KB = %v\n MB = %v\n GB = %v\n TB = %v\n PB = %v\n", b, kb, mb, gb, tb, pb)
}

func main() {
	enums()
}
```

