import Renderer from './Renderer'

export default class WebGL2Renderer extends Renderer {
    gl: WebGL2RenderingContext

    static isAvailable(canvasElement: HTMLCanvasElement) {
        return !!canvasElement.getContext('webgl2')
    }

    constructor(canvasElement: HTMLCanvasElement, glOptions: WebGLContextAttributes={}) {
        super(canvasElement)

        this.gl = canvasElement.getContext('webgl2', glOptions) as WebGL2RenderingContext
    }

    clear() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    }

    render() {
        if(this.scene === null || !this.scene.enabled) return

        this.clear()
        this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height)

        this.scene.render(this)
    }
}