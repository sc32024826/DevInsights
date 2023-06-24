# Typescript

## 找不到名称“__dirname”

``` bash
yarn add -D @types/node
 ```


## 找不到指定的模块XXX, 有时候`import XXX from '@/XXX/index'` 省略`index` 或者 `.ts` 后缀名时会报错

需要在`tsconfig.json` 中 配置`compilerOptions.paths` 例如 `"@/*": ["src/*"]`


## TypeScript的语法，叫非空断言操作符: `!.`

和`?.`相反，这个符号表示对象后面的属性一定不是null或undefined

## Omit<T,K>

将类型/接口T中的 k删除 并返回新的类型

```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Omit<obj, 'a'|'b'> = {
    c: string
}
```

## Pick<T,K>

从T中挑选K 返回
```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Pick<obj,'a'> = {
    a: string
}
```

## Partial<T>

将类型全部转为可选

```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Partial<obj> = {
    a?: string,
    b?: string,
    c?: string
}
```
