import Camera from '../Camera/Camera'
import GameObject from '../Core/GameObject'
import ShaderLoader from '../Loaders/ShaderLoader'
import Renderer from '../Renderers/Renderer'

/**
 * @typedef {Object} _Scene
 * @property {Camera} camera 
 * @property {Object.<string, ShaderLoader>} shaders
 * @property {boolean} enabled
 */

/**
 * @type {_Scene}
 * @module Scene
 */
// Write customized scene classes in this directory
export default class Scene {
    /**
     * @param {Camera} camera 
     */
    constructor(camera) {
        this.camera = camera

        this.shaders = {}

        this.enabled = true
    }

    /**
     * @param {Renderer} renderer
     * @param {...*} any  
     */
    dispose(renderer, ...any) {
        // Write scene code here
    }

    /**
     * @param {Renderer} renderer
     * @param {...*} any  
     */
    load(renderer, ...any) {
        // Write scene code here
    }

    /**
     * @param {Renderer} renderer
     * @param {...*} any  
     */
    unload(renderer, ...any) {
        // Write scene code here
    }

    /**
     * @param {Renderer} renderer
     * @param {...*} any  
     */
    render(renderer, ...any) {
        // Write scene code here
    }
}