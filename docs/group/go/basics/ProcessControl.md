# 流程控制

## if(条件语句)
- if的条件里可以复制
- if的条件里复制的变量作用域就是在这个if语句里
```go
package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	const filename = "abc.txt"
	// 两种if语句使用方法
	// contens, err := ioutil.ReadFile(filename)
	// if err != nil {
	// 	fmt.Println(err)
	// } else {
	// 	fmt.Printf("%s\n", contens)
	// }

	if contens, err := ioutil.ReadFile(filename); err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%s\n", contens)
	}
}
```

## switch (条件语句)
- switch会自动break，除非使用fallthrough
```go
func eval(a, b int, op string) int {
	var result int
	switch op {
	case "+":
		result = a + b
	case "-":
		result = a - b
	case "*":
		result = a * b
	case "/":
		result = a / b
		panic("unsuppported operator:" + op)
	}
	return result
}
```

- switch 后可以没有表达式
```go
package main

import (
	"fmt"
)

func grade(score int) string {
	g := ""
	switch {
	case score < 0 || score > 100:
        // panic函数 是让程序停下来报错
		panic(fmt.Sprintf(
			"Wrong score:%d", score))
	case score < 60:
		g = "F"
	case score < 80:
		g = "C"
	case score < 90:
		g = "B"
	case score <= 100:
		g = "A"
	}
	return g
}
func main() {
	fmt.Println(
		grade(0),
		grade(10),
		grade(60),
		grade(70),
		grade(82),
		grade(99),
		grade(100),
	)
}
```

## for循环
- for的条件里不需要括号
- for的条件里可以省略初始条件，结束条件，递增表达式
- for省略初始条件，相当于while
>```go
> for scanner.Scan(){
>     fmt.Println(scanner.Text())
>}
>```

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

/*
 1、定义函数读取文档数据
 2、使用for循环读物文档每行数据并打印出来
*/
func printFile(filename string) {
	file, err := os.Open(filename)
	// 判断打开文档是否正确，不正确停止程序报错提示
	if err != nil {
		// 程序报错停止程序并报出错误提示
		panic(err)
	}
	// 定义一个变量并使用bufio函数
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		fmt.Println(scanner.Text())
	}
}

// 定义一个for死循环函数如下
func forever() {
	for {
		fmt.Println("abc")
	}
}

func main() {
	printFile("abc.txt")
	forever()
}
```

## 基础语法
- for,if后面的条件没有括号
- if 条件里也可以定义变量
- 没有while
- switch不需要break，也可以直接switch多个条件

--------------------------------
Go 语言提供了多种流程控制语句，包括：
- 1. `if` 语句：用于条件判断。
- 2. `for` 语句：用于循环。
- 3. `switch` 语句：用于多条件判断。
- 4. `goto` 语句：用于跳转到指定标签。
- 5. `defer` 语句：用于延迟函数调用。

例如，你可以使用 `if`语句来进行条件判断：
```sh
if x > 0 {
    fmt.Println("x is positive")
} else {
    fmt.Println("x is non-positive")
}
```
你可以使用 `for` 语句来进行循环：
```sh
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```
你可以使用 `switch` 语句来进行多条件判断：
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