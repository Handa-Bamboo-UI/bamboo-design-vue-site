import { defineConfig } from 'vitepress'
import { sharedConfig } from './src/configs/share'
import { zhConfig } from './src/configs/zh'
import { enConfig } from './src/configs/en'

export default defineConfig({
  ...sharedConfig,
  locales: { 
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      ...enConfig
    }
  },
})