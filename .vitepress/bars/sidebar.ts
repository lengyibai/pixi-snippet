import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = {
  "/docs/Components/": {
    base: "/docs/Components/",
    items: Components(),
  },
};

function Components(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "静态组件",
      items: [{ text: "卡片翻转", link: "FlipBox" }],
    },
  ];
}
