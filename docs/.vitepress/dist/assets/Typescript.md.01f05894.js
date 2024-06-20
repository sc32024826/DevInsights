import{_ as s,o as n,c as a,d as l}from"./app.294102a3.js";const i=JSON.parse(`{"title":"Typescript","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u627E\u4E0D\u5230\u540D\u79F0\u201C__dirname\u201D","slug":"_1-\u627E\u4E0D\u5230\u540D\u79F0-dirname","link":"#_1-\u627E\u4E0D\u5230\u540D\u79F0-dirname","children":[]},{"level":2,"title":"2. \u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757 XXX, \u6709\u65F6\u5019import XXX from '@/XXX/index' \u7701\u7565index \u6216\u8005 .ts \u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519","slug":"_2-\u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757-xxx-\u6709\u65F6\u5019import-xxx-from-xxx-index-\u7701\u7565index-\u6216\u8005-ts-\u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519","link":"#_2-\u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757-xxx-\u6709\u65F6\u5019import-xxx-from-xxx-index-\u7701\u7565index-\u6216\u8005-ts-\u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519","children":[]},{"level":2,"title":"3. \u6CDB\u578B\u7EA6\u675F extend","slug":"_3-\u6CDB\u578B\u7EA6\u675F-extend","link":"#_3-\u6CDB\u578B\u7EA6\u675F-extend","children":[]},{"level":2,"title":"4. \u51FD\u6570 \u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528","slug":"_4-\u51FD\u6570-\u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528","link":"#_4-\u51FD\u6570-\u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528","children":[]},{"level":2,"title":"5. TypeScript\u7684\u8BED\u6CD5\uFF0C\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26: !.","slug":"_5-typescript\u7684\u8BED\u6CD5-\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26","link":"#_5-typescript\u7684\u8BED\u6CD5-\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26","children":[]},{"level":2,"title":"9. infer ts \u4E2D\u7684\u7C7B\u578B\u63A8\u65AD","slug":"_9-infer-ts-\u4E2D\u7684\u7C7B\u578B\u63A8\u65AD","link":"#_9-infer-ts-\u4E2D\u7684\u7C7B\u578B\u63A8\u65AD","children":[]}],"relativePath":"Typescript.md"}`),p={name:"Typescript.md"},o=l(`<h1 id="typescript" tabindex="-1">Typescript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h1><h2 id="_1-\u627E\u4E0D\u5230\u540D\u79F0-dirname" tabindex="-1">1. \u627E\u4E0D\u5230\u540D\u79F0\u201C__dirname\u201D <a class="header-anchor" href="#_1-\u627E\u4E0D\u5230\u540D\u79F0-dirname" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add -D @types/node</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-\u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757-xxx-\u6709\u65F6\u5019import-xxx-from-xxx-index-\u7701\u7565index-\u6216\u8005-ts-\u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519" tabindex="-1">2. \u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757 XXX, \u6709\u65F6\u5019<code>import XXX from &#39;@/XXX/index&#39;</code> \u7701\u7565<code>index</code> \u6216\u8005 <code>.ts</code> \u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519 <a class="header-anchor" href="#_2-\u627E\u4E0D\u5230\u6307\u5B9A\u7684\u6A21\u5757-xxx-\u6709\u65F6\u5019import-xxx-from-xxx-index-\u7701\u7565index-\u6216\u8005-ts-\u540E\u7F00\u540D\u65F6\u4F1A\u62A5\u9519" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5728<code>tsconfig.json</code> \u4E2D \u914D\u7F6E<code>compilerOptions.paths</code> \u4F8B\u5982 <code>&quot;@/*&quot;: [&quot;src/*&quot;]</code></p><h2 id="_3-\u6CDB\u578B\u7EA6\u675F-extend" tabindex="-1">3. \u6CDB\u578B\u7EA6\u675F extend <a class="header-anchor" href="#_3-\u6CDB\u578B\u7EA6\u675F-extend" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Idemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">length</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">demo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Idemo</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// extends \u8868\u793A\u6CDB\u578B\u7EA6\u675F \u4F20\u5165\u7684\u7C7B\u578B\u5FC5\u987B\u5177\u6709 length \u5C5E\u6027</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">demo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">121</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u2713</span></span>
<span class="line"><span style="color:#82AAFF;">demo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \xD7</span></span>
<span class="line"></span></code></pre></div><h2 id="_4-\u51FD\u6570-\u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528" tabindex="-1">4. \u51FD\u6570 \u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528 <a class="header-anchor" href="#_4-\u51FD\u6570-\u8F93\u5165\u8F93\u51FA\u7C7B\u578B\u7684\u590D\u7528" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ifunctiondemo</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-typescript\u7684\u8BED\u6CD5-\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26" tabindex="-1">5. TypeScript\u7684\u8BED\u6CD5\uFF0C\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26: <code>!.</code> <a class="header-anchor" href="#_5-typescript\u7684\u8BED\u6CD5-\u53EB\u975E\u7A7A\u65AD\u8A00\u64CD\u4F5C\u7B26" aria-hidden="true">#</a></h2><p>\u548C<code>?.</code>\u76F8\u53CD\uFF0C\u8FD9\u4E2A\u7B26\u53F7\u8868\u793A\u5BF9\u8C61\u540E\u9762\u7684\u5C5E\u6027\u4E00\u5B9A\u4E0D\u662Fnull\u6216undefined</p><h2 id="_9-infer-ts-\u4E2D\u7684\u7C7B\u578B\u63A8\u65AD" tabindex="-1">9. <code>infer</code> ts \u4E2D\u7684\u7C7B\u578B\u63A8\u65AD <a class="header-anchor" href="#_9-infer-ts-\u4E2D\u7684\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a></h2>`,12),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};