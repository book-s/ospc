## 切片
Slice（切片）是 Go 语言中的一种数据类型，用来表示一个可动态增长的序列。切片是对数组的抽象，它通过描述一个数组的一段来描述序列。

与数组相比，切片更加灵活，因为它可以在运行时动态增长。你可以使用 `make` 函数来创建一个切片：
```sh
# 这将创建一个长度为 5、容量为 5 的切片，并将所有元素初始化为 0。
slice :=make([]int,5)

# 你也可以指定容量
slice[0] = 10
slice[1] = 20

# 或者使用切片语法来访问整个切片：
fmt.Println(slice[:])
```
你还可以使用 `append` 函数来向切片中添加元素：
```sh
slice = append(slice,30)
```
切片还有一些其他的操作方法，例如：  
- len 函数：返回切片的长度。
- cap 函数：返回切片的容量。
- copy 函数：将一个切片的内容复制到另一个切片。    
例如:
```sh
fmt.Println(len(slice))
fmt.Println(cap(slice))

newSlice := make([]int, 5)
copy(newSlice, slice)
```