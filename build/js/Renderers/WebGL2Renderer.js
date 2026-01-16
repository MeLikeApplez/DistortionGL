import { WebGL2RenderingSystem } from "../Core/Constants";
import { Renderer } from "./Renderer";
class WebGL2Renderer extends Renderer {
  gl;
  constructor(canvasElement, glOptions = {}) {
    super(WebGL2RenderingSystem, canvasElement);
    this.gl = canvasElement.getContext("webgl2", glOptions);
    this.ready = this.gl instanceof WebGL2RenderingContext;
  }
  render(scene, camera) {
    if (!this.ready) throw Error("WebGL2 is unavailable for this device!");
    camera.renderingSystem = WebGL2RenderingSystem;
    scene.render(this);
  }
}
export {
  WebGL2Renderer
};
