import{_ as s,c as n,o as a,a as l}from"./app.a7d8838a.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"切片","slug":"切片","link":"#切片","children":[]}],"relativePath":"group/go/basics/slice.md"}'),e={name:"group/go/basics/slice.md"},p=l(`<h2 id="切片" tabindex="-1">切片 <a class="header-anchor" href="#切片" aria-hidden="true">#</a></h2><p>Slice（切片）是 Go 语言中的一种数据类型，用来表示一个可动态增长的序列。切片是对数组的抽象，它通过描述一个数组的一段来描述序列。</p><p>与数组相比，切片更加灵活，因为它可以在运行时动态增长。你可以使用 <code>make</code> 函数来创建一个切片：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 这将创建一个长度为 5、容量为 5 的切片，并将所有元素初始化为 0。</span></span>
<span class="line"><span style="color:#FFCB6B;">slice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=make</span><span style="color:#89DDFF;">([]</span><span style="color:#A6ACCD;">int,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 你也可以指定容量</span></span>
<span class="line"><span style="color:#FFCB6B;">slice[0</span><span style="color:#A6ACCD;">] = </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#FFCB6B;">slice[1</span><span style="color:#A6ACCD;">] = </span><span style="color:#F78C6C;">20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 或者使用切片语法来访问整个切片：</span></span>
<span class="line"><span style="color:#FFCB6B;">fmt.Println(slice[</span><span style="color:#82AAFF;">:</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>你还可以使用 <code>append</code> 函数来向切片中添加元素：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">slice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">append</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">slice,30</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切片还有一些其他的操作方法，例如：</p><ul><li>len 函数：返回切片的长度。</li><li>cap 函数：返回切片的容量。</li><li>copy 函数：将一个切片的内容复制到另一个切片。<br> 例如:</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">fmt.Println(len(slice</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#FFCB6B;">fmt.Println(cap(slice</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">newSlice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span><span style="color:#89DDFF;">([]</span><span style="color:#A6ACCD;">int, </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">copy(newSlice,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">slice</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9),c=[p];function o(r,i,t,C,y,d){return a(),n("div",null,c)}const m=s(e,[["render",o]]);export{u as __pageData,m as default};