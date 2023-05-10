import{_ as s,c as a,o as n,a as e}from"./app.a7d8838a.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Ubuntu Go环境","slug":"ubuntu-go环境","link":"#ubuntu-go环境","children":[{"level":3,"title":"Ubuntu安装Go","slug":"ubuntu安装go","link":"#ubuntu安装go","children":[]}]},{"level":2,"title":"ubuntu更新命令","slug":"ubuntu更新命令","link":"#ubuntu更新命令","children":[]},{"level":2,"title":"Ubuntu samba","slug":"ubuntu-samba","link":"#ubuntu-samba","children":[]}],"relativePath":"group/go/vscode/ubuntu.md"}'),l={name:"group/go/vscode/ubuntu.md"},o=e(`<h2 id="ubuntu-go环境" tabindex="-1">Ubuntu Go环境 <a class="header-anchor" href="#ubuntu-go环境" aria-hidden="true">#</a></h2><h3 id="ubuntu安装go" tabindex="-1">Ubuntu安装Go <a class="header-anchor" href="#ubuntu安装go" aria-hidden="true">#</a></h3><p>卸载旧版本</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">golang-go</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--auto-remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">golang-go</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>下载最新<a href="https://go.dev/dl/" target="_blank" rel="noreferrer">Go源码安装</a></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">下载最新版Go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">linux安装包</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://go.dev/dl/go1.19.4.linux-amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//解压go压缩包文件</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">go1.19.4.linux-amd64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">//移动到指定目录下</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>配置<br> vim打开.bashrc配置文件<code>vim .bashrc</code></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> GOROOT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/usr/local/go</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># 安装目录。</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> GOPATH</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/home/ubuntu/go/github.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;"># 工作环境</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$PATH</span><span style="color:#C3E88D;">:</span><span style="color:#A6ACCD;">$GOROOT</span><span style="color:#C3E88D;">/bin</span><span style="color:#A6ACCD;">                   </span><span style="color:#676E95;font-style:italic;"># 添加PATH路径</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>重新加载.bashrc配置文件命令<code>source ~/.bashrc</code>立即生效</p><p>修改 <code>go mod</code>代理</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">go env -w GO111MODULE=auto</span></span>
<span class="line"><span style="color:#A6ACCD;">go env -w GOPROXY=https://goproxy.cn,direct</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>初始化mod</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">go</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Project/m/v2</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#使用Go Modules v2 管理依赖项</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="ubuntu更新命令" tabindex="-1">ubuntu更新命令 <a class="header-anchor" href="#ubuntu更新命令" aria-hidden="true">#</a></h2><p>常用的APT命令参数：</p><ul><li><code>apt-cache search package</code> 搜索包</li><li><code>apt-cache show package</code> 获取包的相关信息，如说明、大小、版本等</li><li><code>sudo apt-get install package</code> 安装包</li><li><code>sudo apt-get install package – – reinstall</code> 重新安装包</li><li><code>sudo apt-get -f install</code> 修复安装”-f = ——fix-missing”</li><li><code>sudo apt-get remove package</code> 删除包</li><li><code>sudo apt-get remove package – – purge</code> 删除包，包括删除配置文件等</li><li><code>sudo apt-get update</code> 更新源</li><li><code>sudo apt-get upgrade</code> 更新已安装的包</li><li><code>sudo apt-get dist-upgrade</code> 升级系统</li><li><code>sudo apt-get dselect-upgrade</code> 使用 dselect 升级</li><li><code>apt-cache depends package</code> 了解使用依赖</li><li><code>apt-cache rdepends package</code> 是查看该包被哪些包依赖</li><li><code>sudo apt-get build-dep package</code> 安装相关的编译环境</li><li><code>apt-get source package</code> 下载该包的源代码</li><li><code>sudo apt-get clean &amp;&amp; sudo apt-get autoclean</code> 清理无用的包</li><li><code>sudo apt-get check</code> 检查是否有损坏的依赖</li></ul><h2 id="ubuntu-samba" tabindex="-1">Ubuntu samba <a class="header-anchor" href="#ubuntu-samba" aria-hidden="true">#</a></h2>`,17),p=[o];function t(c,r,i,u,d,C){return n(),a("div",null,p)}const y=s(l,[["render",t]]);export{g as __pageData,y as default};