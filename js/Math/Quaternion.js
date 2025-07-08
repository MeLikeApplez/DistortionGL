export default class Quaternion {
    x;
    y;
    z;
    w;
    /**
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     * @param {number} [w=1]
     */
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} w
     * @returns {this}
     */
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    // https://stackoverflow.com/a/50012073/13159492
    /**
     * @param {Euler} euler
     * @returns {this}
     */
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
    /**
     * @param {Vector3} axis
     * @param {number} angle
     * @returns {Quaternion}
     */
    setFromAxisAngle(axis, angle) {
        const halfAngle = angle * 0.5;
        const s = Math.sin(halfAngle);
        return new Quaternion(axis.x * s, axis.y * s, axis.z * s, Math.cos(halfAngle));
    }
    /**
     * @returns {this}
     */
    identity() {
        this.set(0, 0, 0, 1);
        return this;
    }
    /**
     * @returns {this}
     */
    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w));
        if (magnitude === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0;
        }
        else {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
            this.w /= magnitude;
        }
        return this;
    }
    /**
     * @returns {this}
     */
    conjugate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        this.w = this.w;
        return this;
    }
    /**
     * @param {Quaternion} quaternion
     * @returns {this}
     */
    multiply(quaternion) {
        this.x = this.w * quaternion.x + this.x * quaternion.w + this.y * quaternion.z - this.z * quaternion.y;
        this.y = this.w * quaternion.y - this.x * quaternion.z + this.y * quaternion.w + this.z * quaternion.x;
        this.z = this.w * quaternion.z + this.x * quaternion.y - this.y * quaternion.x + this.z * quaternion.w;
        this.w = this.w * quaternion.w - this.x * quaternion.x - this.y * quaternion.y - this.z * quaternion.z;
        return this;
    }
    /**
     * @returns {Quaternion}
     */
    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }
    /**
     * @param {Quaternion} quaternion
     * @returns {this}
     */
    copy(quaternion) {
        this.x = quaternion.x;
        this.y = quaternion.y;
        this.z = quaternion.z;
        this.w = quaternion.w;
        return this;
    }
}
