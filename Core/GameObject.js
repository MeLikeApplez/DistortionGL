import { generateUUID } from '../Math/MathUtils.js'
import { GameObjectType } from './Constants.js'
import Shader from '../Shaders/Shader.js'

/**
 * @typedef {Object} _GameObject
 * @property {string} uuid
 * @property {GameObjectType} type
 * @property {Shader} shader
 */

/**
 * @type {_GameObject}
 * @module GameObject
 */
export default class GameObject {
    /**
     * @param {shader} shader 
     */
    constructor(shader) {
        this.uuid = generateUUID()
        this.type = GameObjectType.None
    
        this.shader = shader
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     */
    render(gl) {}
}