class Renderer {
  system;
  scene;
  canvasElement;
  ready;
  constructor(system, canvasElement) {
    this.system = system;
    this.scene = null;
    this.canvasElement = canvasElement;
    this.ready = false;
  }
  setSize(width, height, devicePixelRatio = 1) {
    this.canvasElement.width = width * devicePixelRatio;
    this.canvasElement.height = height * devicePixelRatio;
  }
  render(scene, camera) {
  }
}
export {
  Renderer
};
