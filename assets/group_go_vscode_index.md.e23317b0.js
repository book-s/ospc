import{_ as s,c as a,o as e,a as n}from"./app.a7d8838a.js";const m=JSON.parse('{"title":"VS Code配置Go语言开发环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"VScode for mac 开发环境提示错误解决方案","slug":"vscode-for-mac-开发环境提示错误解决方案","link":"#vscode-for-mac-开发环境提示错误解决方案","children":[]}],"relativePath":"group/go/vscode/index.md"}'),o={name:"group/go/vscode/index.md"},l=n(`<h1 id="vs-code配置go语言开发环境" tabindex="-1">VS Code配置Go语言开发环境 <a class="header-anchor" href="#vs-code配置go语言开发环境" aria-hidden="true">#</a></h1><h2 id="vscode-for-mac-开发环境提示错误解决方案" tabindex="-1">VScode for mac 开发环境提示错误解决方案 <a class="header-anchor" href="#vscode-for-mac-开发环境提示错误解决方案" aria-hidden="true">#</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">新版链接如下</span></span>
<span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GO111MODULE=on</span></span>
<span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">env</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-w</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GOPROXY=https://proxy.golang.com.cn,direct</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,3),c=[l];function p(r,t,d,i,C,_){return e(),a("div",null,c)}const y=s(o,[["render",p]]);export{m as __pageData,y as default};