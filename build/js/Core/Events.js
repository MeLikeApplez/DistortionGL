class Events {
  _listeners;
  constructor(eventNames) {
    this._listeners = /* @__PURE__ */ new Map();
    if (Array.isArray(eventNames)) {
      for (let i = 0; i < eventNames.length; i++) {
        this._listeners.set(eventNames[i], []);
      }
    }
  }
  /**
   * @description Dispatches data to all event listeners
   */
  dispatchEvent(eventName, data) {
    const group = this._listeners.get(eventName);
    if (!Array.isArray(group)) {
      this._listeners.set(eventName, []);
      return false;
    }
    for (let i = 0; i < group.length; i++) {
      const listener = group[i];
      listener(data);
    }
    return true;
  }
  /**
   * @description Adds a function to listen to events
   */
  addEventListener(eventName, callback) {
    const group = this._listeners.get(eventName);
    if (!group) throw Error(`Unable to find event event name: "${String(eventName)}"`);
    if (typeof callback !== "function") throw Error("Callback function is required!");
    group.push(callback);
  }
}
export {
  Events
};
