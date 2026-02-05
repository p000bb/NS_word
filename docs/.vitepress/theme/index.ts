import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import ImageViewerP from "@miletorix/vitepress-image-viewer";
import "@miletorix/vitepress-image-viewer/style.css";
import ChangelogFromGitHub from "./components/ChangelogFromGitHub.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // 注册更新日志组件（从 GitHub Releases 拉取并渲染）
    ctx.app.component("ChangelogFromGitHub", ChangelogFromGitHub);
    // 注册图片预览插件，支持点击图片进行预览、缩放、全屏等功能
    ImageViewerP(ctx.app);
  },
} satisfies Theme;
