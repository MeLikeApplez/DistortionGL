import { Renderer } from "./Renderer";
class WebGL2Renderer extends Renderer {
  gl;
  static isAvailable(canvasElement) {
    return !!canvasElement.getContext("webgl2");
  }
  constructor(canvasElement, glOptions = {}) {
    super(canvasElement);
    this.gl = canvasElement.getContext("webgl2", glOptions);
  }
  render(scene, camera) {
    scene.render(this);
  }
}
export {
  WebGL2Renderer
};
