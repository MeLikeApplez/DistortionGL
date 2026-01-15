// ../src/Renderers/Renderer.ts
var Renderer = class {
  scene;
  canvasElement;
  constructor(canvasElement) {
    this.scene = null;
    this.canvasElement = canvasElement;
  }
  setSize(width, height, devicePixelRatio = 1) {
    this.canvasElement.width = width * devicePixelRatio;
    this.canvasElement.height = height * devicePixelRatio;
  }
  render(scene, camera) {
  }
};
export {
  Renderer as default
};
