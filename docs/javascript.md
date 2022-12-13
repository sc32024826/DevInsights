# javascript

## 可选链 `?.`

## 空值合并运算符 `??`

```javascript
let b;
let a = 0;
let c = { name:'XXX' }

b = a ?? c;
```

上面的例子,当a除了undefined、null之外的任何值,b都会等于a,否则就等于c.

## 空值赋值运算符 `??=`

```javascript
let b = '你好';
let a = 0
let c = null;
let d = ’123‘
b ??= a;  // b = “你好”
c ??= d  // c = '123'
```

当??=左侧的值为null、undefined的时候,才会将右侧变量的值赋值给左侧变量.其他所有值都不会进行赋值.

## TypeScript的语法，叫非空断言操作符: `!.`

和`?.`相反，这个符号表示对象后面的属性一定不是null或undefined
