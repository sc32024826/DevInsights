import { defineConfig } from 'vite'
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
