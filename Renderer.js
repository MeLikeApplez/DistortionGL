import Camera from "./Camera/Camera.js"

/**
 * @typedef {Object} _Renderer
 */

/**
 * @type {_Renderer}
 */
export default class Renderer {
    /**
     * @param {HTMLCanvasElement} canvasElement 
     * @param {Camera} camera 
     */
    constructor(canvasElement, camera) {
        this.canvasElement = canvasElement
        this.gl = canvasElement.getContext('webgl2')

        this.devicePixelRatio = 1

        this.camera = camera
    }

    render() {}
}