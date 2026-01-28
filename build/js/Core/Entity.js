import { generateUUID } from "../Math/MathUtils";
class Entity {
  uuid;
  name;
  type;
  matrixAutoUpdate;
  matrixNeedsUpdate;
  autoUpdate;
  needsUpdate;
  constructor() {
    this.uuid = generateUUID();
    this.name = "";
    this.type = "";
    this.matrixAutoUpdate = false;
    this.matrixNeedsUpdate = false;
    this.autoUpdate = false;
    this.needsUpdate = false;
  }
}
export {
  Entity
};
