import Vector2 from "./Vector2"

export default class Matrix3 extends Array {
    constructor(n11=1, n12=0, n13=0, n21=0, n22=1, n23=0, n31=0, n32=0, n33=1) {
        super(9)

        this[0] = n11
        this[1] = n12
        this[2] = n13
        this[3] = n21
        this[4] = n22
        this[5] = n23
        this[6] = n31
        this[7] = n32
        this[8] = n33
    }

    set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number) {
        this[0] = n11
        this[1] = n12
        this[2] = n13
        this[3] = n21
        this[4] = n22
        this[5] = n23
        this[6] = n31
        this[7] = n32
        this[8] = n33

        return this
    }

    setFromMatrix3(matrix: Matrix3) {
        this[0] = matrix[0]
        this[1] = matrix[1]
        this[2] = matrix[2]
        this[3] = matrix[3]
        this[4] = matrix[4]
        this[5] = matrix[5]
        this[6] = matrix[6]
        this[7] = matrix[7]
        this[8] = matrix[8]

        return this
    }

    identity() {
        this.set(
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        )

        return this
    }

    makeRotation(theta: number) {
        const sin = Math.sin(theta)
        const cos = Math.cos(theta)
        
        this.set(
            cos, -sin, 0,
            sin, cos, 0,
            0, 0, 1
        )
    
        return this
    }

    makeTranslation(x: number, y: number) {
        this.set(
            1, 0, x,
            0, 1, y,
            0, 0, 1
        )
    
        return this
    }

    translate(x: number, y: number) {
        this.set(
            1, 0, 0,
            0, 1, 0,
            x, y, 1
        )
    
        return this
    }

    makeScale(x: number, y: number) {
        this.set(
            x, 0, 0,
            0, y, 0,
            0, 0, 1
        )
    
        return this
    }

    multiply(matrix: Matrix3) {
        for(let i = 0; i < this.length; i++) {
            this[i] *= matrix[i]
        }
    
        return this
    }

    multiplyScalar(scale: number) {
        for(let i = 0; i < this.length; i++) {
            this[i] *= scale
        }
    
        return this
    }

    // source: https://stackoverflow.com/a/72596891/13159492
    inverse() {
        const [ a, b, c, d, e, f, g, h, i ] = this
    
        const x = e * i - h * f
        const y = f * g - d * i
        const z = d * h - g * e
        const det = a * x + b * y + c * z

        if(det === 0) return null

        this.set(
            x, c * h - b * i, b * f - c * e,
            y, a * i - c * g, d * c - a * f,
            z, g * b - a * h, a * e - d * b
        )

        return this
    }

    compose(position: Vector2, theta: number, scale: Vector2) {
        const sin = Math.sin(theta)
        const cos = Math.cos(theta)
        
        this.set(
            cos * scale.x, -sin * scale.y, position.x,
            sin * scale.x, cos * scale.y, position.y,
            0, 0, 1
        )
    }

    clone() {
        return new Matrix3(...this)
    }

    copy(matrix: Matrix3) {
        this.set(
            matrix[0], matrix[1], matrix[2],
            matrix[3], matrix[4], matrix[5],
            matrix[6], matrix[7], matrix[8],
        )
        
        return this
    }
}