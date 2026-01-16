// ../src/Utils/Utils.ts
function Promisify(promiseFunc, customError) {
  return new Promise((res) => {
    promiseFunc.then((value) => {
      res([value, null]);
    }).catch((err) => {
      console.error(customError || err);
      res([null, customError || err]);
    });
  });
}

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

// ../src/Utils/Clock.ts
var Clock = class {
  events;
  animationId;
  startTime;
  fps;
  deltaTime;
  constructor() {
    this.events = new Events(["onstart", "onstop", "onupdate"]);
    this.animationId = -1;
    this.startTime = -1;
    this.fps = 0;
    this.deltaTime = 0;
  }
  start() {
    this.startTime = -1;
    this.animationId = window.requestAnimationFrame(this.update.bind(this));
    this.events.dispatchEvent("onstart", this);
    return this.animationId;
  }
  stop() {
    window.cancelAnimationFrame(this.animationId);
    this.animationId = -1;
    this.startTime = -1;
    this.events.dispatchEvent("onstop", this);
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
    this.events.dispatchEvent("onupdate", this);
  }
};

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

// ../src/Renderers/Renderer.ts
var Renderer2 = class {
  scene;
  canvasElement;
  constructor(canvasElement) {
    this.scene = null;
    this.canvasElement = canvasElement;
  }
  setSize(width, height, devicePixelRatio = 1) {
    this.canvasElement.width = width * devicePixelRatio;
    this.canvasElement.height = height * devicePixelRatio;
  }
  render(scene, camera) {
  }
};

// ../src/Renderers/WebGL2Renderer.ts
var WebGL2Renderer = class extends Renderer2 {
  gl;
  static isAvailable(canvasElement) {
    return !!canvasElement.getContext("webgl2");
  }
  constructor(canvasElement, glOptions = {}) {
    super(canvasElement);
    this.gl = canvasElement.getContext("webgl2", glOptions);
  }
  render(scene, camera) {
    scene.render(this);
  }
};

// ../src/Math/Vector4.ts
var Vector4 = class _Vector4 {
  x;
  y;
  z;
  w;
  constructor(x = 0, y = 0, z = 0, w = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    this.w += vector.w;
    return this;
  }
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    this.w -= vector.w;
    return this;
  }
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;
    this.w *= vector.w;
    return this;
  }
  divide(vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    this.z /= vector.z;
    this.w /= vector.w;
    return this;
  }
  addScalar(factor) {
    this.x += factor;
    this.y += factor;
    this.z += factor;
    this.w += factor;
    return this;
  }
  subtractScalar(factor) {
    this.x -= factor;
    this.y -= factor;
    this.z -= factor;
    this.w -= factor;
    return this;
  }
  multiplyScalar(factor) {
    this.x *= factor;
    this.y *= factor;
    this.z *= factor;
    this.w *= factor;
    return this;
  }
  divideScalar(factor) {
    this.x /= factor;
    this.y /= factor;
    this.z /= factor;
    this.w /= factor;
    return this;
  }
  distanceTo(vector) {
    const a = vector.x - this.x;
    const b = vector.y - this.y;
    const c = vector.z - this.z;
    const d = vector.w - this.w;
    const distance = Math.sqrt(a * a + b * b + c * c + d * d);
    return distance;
  }
  distanceToSquared(vector) {
    const a = vector.x - this.x;
    const b = vector.y - this.y;
    const c = vector.z - this.z;
    const d = vector.w - this.w;
    const distance = a * a + b * b + c * c + d * d;
    return distance;
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(this.x, max.x));
    this.y = Math.max(min.y, Math.min(this.y, max.y));
    this.z = Math.max(min.z, Math.min(this.z, max.z));
    this.w = Math.max(min.w, Math.min(this.w, max.w));
    return this;
  }
  normalize() {
    const magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (magnitude === 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
    } else {
      this.x /= magnitude;
      this.y /= magnitude;
      this.z /= magnitude;
      this.w /= magnitude;
    }
    return this;
  }
  applyFromMatrix4(matrix) {
    const { x, y, z, w } = this;
    this.x = matrix[0] * x + matrix[1] * y + matrix[2] * z + matrix[3] * w;
    this.y = matrix[4] * x + matrix[5] * y + matrix[6] * z + matrix[7] * w;
    this.z = matrix[8] * x + matrix[9] * y + matrix[10] * z + matrix[11] * w;
    this.w = matrix[12] * x + matrix[13] * y + matrix[14] * z + matrix[15] * w;
    return this;
  }
  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
  }
  equals(vector) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z && this.w === vector.w;
  }
  toArray() {
    return [this.x, this.y, this.z, this.w];
  }
  fromArray(array) {
    this.x = array[0];
    this.y = array[1];
    this.z = array[2];
    this.w = array[3];
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        return 0;
    }
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  clone() {
    return new _Vector4(this.x, this.y, this.z, this.w);
  }
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;
    this.w = vector.w;
    return this;
  }
};

// ../src/Math/Quaternion.ts
var Quaternion = class _Quaternion {
  x;
  y;
  z;
  w;
  constructor(x = 0, y = 0, z = 0, w = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  set(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  // https://stackoverflow.com/a/50012073/13159492
  setFromEuler(euler) {
    const { a, b, c } = euler.getEulerByOrder();
    const s1 = Math.sin(a / 2);
    const s2 = Math.sin(b / 2);
    const s3 = Math.sin(c / 2);
    const c1 = Math.cos(a / 2);
    const c2 = Math.cos(b / 2);
    const c3 = Math.cos(c / 2);
    this.x = c1 * c2 * c3 + s1 * s2 * s3;
    this.y = s1 * c2 * c3 - c1 * s2 * s3;
    this.z = c1 * s2 * c3 + s1 * c2 * s3;
    this.w = c1 * c2 * s3 - s1 * s2 * c3;
    return this;
  }
  setFromAxisAngle(axis, angle) {
    const halfAngle = angle * 0.5;
    const s = Math.sin(halfAngle);
    return new _Quaternion(
      axis.x * s,
      axis.y * s,
      axis.z * s,
      Math.cos(halfAngle)
    );
  }
  identity() {
    this.set(0, 0, 0, 1);
    return this;
  }
  normalize() {
    const magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (magnitude === 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.w = 0;
    } else {
      this.x /= magnitude;
      this.y /= magnitude;
      this.z /= magnitude;
      this.w /= magnitude;
    }
    return this;
  }
  conjugate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = this.w;
    return this;
  }
  multiply(quaternion) {
    this.x = this.w * quaternion.x + this.x * quaternion.w + this.y * quaternion.z - this.z * quaternion.y;
    this.y = this.w * quaternion.y - this.x * quaternion.z + this.y * quaternion.w + this.z * quaternion.x;
    this.z = this.w * quaternion.z + this.x * quaternion.y - this.y * quaternion.x + this.z * quaternion.w;
    this.w = this.w * quaternion.w - this.x * quaternion.x - this.y * quaternion.y - this.z * quaternion.z;
    return this;
  }
  clone() {
    return new _Quaternion(this.x, this.y, this.z, this.w);
  }
  copy(quaternion) {
    this.x = quaternion.x;
    this.y = quaternion.y;
    this.z = quaternion.z;
    this.w = quaternion.w;
    return this;
  }
};

// ../src/Math/Vector3.ts
var Vector32 = class _Vector3 {
  x;
  y;
  z;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  static UP = new _Vector3(0, 1, 0);
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    return this;
  }
  subtract(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    return this;
  }
  multiply(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
    this.z *= vector.z;
    return this;
  }
  divide(vector) {
    this.x /= vector.x;
    this.y /= vector.y;
    this.z /= vector.z;
    return this;
  }
  addScalar(factor) {
    this.x += factor;
    this.y += factor;
    this.z += factor;
    return this;
  }
  subtractScalar(factor) {
    this.x -= factor;
    this.y -= factor;
    this.z -= factor;
    return this;
  }
  multiplyScalar(factor) {
    this.x *= factor;
    this.y *= factor;
    this.z *= factor;
    return this;
  }
  divideScalar(factor) {
    this.x /= factor;
    this.y /= factor;
    this.z /= factor;
    return this;
  }
  distanceTo(vector) {
    const a = vector.x - this.x;
    const b = vector.y - this.y;
    const c = vector.z - this.z;
    const distance = Math.sqrt(a * a + b * b + c * c);
    return distance;
  }
  distanceToSquared(vector) {
    const a = vector.x - this.x;
    const b = vector.y - this.y;
    const c = vector.z - this.z;
    const distance = a * a + b * b + c * c;
    return distance;
  }
  floor() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  }
  ceil() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  }
  round() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  }
  clamp(min, max) {
    this.x = Math.max(min.x, Math.min(this.x, max.x));
    this.y = Math.max(min.y, Math.min(this.y, max.y));
    this.z = Math.max(min.z, Math.min(this.z, max.z));
    return this;
  }
  normalize() {
    const magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    if (magnitude === 0) {
      this.x = 0;
      this.y = 0;
      this.z = 0;
    } else {
      this.x /= magnitude;
      this.y /= magnitude;
      this.z /= magnitude;
    }
    return this;
  }
  applyFromMatrix3(matrix) {
    const { x, y, z } = this;
    this.x = matrix[0] * x + matrix[1] * y + matrix[2] * z;
    this.y = matrix[3] * x + matrix[4] * y + matrix[5] * z;
    this.z = matrix[6] * x + matrix[7] * y + matrix[8] * z;
    return this;
  }
  applyQuaternion(quaternion) {
    const newX = 2 * (quaternion.x * this.y - quaternion.w * this.x + quaternion.y * this.z);
    const newY = 2 * (quaternion.y * this.x - quaternion.w * this.y + quaternion.x * this.z);
    const newZ = 2 * (quaternion.z * this.x - quaternion.w * this.z - quaternion.x * this.y);
    this.x = newX;
    this.y = newY;
    this.z = newZ;
    return this;
  }
  applyEuler(euler) {
    const quaternion = new Quaternion().setFromEuler(euler);
    return this.applyQuaternion(quaternion);
  }
  dot(vector) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z;
  }
  cross(vector) {
    return new _Vector3(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    );
  }
  // https://mathworld.wolfram.com/SphericalCoordinates.html
  // rho = distance from origin
  // theta = angle in x-y plane
  // phi = angle in z axis
  setFromCylindricalCoordinates(rho, theta, phi) {
    this.x = rho * Math.sin(phi) * Math.cos(theta);
    this.y = rho * Math.sin(phi) * Math.sin(theta);
    this.z = rho * Math.cos(phi);
    return this;
  }
  equals(vector) {
    return this.x === vector.x && this.y === vector.y && this.z === vector.z;
  }
  toArray() {
    return [this.x, this.y, this.z];
  }
  fromArray(array) {
    this.x = array[0];
    this.y = array[1];
    this.z = array[2];
    return this;
  }
  getComponent(index) {
    switch (index) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        return 0;
    }
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  clone() {
    return new _Vector3(this.x, this.y, this.z);
  }
  copy(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;
    return this;
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

// ../src/Math/Matrix4.ts
var Matrix42 = class _Matrix4 extends Array {
  constructor(n11 = 1, n12 = 0, n13 = 0, n14 = 0, n21 = 0, n22 = 1, n23 = 0, n24 = 0, n31 = 0, n32 = 0, n33 = 1, n34 = 0, n41 = 0, n42 = 0, n43 = 0, n44 = 1) {
    super(16);
    this[0] = n11;
    this[1] = n12;
    this[2] = n13;
    this[3] = n14;
    this[4] = n21;
    this[5] = n22;
    this[6] = n23;
    this[7] = n24;
    this[8] = n31;
    this[9] = n32;
    this[10] = n33;
    this[11] = n34;
    this[12] = n41;
    this[13] = n42;
    this[14] = n43;
    this[15] = n44;
  }
  set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    this[0] = n11;
    this[1] = n12;
    this[2] = n13;
    this[3] = n14;
    this[4] = n21;
    this[5] = n22;
    this[6] = n23;
    this[7] = n24;
    this[8] = n31;
    this[9] = n32;
    this[10] = n33;
    this[11] = n34;
    this[12] = n41;
    this[13] = n42;
    this[14] = n43;
    this[15] = n44;
    return this;
  }
  setFromMatrix4(matrix) {
    this[0] = matrix[0];
    this[1] = matrix[1];
    this[2] = matrix[2];
    this[3] = matrix[3];
    this[4] = matrix[4];
    this[5] = matrix[5];
    this[6] = matrix[6];
    this[7] = matrix[7];
    this[8] = matrix[8];
    this[9] = matrix[9];
    this[10] = matrix[10];
    this[11] = matrix[11];
    this[12] = matrix[12];
    this[13] = matrix[13];
    this[14] = matrix[14];
    this[15] = matrix[15];
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeTranslation(x, y, z) {
    this.set(
      1,
      0,
      0,
      x,
      0,
      1,
      0,
      y,
      0,
      0,
      1,
      z,
      0,
      0,
      0,
      1
    );
    return this;
  }
  translate(x, y, z) {
    this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      x,
      y,
      z,
      1
    );
    return this;
  }
  makeScale(x, y, z) {
    this.set(
      x,
      0,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      0,
      z,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationX(theta) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    this.set(
      1,
      0,
      0,
      0,
      0,
      cos,
      -sin,
      0,
      0,
      sin,
      cos,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationY(theta) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    this.set(
      cos,
      0,
      sin,
      0,
      0,
      1,
      0,
      0,
      -sin,
      0,
      cos,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotationZ(theta) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    this.set(
      cos,
      -sin,
      0,
      0,
      sin,
      cos,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    );
    return this;
  }
  // https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix
  makeRotationFromEuler(euler) {
    const { s1, s2, s3, c1, c2, c3 } = euler.getEulerByOrderTrig();
    switch (euler.order) {
      // proper euler angles
      case "XZX":
        return this.set(
          c2,
          -c3 * s2,
          s2 * s3,
          0,
          c1 * s2,
          c1 * c2 * c3 - s1 * s3,
          -c3 * s1 - c1 * c2 * s3,
          0,
          s1 * s2,
          c1 * s3 + c2 * c3 * s1,
          c1 * c3 - c2 * s1 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "XYX":
        return this.set(
          c2,
          s2 * s3,
          c3 * s2,
          0,
          s1 * s2,
          c1 * c3 - c2 * s1 * s3,
          -(c1 * s3) - c2 * c3 * s1,
          0,
          -c1 * s2,
          c3 * s1 + c1 * c2 * s3,
          c1 * c2 * c3 - s1 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "YXY":
        return this.set(
          c1 * c3 - c2 * s1 * s3,
          s1 * s2,
          c1 * s3 + c2 * c3 * s1,
          0,
          s2 * s3,
          c2,
          -c3 * s2,
          0,
          -c3 * s1 - -c1 * c2 * s3,
          c1 * s2,
          c1 * c2 * c3 - s1 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "YZY":
        return this.set(
          c1 * c2 * c3 - s1 * s3,
          -c1 * s2,
          c3 * s1 + c1 * c2 * s3,
          0,
          c3 * s2,
          c2,
          s2 * s3,
          0,
          -c1 * s3 - c2 * c3 * s1,
          s1 * s2,
          c1 * c3 - c2 * s1 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "ZYZ":
        return this.set(
          c1 * c2 * c3 - s1 * s3,
          -c3 * s1 - c1 * c2 * s3,
          c1 * s2,
          0,
          c1 * s3 + c2 * c3 * s1,
          c1 * c3 - c2 * s1 * s3,
          s1 * s2,
          0,
          -c3 * s2,
          s2 * s3,
          c2,
          0,
          0,
          0,
          0,
          1
        );
      case "ZXZ":
        return this.set(
          c1 * c3 - c2 * s1 * s3,
          -c1 * s3 - c2 * c3 * s1,
          s1 * s2,
          0,
          c3 * s1 + c1 * c2 * s3,
          c1 * c2 * c3 - s1 * s3,
          -c1 * s2,
          0,
          s2 * s3,
          c3 * s2,
          c2,
          0,
          0,
          0,
          0,
          1
        );
      // tait-bryan angles
      case "XZY":
        return this.set(
          c2 * c3,
          -s2,
          c2 * s3,
          0,
          s1 * s3 + c1 * c3 * s2,
          c1 * c2,
          c1 * s2 * s3 - c3 * s1,
          0,
          c3 * s1 * s2 - c1 * s3,
          c2 * s1,
          c1 * c3 + s1 * s2 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "XYZ":
        return this.set(
          c2 * c3,
          -c2 * s3,
          s2,
          0,
          c1 * s3 + c3 * s1 * s2,
          c1 * c3 - s1 * s2 * s3,
          -c2 * s1,
          0,
          s1 * s3 - c1 * c3 * s2,
          c3 * s1 + c1 * s2 * s3,
          c1 * c2,
          0,
          0,
          0,
          0,
          1
        );
      case "YXZ":
        return this.set(
          c1 * c3 + s1 * s2 * s3,
          c3 * s1 * s2 - c1 * s3,
          c2 * s1,
          0,
          c2 * s3,
          c2 * c3,
          -s2,
          0,
          c1 * s2 * s3 - c3 * s1,
          c1 * c3 * s2 + s1 * s3,
          c1 * c2,
          0,
          0,
          0,
          0,
          1
        );
      case "YZX":
        return this.set(
          c1 * c2,
          s1 * s3 - c1 * c3 * s2,
          c3 * s1 + c1 * s2 * s3,
          0,
          s2,
          c2 * c3,
          -c2 * s3,
          0,
          -c2 * s1,
          c1 * s3 + c3 * s1 * s2,
          c1 * c3 - s1 * s2 * s3,
          0,
          0,
          0,
          0,
          1
        );
      case "ZYX":
        return this.set(
          c1 * c2,
          c1 * s2 * s3 - c3 * s1,
          s1 * s3 + c1 * c3 * s2,
          0,
          c2 * s1,
          c1 * c3 + s1 * s2 * s3,
          c3 * s1 * s2 - c1 * s3,
          0,
          -s2,
          c2 * s3,
          c2 * c3,
          0,
          0,
          0,
          0,
          1
        );
      case "ZXY":
        return this.set(
          c1 * c3 - s1 * s2 * s3,
          -c1 * s1,
          c1 * s3 + c3 * s1 * s2,
          0,
          c3 * s1 + c1 * s2 * s3,
          c1 * c2,
          s1 * s3 - c1 * c3 * s2,
          0,
          -c2 * s3,
          s2,
          c2 * c3,
          0,
          0,
          0,
          0,
          1
        );
    }
    return null;
  }
  makeRotationFromQuaternion(quaternion) {
    const x2 = quaternion.x * quaternion.x;
    const y2 = quaternion.y * quaternion.y;
    const z2 = quaternion.z * quaternion.z;
    const xy = quaternion.x * quaternion.y;
    const xz = quaternion.x * quaternion.z;
    const yz = quaternion.y * quaternion.z;
    const xw = quaternion.x * quaternion.w;
    const yw = quaternion.y * quaternion.w;
    const zw = quaternion.z * quaternion.w;
    const m11 = 1 - (2 * y2 - 2 * z2);
    const m12 = 2 * xy - 2 * zw;
    const m13 = 2 * xz + 2 * yw;
    const m21 = 2 * xy + 2 * zw;
    const m22 = 1 - (2 * x2 - 2 * z2);
    const m23 = 2 * yz - 2 * xw;
    const m31 = 2 * xz - 2 * yw;
    const m32 = 2 * yz + 2 * xw;
    const m33 = 1 - (2 * x2 - 2 * y2);
    return this.set(
      m11,
      m12,
      m13,
      0,
      m21,
      m22,
      m23,
      0,
      m31,
      m32,
      m33,
      0,
      0,
      0,
      0,
      1
    );
  }
  multiply(matrix) {
    this.multiplyMatrices(this, matrix);
    return this;
  }
  // https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542
  multiplyMatrices(a, b) {
    const ae = a;
    const be = b;
    const te = this;
    const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
    const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
    const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
    const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];
    const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
    const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
    const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
    const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  }
  multiplyScalar(scale) {
    for (let i = 0; i < this.length; i++) {
      this[i] *= scale;
    }
    return this;
  }
  // source: https://evanw.github.io/lightgl.js/docs/matrix.html
  inverse() {
    const result = new _Matrix4();
    const r = result;
    const m = this;
    r[0] = m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[6] * m[9] * m[15] + m[6] * m[13] * m[11] + m[7] * m[9] * m[14] - m[7] * m[13] * m[10];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[2] * m[9] * m[15] - m[2] * m[13] * m[11] - m[3] * m[9] * m[14] + m[3] * m[13] * m[10];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[2] * m[5] * m[15] + m[2] * m[13] * m[7] + m[3] * m[5] * m[14] - m[3] * m[13] * m[6];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[2] * m[5] * m[11] - m[2] * m[9] * m[7] - m[3] * m[5] * m[10] + m[3] * m[9] * m[6];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[6] * m[8] * m[15] - m[6] * m[12] * m[11] - m[7] * m[8] * m[14] + m[7] * m[12] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[2] * m[8] * m[15] + m[2] * m[12] * m[11] + m[3] * m[8] * m[14] - m[3] * m[12] * m[10];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[2] * m[4] * m[15] - m[2] * m[12] * m[7] - m[3] * m[4] * m[14] + m[3] * m[12] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[2] * m[4] * m[11] + m[2] * m[8] * m[7] + m[3] * m[4] * m[10] - m[3] * m[8] * m[6];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[5] * m[8] * m[15] + m[5] * m[12] * m[11] + m[7] * m[8] * m[13] - m[7] * m[12] * m[9];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[1] * m[8] * m[15] - m[1] * m[12] * m[11] - m[3] * m[8] * m[13] + m[3] * m[12] * m[9];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[1] * m[4] * m[15] + m[1] * m[12] * m[7] + m[3] * m[4] * m[13] - m[3] * m[12] * m[5];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[1] * m[4] * m[11] - m[1] * m[8] * m[7] - m[3] * m[4] * m[9] + m[3] * m[8] * m[5];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[5] * m[8] * m[14] - m[5] * m[12] * m[10] - m[6] * m[8] * m[13] + m[6] * m[12] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[1] * m[8] * m[14] + m[1] * m[12] * m[10] + m[2] * m[8] * m[13] - m[2] * m[12] * m[9];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[1] * m[4] * m[14] - m[1] * m[12] * m[6] - m[2] * m[4] * m[13] + m[2] * m[12] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[1] * m[4] * m[10] + m[1] * m[8] * m[6] + m[2] * m[4] * m[9] - m[2] * m[8] * m[5];
    const det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];
    for (var i = 0; i < 16; i++) {
      r[i] /= det;
    }
    this.set(
      r[0],
      r[1],
      r[2],
      r[3],
      r[4],
      r[5],
      r[6],
      r[7],
      r[8],
      r[9],
      r[10],
      r[11],
      r[12],
      r[13],
      r[14],
      r[15]
    );
    return this;
  }
  // source: https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001
  compose(position, quaternion, scale) {
    const te = this;
    const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2;
    const yy = y * y2, yz = y * z2, zz = z * z2;
    const wx = w * x2, wy = w * y2, wz = w * z2;
    const sx = scale.x, sy = scale.y, sz = scale.z;
    te[0] = (1 - (yy + zz)) * sx;
    te[1] = (xy + wz) * sx;
    te[2] = (xz - wy) * sx;
    te[3] = 0;
    te[4] = (xy - wz) * sy;
    te[5] = (1 - (xx + zz)) * sy;
    te[6] = (yz + wx) * sy;
    te[7] = 0;
    te[8] = (xz + wy) * sz;
    te[9] = (yz - wx) * sz;
    te[10] = (1 - (xx + yy)) * sz;
    te[11] = 0;
    te[12] = position.x;
    te[13] = position.y;
    te[14] = position.z;
    te[15] = 1;
    return this;
  }
  clone() {
    return new _Matrix4(...this);
  }
  copy(matrix) {
    return this.set(
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8],
      matrix[9],
      matrix[10],
      matrix[11],
      matrix[12],
      matrix[13],
      matrix[14],
      matrix[15]
    );
  }
};

// ../src/Math/Matrix3.ts
var Matrix32 = class _Matrix3 extends Array {
  constructor(n11 = 1, n12 = 0, n13 = 0, n21 = 0, n22 = 1, n23 = 0, n31 = 0, n32 = 0, n33 = 1) {
    super(9);
    this[0] = n11;
    this[1] = n12;
    this[2] = n13;
    this[3] = n21;
    this[4] = n22;
    this[5] = n23;
    this[6] = n31;
    this[7] = n32;
    this[8] = n33;
  }
  set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
    this[0] = n11;
    this[1] = n12;
    this[2] = n13;
    this[3] = n21;
    this[4] = n22;
    this[5] = n23;
    this[6] = n31;
    this[7] = n32;
    this[8] = n33;
    return this;
  }
  setFromMatrix3(matrix) {
    this[0] = matrix[0];
    this[1] = matrix[1];
    this[2] = matrix[2];
    this[3] = matrix[3];
    this[4] = matrix[4];
    this[5] = matrix[5];
    this[6] = matrix[6];
    this[7] = matrix[7];
    this[8] = matrix[8];
    return this;
  }
  identity() {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeRotation(theta) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    this.set(
      cos,
      -sin,
      0,
      sin,
      cos,
      0,
      0,
      0,
      1
    );
    return this;
  }
  makeTranslation(x, y) {
    this.set(
      1,
      0,
      x,
      0,
      1,
      y,
      0,
      0,
      1
    );
    return this;
  }
  translate(x, y) {
    this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      x,
      y,
      1
    );
    return this;
  }
  makeScale(x, y) {
    this.set(
      x,
      0,
      0,
      0,
      y,
      0,
      0,
      0,
      1
    );
    return this;
  }
  multiply(matrix) {
    this.multiplyMatrices(this, matrix);
    return this;
  }
  // https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix3.js#L215
  multiplyMatrices(a, b) {
    const ae = a;
    const be = b;
    const te = this;
    const a11 = ae[0], a12 = ae[3], a13 = ae[6];
    const a21 = ae[1], a22 = ae[4], a23 = ae[7];
    const a31 = ae[2], a32 = ae[5], a33 = ae[8];
    const b11 = be[0], b12 = be[3], b13 = be[6];
    const b21 = be[1], b22 = be[4], b23 = be[7];
    const b31 = be[2], b32 = be[5], b33 = be[8];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31;
    te[3] = a11 * b12 + a12 * b22 + a13 * b32;
    te[6] = a11 * b13 + a12 * b23 + a13 * b33;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31;
    te[4] = a21 * b12 + a22 * b22 + a23 * b32;
    te[7] = a21 * b13 + a22 * b23 + a23 * b33;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31;
    te[5] = a31 * b12 + a32 * b22 + a33 * b32;
    te[8] = a31 * b13 + a32 * b23 + a33 * b33;
    return this;
  }
  multiplyScalar(scale) {
    for (let i = 0; i < this.length; i++) {
      this[i] *= scale;
    }
    return this;
  }
  // source: https://stackoverflow.com/a/72596891/13159492
  inverse() {
    const [a, b, c, d, e, f, g, h, i] = this;
    const x = e * i - h * f;
    const y = f * g - d * i;
    const z = d * h - g * e;
    const det = a * x + b * y + c * z;
    if (det === 0) return null;
    this.set(
      x,
      c * h - b * i,
      b * f - c * e,
      y,
      a * i - c * g,
      d * c - a * f,
      z,
      g * b - a * h,
      a * e - d * b
    );
    return this;
  }
  compose(position, theta, scale) {
    const sin = Math.sin(theta);
    const cos = Math.cos(theta);
    this.set(
      cos * scale.x,
      -sin * scale.y,
      position.x,
      sin * scale.x,
      cos * scale.y,
      position.y,
      0,
      0,
      1
    );
    return this;
  }
  clone() {
    return new _Matrix3(...this);
  }
  copy(matrix) {
    this.set(
      matrix[0],
      matrix[1],
      matrix[2],
      matrix[3],
      matrix[4],
      matrix[5],
      matrix[6],
      matrix[7],
      matrix[8]
    );
    return this;
  }
};

// ../src/Math/Euler.ts
var Euler4 = class _Euler {
  x;
  y;
  z;
  order;
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.order = "XYZ";
  }
  set(x, y, z, order) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.order = order || "XYZ";
    return this;
  }
  // https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
  setFromQuaternion(quaternion) {
    const ry = 2 * (quaternion.w * quaternion.x + quaternion.y * quaternion.z);
    const rx = 1 - 2 * (quaternion.x * quaternion.x + quaternion.y * quaternion.y);
    this.x = Math.atan2(ry, rx);
    const p = 2 * (quaternion.w * quaternion.y - quaternion.x * quaternion.z);
    const py = Math.sqrt(1 + p);
    const px = Math.sqrt(1 - p);
    this.y = 2 * Math.atan2(py, px) - Math.PI / 2;
    const yy = 2 * (quaternion.w * quaternion.z + quaternion.x * quaternion.y);
    const yx = 1 - 2 * (quaternion.y * quaternion.y + quaternion.z * quaternion.z);
    this.z = Math.atan2(yy, yx);
    return this;
  }
  getEulerByOrder() {
    const a = this.order[0] === "X" ? this.x : this.order[0] === "Y" ? this.y : this.order[0] === "Z" ? this.z : 0;
    const b = this.order[1] === "X" ? this.x : this.order[1] === "Y" ? this.y : this.order[1] === "Z" ? this.z : 0;
    const c = this.order[2] === "X" ? this.x : this.order[2] === "Y" ? this.y : this.order[2] === "Z" ? this.z : 0;
    return { a, b, c };
  }
  getEulerByOrderTrig() {
    const { a, b, c } = this.getEulerByOrder();
    const s1 = Math.sin(a);
    const s2 = Math.sin(b);
    const s3 = Math.sin(c);
    const c1 = Math.cos(a);
    const c2 = Math.cos(b);
    const c3 = Math.cos(c);
    return { s1, s2, s3, c1, c2, c3 };
  }
  setFromRotationMatrix(matrix4) {
    this.x = Math.atan2(matrix4[9], matrix4[10]);
    this.y = Math.atan2(-matrix4[8], Math.sqrt(matrix4[9] * matrix4[9] + matrix4[10] * matrix4[10]));
    this.z = Math.atan2(matrix4[4], matrix4[0]);
    return this;
  }
  reorder(order) {
    this.order = order;
    return this;
  }
  clone() {
    return new _Euler(this.x, this.y, this.z);
  }
  copy(euler) {
    this.x = euler.x;
    this.y = euler.y;
    this.z = euler.z;
    return this;
  }
};

// ../src/Math/Color.ts
var Color = class _Color extends Array {
  constructor(r, g, b, a = 1) {
    super(4);
    this[0] = r;
    this[1] = g;
    this[2] = b;
    this[3] = a;
  }
  get r() {
    return this[0];
  }
  get g() {
    return this[1];
  }
  get b() {
    return this[2];
  }
  get a() {
    return this[3];
  }
  set r(value) {
    this[0] = value;
  }
  set g(value) {
    this[1] = value;
  }
  set b(value) {
    this[2] = value;
  }
  set a(value) {
    this[3] = value;
  }
  set(r, g, b, a = 1) {
    this[0] = r;
    this[1] = g;
    this[2] = b;
    this[3] = a;
    return this;
  }
  setFromArray(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this;
  }
  setFromVector3(vector) {
    this[0] = vector.x;
    this[1] = vector.y;
    this[2] = vector.z;
    return this;
  }
  setFromVector4(vector) {
    this[0] = vector.x;
    this[1] = vector.y;
    this[2] = vector.z;
    this[3] = vector.w;
    return this;
  }
  setRgb(r, g, b, a = 1) {
    this[0] = r;
    this[1] = g;
    this[2] = b;
    this[3] = a;
    return this;
  }
  setHex(hex, alpha = 1) {
    this[3] = alpha;
    this[2] = hex & 255;
    this[1] = (hex & 65280) >> 8;
    this[0] = (hex & 16711680) >> 16;
    return this;
  }
  add(color) {
    this[0] += color[0];
    this[1] += color[1];
    this[2] += color[2];
    this[3] += color[3];
    return this;
  }
  subtract(color) {
    this[0] -= color[0];
    this[1] -= color[1];
    this[2] -= color[2];
    this[3] -= color[3];
    return this;
  }
  multiply(color) {
    this[0] *= color[0];
    this[1] *= color[1];
    this[2] *= color[2];
    this[3] *= color[3];
    return this;
  }
  divide(color) {
    this[0] /= color[0];
    this[1] /= color[1];
    this[2] /= color[2];
    this[3] /= color[3];
    return this;
  }
  addScalar(factor) {
    this[0] += factor;
    this[1] += factor;
    this[2] += factor;
    this[3] += factor;
    return this;
  }
  subtractScalar(factor) {
    this[0] -= factor;
    this[1] -= factor;
    this[2] -= factor;
    this[3] -= factor;
    return this;
  }
  multiplyScalar(factor) {
    this[0] *= factor;
    this[1] *= factor;
    this[2] *= factor;
    this[3] *= factor;
    return this;
  }
  divideScalar(factor) {
    this[0] /= factor;
    this[1] /= factor;
    this[2] /= factor;
    this[3] /= factor;
    return this;
  }
  normalize() {
    const magnitude = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    if (magnitude === 0) {
      this[0] = 0;
      this[1] = 0;
      this[2] = 0;
    } else {
      this[0] /= magnitude;
      this[1] /= magnitude;
      this[2] /= magnitude;
    }
    return this;
  }
  floor() {
    this[0] = Math.floor(this[0]);
    this[1] = Math.floor(this[1]);
    this[2] = Math.floor(this[2]);
    this[3] = Math.floor(this[3]);
    return this;
  }
  ceil() {
    this[0] = Math.ceil(this[0]);
    this[1] = Math.ceil(this[1]);
    this[2] = Math.ceil(this[2]);
    this[3] = Math.ceil(this[3]);
    return this;
  }
  round() {
    this[0] = Math.round(this[0]);
    this[1] = Math.round(this[1]);
    this[2] = Math.round(this[2]);
    this[3] = Math.round(this[3]);
    return this;
  }
  clamp(min, max) {
    this[0] = Math.max(min.x, Math.min(this[0], max.x));
    this[1] = Math.max(min.y, Math.min(this[1], max.y));
    this[2] = Math.max(min.z, Math.min(this[2], max.z));
    this[3] = Math.max(min.w, Math.min(this[3], max.w));
    return this;
  }
  equals(color) {
    return this[0] === color[0] && this[1] === color[1] && this[2] === color[2] && this[3] === color[3];
  }
  // https://github.com/mrdoob/three.js/blob/master/src/math/Color.js#L777
  lerp(color, alpha) {
    this[0] += (color[0] - this[0]) * alpha;
    this[1] += (color[1] - this[1]) * alpha;
    this[2] += (color[2] - this[2]) * alpha;
    return this;
  }
  clone() {
    return new _Color(this[0], this[1], this[2], this[3]);
  }
  copy(color) {
    this[0] = color[0];
    this[1] = color[1];
    this[2] = color[2];
    this[3] = color[3];
    return this;
  }
};

// ../src/Loaders/Loader.ts
var Loader = class extends Events {
  constructor() {
    super();
  }
  load(...any) {
  }
};

// ../src/Loaders/WebGL2ShaderLoader.ts
var WebGL2ShaderLoader = class extends Loader {
  constructor() {
    super();
  }
};

// ../src/Loaders/ShaderLoader.ts
var ShaderLoader = class extends Loader {
  name;
  vertexCode;
  fragmentCode;
  program;
  uniforms;
  attributes;
  preloaded;
  ready;
  error;
  constructor(options) {
    super();
    this.name = options?.name || "Shader";
    this.vertexCode = null;
    this.fragmentCode = null;
    this.uniforms = {};
    this.attributes = {};
    this.program = null;
    this.preloaded = false;
    this.ready = false;
    this.error = null;
    this._setUniformsAndAttributes(options);
    if (options.type === "source-code") {
      this.vertexCode = options.vertexShader;
      this.fragmentCode = options.fragmentShader;
    } else if (options.type === "url") {
      this._setSourceCodeFromURL(options.vertexShader, options.fragmentShader);
    } else {
      throw Error("Invalid Shader Loader options!");
    }
  }
  static loadAll(gl, shaders, recompile = false) {
    for (let i = 0; i < shaders.length; i++) {
      const shader = shaders[i];
      shader.load(gl, recompile);
    }
  }
  async _setSourceCodeFromURL(vertexSrc, fragmentSrc) {
    const [vertexResponse, fragmentResponse] = await Promise.allSettled([
      fetch(vertexSrc),
      fetch(fragmentSrc)
    ]);
    if (vertexResponse.status === "rejected" || !vertexResponse.value.ok) {
      this.ready = false;
      this.error = new Error("Failed to fetch vertex shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    if (fragmentResponse.status === "rejected" || !fragmentResponse.value.ok) {
      this.ready = false;
      this.error = new Error("Failed to fetch fragment shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    const [vertexCode, fragmentCode] = await Promise.allSettled([
      vertexResponse.value.text(),
      fragmentResponse.value.text()
    ]);
    if (vertexCode.status === "rejected") {
      this.ready = false;
      this.error = new Error("Failed to parse text for vertex shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    if (fragmentCode.status === "rejected") {
      this.ready = false;
      this.error = new Error("Failed to parse text for fragment shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    this.vertexCode = vertexCode.value;
    this.fragmentCode = fragmentCode.value;
  }
  _setUniformsAndAttributes(options) {
    if (Array.isArray(options.uniforms)) {
      for (let i = 0; i < options.uniforms.length; i++) {
        const key = options.uniforms[i];
        this.uniforms[key] = null;
      }
    }
    if (Array.isArray(options.attributes)) {
      for (let i = 0; i < options.attributes.length; i++) {
        const key = options.attributes[i];
        this.attributes[key] = -1;
      }
    }
  }
  load(gl, recompile = false) {
    if (!recompile && this.ready && this.program && !this.error) return;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      return void console.error("Failed to create vertex shader!");
    }
    if (this.vertexCode === null) return void console.error("Vertex shader code is not a string!");
    if (this.fragmentCode === null) return void console.error("Fragment shader code is not a string!");
    gl.shaderSource(vertexShader, this.vertexCode);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      const shaderLogError = gl.getShaderInfoLog(vertexShader);
      const compileError = new Error(`[Vertex Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) {
      return void console.error("Failed to create fragment shader!");
    }
    gl.shaderSource(fragmentShader, this.fragmentCode);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      const shaderLogError = gl.getShaderInfoLog(fragmentShader);
      const compileError = new Error(`[Fragment Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const shaderLogError = gl.getProgramInfoLog(program);
      const compileError = new Error(`[Link Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const numOfActiveUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < numOfActiveUniforms; i++) {
      const activeUniform = gl.getActiveUniform(program, i);
      if (activeUniform === null) continue;
      this.uniforms[activeUniform.name] = gl.getUniformLocation(program, activeUniform.name);
    }
    const numOfActiveAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < numOfActiveAttribs; i++) {
      const activeAttrib = gl.getActiveAttrib(program, i);
      if (activeAttrib === null) continue;
      this.attributes[activeAttrib.name] = gl.getAttribLocation(program, activeAttrib.name);
    }
    this.program = program;
    this.ready = true;
    this.error = null;
    this.dispatchEvent("onload", this.program);
  }
};

// ../src/Loaders/ImageLoader.ts
var ImageLoader = class extends Loader {
  constructor() {
    super();
  }
  load(src, onload, onerror) {
    const imgElement = new Image();
    imgElement.src = src;
    imgElement.onload = () => {
      if (onload) onload(imgElement);
      this.dispatchEvent("onload", imgElement);
    };
    imgElement.onerror = (error) => {
      if (onerror) onerror(error);
      this.dispatchEvent("onerror", error);
    };
  }
};

// ../src/Core/Entity.ts
var Entity2 = class {
  uuid;
  name;
  type;
  position;
  scale;
  rotation;
  quaternion;
  matrix;
  matrixAutoUpdate;
  matrixNeedsUpdate;
  autoUpdate;
  needsUpdate;
  constructor() {
    this.uuid = generateUUID();
    this.name = "";
    this.type = "";
    this.position = null;
    this.scale = null;
    this.rotation = null;
    this.quaternion = null;
    this.matrix = null;
    this.matrixAutoUpdate = false;
    this.matrixNeedsUpdate = false;
    this.autoUpdate = false;
    this.needsUpdate = false;
  }
  dispose(renderer, ...any) {
  }
  update(renderer, ...any) {
  }
  render(renderer, ...any) {
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

// ../src/Controls/OrbitControls.ts
var OrbitControls = class {
  element;
  camera;
  _initialRotatePosition;
  rotatePosition;
  // _initialPanPosition: Vector2
  // panPosition: Vector2
  _initialZoom;
  zoomDistance;
  drag;
  rotateSpeed;
  panSpeed;
  zoomSpeed;
  minZoom;
  maxZoom;
  enableOrbit;
  enableZoom;
  constructor(element, camera) {
    this.element = element;
    this.camera = camera;
    this._initialRotatePosition = new Vector2(0, 0);
    this.rotatePosition = new Vector2(0, 0);
    this._initialZoom = 0;
    this.zoomDistance = 0;
    this.drag = new Vector2(0, 0);
    this.rotateSpeed = 1;
    this.panSpeed = 1;
    this.zoomSpeed = 1;
    this.minZoom = 0;
    this.maxZoom = 10;
    this.enableOrbit = true;
    this.enableZoom = true;
  }
  dispose() {
    if (!this.element) return false;
    this.element = null;
    this._initialRotatePosition.set(0, 0);
    this.rotatePosition.set(0, 0);
    this.drag = new Vector2(0, 0);
    return true;
  }
  orbit(controller) {
    if (!this.enableOrbit) return;
    this.rotatePosition.copy(controller.position);
    if (!this.element || controller.isPointerUp) {
      this.drag.set(0, 0);
      this._initialRotatePosition.copy(this.rotatePosition);
      return;
    }
    this.drag.x = this.rotatePosition.x - this._initialRotatePosition.x;
    this.drag.y = this.rotatePosition.y - this._initialRotatePosition.y;
    const { width, height } = this.element.getBoundingClientRect();
    const distance = this.camera.position.distanceTo(this.camera.target);
    const dx = this.drag.x / width * distance * this.rotateSpeed;
    const dy = this.drag.y / height * distance * this.rotateSpeed;
    const position = new Vector32(this.camera.position.x, this.camera.position.y, this.camera.position.z).subtract(this.camera.target);
    const rho = Math.sqrt(position.x * position.x + position.y * position.y + position.z * position.z);
    const theta = Math.atan2(position.z, position.x) + dx;
    const phi = Math.asin(position.y / rho) + dy;
    this.camera.position.set(
      rho * Math.cos(phi) * Math.cos(theta),
      rho * Math.sin(phi),
      rho * Math.cos(phi) * Math.sin(theta)
    ).add(this.camera.target);
    this.camera.lookAt(this.camera.target);
    this._initialRotatePosition.copy(this.rotatePosition);
  }
  zoom(controller) {
    if (!this.enableZoom || !this.element || this._initialZoom === controller.mouseScroll) return;
    const zoomDirection = this._initialZoom - controller.mouseScroll > 0 ? -1 : 1;
    const zoomQuantity = zoomDirection * this.zoomSpeed;
    if (this.zoomDistance + zoomQuantity < this.minZoom || this.zoomDistance + zoomQuantity > this.maxZoom) {
      this._initialZoom = controller.mouseScroll;
      return;
    }
    this.zoomDistance += zoomQuantity;
    const cameraDirection = new Vector32(this.camera.position.x, this.camera.position.y, this.camera.position.z).subtract(this.camera.target).normalize().multiplyScalar(zoomQuantity);
    this.camera.position.add(cameraDirection);
    this._initialZoom = controller.mouseScroll;
  }
};

// ../src/Camera/Camera.ts
var Camera4 = class {
  position;
  rotation;
  projectionMatrix;
  target;
  autoUpdate;
  needsUpdate;
  constructor() {
    this.position = new Vector32(0, 0, 0);
    this.rotation = new Euler4();
    this.projectionMatrix = new Matrix42();
    this.target = new Vector32(0, 0, 0);
    this.autoUpdate = false;
    this.needsUpdate = false;
  }
  updateProjectionMatrix() {
  }
  render(renderer, ...any) {
  }
};

// ../src/Camera/Camera2D.ts
var Camera2D = class extends Camera4 {
  zoom;
  resolution;
  minZoom;
  maxZoom;
  zoomScaleFactor;
  constructor() {
    super();
    this.zoom = new Vector2(1, 1);
    this.resolution = new Vector2(1, 1);
    this.minZoom = 0.5;
    this.maxZoom = 4;
    this.zoomScaleFactor = 0.1;
  }
  updateProjectionMatrix() {
    this.projectionMatrix[0] = this.zoom.x / this.resolution.x;
    this.projectionMatrix[5] = this.zoom.y / this.resolution.y;
    this.needsUpdate = false;
  }
  render(renderer, uniforms) {
    renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z);
    renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
  }
};

// ../src/Camera/OrthographicCamera.ts
var OrthographicCamera = class extends Camera4 {
  left;
  right;
  top;
  bottom;
  aspect;
  near;
  far;
  zoom;
  rotationMatrix;
  constructor(left, right, top, bottom, aspect, near, far) {
    super();
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.zoom = 1;
    this.rotationMatrix = new Matrix42();
    this.updateProjectionMatrix();
  }
  lookAt(target, up = Vector32.UP) {
    const zAxis = this.position.clone().subtract(target).normalize();
    const xAxis = up.cross(zAxis).normalize();
    const yAxis = zAxis.cross(xAxis).normalize();
    const rotationMatrix = new Matrix42(
      xAxis.x,
      xAxis.y,
      xAxis.z,
      0,
      yAxis.x,
      yAxis.y,
      yAxis.z,
      0,
      zAxis.x,
      zAxis.y,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    this.target.set(target.x, target.y, target.z);
    this.rotationMatrix.setFromMatrix4(rotationMatrix);
    this.rotation.setFromRotationMatrix(this.rotationMatrix);
    return this;
  }
  // https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
  // https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169
  updateProjectionMatrix(reversedDepth = false) {
    const aspectRight = this.right * this.aspect;
    const aspectLeft = this.left * this.aspect;
    const dx = (aspectRight - aspectLeft) / (2 * this.zoom);
    const dy = (this.top - this.bottom) / (2 * this.zoom);
    const cx = (aspectRight + aspectLeft) / 2;
    const cy = (this.top + this.bottom) / 2;
    const left = cx - dx;
    const right = cx + dx;
    const top = cy + dy;
    const bottom = cy - dy;
    const x = 2 / (right - left);
    const y = 2 / (top - bottom);
    const a = -(right + left) / (right - left);
    const b = -(top + bottom) / (top - bottom);
    let c = 0;
    let d = 0;
    if (reversedDepth) {
      c = 1 / (this.far - this.near);
      d = this.far / (this.far - this.near);
    } else {
      c = -2 / (this.far - this.near);
      d = -(this.far + this.near) / (this.far - this.near);
    }
    this.projectionMatrix.set(
      x,
      0,
      0,
      a,
      0,
      y,
      0,
      b,
      0,
      0,
      c,
      d,
      0,
      0,
      0,
      1
    );
    this.rotationMatrix.makeRotationFromEuler(this.rotation);
    return this;
  }
  render(renderer, uniforms) {
    renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z);
    renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
    renderer.gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix);
  }
};

// ../src/Controls/Keyboard.ts
var Keyboard = class {
  element;
  keys;
  lowerCase;
  events;
  constructor(element, lowerCase = false) {
    this.element = element;
    this.keys = /* @__PURE__ */ new Set();
    this.lowerCase = lowerCase;
    this.events = new Events(["onkeyup", "onkeydown"]);
    if (element) this.load(element);
  }
  dispose() {
    if (!this.element) return false;
    window.onkeydown = null;
    window.onkeyup = null;
    this.element = null;
    this.keys.clear();
    return true;
  }
  load(element) {
    this.element = element;
    this.keys.clear();
    window.onkeydown = (event) => {
      const key = this.lowerCase ? event.key.toLowerCase() : event.key;
      if (this.keys.has(key)) return;
      this.keys.add(key);
      this.events.dispatchEvent("onkeydown", this);
    };
    window.onkeyup = (event) => {
      const key = this.lowerCase ? event.key.toLowerCase() : event.key;
      if (!this.keys.has(key)) return;
      this.keys.delete(key);
      this.events.dispatchEvent("onkeyup", this);
    };
    return true;
  }
};

// ../src/Camera/PerspectiveCamera.ts
var PerspectiveCamera2 = class extends Camera4 {
  fov;
  aspect;
  near;
  far;
  rotationMatrix;
  constructor(fov, aspect, near, far) {
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.rotationMatrix = new Matrix42();
    this.updateProjectionMatrix();
  }
  lookAt(target, up = Vector32.UP) {
    const zAxis = this.position.clone().subtract(target).normalize();
    const xAxis = up.cross(zAxis).normalize();
    const yAxis = zAxis.cross(xAxis).normalize();
    const rotationMatrix = new Matrix42(
      xAxis.x,
      xAxis.y,
      xAxis.z,
      0,
      yAxis.x,
      yAxis.y,
      yAxis.z,
      0,
      zAxis.x,
      zAxis.y,
      zAxis.z,
      0,
      0,
      0,
      0,
      1
    );
    this.target.set(target.x, target.y, target.z);
    this.rotationMatrix.setFromMatrix4(rotationMatrix);
    this.rotation.setFromRotationMatrix(this.rotationMatrix);
    return this;
  }
  updateProjectionMatrix() {
    const fovRadian = this.fov * (Math.PI / 180);
    const f = 1 / Math.tan(fovRadian / 2);
    const rangeInv = 1 / (this.near - this.far);
    this.projectionMatrix.set(
      f / this.aspect,
      0,
      0,
      0,
      0,
      f,
      0,
      0,
      0,
      0,
      (this.near + this.far) * rangeInv,
      -1,
      0,
      0,
      this.near * this.far * rangeInv * 2,
      0
    );
    this.rotationMatrix.makeRotationFromEuler(this.rotation);
    this.needsUpdate = false;
    return this;
  }
  render(renderer, uniforms) {
    renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z);
    renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
    renderer.gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix);
  }
};
export {
  Camera4 as Camera,
  Camera2D,
  Clock,
  Color,
  Entity2 as Entity,
  Euler4 as Euler,
  Events,
  ImageLoader,
  Keyboard,
  Loader,
  Matrix32 as Matrix3,
  Matrix42 as Matrix4,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera2 as PerspectiveCamera,
  Pointer,
  Promisify,
  Quaternion,
  Renderer2 as Renderer,
  Scene,
  ShaderLoader,
  Vector2,
  Vector32 as Vector3,
  Vector4,
  WebGL2Renderer,
  WebGL2ShaderLoader,
  clamp,
  extendArray,
  generateUUID,
  lerp,
  randomFloat,
  randomInt
};
