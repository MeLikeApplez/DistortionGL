/** @extends Array */
export default class Color extends Array {
    /**
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} [a=1]
     */
    constructor(r, g, b, a = 1) {
        super(4);
        this[0] = r;
        this[1] = g;
        this[2] = b;
        this[3] = a;
    }
    /**
     * @param {number} r
     * @param {number} g
     * @param {number} b
     * @param {number} [a=1]
     * @returns {this}
     */
    setRgb(r, g, b, a = 1) {
        this[0] = r;
        this[1] = g;
        this[2] = b;
        this[3] = a;
        return this;
    }
    /**
     * @param {number} hex
     * @param {number} [alpha=1]
     * @returns {this}
     */
    setHex(hex, alpha = 1) {
        this[3] = alpha;
        this[2] = hex & 0xFF;
        this[1] = (hex & 0x00FF00) >> 8;
        this[0] = (hex & 0xFF0000) >> 16;
        return this;
    }
}
