# Nuxt 3

创建项目
```shell
npx nuxi init PROJECT_NAME
```


``` javascript
// nuxt.config.ts
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'  // pinia 持久化
    ]

// XXXstore
defineStore('id',{
    ...
    persist: true
})

```
