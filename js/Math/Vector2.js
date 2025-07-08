export default class Vector2 {
    x;
    y;
    /**
     * @param {number} [x=0]
     * @param {number} [y=0]
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param {number} x
     * @param {number} y
     * @returns {this}
     */
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {this}
     */
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {this}
     */
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {this}
     */
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {this}
     */
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    addScalar(factor) {
        this.x += factor;
        this.y += factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    subtractScalar(factor) {
        this.x -= factor;
        this.y -= factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    multiplyScalar(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }
    /**
     * @param {number} factor
     * @returns {this}
     */
    divideScalar(factor) {
        this.x /= factor;
        this.y /= factor;
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {number}
     */
    distanceTo(vector) {
        const u = vector.x - this.x;
        const v = vector.y - this.y;
        const distance = Math.sqrt((u * u) + (v * v));
        return distance;
    }
    /**
     * @param {Vector2} vector
     * @returns {number}
     */
    distanceToSquared(vector) {
        const u = vector.x - this.x;
        const v = vector.y - this.y;
        const distance = (u * u) + (v * v);
        return distance;
    }
    /**
     * @returns {this}
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    /**
     * @returns {this}
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    /**
     * @returns {this}
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    /**
     * @param {Vector2} min
     * @param {Vector2} max
     * @returns {this}
     */
    clamp(min, max) {
        this.x = Math.max(min.x, Math.min(this.x, max.x));
        this.y = Math.max(min.y, Math.min(this.y, max.y));
        return this;
    }
    /**
     * @returns {this}
     */
    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y));
        if (magnitude === 0) {
            this.x = 0;
            this.y;
        }
        else {
            this.x /= magnitude;
            this.y /= magnitude;
        }
        return this;
    }
    /**
     * @param {Vector2} vector
     * @returns {number}
     */
    dot(vector) {
        return (this.x * vector.x) + (this.y * vector.y);
    }
    /**
     * @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * @returns {Vector2}
     */
    clone() {
        return new Vector2(this.x, this.y);
    }
    /**
     * @param {Vector2} vector
     * @returns {this}
     */
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }
}
