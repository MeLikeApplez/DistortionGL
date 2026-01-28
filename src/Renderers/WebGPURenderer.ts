import { Camera } from "../Camera/Camera";
import { Scene } from "../Scenes/Scene";
import { Renderer } from "./Renderer";

export class WebGPURenderer extends Renderer {
    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement)
    }

    render(scene: Scene, camera: Camera) {
        throw Error('WebGPU Renderer has not been implemented!')

        // super.render(scene, camera)
    }
}