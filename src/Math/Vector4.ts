import { Matrix4 } from "./Matrix4"

export class Vector4 {
    x: number
    y: number
    z: number
    w: number

    constructor(x=0, y=0, z=0, w=0) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w
    }

    set(x: number, y: number, z: number, w: number) {
        this.x = x
        this.y = y
        this.z = z
        this.w = w

        return this
    }

    add(vector: Vector4) {
        this.x += vector.x
        this.y += vector.y
        this.z += vector.z
        this.w += vector.w
    
        return this
    }

    subtract(vector: Vector4) {
        this.x -= vector.x
        this.y -= vector.y
        this.z -= vector.z
        this.w -= vector.w
    
        return this
    }

    multiply(vector: Vector4) {
        this.x *= vector.x
        this.y *= vector.y
        this.z *= vector.z
        this.w *= vector.w
    
        return this
    }

    divide(vector: Vector4) {
        this.x /= vector.x
        this.y /= vector.y
        this.z /= vector.z
        this.w /= vector.w
    
        return this
    }

    addScalar(factor: number) {
        this.x += factor
        this.y += factor
        this.z += factor
        this.w += factor

        return this
    }

    subtractScalar(factor: number) {
        this.x -= factor
        this.y -= factor
        this.z -= factor
        this.w -= factor

        return this
    }

    multiplyScalar(factor: number) {
        this.x *= factor
        this.y *= factor
        this.z *= factor
        this.w *= factor

        return this
    }

    divideScalar(factor: number) {
        this.x /= factor
        this.y /= factor
        this.z /= factor
        this.w /= factor

        return this
    }

    distanceTo(vector: Vector4) {
        const a = vector.x - this.x
        const b = vector.y - this.y
        const c = vector.z - this.z
        const d = vector.w - this.w
        const distance = Math.sqrt((a * a) + (b * b) + (c * c) + (d * d))

        return distance
    }

    distanceToSquared(vector: Vector4) {
        const a = vector.x - this.x
        const b = vector.y - this.y
        const c = vector.z - this.z
        const d = vector.w - this.w
        const distance = (a * a) + (b * b) + (c * c) + (d * d)

        return distance
    }

    floor() {
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)
        this.z = Math.floor(this.z)
        this.w = Math.floor(this.w)

        return this
    }

    ceil() {
        this.x = Math.ceil(this.x)
        this.y = Math.ceil(this.y)
        this.z = Math.ceil(this.z)
        this.w = Math.ceil(this.w)

        return this
    }

    round() {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)
        this.z = Math.round(this.z)
        this.w = Math.round(this.w)

        return this
    }

     clamp(min: Vector4, max: Vector4) {
        this.x = Math.max(min.x, Math.min(this.x, max.x))
        this.y = Math.max(min.y, Math.min(this.y, max.y))
        this.z = Math.max(min.z, Math.min(this.z, max.z))
        this.w = Math.max(min.w, Math.min(this.w, max.w))

        return this
    }

    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w))

        if(magnitude === 0) {
            this.x = 0
            this.y = 0
            this.z = 0
            this.w = 0
        } else {
            this.x /= magnitude
            this.y /= magnitude
            this.z /= magnitude
            this.w /= magnitude
        }

        return this
    }

    applyFromMatrix4(matrix: Matrix4) {
        const { x, y, z, w } = this

        this.x = (matrix[0] * x) + (matrix[1] * y) + (matrix[2] * z) + (matrix[3] * w)
        this.y = (matrix[4] * x) + (matrix[5] * y) + (matrix[6] * z) + (matrix[7] * w)
        this.z = (matrix[8] * x) + (matrix[9] * y) + (matrix[10] * z) + (matrix[11] * w)
        this.w = (matrix[12] * x) + (matrix[13] * y) + (matrix[14] * z) + (matrix[15] * w)

        return this
    }

    dot(vector: Vector4) {
        return (this.x * vector.x) + (this.y * vector.y) + (this.z * vector.z) + (this.w * vector.w)
    }

    equals(vector: Vector4) {
        return this.x === vector.x && this.y === vector.y && this.z === vector.z && this.w === vector.w
    }

    toArray() {
        return [this.x, this.y, this.z, this.w]
    }

    fromArray(array: number[]) {
        this.x = array[0]
        this.y = array[1]
        this.z = array[2]
        this.w = array[3]
    
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
            case 3:
                return this.w
            default: 
                return 0
        }
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }

    clone() {
        return new Vector4(this.x, this.y, this.z, this.w)
    }

    copy(vector: Vector4) {
        this.x = vector.x
        this.y = vector.y
        this.z = vector.z
        this.w = vector.w

        return this
    }
}