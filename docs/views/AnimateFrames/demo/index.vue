<script setup lang="ts">
import { Assets } from "pixi.js";

import { PixiAnimatedSprite } from "../../../PixiComponents/animatedSprite";
import { PixiButtons } from "../../../PixiComponents/buttons";
import { PixiTexts } from "../../../PixiComponents/texts";
import { usePixiInit } from "../../../PixiHooks/usePixiInit";

const { appRef } = usePixiInit(async (app) => {
  const data = await Assets.load([
    { alias: "mc", src: "https://pixijs.com/assets/spritesheet/mc.json" },
  ]);

  const pixiAnimatedSprite = new PixiAnimatedSprite({
    frames: data.mc.data.frames,
  });

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
    pixiAnimatedSprite.visible = true; // 显示动画
    pixiAnimatedSprite.play();
  };

  // 监听动画播放完成事件
  pixiAnimatedSprite.onComplete = () => {
    pixiAnimatedSprite.currentFrame = 0;
    pixiAnimatedSprite.visible = false;
  };

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
  font-size: 4vw;
}

.box {
  height: 100%;
  background-color: #eee;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
