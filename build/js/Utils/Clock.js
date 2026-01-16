import { Events } from "../Core/Events";
class Clock extends Events {
  animationId;
  startTime;
  fps;
  deltaTime;
  constructor() {
    super(["onstart", "onstop", "onupdate"]);
    this.animationId = -1;
    this.startTime = -1;
    this.fps = 0;
    this.deltaTime = 0;
  }
  start() {
    this.startTime = -1;
    this.animationId = window.requestAnimationFrame(this.update.bind(this));
    this.dispatchEvent("onstart", this);
    return this.animationId;
  }
  stop() {
    window.cancelAnimationFrame(this.animationId);
    this.animationId = -1;
    this.startTime = -1;
    this.dispatchEvent("onstop", this);
    return this.animationId;
  }
  update(time) {
    this.animationId = window.requestAnimationFrame(this.update.bind(this));
    if (this.startTime === -1) {
      this.startTime = time;
      return;
    }
    this.deltaTime = (time - this.startTime) / 1e3;
    this.fps = 1 / this.deltaTime;
    this.startTime = time;
    this.dispatchEvent("onupdate", this);
  }
}
export {
  Clock
};
