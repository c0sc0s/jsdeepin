import{_ as e,c as p,o as s,d as a}from"./app.b7ae7681.js";const u=JSON.parse('{"title":"core","description":"","frontmatter":{},"headers":[],"relativePath":"core/index.md","lastUpdated":null}'),t={name:"core/index.md"},c=a(`<h1 id="core" tabindex="-1">core <a class="header-anchor" href="#core" aria-hidden="true">#</a></h1><p>小明跟着书中的提示闭神尝试到</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>只见他的眼前突然闪起一片白光。</p><p>蒙蒙胧出现一个方块，方块中写了两行字</p><p><img src="https://cdn.jsdelivr.net/gh/c0sc0s/BlogPic/202301122138262.png" alt="image-20230112213140199"></p><p>小明呆住了，书上也没说有这种东西啊。</p><p>小明大喊，&quot;啊？书上说这是最简单的代码啊，出现的这是什么东西？&quot;，</p><p>&quot;什么？小家伙你能看到？&quot;</p><p>&quot;你是谁！谁在说话&quot;</p><p>&quot;吾乃xxx，....&quot;</p><p>略过</p><p>&quot;&quot;</p><p>小明一头雾水，这怎么和书中说的不一样，更离谱的还在后面，小明看到Lexical Environment逐渐分裂成几部分，旁边又出现一堆字，密密麻麻看不清，但从global Object上忽然探出一条线连在了上面，紧接着 this Binding 也同样射出一条线连在了上面。</p><p><img src="https://cdn.jsdelivr.net/gh/c0sc0s/BlogPic/202301122150956.png" alt="image-20230112214024610"></p><p>接着，代码慢慢模糊变了样子, var 居然消失不见，而在旁边圆形里，新浮现出一行歪歪扭扭的字</p><p>小明忽然想到，难道这就是<code>var a</code> 的作用，那么不出所料 a 马上就要赋值为1</p><p><img src="https://cdn.jsdelivr.net/gh/c0sc0s/BlogPic/202301122142942.png" alt="image-20230112214201907"></p><p>果然没过多久，又发生了变化,但 a 的旁边却赫然写了 <code>undefined</code></p><p><img src="https://cdn.jsdelivr.net/gh/c0sc0s/BlogPic/202301122144329.png" alt="image-20230112214432286"></p><p>这是怎么回事！按照道理这一定是 1 啊。</p><p>小明刚想完，耳边传来轻微的齿轮声响，而 他写的那行代码早已从 <code>var a = 1</code> 变成了 <code>a = 1</code>, 紧接着，这条代码发出亮光，小明清晰的看到，圆形中 a 旁边的 undefined, 变成了 1</p><p><img src="https://cdn.jsdelivr.net/gh/c0sc0s/BlogPic/202301122148346.png" alt="image-20230112214827302"></p><p>一切似乎又恢复了平静，小明的心中却久久不能平复...</p>`,24),n=[c];function o(i,l,r,d,g,_){return s(),p("div",null,n)}const m=e(t,[["render",o]]);export{u as __pageData,m as default};
