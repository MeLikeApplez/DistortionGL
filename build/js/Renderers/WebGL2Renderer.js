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

// ../src/Renderers/WebGL2Renderer.ts
var WebGL2Renderer = class extends Renderer {
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
};
export {
  WebGL2Renderer
};
