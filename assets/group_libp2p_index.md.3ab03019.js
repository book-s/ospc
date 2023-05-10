import{_ as s,c as n,o as a,a as p}from"./app.a7d8838a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"group/libp2p/index.md"}'),l={name:"group/libp2p/index.md"},e=p(`<p><strong>.github</strong><br><strong>config</strong><br><strong><a href="./libp2p_core.html">core</a></strong><br><strong>dashboards</strong><br><strong>examples</strong><br><strong>p2p</strong></p><ul><li>discovery</li><li>host</li><li>metricshelper</li><li>muxer</li><li>net</li><li>protocol</li><li>security</li><li>test</li><li>transport <strong>scripts</strong></li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// routing 包实现了 libp2p 路由协议相关的功能。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Option 是单个路由选项。</span></span>
<span class="line"><span style="color:#A6ACCD;">type Option func(opts *Options) error</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Options 是一组路由选项。</span></span>
<span class="line"><span style="color:#A6ACCD;">type Options struct {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否允许使用过期的值。</span></span>
<span class="line"><span style="color:#A6ACCD;">Expired bool</span></span>
<span class="line"><span style="color:#A6ACCD;">// 是否离线操作。</span></span>
<span class="line"><span style="color:#A6ACCD;">Offline bool</span></span>
<span class="line"><span style="color:#A6ACCD;">// 其他（ValueStore 实现特定的）选项。</span></span>
<span class="line"><span style="color:#A6ACCD;">Other map[interface{}]interface{}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Apply 将给定的选项应用于此 Options。</span></span>
<span class="line"><span style="color:#A6ACCD;">func (opts *Options) Apply(options ...Option) error {</span></span>
<span class="line"><span style="color:#A6ACCD;">for _, o := range options {</span></span>
<span class="line"><span style="color:#A6ACCD;">if err := o(opts); err != nil {</span></span>
<span class="line"><span style="color:#A6ACCD;">return err</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">return nil</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// ToOption 将此 Options 转换为单个 Option。</span></span>
<span class="line"><span style="color:#A6ACCD;">func (opts *Options) ToOption() Option {</span></span>
<span class="line"><span style="color:#A6ACCD;">return func(nopts *Options) error {</span></span>
<span class="line"><span style="color:#A6ACCD;">*nopts = *opts</span></span>
<span class="line"><span style="color:#A6ACCD;">if opts.Other != nil {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 如果原选项的 Other 字段不为 nil，则对其进行深拷贝。</span></span>
<span class="line"><span style="color:#A6ACCD;">nopts.Other = make(map[interface{}]interface{}, len(opts.Other))</span></span>
<span class="line"><span style="color:#A6ACCD;">for k, v := range opts.Other {</span></span>
<span class="line"><span style="color:#A6ACCD;">nopts.Other[k] = v</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">return nil</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Expired 是一个选项，告诉路由系统在没有更新的记录时返回过期的记录。</span></span>
<span class="line"><span style="color:#A6ACCD;">var Expired Option = func(opts *Options) error {</span></span>
<span class="line"><span style="color:#A6ACCD;">opts.Expired = true</span></span>
<span class="line"><span style="color:#A6ACCD;">return nil</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Offline 是一个选项，告诉路由系统离线操作（即仅依赖于缓存/本地数据）。</span></span>
<span class="line"><span style="color:#A6ACCD;">var Offline Option = func(opts *Options) error {</span></span>
<span class="line"><span style="color:#A6ACCD;">opts.Offline = true</span></span>
<span class="line"><span style="color:#A6ACCD;">return nil</span></span>
<span class="line"><span style="color:#A6ACCD;">}\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,3),r=[e];function o(i,c,t,b,A,C){return a(),n("div",null,r)}const y=s(l,[["render",o]]);export{m as __pageData,y as default};
