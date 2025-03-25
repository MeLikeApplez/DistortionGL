import Scene from "./Scene.js"

/**
 * @typedef {Object} _Renderer
 * @property {Scene} scene
 * @property {HTMLCanvasElement} canvasElement
 * @property {WebGL2RenderingContext} gl
 * @property {number} devicePixelRatio
 * @property {boolean} ready
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

        this.ready = false
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

    load() {
        for(let i = 0; i < this.scene.objects.length; i++) {
            const sceneObject = this.scene.objects[i]

            if(sceneObject.shader.ready) continue
            if(sceneObject.shader.preloaded) throw Error('Shader for GameObject is not preloaded! Preload the source code using ".preloadSourceCode(<vertex code>, <fragment code>)"!')

            const [ program, error ] = sceneObject.shader.loadSourceCode(this.gl)
        
            if(error) {
                console.error('Failed to load Shader Code!')

                throw error
            }
        }
    }

    render() {
        if(!this.ready) throw Error('Renderer is not ready! Call .load()!')

        this.clear()

        for(let i = 0; i < this.scene.objects.length; i++) {
            const sceneObject = this.scene.objects[i]

            sceneObject.render(this.gl)
        }
    }
}