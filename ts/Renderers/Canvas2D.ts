import Renderer from './Renderer'

export default class Canvas2DRenderer extends Renderer {
    context2D: CanvasRenderingContext2D

    static isAvailable(canvasElement: HTMLCanvasElement) {
        return !!canvasElement.getContext('2d')
    }

    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement)

        this.context2D = canvasElement.getContext('2d') as CanvasRenderingContext2D
    }

    render() {
        if(this.scene === null || !this.scene.enabled) return

        this.context2D.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)

        this.scene.render(this)
    }
}