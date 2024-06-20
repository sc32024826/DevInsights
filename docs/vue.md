# vue

## render 函数

当遍历 VNode 数组时,务必使用 **_[element]_** 此处卡了我一整天, 必须用`[]`包裹

```javascript
const tem = this.$slots.default.slice(0, this.len);
const other = this.$slots.default.slice(this.len).filter((m) => m.tag);
if (other.length > 0) {
  // 此处的 [element] 尤为重要
  const renderedElements = other.map((element, index) => {
    return h("el-dropdown-item", { key: index }, [element]);
  });
  return h("div", {}, [
    tem,
    h("el-dropdown", {}, [
      h("div", { class: "show-more" }, [
        h("span", "更多"),
        h("i", { class: "el-icon-arrow-down el-icon--right" }),
      ]),
      h("el-dropdown-menu", { slot: "dropdown" }, renderedElements),
    ]),
  ]);
} else {
  return h("div", tem);
}
```

## 遇到的问题

Q: 当我在某个脚本中使用

```js
import { useAppStore } from "@/store";
```

中 一直报错 说找不到 `@/store` 这个模块

A: 检查 `tsconfig.json` 文件中 `paths` 配置项是否正确配置

```json
{
  compilerOptions:{
    // ...
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
