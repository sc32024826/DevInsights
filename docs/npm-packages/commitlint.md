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

创建 `commitlint.config.js` 文件

```
module.exports = { extends: ['@commitlint/config-conventional'] };
```
