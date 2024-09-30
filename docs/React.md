# React  &  Next


## React

### 钩子函数只能在 函数组件的顶层调用

```tsx
export default Page() {

   const router = useRouter(); // ✅ 正确用法

   const someMethod = () =>{
      const router = useRouter();  // ❌ 错误用法
   }

   return (
      ...
   )
}
```

## Next

+ 新建项目

```bash
npx create-next-app@latest
```

+ 路由组

在目录下 以`()` 包裹的文件件 不映射路由

app
 - (public)
    - login.tsx
    - layout.tsx
 - (pages)
   - index.tsx
   - about.tsx
   - contact.tsx

+ 并行路由

在目录下 以 `@` 起头的文件 不映射路由