import Camera from './Camera/Camera'
import GameObject from './Core/GameObject'

/**
 * @typedef {Object} _Scene
 * @property {Camera} camera 
 * @property {Array<GameObject>} objects
 */

/**
 * @type {_Scene}
 * @module Scene
 */
export default class Scene {
    /**
     * @param {Camera} camera 
     */
    constructor(camera) {
        this.camera = camera

        this.objects = []
    }

    add(...objects) {
        return this.objects.push(...objects)
    }
}