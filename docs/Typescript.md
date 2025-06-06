# Typescript

## 1. 找不到名称“\_\_dirname”

```bash
yarn add -D @types/node
```

## 2. 找不到指定的模块 XXX, 有时候`import XXX from '@/XXX/index'` 省略`index` 或者 `.ts` 后缀名时会报错

需要在`tsconfig.json` 中 配置`compilerOptions.paths` 例如 `"@/*": ["src/*"]`

## 3. 泛型约束 extend

```typescript
interface Idemo {
  length: number;
}

function demo<T extends Idemo>(s: T) {
  return s.length;
}

// extends 表示泛型约束 传入的类型必须具有 length 属性

demo<string>("121"); // ✓
demo<number>(123); // ×
```

## 4. 函数 输入输出类型的复用

```typescript
interface Ifunctiondemo {
  (a: number, b: number): number;
}

const fn: Ifunctiondemo = (a, b) => a + b;

interface Ifunctiondemo {
  <T>(a: T, b: T): number;
}

const fn: Ifunctiondemo = (a, b) => a + b;

fn<number>(1,2)

interface Ifunctiondemo<T> {
  (a: T, b: T): number;
}
const fn: Ifunctiondemo<number> = (a, b) => a + b;
```

## 5. TypeScript的语法，叫非空断言操作符: `!.`

和`?.`相反，这个符号表示对象后面的属性一定不是null或undefined

## 6. `Omit<T,K>`

将类型/接口T中的 k删除 并返回新的类型


```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Omit<obj, 'a'|'b'>

{
    c: string
}
```

## 7. `Pick<T,K>`

从T中挑选K 返回
```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Pick<obj,'a'>

{
  a: string
}
```

## 8. `Partial<T>`

将类型全部转为可选

```typescript
type obj {
    a: string,
    b: string,
    c: string
}

Partial<obj>
{
  a?: string,
  b?: string,
  c?: string
}
```

## 9. `infer` ts 中的类型推断


## 初始化 tsconfig文件 并生成中文注释

```bash
npx tsc --init --locale zh-CN
```

## 10 无法写入文件 xxx 因为它会覆盖输入文件

遇到类似的报错时 需要在`tsconfig.json` 中配置 `outDir`来指定输出目录