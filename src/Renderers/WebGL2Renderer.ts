import { Camera } from '../Camera/Camera'
import { WebGL2RenderingSystem } from '../Core/Constants'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

export class WebGL2Renderer extends Renderer {
    gl: WebGL2RenderingContext

    constructor(canvasElement: HTMLCanvasElement, glOptions: WebGLContextAttributes={}) {
        super(WebGL2RenderingSystem, canvasElement)

        this.gl = canvasElement.getContext('webgl2', glOptions) as WebGL2RenderingContext

        this.ready = this.gl instanceof WebGL2RenderingContext
    }

    render(scene: Scene, camera: Camera) {
        if(!this.ready) throw Error('WebGL2 is unavailable for this device!')

        camera.renderingSystem = WebGL2RenderingSystem

        scene.render(this)
    }
}