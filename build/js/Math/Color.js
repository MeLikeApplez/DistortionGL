class Color extends Array {
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
    return new Color(this[0], this[1], this[2], this[3]);
  }
  copy(color) {
    this[0] = color[0];
    this[1] = color[1];
    this[2] = color[2];
    this[3] = color[3];
    return this;
  }
}
export {
  Color
};
