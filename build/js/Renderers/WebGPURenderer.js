import { WebGPURenderingSystem } from "../Core/Constants";
import { Renderer } from "./Renderer";
class WebGPURenderer extends Renderer {
  constructor(canvasElement) {
    super(WebGPURenderingSystem, canvasElement);
  }
  render(scene, camera) {
  }
}
export {
  WebGPURenderer
};
