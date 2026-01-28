import { generateUUID } from "../Math/MathUtils";
class Entity {
  uuid;
  name;
  type;
  position;
  scale;
  rotation;
  quaternion;
  matrix;
  matrixAutoUpdate;
  matrixNeedsUpdate;
  autoUpdate;
  needsUpdate;
  constructor() {
    this.uuid = generateUUID();
    this.name = "";
    this.type = "";
    this.position = null;
    this.scale = null;
    this.rotation = null;
    this.quaternion = null;
    this.matrix = null;
    this.matrixAutoUpdate = false;
    this.matrixNeedsUpdate = false;
    this.autoUpdate = false;
    this.needsUpdate = false;
  }
}
export {
  Entity
};
