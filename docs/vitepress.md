# 使用过程中遇到的问题

- Q: `yarn docs:dev` 命令之后 出现报错 `dns.setDefaultResultOrder is not a function`

    A: 原因可能为node版本太低，更换node版本之后解决问题

## vitepress 添加搜索功能

- 添加依赖 `vitepress-plugin-search` `flexsearch`

- 在`docs` 目录下 *其他目录无效*, 添加 `vite.config.js` 文件

    ```javascript
    import { SearchPlugin } from 'vitepress-plugin-search'
    import flexSearchIndexOptions from 'flexsearch'

    var options = {
        ...flexSearchIndexOptions,
        previewLength: 100, //搜索结果预览长度
        buttonLabel: '搜索',
        placeholder: '情输入关键词'
    }

    export default defineConfig({
        base: '/',
        plugins: [SearchPlugin(options)]
    })
    ```
