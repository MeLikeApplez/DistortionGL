class Scene {
  children;
  enabled;
  ready;
  constructor() {
    this.children = [];
    this.enabled = true;
    this.ready = false;
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
  dispose(renderer, camera, ...any) {
  }
  load(renderer, camera, ...any) {
  }
  render(renderer, camera, ...any) {
  }
}
export {
  Scene
};
