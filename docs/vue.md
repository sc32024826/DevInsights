# vue 笔记

## render 函数

当遍历VNode数组时,务必使用 ***[element]*** 此处卡了我一整天, 必须用`[]`包裹

```javascript
    const tem = this.$slots.default.slice(0, this.len)
    const other = this.$slots.default.slice(this.len).filter(m => m.tag)
    if (other.length > 0) {
      // 此处的 [element] 尤为重要
      const renderedElements = other.map((element, index) => {
        return h('el-dropdown-item', { key: index }, [element]);
      });
      return h('div', {}, [
        tem,
        h('el-dropdown', {}, [
          h('div', { class: 'show-more' }, [
            h('span', '更多'),
            h('i', { class: 'el-icon-arrow-down el-icon--right' })
          ]),
          h('el-dropdown-menu', { slot: 'dropdown' }, renderedElements)
        ])
      ])
    } else {
      return h('div', tem)
    }
```