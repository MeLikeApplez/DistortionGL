class Renderer {
  type;
  scene;
  canvasElement;
  ready;
  constructor(type, canvasElement) {
    this.type = type;
    this.scene = null;
    this.canvasElement = canvasElement;
    this.ready = false;
  }
  render(scene, camera) {
  }
}
export {
  Renderer
};
