import { Euler } from "../Math/Euler.ts";
import { Matrix4 } from "../Math/Matrix4.ts";
import { Vector3 } from "../Math/Vector3.ts";
import { WebGL2RenderingSystem } from "../Core/Constants.ts";
class Camera {
  position;
  rotation;
  projectionMatrix;
  target;
  autoUpdate;
  needsUpdate;
  renderingSystem;
  constructor() {
    this.position = new Vector3();
    this.rotation = new Euler();
    this.projectionMatrix = new Matrix4();
    this.target = new Vector3();
    this.autoUpdate = false;
    this.needsUpdate = false;
    this.renderingSystem = WebGL2RenderingSystem;
  }
  updateProjectionMatrix() {
  }
}
export {
  Camera
};
