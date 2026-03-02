import { Renderer } from "./Renderer";
class WebGPURenderer extends Renderer {
  static async init(canvas) {
    try {
      const context = canvas.getContext("webgpu");
      const adapter = await navigator.gpu.requestAdapter();
      if (!context) {
        console.error("WebGPU context is unavailable!");
        return null;
      }
      if (!adapter) {
        console.error("WebGPU adapter is unavailable!");
        return null;
      }
      const device = await adapter.requestDevice();
      if (!device) {
        console.error("WebGPU device is unavailable!");
        return null;
      }
      const format = navigator.gpu.getPreferredCanvasFormat();
      return { adapter, device, context, format };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
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
