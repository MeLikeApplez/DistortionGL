export default class Vector4 {
    x;
    y;
    z;
    w;
    /**
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     * @param {number} [w=0]
     */
    constructor(x = 0, y = 0, z = 0, w = 0) {
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
    /**
     * @param {Vector4} vector
     * @returns {this}
     */
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        this.w += vector.w;
        return this;
    }
    /**
     * @param {Vector4} vector
     * @returns {this}
     */
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        this.w -= vector.w;
        return this;
    }
    /**
     * @param {Vector4} vector
     * @returns {this}
     */
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        this.w *= vector.w;
        return this;
    }
    /**
     * @param {Vector4} vector
     * @returns {this}
     */
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        this.z /= vector.z;
        this.w /= vector.w;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    addScalar(factor) {
        this.x += factor;
        this.y += factor;
        this.z += factor;
        this.w += factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    subtractScalar(factor) {
        this.x -= factor;
        this.y -= factor;
        this.z -= factor;
        this.w -= factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    multiplyScalar(factor) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
        this.w *= factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    divideScalar(factor) {
        this.x /= factor;
        this.y /= factor;
        this.z /= factor;
        this.w /= factor;
        return this;
    }
    /**
     * @param {Vector4} vector
     * @returns {number}
     */
    distanceTo(vector) {
        const a = vector.x - this.x;
        const b = vector.y - this.y;
        const c = vector.z - this.z;
        const d = vector.w - this.w;
        const distance = Math.sqrt((a * a) + (b * b) + (c * c) + (d * d));
        return distance;
    }
    /**
     * @param {Vector4} vector
     * @returns {number}
     */
    distanceToSquared(vector) {
        const a = vector.x - this.x;
        const b = vector.y - this.y;
        const c = vector.z - this.z;
        const d = vector.w - this.w;
        const distance = (a * a) + (b * b) + (c * c) + (d * d);
        return distance;
    }
    /**
     * @returns {this}
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        this.w = Math.floor(this.w);
        return this;
    }
    /**
     * @returns {this}
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        this.w = Math.ceil(this.w);
        return this;
    }
    /**
     * @returns {this}
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        this.w = Math.round(this.w);
        return this;
    }
    /**
    * @param {Vector4} min
    * @param {Vector4} max
    * @returns {this}
    */
    clamp(min, max) {
        this.x = Math.max(min.x, Math.min(this.x, max.x));
        this.y = Math.max(min.y, Math.min(this.y, max.y));
        this.z = Math.max(min.z, Math.min(this.z, max.z));
        this.w = Math.max(min.w, Math.min(this.w, max.w));
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
     * @param {Matrix4} matrix
     * @returns {this}
     */
    applyFromMatrix4(matrix) {
        this.x = (matrix[0] * this.x) + (matrix[1] * this.y) + (matrix[2] * this.z) + (matrix[3] * this.w);
        this.y = (matrix[4] * this.x) + (matrix[5] * this.y) + (matrix[6] * this.z) + (matrix[7] * this.w);
        this.z = (matrix[8] * this.x) + (matrix[9] * this.y) + (matrix[10] * this.z) + (matrix[11] * this.w);
        this.w = (matrix[12] * this.x) + (matrix[13] * this.y) + (matrix[14] * this.z) + (matrix[15] * this.w);
        return this;
    }
    /**
     * @param {Vector4} vector
     * @returns {number}
     */
    dot(vector) {
        return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z) + (this.w * vector.w);
    }
    /**
     * @param {Vector4} vector
     * @returns {boolean}
     */
    equals(vector) {
        return this.x === vector.x && this.y === vector.y && this.z === vector.z && this.w === vector.w;
    }
    /**
     * @returns {number[]}
     */
    toArray() {
        return [this.x, this.y, this.z, this.w];
    }
    /**
     * @param {number[]} array
     * @returns {this}
     */
    fromArray(array) {
        this.x = array[0];
        this.y = array[1];
        this.z = array[2];
        this.w = array[3];
        return this;
    }
    /**
     * @param {number} index
     * @returns {number}
     */
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
    /**
     * @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }
    /**
     * @returns {Vector4}
     */
    clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }
    /**
     * @param {Vector4} vector
     * @returns {this}
     */
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
        this.w = vector.w;
        return this;
    }
}
