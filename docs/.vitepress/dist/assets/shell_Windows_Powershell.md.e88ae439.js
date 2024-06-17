import{_ as s,o as a,c as e,d as n}from"./app.294102a3.js";const l="/powershell-font.png",p="/vscode-terminal-font.png",A=JSON.parse('{"title":"\u5728Scoop\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86starship","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528\u5B57\u4F53","slug":"\u4F7F\u7528\u5B57\u4F53","link":"#\u4F7F\u7528\u5B57\u4F53","children":[]},{"level":2,"title":"\u7B80\u5316pnpm \u8F93\u5165","slug":"\u7B80\u5316pnpm-\u8F93\u5165","link":"#\u7B80\u5316pnpm-\u8F93\u5165","children":[]}],"relativePath":"shell/Windows/Powershell.md"}'),o={name:"shell/Windows/Powershell.md"},c=n(`<h1 id="\u5728scoop\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86starship" tabindex="-1">\u5728Scoop\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86starship <a class="header-anchor" href="#\u5728scoop\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86starship" aria-hidden="true">#</a></h1><p>\u7F16\u8F91 <code>$PROFILE</code> \u6587\u4EF6</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">code </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PROFILE</span></span>
<span class="line"></span></code></pre></div><p>\u6DFB\u52A0\u5185\u5BB9</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Invoke-Expression (&amp;starship init powershell)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F7F\u7528\u5B57\u4F53" tabindex="-1">\u4F7F\u7528\u5B57\u4F53 <a class="header-anchor" href="#\u4F7F\u7528\u5B57\u4F53" aria-hidden="true">#</a></h2><p>\u9700\u8981\u5728\u7EC8\u7AEF\u8BBE\u7F6E\u4E2D \u914D\u7F6E\u5B57\u4F53 \u5426\u5219<code>emoji</code> \u65E0\u6CD5\u6B63\u5E38\u663E\u793A</p><p><img src="`+l+'" alt="\u56FE1"></p><p><code>vscode</code> \u540C\u7406 \u9700\u8981\u5728\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u76F8\u5E94\u7684\u5B57\u4F53</p><p><img src="'+p+`" alt="\u56FE2"></p><h2 id="\u7B80\u5316pnpm-\u8F93\u5165" tabindex="-1">\u7B80\u5316<code>pnpm </code>\u8F93\u5165 <a class="header-anchor" href="#\u7B80\u5316pnpm-\u8F93\u5165" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u7528\u8BB0\u4E8B\u672C\u6253\u5F00\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">notepad </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">profile.AllUsersAllHosts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8BBE\u7F6Ealias</span></span>
<span class="line"><span style="color:#A6ACCD;">set-alias -name pn -value pnpm</span></span>
<span class="line"></span></code></pre></div>`,12),t=[c];function i(r,d,h,_,m,C){return a(),e("div",null,t)}const y=s(o,[["render",i]]);export{A as __pageData,y as default};
