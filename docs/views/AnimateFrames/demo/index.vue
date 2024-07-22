<script setup lang="ts">
import { Assets } from "pixi.js";

import { PixiAnimatedSprite } from "../../../PixiComponents/animatedSprite";
import { PixiButtons } from "../../../PixiComponents/buttons";
import { PixiTexts } from "../../../PixiComponents/texts";
import { usePixiInit } from "../../../PixiHooks/usePixiInit";

const { appRef } = usePixiInit(async (app) => {
  const data = await Assets.load([{ alias: "mc", src: "/data/AnimateFrames/character.json" }]);

  /** 播放状态 */
  let playing = false;
  /** 帧动画组 */
  const textures = [];

  for (let i = 0; i < Object.keys(data.mc.data.frames).length - 2; i++) {
    const texture = Assets.get(`character/walk_0${i + 1}.png`);
    textures.push(texture);
  }

  const pixiAnimatedSprite = new PixiAnimatedSprite({
    textures,
    speed: 0.25,
    loop: true,
    visible: true,
  });

  pixiAnimatedSprite.width = 200;
  pixiAnimatedSprite.height = 200;
  pixiAnimatedSprite.x = -pixiAnimatedSprite.width / 1.25;

  const btn = new PixiButtons({
    width: 100,
    height: 50,
    cursor: "pointer",
    backgroundColor: "#000",
  });

  const text = new PixiTexts({
    text: "播放",
    color: "#fff",
  });

  text.x = btn.width / 2;
  text.y = btn.height / 2;
  btn.x = app.canvas.width - btn.width;
  btn.y = app.canvas.height - btn.height;

  btn.onpointerdown = () => {
    if (playing) {
      playing = false;
      text.text = "播放";
      pixiAnimatedSprite.stop();
    } else {
      playing = true;
      text.text = "暂停";
      pixiAnimatedSprite.play();
    }
  };

  // 监听动画播放完成事件
  pixiAnimatedSprite.onComplete = () => {
    pixiAnimatedSprite.currentFrame = 0;
    pixiAnimatedSprite.visible = false;
  };

  // 每帧更新角色位置，向右移动，达到右侧后重新从左侧开始
  let x = -pixiAnimatedSprite.width / 1.25;
  app.ticker.add((delta) => {
    if (playing) {
      x += delta.deltaTime * 3;

      if (x >= app.canvas.width) {
        x = -pixiAnimatedSprite.width / 1.25;
      }

      pixiAnimatedSprite.x = x;
    }
  });

  btn.addChild(text);
  app.stage.addChild(btn);
  app.stage.addChild(pixiAnimatedSprite);
});
</script>

<template>
  <div ref="appRef" class="demo"></div>
</template>

<style scoped>
.demo {
  width: 100%;
  height: 300px;
}
</style>
