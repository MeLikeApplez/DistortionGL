import Scene from "./Scenes/Scene.js"

/**
 * @typedef {Object} _Renderer
 * @property {Scene} scene
 * @property {HTMLCanvasElement} canvasElement
 * @property {WebGL2RenderingContext} gl
 * @property {number} devicePixelRatio
 */

/**
 * @type {_Renderer}
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

        this.loadScene(scene)
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

    /**
     * @param {Scene} scene 
     */
    loadScene(scene) {
        this.scene.unload(this)
    
        this.scene = scene
        this.scene.load(this)
    }

    clear() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }

    render() {
        if(!this.scene.enabled) return

        this.clear()
        this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height)

        this.scene.render(this.gl)
    }
}