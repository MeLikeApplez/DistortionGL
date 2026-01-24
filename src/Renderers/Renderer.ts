import { Camera } from "../Camera/Camera"
import { Scene } from "../Scenes/Scene"
import { WebGL2RenderingSystem, WebGPURenderingSystem } from "../Core/Constants"

export type RenderingSystem = typeof WebGL2RenderingSystem | typeof WebGPURenderingSystem

export class Renderer<TSystem extends RenderingSystem> {
    readonly system: TSystem
    canvasElement: HTMLCanvasElement
    ready: boolean

    constructor(system: TSystem, canvasElement: HTMLCanvasElement) {
        this.system = system

        this.canvasElement = canvasElement

        this.ready = false
    }

    setSize(width: number, height: number, devicePixelRatio=1) {
        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    render(scene: Scene, camera: Camera) {
        if(!scene.ready) {
            scene.load(this, camera)
            
        if(!scene.loaded) {
            throw Error('Scene has been loaded but did not set "scene.loaded = true"!')
        }
        } else {
            scene.render(this, camera)
        }
    }
}