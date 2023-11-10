# 规范化提交

## 安装相关依赖

+ husky

```bash
#npm
npm install husky --save-dev

#yarn
yarn add -D husky
```

+ commitlint

```bash
#npm
npm install --save-dev @commitlint/config-conventional @commitlint/cli

#yarn
yarn add -D @commitlint/config-conventional @commitlint/cli
```

+ Commitizen: 替代 git commit

```bash
npm install -g commitizen cz-conventional-changelog # 这个配置没有 emoji

npm install --g git-cz # 需要emoji 可以用这个

#写入 配置文件
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc

echo '{ "path": "git-cz" }' > ~/.czrc # 有emoji
```

## 安装 git 钩子

```bash
npx husky install
```

```bash
# 手动添加钩子 如果没有添加这条 会导致 提交时没有验证
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

npm pkg set scripts.prepare="husky install"

#Yarn 1 自动添加钩子
npx husky-init && yarn
```
使用第二种方式会自动在`package.json` 中创建脚本

```json
// package.json
{
  "scripts": {
    ...
    "prepare": "husky install"
  }
}
```

创建 `commitlint.config.js` 文件

```
module.exports = { extends: ['@commitlint/config-conventional'] };
```


## 统计 提交数量

```shell
# 通过命令 统计 某种类型的 提交数量 ^(feat)  或者 ^(feat|fix)
git log --pretty=format:'%s' | grep -E '^(feat)' | wc -l

# 统计总的提交数量
git rev-list --count HEAD
```