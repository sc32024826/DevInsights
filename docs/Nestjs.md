# Nestjs

## 安装

```bash
npm i -g @nestjs/cli
nest new project-name
```

## 运行

```bash
npm run start:dev
```

## `nestjs` 使用 `supabse`

1.
```shell
npm install passport passport-jwt @nestjs/passport
npm install --save-dev @types/passport-jwt
```
2.
```shell
npm install nestjs-supabase-auth
```

## 开启接口版本控制

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 开启版本控制
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(3000);
}
bootstrap();
```

```js
// controller

@Controller({
    path: 'user',
    verion: '1'
})
export class UserController {
    // ...
}
```

也可以单独给 某个方式添加 `@Version('2')` 指定版本

## nestjs 打包时不会将依赖一起打到输出中

因此正确的做法是使用ci/cd 或者 docker等形式部署

也可以配置 `webpack.config` 中的 `externals` 选项 可以打包 依赖

```js
...
module.exports = {
  ...
  externals: {}
}
```