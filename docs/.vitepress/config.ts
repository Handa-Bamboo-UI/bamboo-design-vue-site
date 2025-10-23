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
    ['link', { rel: 'icon',  href: '../src/icon.png' }]
  ],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    nav: [{ text: "组件", link: "/components/button" }],
    sidebar: [
      {
        text: "基础",
        items: [
          { text: "按钮 Button", link: "/components/button" },
          { text: "布局容器 Container", link: "/components/container" },
          { text: "图标 Icon", link: "components/icon" },
          { text: "链接 Link", link: "/components/link" },
          { text: "折叠面板 Collapse", link: "/components/collapse" },
        ],
      },
      {
        text: "反馈",
        items: [
          { text: "反馈 Alert", link: "/components/alert" },
          { text: "消息提示 Message", link: "/components/message" },
          { text: "消息弹出框 MessageBox", link: "/components/messagebox" },
          { text: "文字提示 Tooltip", link: "/components/tooltip" },
          { text: "下拉菜单 Dropdown", link: "/components/dropdown" },
        ],
      },
      {
        text: "数据输入",
        items: [
          { text: "开关 Switch", link: "components/switch" },
          { text: "评分 Rate", link: "components/rate" },
          { text: "输入框 Input", link: "components/input" },
          { text: "选择框 Select", link: "components/select" },
          { text: "表单 Form", link: "/components/form" },
          { text: "日期选择器 DatePicker", link: "components/datepicker" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: " " },
    ],
    logo: "/logo.png",
    style: [
      '/src/style.css'
    ]
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
