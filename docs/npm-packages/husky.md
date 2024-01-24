# 规范化提交

## 安装相关依赖

+ husky

```bash
#npm
npm install husky --save-dev

#yarn
yarn add -D husky
```

``

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
