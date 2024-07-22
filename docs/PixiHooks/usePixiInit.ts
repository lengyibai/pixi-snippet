import { Application } from "pixi.js";
import { ref, onMounted } from "vue";

/** @description pixi初始化 */
const usePixiInit = (fn: (app: Application) => void) => {
  const appRef = ref<HTMLElement>();

  const app = new Application();

  onMounted(() => {
    app
      .init({
        width: appRef.value?.clientWidth,
        height: appRef.value?.clientHeight,
        resizeTo: appRef.value,
        backgroundColor: "0x1099bb",
        resolution: window.devicePixelRatio || 1, // 屏幕分辨率
        antialias: true, // 开启抗锯齿
      })
      .then(async () => {
        appRef.value?.appendChild(app.canvas);
        fn(app);
      });
  });

  return { appRef };
};

export { usePixiInit };
