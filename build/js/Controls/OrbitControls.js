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
export {
  OrbitControls
};
