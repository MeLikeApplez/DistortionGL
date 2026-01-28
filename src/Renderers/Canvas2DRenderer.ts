import { Camera } from '../Camera/Camera'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

interface Canvas2DRendererOptions extends CanvasRenderingContext2DSettings {
    clipSpace: 'normalized-device-coordinates' | 'normalized-dom' | 'dom'
}

export class Canvas2DRenderer extends Renderer {
    ctx: CanvasRenderingContext2D
    clipSpace: Canvas2DRendererOptions['clipSpace']

    constructor(canvasElement: HTMLCanvasElement, ctxOptions: Canvas2DRendererOptions) {
        super(canvasElement)

        this.ctx = canvasElement.getContext('2d', ctxOptions) as CanvasRenderingContext2D
        this.clipSpace = ctxOptions.clipSpace

        this.ready = this.ctx instanceof CanvasRenderingContext2D
    }

    render(scene: Scene, camera: Camera) {
        if(!this.ready) throw Error('Canvas 2D is unavailable for this device!')

        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        this.ctx.save()

        switch(this.clipSpace) {
        // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection
            case 'normalized-device-coordinates': {
                this.ctx.transform(
                    this.canvasElement.width / 2,
                    0,
                    0,
                    -this.canvasElement.height / 2,
                    this.canvasElement.width / 2,
                    this.canvasElement.height / 2
                )
                
                break
            }
            case 'normalized-dom': {
                this.ctx.translate(this.canvasElement.width / 2, this.canvasElement.height / 2)
                this.ctx.scale(this.canvasElement.width / 2, this.canvasElement.height / 2)

                break
            }
            case 'dom': {
                this.ctx.translate(this.canvasElement.width / 2, this.canvasElement.height / 2)
                
                break
            }
            default: throw Error('Clip space is not defined!')
        }

        super.render(scene, camera)
        this.ctx.restore()
    }
}