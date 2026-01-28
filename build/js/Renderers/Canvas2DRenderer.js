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
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.ctx.save();
    switch (this.clipSpace) {
      // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection
      case "normalized-device-coordinates": {
        this.ctx.transform(
          this.canvasElement.width / 2,
          0,
          0,
          -this.canvasElement.height / 2,
          this.canvasElement.width / 2,
          this.canvasElement.height / 2
        );
        break;
      }
      case "normalized-dom": {
        this.ctx.translate(this.canvasElement.width / 2, this.canvasElement.height / 2);
        this.ctx.scale(this.canvasElement.width / 2, this.canvasElement.height / 2);
        break;
      }
      case "dom": {
        this.ctx.translate(this.canvasElement.width / 2, this.canvasElement.height / 2);
        break;
      }
      default:
        throw Error("Clip space is not defined!");
    }
    super.render(scene, camera);
    this.ctx.restore();
  }
}
export {
  Canvas2DRenderer
};
