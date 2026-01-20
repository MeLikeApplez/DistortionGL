import { Camera } from "../Camera/Camera.ts"
import { Scene } from "../Scenes/Scene.ts"
import { WebGL2RenderingSystem, WebGPURenderingSystem } from "../Core/Constants.ts"

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