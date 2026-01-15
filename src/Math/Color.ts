import { Vector3 } from "./Vector3"
import { Vector4 } from "./Vector4"

export class Color extends Array {
    constructor(r: number, g: number, b: number, a: number=1) {
        super(4)

        this[0] = r
        this[1] = g
        this[2] = b
        this[3] = a
    }

    get r() {
        return this[0]
    }

    get g() {
        return this[1]
    }

    get b() {
        return this[2]
    }

    get a() {
        return this[3]
    }

    set r(value: number) {
        this[0] = value
    }

    set g(value: number) {
        this[1] = value
    }

    set b(value: number) {
        this[2] = value
    }

    set a(value: number) {
        this[3] = value
    }

    set(r: number, g: number, b: number, a: number=1) {
        this[0] = r
        this[1] = g
        this[2] = b
        this[3] = a

        return this
    }

    setFromArray(array: number[]) {
        this[0] = array[0]
        this[1] = array[1]
        this[2] = array[2]
        this[3] = array[3]
        
        return this
    }

    setFromVector3(vector: Vector3) {
        this[0] = vector.x
        this[1] = vector.y
        this[2] = vector.z

        return this
    }

    setFromVector4(vector: Vector4) {
        this[0] = vector.x
        this[1] = vector.y
        this[2] = vector.z
        this[3] = vector.w
    
        return this
    }

    setRgb(r: number, g: number, b: number, a: number=1) {
        this[0] = r
        this[1] = g
        this[2] = b
        this[3] = a
    
        return this
    }

    setHex(hex: number, alpha: number=1) {
        this[3] = alpha
        this[2] = hex & 0xFF
        this[1] = (hex & 0x00FF00) >> 8
        this[0] = (hex & 0xFF0000) >> 16

        return this
    }

    add(color: Color) {
        this[0] += color[0]
        this[1] += color[1]
        this[2] += color[2]
        this[3] += color[3]
    
        return this
    }

    subtract(color: Color) {
        this[0] -= color[0]
        this[1] -= color[1]
        this[2] -= color[2]
        this[3] -= color[3]
    
        return this
    }

    multiply(color: Color) {
        this[0] *= color[0]
        this[1] *= color[1]
        this[2] *= color[2]
        this[3] *= color[3]
    
        return this
    }

    divide(color: Color) {
        this[0] /= color[0]
        this[1] /= color[1]
        this[2] /= color[2]
        this[3] /= color[3]
    
        return this
    }

    addScalar(factor: number) {
        this[0] += factor
        this[1] += factor
        this[2] += factor
        this[3] += factor

        return this
    }

    subtractScalar(factor: number) {
        this[0] -= factor
        this[1] -= factor
        this[2] -= factor
        this[3] -= factor

        return this
    }

    multiplyScalar(factor: number) {
        this[0] *= factor
        this[1] *= factor
        this[2] *= factor
        this[3] *= factor

        return this
    }

    divideScalar(factor: number) {
        this[0] /= factor
        this[1] /= factor
        this[2] /= factor
        this[3] /= factor

        return this
    }

    normalize() {
        const magnitude = Math.sqrt((this[0] * this[0]) + (this[1] * this[1]) + (this[2] * this[2]))

        if(magnitude === 0) {
            this[0] = 0
            this[1] = 0
            this[2] = 0
        } else {
            this[0] /= magnitude
            this[1] /= magnitude
            this[2] /= magnitude
        }

        return this
    }

    floor() {
        this[0] = Math.floor(this[0])
        this[1] = Math.floor(this[1])
        this[2] = Math.floor(this[2])
        this[3] = Math.floor(this[3])

        return this
    }

    ceil() {
        this[0] = Math.ceil(this[0])
        this[1] = Math.ceil(this[1])
        this[2] = Math.ceil(this[2])
        this[3] = Math.ceil(this[3])

        return this
    }

    round() {
        this[0] = Math.round(this[0])
        this[1] = Math.round(this[1])
        this[2] = Math.round(this[2])
        this[3] = Math.round(this[3])

        return this
    }

     clamp(min: Vector4, max: Vector4) {
        this[0] = Math.max(min.x, Math.min(this[0], max.x))
        this[1] = Math.max(min.y, Math.min(this[1], max.y))
        this[2] = Math.max(min.z, Math.min(this[2], max.z))
        this[3] = Math.max(min.w, Math.min(this[3], max.w))

        return this
    }

    equals(color: Color) {
        return this[0] === color[0] && this[1] === color[1] && this[2] === color[2] && this[3] === color[3]
    }

    // https://github.com/mrdoob/three.js/blob/master/src/math/Color.js#L777
    lerp(color: Color, alpha: number) {
		this[0] += (color[0] - this[0]) * alpha
		this[1] += (color[1] - this[1]) * alpha
		this[2] += (color[2] - this[2]) * alpha

		return this
	}

    clone() {
        return new Color(this[0], this[1], this[2],this[3])
    }

    copy(color: Color) {
        this[0] = color[0]
        this[1] = color[1]
        this[2] = color[2]
        this[3] = color[3]

        return this
    }
}