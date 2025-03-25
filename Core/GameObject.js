import { generateUUID } from '../Math/MathUtils.js'
import { GameObjectType } from './Constants.js'
import Material from '../Materials/Material.js'

/**
 * @typedef {Object} _GameObject
 * @property {string} uuid
 * @property {GameObjectType} type
 * @property {Material} material
 */

/**
 * @type {_GameObject}
 * @module GameObject
 */
export default class GameObject {
    /**
     * @param {Material} material 
     */
    constructor(material) {
        this.uuid = generateUUID()
        this.type = GameObjectType.None
    
        this.material = material
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     */
    render(gl) {}
}