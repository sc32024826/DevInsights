# [standard-version](https://link.zhihu.com/?target=https%3A//github.com/conventional-changelog/standard-version)

```bash
#npm
npm install --save-dev standard-version
#yarn
yarn add -D standard-version
```

```json
//package.json
"script":{
    ...
    "release": "standard-version"
}
```
使用时
```bash
npm run release

yarn release

# 自定义版本号
yarn release -- --release-as 1.1.1

 ```
## 针对uniapp 做出的修改
- 在根目录下新建`.versionrc` 文件

```jsonc
{
    "bumpFiles": [
        {
            "filename": "manifest.json",  // uniapp 发版主要使用manifest.json中的versionName versionCode变量
            "updater": "standard-version-updater.js"  // 使用自定义规则 控制版本变量
        },
        {
            "filename": "package.json", //这个文件的版本没用使用到 但是也同步修改了
            "type": "json"
        }
    ]
}

```

- 在根目录新建上述文件中使用到的`updater`

```javascript
//standard-version-updater.js
const stringifyPackage = require('stringify-package')
const detectIndent = require('detect-indent')
const detectNewline = require('detect-newline')

module.exports.readVersion = function (contents) {
    // 读取manifest.json文件中的versionName
    return JSON.parse(contents).versionName;
}

module.exports.writeVersion = function (contents, version) {
    const json = JSON.parse(contents)
    let indent = detectIndent(contents).indent
    let newline = detectNewline(contents)
    // 根据命令更新版本号
    json.versionName = version
    // versionCode 通常用于应用市场对版本号的管理
    json.versionCode += 1
    return stringifyPackage(json, indent, newline)
}


```
