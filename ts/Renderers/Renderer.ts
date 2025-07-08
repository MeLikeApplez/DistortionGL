import Scene from "../Scenes/Scene.ts"

export default class Renderer {
    scene: Scene | null
    canvasElement: HTMLCanvasElement
    devicePixelRatio: number

    constructor(canvasElement: HTMLCanvasElement) {
        this.scene = null

        this.canvasElement = canvasElement

        this.devicePixelRatio = 1
    }

    setSize(width: number, height: number, devicePixelRatio=1) {
        this.devicePixelRatio = devicePixelRatio

        this.canvasElement.width = width * devicePixelRatio
        this.canvasElement.height = height * devicePixelRatio
    }

    loadScene(scene: Scene) {
        if(this.scene !== null) this.scene.unload(this)
    
        this.scene = scene
        this.scene.load(this)
    }

    render(...any: any) {}
}