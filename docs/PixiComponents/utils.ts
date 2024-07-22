import { Graphics } from "pixi.js";

/** @description 显示元素碰撞箱 */
export const _showCollisionBox = (v: any) => {
  const border = new Graphics();
  border.rect(v.x, v.y, v.width, v.height);
  border.stroke({ width: 5, color: 0xffffff }); // 2像素宽的白色边框
  return border;
};
