import Camera from '../Camera/Camera'
import GameObject from '../Core/GameObject'

/**
 * @typedef {Object} _Scene
 * @property {Camera} camera 
 * @property {Array<GameObject>} objects
 * @property {boolean} enabled
 * @property {boolean} _hasLoadedObjectMaterials
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

        this.enabled = true

        this._hasLoadedObjectMaterials = false
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
     * @param {WebGL2RenderingContext} gl 
     */
    _loadObjectMaterials(gl) {
        for(let i = 0; i < this.objects.length; i++) {
            const sceneObject = this.objects[i]

            if(!sceneObject.material.ready) {
                sceneObject.material.loadSourceCode(gl)
            }

            if(sceneObject.material.error) {
                this._hasLoadedObjectMaterials = false

                console.error(`Failed to load material shader! Material: "${sceneObject.material.name}"`)

                throw sceneObject.material.error
            }
        }
    
        this._hasLoadedObjectMaterials = true
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     */
    render(gl) {}
}