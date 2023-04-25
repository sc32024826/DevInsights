# 单元测试

+ 安装依赖

```bash
yarn add -D jest
```
+ 生成配置

```bash
jest --init
```

+ 添加脚本

```json
//package.json
"script":{
    ...
    "test": "jest"
}
```

+ 测试

```bash
yarn test
```

+ 测试覆盖率


```bash
# 初始化配置
npx jest --init
# 生成代码覆盖率
npx jest --coverage
```

## 常用匹配器 [文档](https://jestjs.io/docs/expect)
|匹配器|说明|
|---|---|
|toBe()|相等，相当于===|
|toEqual()|相等，相当于==|
|toBeUndifined()|匹配undefined|
|toBeDefined()|只要定义过了，都可以匹配成功|
|toBeTruthy()|true|
|toBeFalsy()|false|
|toBeGreaterThan()|只要大于传入的数值，就可以通过测试|
|toBeLessThan()|少于一个数字时，就可以通过测试|
|toBeGreaterThanOrEqual()|大于等于时|
|toBeLessThanOrEqual()|小于等于时|
|toBeCloseTo()|自动消除JavaScript浮点精度错误的匹配器,比如0.3|
|toMatch()|字符串包含匹配器|
|toContain()|数组包含匹配器|
|toThrow()|对异常进行处理的匹配器|
|not|expect(bestLaCroixFlavor()).not.toBe('coconut')|

## 钩子函数

|钩子|说明|
|---|---|
|beforeAll()| 所有测试用例之前进行执行|
|afterAll()| 完成所有测试用例之后才执行的函数|
|beforeEach()| 在每个测试用例前都会执行一次的钩子函数|
|afterEach() |每次测试用例完成测试之后都会执行一次的钩子函数|

## `describe()` 分组

```js
describe('一年级考试',()=>{
    test('加法测试', () => {
        expect(add(1,6)).toBe(7)
        console.log('加法题已算完')
    })
    test('减法测试', () => {
        expect(sub(5,3)).toBe(2)
        console.log('减法题已算完')
    })
})
```

## 让jest支持import...from...语法

```bash
npm install @babel/core @babel/preset-env -D

yarn add --dev babel-jest @babel/core @babel/preset-env babel-plugin-transform-es2015-modules-commonjs
```

```js
// babel.config.js
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current"
                }
            }
        ]
    ],
    plugins: ["transform-es2015-modules-commonjs"]
};

```

## 异步代码测试方法

```js
// fetchData.test.js
import {fetchData, fetchData2} from './fetchData.js';

test('fethData测试', (done) => {
    fetchData((data)=>{
        expect(data.isSuccess).toEqual(true)
        done()
    })
})

```
