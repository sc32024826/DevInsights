import{_ as s,o as n,c as a,d as l}from"./app.294102a3.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"shell/MacOS/Homebrew.md"}'),p={name:"shell/MacOS/Homebrew.md"},e=l(`<p>\u5B89\u88C5</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u5B98\u65B9\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/bash -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u56FD\u5185\u6362\u6E90\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">/bin/zsh -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u547D\u4EE4\u627E\u4E0D\u5230\u7684\u65F6\u5019 \u9700\u8981\u5728 \uFF5E/.zshrc \u4E2D\u6DFB\u52A0</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH:/opt/homebrew/bin</span></span>
<span class="line"></span></code></pre></div><p>\u5378\u8F7D</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/bin/zsh -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u5E38\u7528\u547D\u4EE4</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5</span></span>
<span class="line"><span style="color:#A6ACCD;">brew install FORMULA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">CASK...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u641C\u7D22</span></span>
<span class="line"><span style="color:#A6ACCD;">brew search TEXT</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">/REGEX/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5378\u8F7D\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">brew uninstall FORMULA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">CASK...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5B89\u88C5\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">brew list </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">CASK...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5305\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">brew info </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">CASK...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u54EA\u4E9B\u5305\u53EF\u4EE5\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">brew outdated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u66F4\u65B0\u6307\u5B9A\u5305\uFF08\u5B89\u88C5\u65B0\u5305\uFF0C\u4F46\u65E7\u5305\u4F9D\u65E7\u4FDD\u7559\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">brew upgrade </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">CASK...</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u66F4\u65B0Homebrew</span></span>
<span class="line"><span style="color:#A6ACCD;">brew update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u6E05\u7406\u65E7\u7248\u672C\u548C\u7F13\u5B58</span></span>
<span class="line"><span style="color:#A6ACCD;">brew cleanup       					</span><span style="color:#676E95;"># \u6E05\u7406\u6240\u6709\u5305\u7684\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">brew cleanup </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA ...</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;"># \u6E05\u7406\u6307\u5B9A\u5305\u7684\u65E7\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">brew cleanup -n             </span><span style="color:#676E95;"># \u67E5\u770B\u53EF\u6E05\u7406\u7684\u65E7\u7248\u672C\u5305\uFF0C\u4E0D\u6267\u884C\u5B9E\u9645\u64CD\u4F5C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u9501\u5B9A\u4E0D\u60F3\u66F4\u65B0\u7684\u5305\uFF08\u56E0\u4E3Aupdate\u4F1A\u4E00\u6B21\u66F4\u65B0\u6240\u6709\u7684\u5305\u7684\uFF0C\u5F53\u6211\u4EEC\u60F3\u5FFD\u7565\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">brew pin </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA ...</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">      </span><span style="color:#676E95;"># \u9501\u5B9A\u67D0\u4E2A\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">brew unpin </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">FORMULA ...</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># \u53D6\u6D88\u9501\u5B9A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8F6F\u4EF6\u670D\u52A1\u7BA1\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services list  								</span><span style="color:#676E95;"># \u67E5\u770B\u4F7F\u7528brew\u5B89\u88C5\u7684\u670D\u52A1\u5217\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services run formula</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">--all  		</span><span style="color:#676E95;"># \u542F\u52A8\u670D\u52A1\uFF08\u4EC5\u542F\u52A8\u4E0D\u6CE8\u518C\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services start formula</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">--all  	</span><span style="color:#676E95;"># \u542F\u52A8\u670D\u52A1\uFF0C\u5E76\u6CE8\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services stop formula</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">--all   	</span><span style="color:#676E95;"># \u505C\u6B62\u670D\u52A1\uFF0C\u5E76\u53D6\u6D88\u6CE8\u518C</span></span>
<span class="line"><span style="color:#A6ACCD;">brew services restart formula</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">--all </span><span style="color:#676E95;"># \u91CD\u542F\u670D\u52A1\uFF0C\u5E76\u6CE8\u518C</span></span>
<span class="line"></span></code></pre></div>`,7),o=[e];function c(t,r,i,y,D,C){return n(),a("div",null,o)}const u=s(p,[["render",c]]);export{F as __pageData,u as default};
