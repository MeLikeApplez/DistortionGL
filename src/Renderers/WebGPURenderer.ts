import type { OrthographicCamera } from '../Camera/OrthographicCamera'
import type { PerspectiveCamera } from '../Camera/PerspectiveCamera'
import { Scene } from "../Scenes/Scene";
import { Renderer } from "./Renderer";

type AvailableCameras = PerspectiveCamera | OrthographicCamera

export class WebGPURenderer extends Renderer {
    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement)
    }

    render(scene: Scene, camera: AvailableCameras) {
        throw Error('WebGPU Renderer has not been implemented!')

        // super.render(scene, camera)
    }
}