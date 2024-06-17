import{_ as s,o as n,c as a,d as p}from"./app.294102a3.js";const d=JSON.parse('{"title":"Nuxt 3","description":"","frontmatter":{},"headers":[],"relativePath":"Nuxt3.md"}'),l={name:"Nuxt3.md"},e=p(`<h1 id="nuxt-3" tabindex="-1">Nuxt 3 <a class="header-anchor" href="#nuxt-3" aria-hidden="true">#</a></h1><p>\u521B\u5EFA\u9879\u76EE</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npx nuxi init PROJECT_NAME</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// nuxt.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nuxtjs/tailwindcss</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@pinia/nuxt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@pinia-plugin-persistedstate/nuxt</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// pinia \u6301\u4E45\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// XXXstore</span></span>
<span class="line"><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">    persist: </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,4),o=[e];function t(c,r,i,D,y,C){return n(),a("div",null,o)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};
