import { AnimatedSprite, Assets } from "pixi.js";

interface PixiAnimatedSpriteType {
  /** 帧动画表 */
  frames: any[];
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
    const { speed = 1, loop = false, visible = false, frames } = config || {};

    const explosionTextures = [];
    for (let i = 0; i < Object.keys(frames).length; i++) {
      const texture = Assets.get(`Explosion_Sequence_A ${i + 1}.png`);
      explosionTextures.push(texture);
    }

    super(explosionTextures);

    const animatedSprite = new AnimatedSprite(explosionTextures);
    animatedSprite.animationSpeed = speed;
    animatedSprite.loop = loop;
    animatedSprite.visible = visible;

    return animatedSprite;
  }
}
