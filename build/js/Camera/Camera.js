import { Euler } from "../Math/Euler";
import { Matrix4 } from "../Math/Matrix4";
import { Vector3 } from "../Math/Vector3";
class Camera {
  position;
  rotation;
  projectionMatrix;
  rotationMatrix;
  target;
  autoUpdate;
  needsUpdate;
  enabled;
  constructor() {
    this.position = new Vector3();
    this.rotation = new Euler();
    this.projectionMatrix = new Matrix4();
    this.rotationMatrix = new Matrix4();
    this.target = new Vector3();
    this.autoUpdate = false;
    this.needsUpdate = false;
    this.enabled = true;
  }
  getWorldDirection() {
    const direction = new Vector3(
      this.rotationMatrix[8],
      this.rotationMatrix[9],
      this.rotationMatrix[10]
    );
    return direction.normalize();
  }
  // uniforms param type needs to be fixed
  // render(renderer: WebGL2Renderer | WebGPURenderer, uniforms: WebGL2RenderUniforms | WebGPURenderUniforms) {
  //     if(!this.enabled) return
  //     if(renderer.system === WebGL2RenderingSystem) {
  //         const { gl } = renderer
  //         gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
  //         gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
  //         gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix)
  //     } else {
  //         throw new Error('WebGPU render not implemented!')
  //     }
  // }
}
export {
  Camera
};
