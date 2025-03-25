import Scene from "./Scene.js"

/**
 * @typedef {Object} Renderer
 * @property {Scene} scene
 * @property {HTMLCanvasElement} canvasElement
 * @property {WebGL2RenderingContext} gl
 * @property {number} devicePixelRatio
 */

/**
 * @type {Renderer}
 * @module Renderer
 */
export default class Renderer {
    /**
     * @param {Scene} scene
     * @param {HTMLCanvasElement} canvasElement 
     * @param {WebGLContextAttributes} [glOptions={}] 
     */
    constructor(scene, canvasElement, glOptions={}) {
        this.scene = scene

        this.canvasElement = canvasElement
        this.gl = canvasElement.getContext('webgl2', glOptions)

        this.devicePixelRatio = 1
    }

    /**
     * @param {number} width 
     * @param {number} height 
     * @param {number} [devicePixelRatio=1]
     */
    setSize(width, height, devicePixelRatio=1) {
        this.devicePixelRatio = devicePixelRatio

        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    clear() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }

    render() {}
}