import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.19f61efe.js";const h=JSON.parse('{"title":"指南","description":"","frontmatter":{"page":true,"title":"指南","sidebar":false,"aside":true,"footer":true,"returnToTop":false},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}'),l={name:"guide/start.md"},o=p(`<h1 id="指南" tabindex="-1">指南 <a class="header-anchor" href="#指南" aria-label="Permalink to &quot;指南&quot;">​</a></h1><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>社区有很多关于新手引导的组件，比如优秀的 <a href="https://github.com/kamranahmedse/driver.js" target="_blank" rel="noreferrer">driver.js</a>、<a href="https://github.com/shipshapecode/shepherd" target="_blank" rel="noreferrer">shepherd</a>、<a href="https://introjs.com/" target="_blank" rel="noreferrer">introjs</a> ...</p><p>但这些组件主要解决的还是<code>静态页面</code>的引导，适用于需要引导的功能都在静态页面上呈现出来的场景。</p><p>而 <code>web-guide</code> 主要解决的是<code>动态页面</code>的引导，即需要引导的内容可以动态的按照先后顺序出现的场景。</p><p><a href="/example/demo1.html">查看案例</a></p><h2 id="如何使用" tabindex="-1">如何使用 <a class="header-anchor" href="#如何使用" aria-label="Permalink to &quot;如何使用&quot;">​</a></h2><h3 id="_1-安装" tabindex="-1">1. 安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1. 安装&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@liuyahui666/web-guide</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@liuyahui666/web-guide</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><p>或者</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">@liuyahui666/web-guide</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;">  </span><span style="color:#032F62;">add</span><span style="color:#24292E;">  </span><span style="color:#032F62;">@liuyahui666/web-guide</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><h3 id="_2-使用" tabindex="-1">2. 使用 <a class="header-anchor" href="#_2-使用" aria-label="Permalink to &quot;2. 使用&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> webGuide,{ defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@liuyahui666/web-guide&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@liuyahui666/web-guide/index.css&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">webGuide</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  target: document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#app&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 页面的跟元素</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    settings: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      immediate: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否立即开始引导</span></span>
<span class="line"><span style="color:#E1E4E8;">      stepArr: [ </span><span style="color:#6A737D;">// 每一步的配置</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">element</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;#addDiv&quot;</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 在那个元素上触发</span></span>
<span class="line"><span style="color:#E1E4E8;">          trigger: </span><span style="color:#9ECBFF;">&quot;click&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 如何触发</span></span>
<span class="line"><span style="color:#E1E4E8;">          popover: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            title:</span><span style="color:#9ECBFF;">&quot;请点击div&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 标题</span></span>
<span class="line"><span style="color:#E1E4E8;">            description:</span><span style="color:#9ECBFF;">&quot;点击div有惊喜哦&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 详情</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> webGuide,{ defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@liuyahui666/web-guide&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@liuyahui666/web-guide/index.css&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">webGuide</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  target: document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#app&quot;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 页面的跟元素</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    settings: {</span></span>
<span class="line"><span style="color:#24292E;">      immediate: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否立即开始引导</span></span>
<span class="line"><span style="color:#24292E;">      stepArr: [ </span><span style="color:#6A737D;">// 每一步的配置</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">element</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;#addDiv&quot;</span><span style="color:#24292E;">)</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 在那个元素上触发</span></span>
<span class="line"><span style="color:#24292E;">          trigger: </span><span style="color:#032F62;">&quot;click&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 如何触发</span></span>
<span class="line"><span style="color:#24292E;">          popover: {</span></span>
<span class="line"><span style="color:#24292E;">            title:</span><span style="color:#032F62;">&quot;请点击div&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 标题</span></span>
<span class="line"><span style="color:#24292E;">            description:</span><span style="color:#032F62;">&quot;点击div有惊喜哦&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 详情</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}));</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用 <code>defineConfig</code> 可获取完成的类型提示</p></div>`,14),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};