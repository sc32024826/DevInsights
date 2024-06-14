# Prisma

## 使用 `bunx prisma db pull` 拉取当前数据库的表结构


## 连接多个数据库

1. 在 `prisma` 目录下新建一个`schema.prisma` 文件

2. 在`schema.prisma` 文件中 注意添加 `output`
```prisma

generator client {
    provider      = "prisma-client-js"
    binaryTargets = ["native"]
    output = "./generated/client1"
}

datasource db {
    provider = "mysql"
    url      = env("BPM_PRO")
}
```

3. 拉取和生成的时候 需要添加参数

```bash
bunx prisma db pull --schema ./prisma/schema.prisma
bunx prisma generate --schema ./prisma/schema.prisma
```

4. 导出多个库

``` ts
import { PrismaClient as PrismaClient1 } from '~/prisma/generated/client1'
import { PrismaClient as PrismaClient2 } from '~/prisma/generated/client2'

const client1 = new PrismaClient1()
const client2 = new PrismaClient2()

export { client1, client2 };
```

