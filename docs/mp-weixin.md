# 微信小程序

## 小程序 发布时的注意事项

在开发调试时 通常运行的是 `yarn dev:mp-weiixn`, 一般情况下 版本上传也就直接上传了,
但是当区分`env`时 此时由于运行的是`dev` 模式 上传的版本也使用的是 `env.development` 的配置
所以如果要上传小程序版本  需要更改`env.development`的值  或者 改用 `yarn build:mp-weixin` 后上传版本
