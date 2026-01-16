import { Camera } from "../Camera/Camera.ts"
import { WebGL2RenderingSystem, WebGPURenderingSystem } from "../Core/Constants.ts"
import { Scene } from "../Scenes/Scene.ts"

type RenderingSystem = typeof WebGL2RenderingSystem | typeof WebGPURenderingSystem

export class Renderer {
    type: RenderingSystem
    scene: Scene | null
    canvasElement: HTMLCanvasElement
    ready: boolean

    constructor(type: RenderingSystem, canvasElement: HTMLCanvasElement) {
        this.type = type
        this.scene = null

        this.canvasElement = canvasElement

        this.ready = false
    }

    render(scene: Scene, camera: Camera) {}
}