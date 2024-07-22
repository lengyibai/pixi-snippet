import { Text, TextStyle, type FillInput, type TextStyleAlign } from "pixi.js";

interface TextStyleOptions {
  fontFamily?: string;
  fontSize?: 36;
  color?: FillInput;
  align?: TextStyleAlign;
  anchor?: { x: number; y: number };
  text?: string;
}

/** @description 文本 */
export class PixiTexts extends Text {
  constructor(config: TextStyleOptions) {
    super();

    const {
      text = "Hello World",
      fontFamily = "Arial",
      fontSize = 16,
      color = 0x000000,
      align = "center",
      anchor = { x: 0.5, y: 0.5 },
    } = config;

    // 创建文本
    const buttonText = new Text({
      text,
      anchor,
      style: new TextStyle({
        fontFamily,
        fontSize,
        fill: color,
        align,
      }),
    });

    return buttonText;
  }
}
