// ../src/Math/MathUtils.ts
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function clamp(min, value, max) {
  return value < min ? min : value > max ? max : value;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
var lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  return lut[d0 & 255] + lut[d0 >> 8 & 255] + lut[d0 >> 16 & 255] + lut[d0 >> 24 & 255] + "-" + lut[d1 & 255] + lut[d1 >> 8 & 255] + "-" + lut[d1 >> 16 & 15 | 64] + lut[d1 >> 24 & 255] + "-" + lut[d2 & 63 | 128] + lut[d2 >> 8 & 255] + "-" + lut[d2 >> 16 & 255] + lut[d2 >> 24 & 255] + lut[d3 & 255] + lut[d3 >> 8 & 255] + lut[d3 >> 16 & 255] + lut[d3 >> 24 & 255];
}
function extendArray(array, size) {
  const ArrayConstructor = array.constructor;
  const arrayCopy = ArrayConstructor(array.length * size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < array.length; j++) {
      arrayCopy[array.length * i + j] = array[j];
    }
  }
  return arrayCopy;
}

// ../src/Core/Events.ts
var Events = class {
  _listeners;
  constructor(eventNames) {
    this._listeners = /* @__PURE__ */ new Map();
    if (Array.isArray(eventNames)) {
      for (let i = 0; i < eventNames.length; i++) {
        this._listeners.set(eventNames[i], []);
      }
    }
  }
  createEvent(eventName) {
    this._listeners.set(eventName, []);
    return this;
  }
  dispatchEvent(eventName, data) {
    const group = this._listeners.get(eventName);
    if (!group) return false;
    for (let i = 0; i < group.length; i++) {
      const listener = group[i];
      listener.callback(data);
    }
    return true;
  }
  listen(eventName, callback) {
    const group = this._listeners.get(eventName);
    if (!group) return new Error(`Unable to find event eventName: "${String(eventName)}"`);
    if (typeof callback !== "function") return new Error("Callback function is required!");
    const uuid = generateUUID();
    group.push({ uuid, callback });
    return uuid;
  }
};

// ../src/Math/Vector2.ts
var Vector2 = class _Vector2 {
  x;
  y;
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    return this;
  }
  divide(vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    return this;
  }
  addScalar(factor) {
    this.x += factor;
    this.y += factor;
    return this;
  }
  subtractScalar(factor) {
    this.x -= factor;
    this.y -= factor;
    return this;
  }
  multiplyScalar(factor) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }
  divideScalar(factor) {
    this.x /= factor;
    this.y /= factor;
    return this;
  }
  distanceTo(vector) {
    const u = vector.x - this.x;
    const v = vector.y - this.y;
    const distance = Math.sqrt(u * u + v * v);
    return distance;
  }
  distanceToSquared(vector) {
    const u = vector.x - this.x;
    const v = vector.y - this.y;
    const distance = u * u + v * v;
    return distance;
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(this.x, max.x));
    this.y = Math.max(min.y, Math.min(this.y, max.y));
    return this;
  }
  normalize() {
    const magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
    if (magnitude === 0) {
      this.x = 0;
      this.y = 0;
    } else {
      this.x /= magnitude;
      this.y /= magnitude;
    }
    return this;
  }
  dot(vector) {
    return this.x * vector.x + this.y * vector.y;
  }
  equals(vector) {
    return this.x === vector.x && this.y === vector.y;
  }
  // https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js#L828
  rotateAround(center, angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    const x = this.x - center.x;
    const y = this.y - center.y;
    this.x = x * c - y * s + center.x;
    this.y = x * s + y * c + center.y;
    return this;
  }
  toArray() {
    return [this.x, this.y];
  }
  fromArray(array) {
    this.x = array[0];
    this.y = array[1];
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        return 0;
    }
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  clone() {
    return new _Vector2(this.x, this.y);
  }
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }
};

// ../src/Controls/Pointer.ts
var Pointer = class {
  element;
  position;
  down;
  drag;
  offset;
  mouseScroll;
  isPointerDragging;
  isPointerDown;
  isPointerUp;
  devicePixelRatio;
  events;
  constructor(element, devicePixelRatio = 1) {
    this.element = element;
    this.position = new Vector2(0, 0);
    this.down = new Vector2(0, 0);
    this.drag = new Vector2(0, 0);
    this.offset = new Vector2(0, 0);
    this.mouseScroll = 0;
    this.isPointerDragging = false;
    this.isPointerDown = false;
    this.isPointerUp = true;
    this.devicePixelRatio = devicePixelRatio;
    this.events = new Events(["onpointerup", "onpointermove", "onpointerdown", "onmousescroll"]);
    if (element) this.load(element);
  }
  dispose() {
    if (!this.element) return false;
    this.position.set(0, 0);
    this.down.set(0, 0);
    this.drag.set(0, 0);
    this.offset.set(0, 0);
    this.element.onpointerdown = null;
    this.element.onpointermove = null;
    this.element.onpointerup = null;
    this.element.onwheel = null;
    this.element = null;
    return true;
  }
  load(element) {
    this.element = element;
    element.onwheel = (event) => {
      this.mouseScroll += event.deltaY;
      this.events.dispatchEvent("onmousescroll", this);
    };
    element.onpointerdown = (event) => {
      this.isPointerDown = true;
      this.isPointerUp = false;
      const rect = element.getBoundingClientRect();
      this.position.set(
        this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
        this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
      );
      this.drag.set(0, 0);
      if (!this.isPointerDragging && this.isPointerDown) {
        this.isPointerDragging = true;
        this.down.copy(this.position);
      }
      this.events.dispatchEvent("onpointerdown", this);
    };
    element.onpointermove = (event) => {
      const rect = element.getBoundingClientRect();
      this.position.set(
        this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
        this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
      );
      if (this.isPointerDown) {
        this.drag.set(
          this.position.x - this.down.x,
          this.position.y - this.down.y
        );
      }
      this.events.dispatchEvent("onpointermove", this);
    };
    element.onpointerup = (event) => {
      this.isPointerDown = false;
      this.isPointerUp = true;
      if (this.isPointerDragging) {
        this.isPointerDragging = false;
        this.down.set(0, 0);
        this.drag.set(0, 0);
      }
      this.events.dispatchEvent("onpointerup", this);
    };
    return true;
  }
};
export {
  Pointer
};
