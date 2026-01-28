import { Renderer } from "./Renderer";
class WebGL2Renderer extends Renderer {
  gl;
  constructor(canvasElement, glOptions = {}) {
    super(canvasElement);
    this.gl = canvasElement.getContext("webgl2", glOptions);
    this.ready = this.gl instanceof WebGL2RenderingContext;
  }
  render(scene, camera) {
    if (!this.ready) throw Error("WebGL2 is unavailable for this device!");
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height);
    super.render(scene, camera);
  }
}
export {
  WebGL2Renderer
};
