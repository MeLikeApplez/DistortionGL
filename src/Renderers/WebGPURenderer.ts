import type { OrthographicCamera } from '../Camera/OrthographicCamera'
import type { PerspectiveCamera } from '../Camera/PerspectiveCamera'
import { Scene } from "../Scenes/Scene";
import { Renderer } from "./Renderer";

type AvailableCameras = PerspectiveCamera | OrthographicCamera

export class WebGPURenderer extends Renderer {
    static async init(canvas: HTMLCanvasElement) {
        try {
            const context = canvas.getContext('webgpu')
            const adapter = await navigator.gpu.requestAdapter()

            if(!context) {
                console.error('WebGPU context is unavailable!')

                return null
            }
            if(!adapter) {
                console.error('WebGPU adapter is unavailable!')

                return null
            }
            
            const device= await adapter.requestDevice()

            if(!device) {
                console.error('WebGPU device is unavailable!')

                return null
            }

            const format = navigator.gpu.getPreferredCanvasFormat()

            return { adapter, device, context, format }
        } catch(error) {
            console.error(error)
            
            return null
        }
    }

    constructor(canvasElement: HTMLCanvasElement) {
        super(canvasElement)
    
        console.error('WebGPU Renderer has not been implemented!')
    }

    render(scene: Scene, camera: AvailableCameras) {
        return console.error('WebGPU Renderer has not been implemented!')

        // super.render(scene, camera)
    }
}