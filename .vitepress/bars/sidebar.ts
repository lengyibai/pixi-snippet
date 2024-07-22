import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
  "/docs/views/": {
    base: "/docs/views/",
    items: Components(),
  },
};

function Components(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "静态组件",
      items: [{ text: "精灵表动画", link: "AnimateFrames" }],
    },
  ];
}
