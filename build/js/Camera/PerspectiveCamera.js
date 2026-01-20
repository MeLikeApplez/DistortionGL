import { Camera } from "./Camera.ts";
import { Matrix4 } from "../Math/Matrix4.ts";
import { Vector3 } from "../Math/Vector3.ts";
class PerspectiveCamera extends Camera {
  fov;
  aspect;
  near;
  far;
  constructor(fov, aspect, near, far) {
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }
  lookAt(target, up = Vector3.UP) {
    const zAxis = this.position.clone().subtract(target).normalize();
    const xAxis = up.cross(zAxis).normalize();
    const yAxis = zAxis.cross(xAxis).normalize();
    const rotationMatrix = new Matrix4(
      xAxis.x,
      xAxis.y,
      xAxis.z,
      0,
      yAxis.x,
      yAxis.y,
      yAxis.z,
      0,
      zAxis.x,
      zAxis.y,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    this.target.set(target.x, target.y, target.z);
    this.rotationMatrix.setFromMatrix4(rotationMatrix);
    this.rotation.setFromRotationMatrix(this.rotationMatrix);
    return this;
  }
  updateProjectionMatrix() {
    const fovRadian = this.fov * (Math.PI / 180);
    const f = 1 / Math.tan(fovRadian / 2);
    const rangeInv = 1 / (this.near - this.far);
    this.projectionMatrix.set(
      f / this.aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (this.near + this.far) * rangeInv,
      -1,
      0,
      0,
      this.near * this.far * rangeInv * 2,
      0
    );
    this.rotationMatrix.makeRotationFromEuler(this.rotation);
    this.needsUpdate = false;
    return this;
  }
  //    render(renderer: WebGL2Renderer, uniforms: RenderUniforms) {
  //         renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
  //         renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
  //         renderer.gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix)
  //     }
}
export {
  PerspectiveCamera
};
