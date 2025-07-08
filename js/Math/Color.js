/** @extends Uint8Array */
export default class Color extends Uint8Array {
    /**
     * @param {number} r
     * @param {number} g
     * @param {number} b
     */
    constructor(r, g, b) {
        super([r, g, b]);
    }
    /**
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @returns {this}
     */
    setRgb(r, g, b) {
        this[0] = r;
        this[1] = g;
        this[2] = b;
        return this;
    }
    /**
     * @param {number} hex
     * @returns {this}
     */
    setHex(hex) {
        this[2] = hex & 0xFF;
        this[1] = (hex & 0x00FF00) >> 8;
        this[0] = (hex & 0xFF0000) >> 16;
        return this;
    }
}
