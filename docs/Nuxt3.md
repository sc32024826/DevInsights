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
```nginx
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

## nuxt 中 处理跨域请求

 1. 首先需要在`server/middleware/cors.js`中配置预请求

 ```ts
   // 处理预检请求
  if (isPreflightRequest(event)) {
    event.node.res.statusCode = 204;
    event.node.res.statusMessage = "No Content";
    return "OK";
  }
 ```


 2. 然后在`nuxt.config.ts`中配置`routeRules`

 ```ts
 export default defineNuxtConfig({
    ...
    routeRules: {
        "/api/**": {
            cors: true,
            headers: {
                "Access-Control-Allow-Origin": "*", // 'http://example:6006', has to be set to the requesting domain that you want to send the credentials back to
                "Access-Control-Allow-Methods": "*", // 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers": "*", // 'Origin, Content-Type, Accept, Authorization, X-Requested-With'
                "Access-Control-Expose-Headers": "*",
            },
        }
    }
 })
 ```