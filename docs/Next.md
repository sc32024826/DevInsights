## 路由组 `()`

假设文件路径 `app/(dashboard)/setting.tsx`, 则访问时 只需要访问 `/setting` 即可, `dashboard` 会被忽略



## 服务端组件

- metadata
```javascript
// 静态 metadata
export const metadata = {
  title: 'Static Title'
}

// 或者动态 metadata
export async function generateMetadata({ params }) {
  return {
    title: `Dynamic Title for ${params.id}`
  }
}
```
- 如果要使用异步方法 也只能在服务端组件中使用

```javascript
export async function () {

}
```