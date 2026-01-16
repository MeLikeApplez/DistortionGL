// ../src/Scenes/Scene.ts
var Scene = class {
  camera;
  children;
  enabled;
  constructor(camera) {
    this.camera = camera;
    this.children = [];
    this.enabled = true;
  }
  add(entities) {
    this.children.push(...entities);
  }
  remove(entities) {
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const index = this.children.findIndex((e) => e.uuid === entity.uuid);
      if (index === -1) continue;
      this.children.splice(index, 1);
    }
  }
  dispose(renderer, ...any) {
  }
  load(renderer, ...any) {
  }
  render(renderer, ...any) {
  }
};
export {
  Scene
};
