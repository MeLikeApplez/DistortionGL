export default class Euler {
    x;
    y;
    z;
    order;
    /**
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.order = 'XYZ';
    }
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {string} [order]
     * @returns {this}
     */
    set(x, y, z, order) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.order = order || 'XYZ';
        return this;
    }
    // https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
    /**
     * @param {Quaternion} quaternion
     * @returns {this}
     */
    setFromQuaternion(quaternion) {
        const ry = 2 * ((quaternion.w * quaternion.x) + (quaternion.y * quaternion.z));
        const rx = 1 - (2 * ((quaternion.x * quaternion.x) + (quaternion.y * quaternion.y)));
        this.x = Math.atan2(ry, rx);
        const p = (2 * ((quaternion.w * quaternion.y) - (quaternion.x * quaternion.z)));
        const py = Math.sqrt(1 + p);
        const px = Math.sqrt(1 - p);
        this.y = 2 * Math.atan2(py, px) - (Math.PI / 2);
        const yy = 2 * ((quaternion.w * quaternion.z) + (quaternion.x * quaternion.y));
        const yx = 1 - 2 * ((quaternion.y * quaternion.y) + (quaternion.z * quaternion.z));
        this.z = Math.atan2(yy, yx);
        return this;
    }
    /**
     * @returns {{ a: number; b: number; c: number; }}
     */
    getEulerByOrder() {
        const a = this.order[0] === 'X' ? this.x : (this.order[0] === 'Y' ? this.y : (this.order[0] === 'Z' ? this.z : 0));
        const b = this.order[1] === 'X' ? this.x : (this.order[1] === 'Y' ? this.y : (this.order[1] === 'Z' ? this.z : 0));
        const c = this.order[2] === 'X' ? this.x : (this.order[2] === 'Y' ? this.y : (this.order[2] === 'Z' ? this.z : 0));
        return { a, b, c };
    }
    /**
     * @returns {{ s1: number; s2: number; s3: number; c1: number; c2: number; c3: number; }}
     */
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
    /**
     * @param {Matrix4} matrix4
     * @returns {this}
     */
    setFromRotationMatrix(matrix4) {
        this.x = Math.atan2(matrix4[9], matrix4[10]);
        this.y = Math.atan2(-matrix4[8], Math.sqrt(matrix4[9] * matrix4[9] + matrix4[10] * matrix4[10]));
        this.z = Math.atan2(matrix4[4], matrix4[0]);
        return this;
    }
    /**
     * @param {string} order
     * @returns {this}
     */
    reorder(order) {
        this.order = order;
        return this;
    }
    /**
     * @returns {Euler}
     */
    clone() {
        return new Euler(this.x, this.y, this.z);
    }
    /**
     * @param {Euler} euler
     * @returns {this}
     */
    copy(euler) {
        this.x = euler.x;
        this.y = euler.y;
        this.z = euler.z;
        return this;
    }
}
