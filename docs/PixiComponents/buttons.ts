import { Container, Graphics } from "pixi.js";

interface Button {
  width?: number;
  height?: number;
  backgroundColor?: string;
  cursor?: "auto" | "pointer" | "move" | "no-drop";
}

/** @description 普通按钮 */
export class PixiButtons extends Container {
  constructor(config: Button) {
    super();

    const { width = 100, height = 50, backgroundColor = 0xff0000, cursor = "auto" } = config || {};

    const button = new Container({
      interactive: true,
      cursor,
    });

    const buttonBg = new Graphics();

    buttonBg.rect(0, 0, width, height);
    buttonBg.fill(backgroundColor);
    button.addChild(buttonBg);

    return button;
  }
}
