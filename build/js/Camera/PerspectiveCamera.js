// ../src/Math/Euler.ts
var Euler = class _Euler {
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

// ../src/Math/Quaternion.ts
var Quaternion3 = class _Quaternion {
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
var Vector33 = class _Vector3 {
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
    const quaternion = new Quaternion3().setFromEuler(euler);
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

// ../src/Camera/Camera.ts
var Camera = class {
  position;
  rotation;
  projectionMatrix;
  target;
  autoUpdate;
  needsUpdate;
  constructor() {
    this.position = new Vector33(0, 0, 0);
    this.rotation = new Euler();
    this.projectionMatrix = new Matrix42();
    this.target = new Vector33(0, 0, 0);
    this.autoUpdate = false;
    this.needsUpdate = false;
  }
  updateProjectionMatrix() {
  }
  render(renderer, ...any) {
  }
};

// ../src/Camera/PerspectiveCamera.ts
var PerspectiveCamera = class extends Camera {
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
  lookAt(target, up = Vector33.UP) {
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
  PerspectiveCamera
};
