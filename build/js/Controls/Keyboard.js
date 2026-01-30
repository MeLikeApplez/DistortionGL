import { Events } from "../Core/Events";
class Keyboard extends Events {
  element;
  keys;
  lowerCase;
  constructor(element, lowerCase = false) {
    super(["onkeyup", "onkeydown"]);
    this.element = element;
    this.keys = /* @__PURE__ */ new Set();
    this.lowerCase = lowerCase;
    if (element) this.load(element);
  }
  /**
   * @description Destroys keyboard event listeners
   */
  dispose() {
    if (!this.element) return false;
    window.onkeydown = null;
    window.onkeyup = null;
    this.element = null;
    this.keys.clear();
    return true;
  }
  /**
   * @description Checks if a key is being pressed down
   */
  hasKey(key) {
    return this.keys.has(key);
  }
  /**
   * @description Attaches event listeners to an HTML Element and activates the keyboard
   */
  load(element) {
    this.element = element;
    this.keys.clear();
    window.onkeydown = (event) => {
      const key = this.lowerCase ? event.key.toLowerCase() : event.key;
      if (this.keys.has(key)) return;
      this.keys.add(key);
      this.dispatchEvent("onkeydown", this);
    };
    window.onkeyup = (event) => {
      const key = this.lowerCase ? event.key.toLowerCase() : event.key;
      if (!this.keys.has(key)) return;
      this.keys.delete(key);
      this.dispatchEvent("onkeyup", this);
    };
    return true;
  }
}
export {
  Keyboard
};
