import Camera from './Camera.js'
import Vector2 from '../Math/Vector2.js'

/**
 * @typedef {Object} Camera2D
 * @property {Vector2} zoom
 * @property {Vector2} resolution
 * @property {number} minZoom
 * @property {number} maxZoom
 * @property {number} zoomScaleFactor
 */

/**
 * @type {Camera2D}
 * @module Camera2D
 */
export default class Camera2D extends Camera {
    constructor() {
        super()

        this.zoom = new Vector2(0, 0)
        this.resolution = new Vector2(1, 1)

        this.minZoom = 0.5
        this.maxZoom = 4
        this.zoomScaleFactor = 0.1
    }

    updateProjectionMatrix() {
        this.projectionMatrix[0] = this.zoom.x / this.resolution.x
        this.projectionMatrix[5] = this.zoom.y / this.resolution.y
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     * @param {WebGLProgram} program 
     * @param {WebGLUniformLocation} uniformPositionLocation
     * @param {WebGLUniformLocation} uniformProjectionMatrixLocation  
     */
    render(gl, program, uniformPositionLocation, uniformProjectionMatrixLocation) {
        super.render(gl, program, uniformPositionLocation, uniformProjectionMatrixLocation)

    }
}