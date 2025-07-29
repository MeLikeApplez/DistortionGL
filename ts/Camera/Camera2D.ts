import Camera from './Camera.ts'
import Vector2 from '../Math/Vector2.ts'
import WebGL2Renderer from '../Renderers/WebGL2.ts'

type RenderUniforms = {
    position: WebGLUniformLocation | null
    projection: WebGLUniformLocation | null
}

export default class Camera2D extends Camera {
    zoom: Vector2
    resolution: Vector2
    minZoom: number
    maxZoom: number
    zoomScaleFactor: number

    constructor() {
        super()

        this.zoom = new Vector2(0, 0)
        this.resolution = new Vector2(1, 1)

        this.minZoom = 0.5
        this.maxZoom = 4
        this.zoomScaleFactor = 0.1
    }

    updateProjectionMatrix() {
        this.projectionMatrix[0] = this.zoom.x / this.resolution.x
        this.projectionMatrix[5] = this.zoom.y / this.resolution.y
    }

    render(renderer: WebGL2Renderer, uniforms: RenderUniforms) {
        renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
        renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
    }
}