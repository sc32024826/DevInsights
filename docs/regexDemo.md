# 正则

```javascript
import {
    mapActions,
    mapMutations
} from 'vuex'
```

```
(?<=\{)(\n\s+)

(?<=\{) 表示正后发断言, 检查从目标往前查询是否有`{`
(\n\s+) 表示匹配换行符以及多个空格
```
