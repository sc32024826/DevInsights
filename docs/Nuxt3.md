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

## `try_files`配置说明
```text
server {
    listen 9001;
    server_name _;
    # 原本打算配置在此处使成为公共配置, 但是无法生效
    # try_files $uri $uri/ /index.html;
    root /usr/share/nginx/modules/wechat-h5/;

    location / {
        # index index.html index.htm;
        # 由于配置↓, 因此 无需再配置 下边的/login
        try_files $uri $uri/ /index.html;

    }

    # location /login {
    #     proxy_pass http://localhost:9001/login/;
    # }

}
```

## 环境变量配置

```json
"scripts": {
    dev: 'nuxt dev --dotenv .env.development'
  },
```