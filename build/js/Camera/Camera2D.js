import { Matrix3 } from "../Math/Matrix3";
import { Vector2 } from "../Math/Vector2";
import { Camera } from "./Camera";
class Camera2D extends Camera {
  position;
  projectionMatrix;
  rotationMatrix;
  width;
  height;
  aspect;
  zoom;
  constructor(width, height, aspect, zoom = 1) {
    super();
    this.position = new Vector2();
    this.projectionMatrix = new Matrix3();
    this.rotationMatrix = new Matrix3();
    this.width = width;
    this.height = height;
    this.aspect = aspect;
    this.zoom = zoom;
    this.updateProjectionMatrix();
  }
  /**
   * @description Uses the webgl clip space coordinates and updates the projection matrix
   * @link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection
   */
  updateProjectionMatrix() {
    let a = this.width / 2;
    let b = -this.height / 2;
    const x = a + this.position.x;
    const y = -b + this.position.y;
    a *= this.zoom;
    b *= this.zoom;
    this.projectionMatrix.set(
      a / this.aspect,
      0,
      x,
      0,
      b,
      y,
      0,
      0,
      1
    );
    return this;
  }
}
export {
  Camera2D
};
