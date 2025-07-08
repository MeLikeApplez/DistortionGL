export default class Color extends Uint8Array {
    constructor(r: number, g: number, b: number) {
        super([r, g, b])
    }

    setRgb(r: number, g: number, b: number) {
        this[0] = r
        this[1] = g
        this[2] = b
    
        return this
    }

    setHex(hex: number) {
        this[2] = hex & 0xFF
        this[1] = (hex & 0x00FF00) >> 8
        this[0] = (hex & 0xFF0000) >> 16

        return this
    }
}