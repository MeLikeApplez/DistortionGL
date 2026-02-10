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
  visible;
  loaded;
  constructor(options) {
    this.uuid = generateUUID();
    this.name = options?.name ?? "";
    this.type = options?.type ?? "Entity";
    this.position = null;
    this.scale = null;
    this.rotation = null;
    this.quaternion = null;
    this.matrix = null;
    this.visible = true;
    this.loaded = false;
  }
}
export {
  Entity
};
