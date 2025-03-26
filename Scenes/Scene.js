import Camera from '../Camera/Camera'
import GameObject from '../Core/GameObject'
import Renderer from '../Renderer'
import Shader from '../Shaders/Shader'

/**
 * @typedef {Object} _Scene
 * @property {Camera} camera 
 * @property {Array<GameObject>} objects
 * @property {Object.<string, Shader>} shaders
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

        this.objects = []
        this.shaders = {}

        this.enabled = true
    }

    /**
     * @param  {...GameObject} sceneObjects 
     */
    add(...sceneObjects) {
        for(let i = 0; i < sceneObjects.length; i++) {
            const sceneObject = sceneObjects[i]

            this.objects.push(sceneObject)
        }
    }

    /**
     * @param {Renderer} renderer 
     */
    load(renderer) {
        // Write scene code here
    }

    /**
     * @param {Renderer} renderer 
     */
    unload(renderer) {
        // Write scene code here
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     */
    render(gl) {
        // Write scene code here
    }
}