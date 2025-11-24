import { defineConfig } from "vitepress";
import { shareSidebar } from "../sidebars/share";

import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
import { fileURLToPath, URL } from "node:url";

export const sharedConfig = defineConfig({
  rewrites: {
    "zh/:rest*": ":rest*",
  },
  metaChunk: true,
  title: "Bamboo-design-vue",
  description: "A Vue Component Library",
  head: [["link", { rel: "icon", href: "icon.png" }]],

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  themeConfig: {
    sidebar: shareSidebar,
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
    base: "/bamboo-design-vue-site/",
});
