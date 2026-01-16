import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NS_word",
  // 根据部署环境动态设置 base 路径
  // GitHub Pages 使用仓库名路径，Vercel 使用根路径
  base: process.env.GITHUB_PAGES === "true" ? "/NS_word/" : "/",
  description: "Word 文档处理工具 - 解决大型 Word 文档编辑困难、卡顿问题",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // 启用最后更新时间戳
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: "/logo.png",
      alt: "NS_word Logo",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "功能指南", link: "/guide/" },
      { text: "更新日志", link: "/changelog/" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "简介",
          collapsed: false,
          items: [
            { text: "功能指南", link: "/guide/" },
            { text: "关于NS_word", link: "/guide/about" },
          ],
        },
        {
          text: "功能指南",
          collapsed: false,
          items: [
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "系统要求", link: "/guide/system-requirements" },
          ],
        },
        {
          text: "功能详解",
          collapsed: false,
          items: [
            { text: "模板生成", link: "/guide/details/template-generation" },
            { text: "拆分文档", link: "/guide/details/document-split" },
            { text: "合并文档", link: "/guide/details/document-merge" },
            { text: "系统设置", link: "/guide/details/system-setting" },
          ],
        },
      ],
      "/changelog/": [
        {
          text: "更新日志",
          collapsed: false,
          items: [{ text: "更新日志", link: "/changelog/" }],
        },
      ],
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "返回",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/p000bb/NS_word" },
    ],
  },
});
