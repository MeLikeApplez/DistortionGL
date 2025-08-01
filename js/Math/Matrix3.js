/** @extends Array */
export default class Matrix3 extends Array {
    /**
     * @param {number} [n11=1]
     * @param {number} [n12=0]
     * @param {number} [n13=0]
     * @param {number} [n21=0]
     * @param {number} [n22=1]
     * @param {number} [n23=0]
     * @param {number} [n31=0]
     * @param {number} [n32=0]
     * @param {number} [n33=1]
     */
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
    // @ts-ignore
    /**
     * @param {number} n11
     * @param {number} n12
     * @param {number} n13
     * @param {number} n21
     * @param {number} n22
     * @param {number} n23
     * @param {number} n31
     * @param {number} n32
     * @param {number} n33
     * @returns {this}
     */
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
    /**
     * @param {Matrix3} matrix
     * @returns {this}
     */
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
    /**
     * @returns {this}
     */
    identity() {
        this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
    }
    /**
     * @param {number} theta
     * @returns {this}
     */
    makeRotation(theta) {
        const sin = Math.sin(theta);
        const cos = Math.cos(theta);
        this.set(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
        return this;
    }
    /**
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    makeTranslation(x, y) {
        this.set(1, 0, x, 0, 1, y, 0, 0, 1);
        return this;
    }
    /**
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    translate(x, y) {
        this.set(1, 0, 0, 0, 1, 0, x, y, 1);
        return this;
    }
    /**
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    makeScale(x, y) {
        this.set(x, 0, 0, 0, y, 0, 0, 0, 1);
        return this;
    }
    /**
     * @param {Matrix3} matrix
     * @returns {this}
     */
    multiply(matrix) {
        for (let i = 0; i < this.length; i++) {
            this[i] *= matrix[i];
        }
        return this;
    }
    /**
     * @param {number} scale
     * @returns {this}
     */
    multiplyScalar(scale) {
        for (let i = 0; i < this.length; i++) {
            this[i] *= scale;
        }
        return this;
    }
    // source: https://stackoverflow.com/a/72596891/13159492
    /**
     * @returns {this}
     */
    inverse() {
        const [a, b, c, d, e, f, g, h, i] = this;
        const x = e * i - h * f;
        const y = f * g - d * i;
        const z = d * h - g * e;
        const det = a * x + b * y + c * z;
        if (det === 0)
            return null;
        this.set(x, c * h - b * i, b * f - c * e, y, a * i - c * g, d * c - a * f, z, g * b - a * h, a * e - d * b);
        return this;
    }
    /**
     * @param {Vector2} position
     * @param {number} theta
     * @param {Vector2} scale
     * @returns {void}
     */
    compose(position, theta, scale) {
        const sin = Math.sin(theta);
        const cos = Math.cos(theta);
        this.set(cos * scale.x, -sin * scale.y, position.x, sin * scale.x, cos * scale.y, position.y, 0, 0, 1);
    }
    /**
     * @returns {Matrix3}
     */
    clone() {
        return new Matrix3(...this);
    }
    /**
     * @param {Matrix3} matrix
     * @returns {this}
     */
    copy(matrix) {
        this.set(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8]);
        return this;
    }
}
