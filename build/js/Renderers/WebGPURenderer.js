import { Renderer } from "./Renderer";
class WebGPURenderer extends Renderer {
  constructor(canvasElement) {
    super(canvasElement);
    console.error("WebGPU Renderer has not been implemented!");
  }
  render(scene, camera) {
    return console.error("WebGPU Renderer has not been implemented!");
  }
}
export {
  WebGPURenderer
};
