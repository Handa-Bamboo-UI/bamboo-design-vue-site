import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  title: "Bamboo-design-vue",
  description: "A Vue Component Library",
  head: [
    ['link', { rel: 'icon',  href: 'icon.png' }]
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [{ text: "组件库", link: "/components/button" }],
    sidebar: [
      {
        text: "基础",
        items: [
          { text: "按钮 Button", link: "/components/button" },
          { text: "图钉 Pin", link: "/components/pin" },
          { text: "图标 Icon", link: "components/icon" },
        ],
      },
      {
        text: "组合",
        items: [
          { text: "图钉组 PinGroup", link: "/components/pingroup" },
        ],
      },
      {
        text: "表单",
        items: [
          { text: "输入框 Input", link: "/components/input" },
        ],
      },
      {
        text: "反馈",
        items: [
          { text: "消息提示 Message", link: "/components/message" },
        ],
      },
       {
        text: "布局",
        items: [
          { text: "起司布局 CheeseLayout", link: "/components/cheese" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/HandaQAQ-Code" },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HandaQAQ-Code'
    },
    logo: "/logo.png",
  },
  markdown: {
    // @vitepress-demo-preview的配置
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  base: '/bamboo-design-vue-site/', 
});
