/** @import { clamp } from './MathUtils' */
import Quaternion from "./Quaternion";
export default class Vector3 {
    x;
    y;
    z;
    /**
     * @param {number} [x=0]
     * @param {number} [y=0]
     * @param {number} [z=0]
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * @static
     * @default Vector3
     */
    static UP = new Vector3(0, 1, 0);
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {this}
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {this}
     */
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {this}
     */
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {this}
     */
    multiply(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        this.z *= vector.z;
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {this}
     */
    divide(vector) {
        this.x /= vector.x;
        this.y /= vector.y;
        this.z /= vector.z;
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
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {number}
     */
    distanceTo(vector) {
        const a = vector.x - this.x;
        const b = vector.y - this.y;
        const c = vector.z - this.z;
        const distance = Math.sqrt((a * a) + (b * b) + (c * c));
        return distance;
    }
    /**
     * @param {Vector3} vector
     * @returns {number}
     */
    distanceToSquared(vector) {
        const a = vector.x - this.x;
        const b = vector.y - this.y;
        const c = vector.z - this.z;
        const distance = (a * a) + (b * b) + (c * c);
        return distance;
    }
    /**
     * @returns {this}
     */
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    /**
     * @returns {this}
     */
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    /**
     * @returns {this}
     */
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    /**
     * @param {Vector3} min
     * @param {Vector3} max
     * @returns {this}
     */
    clamp(min, max) {
        this.x = Math.max(min.x, Math.min(this.x, max.x));
        this.y = Math.max(min.y, Math.min(this.y, max.y));
        this.z = Math.max(min.z, Math.min(this.z, max.z));
        return this;
    }
    /**
     * @returns {this}
     */
    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
        if (magnitude === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        else {
            this.x /= magnitude;
            this.y /= magnitude;
            this.z /= magnitude;
        }
        return this;
    }
    /**
     * @param {Matrix3} matrix
     * @returns {this}
     */
    applyFromMatrix3(matrix) {
        const { x, y, z } = this;
        this.x = (matrix[0] * x) + (matrix[1] * y) + (matrix[2] * z);
        this.y = (matrix[3] * x) + (matrix[4] * y) + (matrix[5] * z);
        this.z = (matrix[6] * x) + (matrix[7] * y) + (matrix[8] * z);
        return this;
    }
    /**
     * @param {Quaternion} quaternion
     * @returns {this}
     */
    applyQuaternion(quaternion) {
        const newX = 2 * (quaternion.x * this.y - quaternion.w * this.x + quaternion.y * this.z);
        const newY = 2 * (quaternion.y * this.x - quaternion.w * this.y + quaternion.x * this.z);
        const newZ = 2 * (quaternion.z * this.x - quaternion.w * this.z - quaternion.x * this.y);
        this.x = newX;
        this.y = newY;
        this.z = newZ;
        return this;
    }
    /**
     * @param {Euler} euler
     * @returns {this}
     */
    applyEuler(euler) {
        const quaternion = new Quaternion().setFromEuler(euler);
        return this.applyQuaternion(quaternion);
    }
    /**
     * @param {Vector3} vector
     * @returns {number}
     */
    dot(vector) {
        return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z);
    }
    /**
     * @param {Vector3} vector
     * @returns {Vector3}
     */
    cross(vector) {
        return new Vector3(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
    }
    // https://mathworld.wolfram.com/SphericalCoordinates.html
    // rho = distance from origin
    // theta = angle in x-y plane
    // phi = angle in z axis
    /**
     * @param {number} rho
     * @param {number} theta
     * @param {number} phi
     * @returns {this}
     */
    setFromCylindricalCoordinates(rho, theta, phi) {
        // rho = clamp(0, rho, Infinity)
        // theta = clamp(0, theta, 2 * Math.PI)
        // phi = clamp(0, phi, Math.PI)
        this.x = rho * Math.sin(phi) * Math.cos(theta);
        this.y = rho * Math.sin(phi) * Math.sin(theta);
        this.z = rho * Math.cos(phi);
        return this;
    }
    /**
     * @param {Vector3} vector
     * @returns {boolean}
     */
    equals(vector) {
        return this.x === vector.x && this.y === vector.y && this.z === vector.z;
    }
    /**
     * @returns {number[]}
     */
    toArray() {
        return [this.x, this.y, this.z];
    }
    /**
     * @param {number[]} array
     * @returns {this}
     */
    fromArray(array) {
        this.x = array[0];
        this.y = array[1];
        this.z = array[2];
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
            default:
                return 0;
        }
    }
    /**
     * @returns {number}
     */
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * @returns {Vector3}
     */
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    /**
     * @param {Vector3} vector
     * @returns {this}
     */
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
        return this;
    }
}
