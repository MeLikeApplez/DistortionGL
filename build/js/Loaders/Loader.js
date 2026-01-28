import { Events } from "../Core/Events";
class Loader extends Events {
  ready;
  constructor() {
    super();
    this.ready = false;
  }
}
export {
  Loader
};
