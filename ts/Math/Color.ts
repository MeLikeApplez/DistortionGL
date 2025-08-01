export default class Color extends Array {
    constructor(r: number, g: number, b: number, a: number=1) {
        super(4)

        this[0] = r
        this[1] = g
        this[2] = b
        this[3] = a
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
}