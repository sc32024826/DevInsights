
安装
```shell
# 官方版本
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 国内换源版本
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```


```shell
# 命令找不到的时候 需要在 ～/.zshrc 中添加
export PATH=$PATH:/opt/homebrew/bin
```

卸载

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

常用命令
```shell

# 安装
brew install FORMULA|CASK...

# 搜索
brew search TEXT|/REGEX/

# 卸载包
brew uninstall FORMULA|CASK...

# 查看安装列表
brew list [FORMULA|CASK...]

# 查看包信息
brew info [FORMULA|CASK...]

# 查看哪些包可以更新
brew outdated

# 更新指定包（安装新包，但旧包依旧保留）
brew upgrade [FORMULA|CASK...]

# 更新Homebrew
brew update

# 清理旧版本和缓存
brew cleanup       					# 清理所有包的旧版本
brew cleanup [FORMULA ...]  # 清理指定包的旧版本
brew cleanup -n             # 查看可清理的旧版本包，不执行实际操作

# 锁定不想更新的包（因为update会一次更新所有的包的，当我们想忽略的时候可以使用这个命令）
brew pin [FORMULA ...]      # 锁定某个包
brew unpin [FORMULA ...]    # 取消锁定

# 软件服务管理
brew services list  								# 查看使用brew安装的服务列表
brew services run formula|--all  		# 启动服务（仅启动不注册）
brew services start formula|--all  	# 启动服务，并注册
brew services stop formula|--all   	# 停止服务，并取消注册
brew services restart formula|--all # 重启服务，并注册
```
