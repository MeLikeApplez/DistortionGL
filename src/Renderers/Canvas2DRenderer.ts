import { OrthographicCamera } from '../Camera/OrthographicCamera'
import { Scene } from '../Scenes/Scene'
import { Renderer } from './Renderer'

type AvailableCameras = OrthographicCamera

interface Canvas2DRendererOptions extends CanvasRenderingContext2DSettings {

}

export class Canvas2DRenderer extends Renderer {
    ctx: CanvasRenderingContext2D

    constructor(canvasElement: HTMLCanvasElement, ctxOptions?: Canvas2DRendererOptions) {
        super(canvasElement)

        this.ctx = canvasElement.getContext('2d', ctxOptions) as CanvasRenderingContext2D

        this.ready = this.ctx instanceof CanvasRenderingContext2D
    }

    render(scene: Scene, camera: AvailableCameras) {
        if(!this.ready) return console.error('Canvas 2D is unavailable for this device!')

        // this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
        // this.ctx.save()

        /*
        switch(this.clipSpace) {
        // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection
            case 'normalized-device-coordinates': {
                this.ctx.setTransform(
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
                this.ctx.setTransform(
                    this.canvasElement.width / 2, 
                    0,
                    0,
                    this.canvasElement.height / 2,
                    this.canvasElement.width / 2,
                    this.canvasElement.height / 2
                )

                break
            }
            case 'dom': {
                this.ctx.setTransform(
                    1,
                    0,
                    0,
                    1,                        
                    this.canvasElement.width / 2,
                    this.canvasElement.height / 2
                )
                
                break
            }
            default: console.error('Clip space is not defined!')
        }
        */
         
       // https://stackoverflow.com/a/6722031/13159492
       // Probably slower to reset the matrix but performance is so negligible it doesn't matter
        // Reset to identity matrix
        this.ctx.setTransform(1, 0, 0, 1, 0, 0)
        this.ctx.clearRect(
            0, 0,
            camera.left + camera.right,
            camera.top + camera.bottom
        )

        // project matrix
        // const m = camera.projectionMatrix

        // this.ctx.setTransform(m[0], m[3], m[1], m[4], m[2], m[5])
        
        super.render(scene, camera)
        // this.ctx.restore()
    }
}