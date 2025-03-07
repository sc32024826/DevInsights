# Java

## 修改maven 镜像源

在 ~/.m2/settings.xml 添加 `mirror`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <mirrors>
      <mirror>
        <id>aliyun-maven</id>
        <mirrorOf>central</mirrorOf>
        <name>阿里云Maven镜像</name>
        <url>https://maven.aliyun.com/repository/public/</url>
      </mirror>
    </mirrors>
</settings>

```
