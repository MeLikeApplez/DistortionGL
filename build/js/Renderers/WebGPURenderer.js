import { Renderer } from "./Renderer";
class WebGPURenderer extends Renderer {
  constructor(canvasElement) {
    super(canvasElement);
  }
  render(scene, camera) {
    throw Error("WebGPU Renderer has not been implemented!");
  }
}
export {
  WebGPURenderer
};
