import { Renderer } from "./Renderer";
class Canvas2DRenderer extends Renderer {
  ctx;
  constructor(canvasElement, ctxOptions) {
    super(canvasElement);
    this.ctx = canvasElement.getContext("2d", ctxOptions);
    this.ready = this.ctx instanceof CanvasRenderingContext2D;
  }
  render(scene, camera) {
    if (!this.ready) return console.error("Canvas 2D is unavailable for this device!");
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(
      0,
      0,
      camera.left + camera.right,
      camera.top + camera.bottom
    );
    super.render(scene, camera);
  }
}
export {
  Canvas2DRenderer
};
