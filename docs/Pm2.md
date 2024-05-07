# PM2
```shell
# 启动项目
pm2 start ecosystem.config.js
# 停止项目
pm2 stop <appname>
pm2 stop all
# 重启项目
pm2 restart <appname>
# 重载指定应用，使其重新加载代码
pm2 reload <appname>
# 删除项目
pm2 delete <appname>

```