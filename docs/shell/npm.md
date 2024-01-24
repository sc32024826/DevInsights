### 安装依赖 遇到 node-sass 报错问题

原因是`node`版本 和 `node-sass`  `sass-loader` 三者之间的版本对应有问题, 查询`node`版本跟`node-sass`的版本兼容问题,  使用兼容的版本就可以了

或者 使用 `sass` 替换 `node-sass`, 此方案语法有些不同，

```css
/deep/ .abc{
    font-size: 24px;
}

/* 需要替换为 */
::v-deep .abc{
    font-size: 24px;
}
```

新建环境配置文件
`.env.development`
`.env.test`
`.env.production`

```shell
script:{
    "test": "vue-cli-service serve --mode test",
    "build:pro": "vue-cli-service build --mode production",
    "build:test": "vue-cli-service build --mode test"
}

```

## 统计 提交数量

```shell
# 通过命令 统计 某种类型的 提交数量 ^(feat)  或者 ^(feat|fix)
git log --pretty=format:'%s' | grep -E '^(feat)' | wc -l

# 统计总的提交数量
git rev-list --count HEAD
```