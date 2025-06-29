import { generateUUID } from '../Math/MathUtils.js'
// import Material from '../Materials/Material.js'
import Vector3 from '../Math/Vector3.js'
import Euler from '../Math/Euler.js'

/**
 * @typedef {Object} _GameObject
 * @property {string} uuid
 * @property {Material | null} material
 * @property {Vector3} position
 * @property {Euler} rotation
 * @property {boolean} autoUpdate
 * @property {boolean} needsUpdate
 */

/**
 * @type {_GameObject}
 * @module GameObject
 */
export default class GameObject {
    constructor() {
        this.uuid = generateUUID()
    
        // this.material = material
    
        this.position = new Vector3(0, 0, 0)
        this.rotation = new Euler()
    
        this.autoUpdate = false
        this.needsUpdate = false
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