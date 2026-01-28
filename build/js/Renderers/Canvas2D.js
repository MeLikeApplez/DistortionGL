import { Renderer } from "./Renderer";
class Canvas2D extends Renderer {
  ctx;
  constructor(canvasElement, ctxOptions) {
    super(canvasElement);
    this.ctx = canvasElement.getContext("2d", ctxOptions);
    this.ready = this.ctx instanceof CanvasRenderingContext2D;
  }
  render(scene, camera) {
    if (!this.ready) throw Error("Canvas 2D is unavailable for this device!");
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    super.render(scene, camera);
  }
}
export {
  Canvas2D
};
