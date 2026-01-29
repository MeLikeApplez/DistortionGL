import type { OrthographicCamera } from '../Camera/OrthographicCamera'
import type { PerspectiveCamera } from '../Camera/PerspectiveCamera'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

type AvailableCameras = PerspectiveCamera | OrthographicCamera

export class WebGL2Renderer extends Renderer {
    gl: WebGL2RenderingContext

    constructor(canvasElement: HTMLCanvasElement, glOptions: WebGLContextAttributes={}) {
        super(canvasElement)

        this.gl = canvasElement.getContext('webgl2', glOptions) as WebGL2RenderingContext

        this.ready = this.gl instanceof WebGL2RenderingContext
    }

    render(scene: Scene, camera: AvailableCameras) {
        if(!this.ready) throw Error('WebGL2 is unavailable for this device!')

        this.gl.clearColor(0, 0, 0, 1)
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height)

        super.render(scene, camera)
    }
}