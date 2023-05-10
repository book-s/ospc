import{_ as s,c as a,o as l,a as n}from"./app.a7d8838a.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"UserSystem","slug":"usersystem","link":"#usersystem","children":[]}],"relativePath":"group/ospc/Introduction/usersystem.md"}'),e={name:"group/ospc/Introduction/usersystem.md"},i=n(`<h2 id="usersystem" tabindex="-1">UserSystem <a class="header-anchor" href="#usersystem" aria-hidden="true">#</a></h2><ol><li><p>用户模块（UserModular）</p><blockquote><ol><li>用户信息（UserInformation）</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1、账号组成:高度值+时间戳+随机数+国籍+姓名+号码+登录信息+上个区块哈希值</span></span>
<span class="line"><span style="color:#A6ACCD;">2、加密方法:用SHA-256加密生成唯一哈希值 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>高度值</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">高度值是一个整数，表示区块高度，每个区块高度都是唯一的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>时间戳</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">注册账号获取系统的当前时间戳</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>随机数</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">随机数生成通过使用鼠标生成随机数页面无序生成随机数页面划过鼠标生成</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4"><li>国籍</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">例如：中国、美国、英国、日本、韩国、泰国、新加坡、澳大利亚、加拿大、欧洲、其他</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="5"><li>姓名</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">全球唯一身份识别码名称） 例如:中国 身份证姓名</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="6"><li>号码</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">1 全球唯一身份识别码</span></span>
<span class="line"><span style="color:#A6ACCD;">2 例如:中国 身份证号码、美国（社会安全码）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="7"><li>登录信息</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">登录自定义字符串（便于用户易记录）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="8"><li>上个区块哈希值</li></ol><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">获取上个区块链哈希值</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="9"><li>生成(高度值+时间戳+随机数+登录信息)二维码</li></ol><div class="warning custom-block"><p class="custom-block-title">二维码用于修改密码使用</p><ol><li>实现查看和下载二维码</li><li>使用二维码条件（通过修改登录密码功能才使用二维码信息)</li></ol></div></div></blockquote><blockquote><ol start="2"><li>密码修改(PasswordModification) )</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ol><li>高度值 + 时间戳 + 随机数 + 国籍 + 姓名 + 号码 + 登录信息 + 上个区块哈希值、验证成功出现密码修改功能</li><li>密码生成规则（高度值 + 登录信息 + 密码）组合生成SHA-256哈希值保存数据库</li><li>密码修改成功后,自动同步到整个区块链主链上</li></ol></div></blockquote><blockquote><ol start="3"><li>分布式加密(DistributedEncryption)</li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ol><li>局域网分布式加密</li><li>互联网分布式加密</li></ol></div></blockquote></li></ol>`,2),o=[i];function p(t,c,r,d,u,b){return l(),a("div",null,o)}const y=s(e,[["render",p]]);export{C as __pageData,y as default};
