import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { enNav }  from "../navs/en";
import { enSidebar } from '../sidebars/en'
export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    
    themeConfig: {

      lastUpdatedText: 'Last updated',

      returnToTopLabel: 'Return to top',
      docFooter: {

        prev: 'Previous page',

        next: 'Next page'

      },

     nav: enNav,

 
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