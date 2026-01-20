import { Euler } from "./Euler"
import { Matrix3 } from "./Matrix3"
import { Quaternion } from "./Quaternion"

export class Vector3 {
    x: number
    y: number
    z: number
    
    constructor(x=0, y=0, z=0) {
        this.x = x
        this.y = y
        this.z = z
    }

    static UP = new Vector3(0, 1, 0)

    set(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z

        return this
    }

    add(vector: Vector3) {
        this.x += vector.x
        this.y += vector.y
        this.z += vector.z
    
        return this
    }

    subtract(vector: Vector3) {
        this.x -= vector.x
        this.y -= vector.y
        this.z -= vector.z
    
        return this
    }

    multiply(vector: Vector3) {
        this.x *= vector.x
        this.y *= vector.y
        this.z *= vector.z
    
        return this
    }

    divide(vector: Vector3) {
        this.x /= vector.x
        this.y /= vector.y
        this.z /= vector.z
    
        return this
    }

    addScalar(factor: number) {
        this.x += factor
        this.y += factor
        this.z += factor

        return this
    }

    subtractScalar(factor: number) {
        this.x -= factor
        this.y -= factor
        this.z -= factor

        return this
    }

    multiplyScalar(factor: number) {
        this.x *= factor
        this.y *= factor
        this.z *= factor

        return this
    }

    divideScalar(factor: number) {
        this.x /= factor
        this.y /= factor
        this.z /= factor

        return this
    }

    distanceTo(vector: Vector3) {
        const a = vector.x - this.x
        const b = vector.y - this.y
        const c = vector.z - this.z
        const distance = Math.sqrt((a * a) + (b * b) + (c * c))

        return distance
    }

    distanceToSquared(vector: Vector3) {
        const a = vector.x - this.x
        const b = vector.y - this.y
        const c = vector.z - this.z
        const distance = (a * a) + (b * b) + (c * c)

        return distance
    }

    floor() {
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        this.z = Math.floor(this.z)

        return this
    }

    ceil() {
        this.x = Math.ceil(this.x)
        this.y = Math.ceil(this.y)
        this.z = Math.ceil(this.z)

        return this
    }

    round() {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)

        return this
    }

    clamp(min: Vector3, max: Vector3) {
        this.x = Math.max(min.x, Math.min(this.x, max.x))
        this.y = Math.max(min.y, Math.min(this.y, max.y))
        this.z = Math.max(min.z, Math.min(this.z, max.z))

        return this
    }

    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z))

        if(magnitude === 0) {
            this.x = 0
            this.y = 0
            this.z = 0
        } else {
            this.x /= magnitude
            this.y /= magnitude
            this.z /= magnitude
        }

        return this
    }

    applyFromMatrix3(matrix: Matrix3) {
        const { x, y, z } = this

        this.x = (matrix[0] * x) + (matrix[1] * y) + (matrix[2] * z)
        this.y = (matrix[3] * x) + (matrix[4] * y) + (matrix[5] * z)
        this.z = (matrix[6] * x) + (matrix[7] * y) + (matrix[8] * z)

        return this
    }

    applyQuaternion(quaternion: Quaternion) {
        const newX = 2 * (quaternion.x * this.y - quaternion.w * this.x + quaternion.y * this.z)
        const newY = 2 * (quaternion.y * this.x - quaternion.w * this.y + quaternion.x * this.z)
        const newZ = 2 * (quaternion.z * this.x - quaternion.w * this.z - quaternion.x * this.y)

        this.x = newX
        this.y = newY
        this.z = newZ

        return this
    }

    applyEuler(euler: Euler) {
        const quaternion = new Quaternion().setFromEuler(euler)

        return this.applyQuaternion(quaternion)
    }

    dot(vector: Vector3) {
        return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z)
    }

    cross(vector: Vector3) {
        return new Vector3(
            this.y * vector.z - this.z * vector.y,
            this.z * vector.x - this.x * vector.z,
            this.x * vector.y - this.y * vector.x
        )    
    }

    // https://mathworld.wolfram.com/SphericalCoordinates.html
    // rho = distance from origin
    // theta = angle in x-y plane
    // phi = angle in z axis
    setFromCylindricalCoordinates(rho: number, theta: number, phi: number) {
        // rho = clamp(0, rho, Infinity)
        // theta = clamp(0, theta, 2 * Math.PI)
        // phi = clamp(0, phi, Math.PI)

        this.x = rho * Math.sin(phi) * Math.cos(theta)
        this.y = rho * Math.sin(phi) * Math.sin(theta)
        this.z = rho * Math.cos(phi)

        return this
    }

    equals(vector: Vector3) {
        return this.x === vector.x && this.y === vector.y && this.z === vector.z
    }

    toArray() {
        return [this.x, this.y, this.z]
    }

    fromArray(array: number[]) {
        this.x = array[0]
        this.y = array[1]
        this.z = array[2]
    
        return this
    }

    getComponent(index: number) {
        switch(index) {
            case 0:
                return this.x
            case 1:
                return this.y
            case 2:
                return this.z
            default: 
                return 0
        }
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }

    clone() {
        return new Vector3(this.x, this.y, this.z)
    }

    copy(vector: Vector3) {
        this.x = vector.x
        this.y = vector.y
        this.z = vector.z

        return this
    }
}