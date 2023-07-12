# 使用中遇到的问题


从 macOS Catalina 开始，Mac 使用 zsh 作为默认shell，而它的配置文件是用户目录下的.zshrc文件，所以我们之前在定义环境变量时都会编辑这个文件。每次打开终端时都会读取这个配置文件，如果需要在当前的shell窗口读取最新的环境配置则需要执行source ~/.zshrc，这也是之前我们编辑该文件后重载配置的原因（为了让最新的配置生效😁）。


在 `zsh`中 使用 `nvm` 切换 `node` 版本之后 重启终端 会变回之前的 `node `版本

原因是 `nvm use` 版本 命令只会在当前终端会话中临时切换 `Node.js` 版本，并不会将其设置为默认版本。要设置默认版本，您可以使用 `nvm alias default 版本` 命令。

```bash
nvm alias default v16
```
