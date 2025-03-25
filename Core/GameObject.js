import { generateUUID } from '../Math/MathUtils.js'

/**
 * @typedef {Object} GameObject
 * @property {string} uuid
 */

/**
 * @type {GameObject}
 * @module GameObject
 */
export default class GameObject {
    constructor() {
        this.uuid = generateUUID()
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     * @param {WebGLProgram} program 
     */
    render(gl, program) {}
}