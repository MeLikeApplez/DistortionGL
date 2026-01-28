import { Camera } from '../Camera/Camera'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

export class Canvas2D extends Renderer {
    ctx: CanvasRenderingContext2D

    constructor(canvasElement: HTMLCanvasElement, ctxOptions?: CanvasRenderingContext2DSettings) {
        super(canvasElement)

        this.ctx = canvasElement.getContext('2d', ctxOptions) as CanvasRenderingContext2D

        this.ready = this.ctx instanceof CanvasRenderingContext2D
    }

    render(scene: Scene, camera: Camera) {
        if(!this.ready) throw Error('Canvas 2D is unavailable for this device!')

        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)

        super.render(scene, camera)
    }
}