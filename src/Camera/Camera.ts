import { Euler } from '../Math/Euler'
import { Matrix4 } from '../Math/Matrix4'
import { Vector3 } from '../Math/Vector3'
// import { WebGL2Renderer } from '../Renderers/WebGL2Renderer'
// import type { WebGPURenderer } from '../Renderers/WebGPURenderer'
// import { Quaternion } from '../Math/Quaternion'

// interface WebGL2RenderUniforms {
//     position: WebGLUniformLocation | null
//     projection: WebGLUniformLocation | null
//     rotation: WebGLUniformLocation | null
// }

// interface WebGPURenderUniforms {
//     position: null
//     projection: null
//     rotation: null
// }

export abstract class Camera {
    position: Vector3
    rotation: Euler
    projectionMatrix: Matrix4
    rotationMatrix: Matrix4
    target: Vector3
    autoUpdate: boolean
    needsUpdate: boolean
    enabled: boolean

    constructor() {
        this.position = new Vector3()
        this.rotation = new Euler()

        this.projectionMatrix = new Matrix4()
        this.rotationMatrix = new Matrix4()

        this.target = new Vector3()
        
        this.autoUpdate = false
        this.needsUpdate = false
        this.enabled = true
    }

    getWorldDirection() {
        const direction = new Vector3(
            this.rotationMatrix[8],
            this.rotationMatrix[9],
            this.rotationMatrix[10],
        )

        return direction.normalize()
    }

    abstract updateProjectionMatrix(): void

    // uniforms param type needs to be fixed
    // render(renderer: WebGL2Renderer | WebGPURenderer, uniforms: WebGL2RenderUniforms | WebGPURenderUniforms) {
    //     if(!this.enabled) return

    //     if(renderer.system === WebGL2RenderingSystem) {
    //         const { gl } = renderer

    //         gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
    //         gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
    //         gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix)
    //     } else {
    //         throw new Error('WebGPU render not implemented!')
    //     }

    // }
}