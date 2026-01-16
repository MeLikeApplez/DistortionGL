import { Euler } from '../Math/Euler.ts'
import { Matrix4 } from '../Math/Matrix4.ts'
import { Vector3 } from '../Math/Vector3.ts'
import { WebGL2RenderingSystem, WebGPURenderingSystem } from '../Core/Constants.ts'

type RenderingSystem = typeof WebGL2RenderingSystem | typeof WebGPURenderingSystem

export class Camera {
    position: Vector3
    rotation: Euler
    projectionMatrix: Matrix4
    target: Vector3
    autoUpdate: boolean
    needsUpdate: boolean
    renderingSystem: RenderingSystem

    constructor() {
        this.position = new Vector3()
        this.rotation = new Euler()
        this.projectionMatrix = new Matrix4()

        this.target = new Vector3()
        
        this.autoUpdate = false
        this.needsUpdate = false
        this.renderingSystem = WebGL2RenderingSystem
    }

    updateProjectionMatrix() {}
}