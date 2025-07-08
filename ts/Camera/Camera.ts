import Euler from '../Math/Euler.ts'
import Matrix4 from '../Math/Matrix4.ts'
import Vector3 from '../Math/Vector3.ts'

export default class Camera {
    position: Vector3
    rotation: Euler
    projectionMatrix: Matrix4
    target: Vector3
    autoUpdate: boolean
    needsUpdate: boolean

    constructor() {
        this.position = new Vector3(0, 0, 0)
        this.rotation = new Euler()

        this.projectionMatrix = new Matrix4()

        this.target = new Vector3(0, 0, 0)
        
        this.autoUpdate = false
        this.needsUpdate = false
    }

    updateProjectionMatrix() {}

    render(gl: WebGL2RenderingContext, program: WebGLProgram, ...any: any) {}
}