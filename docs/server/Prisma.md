# Prisma ORM

Prisma 是一个开源的 ORM 框架，它使得在 Node.js 中操作数据库变得更加简单和高效。Prisma 提供了一种简单而强大的方式来定义和操作数据库，并提供了自动生成类型安全代码的能力。

## 安装

```bash
npm install prisma
```

## 配置

在项目中创建一个`prisma.schema`文件，并添加以下内容：

```prisma
generator client {
    provider = "prisma-client-js"
    //   多架构支持  目前还 处于预览阶段
    previewFeatures = ["multiSchema"]
}
```
将string 映射成原生varchar类型 并控制长度
```prisma
model Brand {
    id         Int    @id @default(autoincrement())
    brand_code String @db.VarChar(50)
    // 使用自定义的表名 而非model 名字
    @@map(name: "prisma_brand")
}
```


## migrate 迁移

将配置 同步到数据库

```bash
npx prisma migrate dev --name [commit]
# or
prisma migrate dev --name [commit]
```
