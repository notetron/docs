import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， Notetron ！',
  description: '一个支持丰富的组件的 markdown 编辑器。',
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})