import { Renderer } from "./Renderer";
class Canvas2DRenderer extends Renderer {
  ctx;
  clipSpace;
  constructor(canvasElement, ctxOptions) {
    super(canvasElement);
    this.ctx = canvasElement.getContext("2d", ctxOptions);
    this.clipSpace = ctxOptions.clipSpace;
    this.ready = this.ctx instanceof CanvasRenderingContext2D;
  }
  render(scene, camera) {
    if (!this.ready) throw Error("Canvas 2D is unavailable for this device!");
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(
      0,
      0,
      camera.width,
      camera.height
    );
    const m = camera.projectionMatrix;
    this.ctx.setTransform(m[0], m[3], m[1], m[4], m[2], m[5]);
    super.render(scene, camera);
  }
}
export {
  Canvas2DRenderer
};
