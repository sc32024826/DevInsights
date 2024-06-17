import{_ as s,o as n,c as a,d as p}from"./app.294102a3.js";const D=JSON.parse('{"title":"uniapp  uts \u8BED\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"uts.md"}'),l={name:"uts.md"},t=p(`<h1 id="uniapp-uts-\u8BED\u6CD5" tabindex="-1">uniapp uts \u8BED\u6CD5 <a class="header-anchor" href="#uniapp-uts-\u8BED\u6CD5" aria-hidden="true">#</a></h1><p>\u76EE\u5F55\u7ED3\u6784</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u250C\u2500common                          // \u53EF\u8DE8\u7AEF\u516C\u7528\u7684uts\u4EE3\u7801\u3002\u63A8\u8350\uFF0C\u4E0D\u5F3A\u5236</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500static                          // \u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500utssdk</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500app-android                 //Android\u5E73\u53F0\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500assets                  //Android\u539F\u751Fassets\u8D44\u6E90\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500libs                    //Android\u539F\u751F\u5E93\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500res                     //Android\u539F\u751Fres\u8D44\u6E90\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500AndroidManifest.xml     //Android\u539F\u751F\u5E94\u7528\u6E05\u5355\u6587\u4EF6\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500config.json             //Android\u539F\u751F\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u2514\u2500index.uts               //Android\u539F\u751F\u63D2\u4EF6\u80FD\u529B\u5B9E\u73B0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500app-ios                     //iOS\u5E73\u53F0\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500Frameworks              //iOS\u539F\u751F\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9 framework \u4F9D\u8D56\u5E93\u5B58\u653E\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500Libs              	  //iOS\u539F\u751F\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9 .a \u4F9D\u8D56\u5E93\u5B58\u653E\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500Resources               //iOS\u539F\u751F\u6240\u4F9D\u8D56\u7684\u8D44\u6E90\u6587\u4EF6\u5B58\u653E\u76EE\u5F55\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500info.plist              //iOS\u539F\u751F\u6240\u9700\u8981\u6DFB\u52A0\u5230\u4E3B info.plist \u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500UTS.entitlements        //iOS\u539F\u751F\u6240\u9700\u8981\u6DFB\u52A0\u5230\u4E3B\u5DE5\u7A0B .entitlements \u6587\u4EF6\u4E2D\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u251C\u2500config.json             //iOS\u539F\u751F\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u2514\u2500index.uts               //iOS\u539F\u751F\u63D2\u4EF6\u80FD\u529B\u5B9E\u73B0</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500web                         //web\u5E73\u53F0\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2502	\u2514\u2500index.uts</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-alipay                   // \u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-baidu                    // \u767E\u5EA6\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-jd                       // \u4EAC\u4E1C\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF08\u4EC5\u9650vue2\uFF09\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-kuaishou                 // \u5FEB\u624B\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-lark                     // \u98DE\u4E66\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-qq                       // QQ\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-toutiao                  // \u5B57\u8282\u8DF3\u52A8\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-weixin                   // \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500mp-xhs                      // \u5C0F\u7EA2\u4E66\u5C0F\u7A0B\u5E8F\u5E73\u53F0\uFF08\u4EC5\u9650vue2\uFF09\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u251C\u2500index.d.ts                  // \u63D2\u4EF6\u80FD\u529B\u58F0\u660E\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502	\u2514\u2500index.uts                   // \u8DE8\u5E73\u53F0\u63D2\u4EF6\u80FD\u529B\u5B9E\u73B0\uFF0C\u53EF\u9009</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500package.json                    // \u63D2\u4EF6\u6E05\u5355\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),e=[t];function o(c,i,A,r,C,d){return n(),a("div",null,e)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
