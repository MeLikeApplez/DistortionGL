import { generateUUID } from '../Math/MathUtils.js'
import { GameObjectType } from './Constants.js'
import Material from '../Materials/Material.js'

/**
 * @typedef {Object} _GameObject
 * @property {string} uuid
 * @property {GameObjectType} type
 * @property {Material | null} material
 */

/**
 * @type {_GameObject}
 * @module GameObject
 */
export default class GameObject {
    /**
     * @param {Material | null} material 
     */
    constructor(material=null) {
        this.uuid = generateUUID()
        this.type = GameObjectType.None
    
        this.material = material
    }

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {...*} any  
     */
    dispose(gl, ...any) {}

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {...*} any  
     */
    update(gl, ...any) {}

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {...*} any  
     */
    render(gl, ...any) {}
}