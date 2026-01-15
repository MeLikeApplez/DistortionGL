import { Camera } from '../Camera/Camera'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

export class WebGL2Renderer extends Renderer {
    gl: WebGL2RenderingContext

    static isAvailable(canvasElement: HTMLCanvasElement) {
        return !!canvasElement.getContext('webgl2')
    }

    constructor(canvasElement: HTMLCanvasElement, glOptions: WebGLContextAttributes={}) {
        super(canvasElement)

        this.gl = canvasElement.getContext('webgl2', glOptions) as WebGL2RenderingContext
    }

    render(scene: Scene, camera: Camera) {
        scene.render(this)
    }
}