import { Camera } from "../Camera/Camera"
import { Scene } from "../Scenes/Scene"
import { WebGL2RenderingSystem, WebGPURenderingSystem } from "../Core/Constants"

export type RenderingSystem = typeof WebGL2RenderingSystem | typeof WebGPURenderingSystem

export class Renderer<TSystem extends RenderingSystem> {
    readonly system: TSystem
    scene: Scene | null
    canvasElement: HTMLCanvasElement
    ready: boolean

    constructor(system: TSystem, canvasElement: HTMLCanvasElement) {
        this.system = system
        this.scene = null

        this.canvasElement = canvasElement

        this.ready = false
    }

    setSize(width: number, height: number, devicePixelRatio=1) {
        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    render(scene: Scene, camera: Camera) {}
}