import { Camera } from "../Camera/Camera";
import { WebGPURenderingSystem } from "../Core/Constants";
import { Scene } from "../Scenes/Scene";
import { Renderer } from "./Renderer";

export class WebGPURenderer extends Renderer {
    constructor(canvasElement: HTMLCanvasElement) {
        super(WebGPURenderingSystem, canvasElement)
    }

    render(scene: Scene, camera: Camera) {

    }
}