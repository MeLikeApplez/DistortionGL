import Shader from '../Shaders/Shader.js'

/**
 * @typedef {Object} _Material
 * @property {Object.<string, number>} uniforms
 * @property {Object.<string, WebGLUniformLocation | null>} attributes
 */

/**
 * @type {_Material}
 * @module Material
 */
// Write customized material classes in this directory
export default class Material extends Shader {
    /**
     * @param {string} name 
     */
    constructor(name) {
        super(name)

        this.uniforms = {}
        this.attributes = {}
    }

}