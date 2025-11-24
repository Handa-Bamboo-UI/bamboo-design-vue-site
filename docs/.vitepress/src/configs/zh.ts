import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { zhNav } from "../navs/zh";
import { zhSidebar } from '../sidebars/zh'
export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    
    themeConfig: {

      lastUpdatedText: '最后更新',

      returnToTopLabel: '返回顶部',
      docFooter: {

        prev: '上一页',

        next: '下一页'

      },

     nav: zhNav,

 
    // public
      
    socialLinks: [
      { icon: "github", link: "https://github.com/HandaQAQ-Code" },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present HandaQAQ-Code'
    },
    logo: "/logo.png",
    },

  } 