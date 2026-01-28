class Renderer {
  canvasElement;
  ready;
  constructor(canvasElement) {
    this.canvasElement = canvasElement;
    this.ready = false;
  }
  setSize(width, height, devicePixelRatio = 1) {
    this.canvasElement.width = width * devicePixelRatio;
    this.canvasElement.height = height * devicePixelRatio;
  }
  render(scene, camera) {
    if (!scene.ready) {
      if (scene.loaded) return;
      scene.load(this, camera);
      scene.loaded = true;
    } else {
      scene.render(this, camera);
    }
  }
}
export {
  Renderer
};
