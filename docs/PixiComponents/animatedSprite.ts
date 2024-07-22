import { AnimatedSprite } from "pixi.js";

interface PixiAnimatedSpriteType {
  /** 帧动画表 */
  textures: any[];
  /** 动画速度 */
  speed?: number;
  /** 是否循环 */
  loop?: boolean;
  /** 是否可见 */
  visible?: boolean;
}

/** @description 帧动画 */
export class PixiAnimatedSprite extends AnimatedSprite {
  constructor(config: PixiAnimatedSpriteType) {
    const { speed = 1, loop = false, visible = false, textures } = config || {};

    super(textures);

    const animatedSprite = new AnimatedSprite(textures);
    animatedSprite.animationSpeed = speed;
    animatedSprite.loop = loop;
    animatedSprite.visible = visible;
    animatedSprite.anchor.set(0, 0);

    return animatedSprite;
  }
}
