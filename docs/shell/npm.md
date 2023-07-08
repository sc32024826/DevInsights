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
