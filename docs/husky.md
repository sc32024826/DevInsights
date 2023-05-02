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
npm install -g commitizen cz-conventional-changelog

#写入 配置文件
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

## 安装 git 钩子

```bash
npx husky install
```

```bash
# 手动添加钩子 如果没有添加这条 会导致 提交时没有验证
npx husky add .husky/commit-msg 'npx commitlint --edit $1

#Yarn 1 自动添加钩子
npx husky-init && yarn
```
使用第二条命令会在`package.json` 中创建脚本

```json
// package.json
{
  "scripts": {
    ...
    "prepare": "husky install"
  }
}
```
