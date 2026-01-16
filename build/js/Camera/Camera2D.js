import { Camera } from "./Camera.ts";
import { Vector2 } from "../Math/Vector2.ts";
class Camera2D extends Camera {
  zoom;
  resolution;
  minZoom;
  maxZoom;
  zoomScaleFactor;
  constructor() {
    super();
    this.zoom = new Vector2(1, 1);
    this.resolution = new Vector2(1, 1);
    this.minZoom = 0.5;
    this.maxZoom = 4;
    this.zoomScaleFactor = 0.1;
  }
  updateProjectionMatrix() {
    this.projectionMatrix[0] = this.zoom.x / this.resolution.x;
    this.projectionMatrix[5] = this.zoom.y / this.resolution.y;
    this.needsUpdate = false;
  }
  render(renderer, uniforms) {
    renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z);
    renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
  }
}
export {
  Camera2D
};
