import Camera from '../Camera/Camera'
import Renderer from '../Renderers/Renderer'

export default class Scene<TCamera=Camera, TRenderer=Renderer> {
    camera: TCamera
    enabled: boolean

    constructor(camera: TCamera) {
        this.camera = camera

        this.enabled = true
    }

    dispose(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }

    load(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }

    unload(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }

    render(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }
}