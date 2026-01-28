import { Camera } from "../Camera/Camera"
import { Scene } from "../Scenes/Scene"

export class Renderer {
    canvasElement: HTMLCanvasElement
    ready: boolean

    constructor(canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement

        this.ready = false
    }

    setSize(width: number, height: number, devicePixelRatio=1) {
        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    render(scene: Scene, camera: Camera) {
        if(!scene.ready) {
            if(scene.loaded) return

            scene.load(this, camera)
            scene.loaded = true
        } else {
            scene.render(this, camera)
        }
    }
}