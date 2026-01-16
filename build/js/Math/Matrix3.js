class Matrix3 extends Array {
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
    return new Matrix3(...this);
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
}
export {
  Matrix3
};
