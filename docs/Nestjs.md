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