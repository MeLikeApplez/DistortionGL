import { Camera } from "../Camera/Camera.ts"
import { Scene } from "../Scenes/Scene.ts"

export class Renderer {
    scene: Scene | null
    canvasElement: HTMLCanvasElement

    constructor(canvasElement: HTMLCanvasElement) {
        this.scene = null

        this.canvasElement = canvasElement
    }

    setSize(width: number, height: number, devicePixelRatio=1) {
        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    render(scene: Scene, camera: Camera) {}
}