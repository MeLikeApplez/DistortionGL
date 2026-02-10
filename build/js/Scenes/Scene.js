class Scene {
  entities;
  enabled;
  loaded;
  ready;
  constructor() {
    this.entities = [];
    this.enabled = true;
    this.loaded = false;
    this.ready = false;
  }
  add(...entities) {
    this.entities.push(...entities);
  }
  remove(...entities) {
    for (let i = 0; i < entities.length; i++) {
      const entity = entities[i];
      const index = this.entities.findIndex((e) => e.uuid === entity.uuid);
      if (index === -1) continue;
      this.entities.splice(index, 1);
    }
  }
}
export {
  Scene
};
