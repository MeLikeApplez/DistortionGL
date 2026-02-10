import { Camera } from './Camera'
import { Matrix4 } from '../Math/Matrix4'
import { Vector3 } from '../Math/Vector3'

export class PerspectiveCamera extends Camera {
    position: Vector3
    projectionMatrix: Matrix4
    rotationMatrix: Matrix4
    fov: number
    aspect: number
    near: number
    far: number

    constructor(fov: number, aspect: number, near: number, far: number) {
        super()
        
        this.position = new Vector3()

        this.projectionMatrix = new Matrix4()
        this.rotationMatrix = new Matrix4()
        
        this.fov = fov
        this.aspect = aspect
        this.near = near
        this.far = far

        this.updateProjectionMatrix()
    }

    /**
     * @description Focuses the camera at the specified target
     */
    lookAt(target: Vector3, up=Vector3.UP) {
        const zAxis = this.position.clone().subtract(target).normalize()
        const xAxis = up.cross(zAxis).normalize()
        const yAxis = zAxis.cross(xAxis).normalize()

        const rotationMatrix = new Matrix4(
            xAxis.x, xAxis.y, xAxis.z, 0,
            yAxis.x, yAxis.y, yAxis.z, 0,
            zAxis.x, zAxis.y, zAxis.z, 0,
            0, 0, 0, 1
        )

        this.target.set(target.x, target.y, target.z)

        this.rotationMatrix.setFromMatrix4(rotationMatrix)
        this.rotation.setFromRotationMatrix(this.rotationMatrix)

        return this
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix
     * @see https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Matrix4.js#L1109
     */
    updateProjectionMatrix(reversedDepth=false) {
        const fovRadian = this.fov * (Math.PI / 180)
        // const f = 1 / Math.tan(fovRadian / 2)
        const rangeInv = 1 / (this.near - this.far)

        const y = 1 / Math.tan(fovRadian / 2)
        const x = y / this.aspect

        let c = 0
        let d = 0
        const e = this.near * this.far * rangeInv * 2

        if(reversedDepth) {
            c = this.near / (this.far - this.near)
            d = (this.far * this.near) / (this.far - this.near)
        } else {
            c = -(this.far - this.near) / (this.far - this.near)
            d = (-2 * this.far * this.near) / (this.far - this.near)
        }

        // this.projectionMatrix.set(
        //     f / this.aspect, 0, 0, 0,
        //     0, f, 0, 0,
        //     0, 0, (this.near + this.far) * rangeInv, -1,
        //     0, 0, this.near * this.far * rangeInv * 2, 0
        // )

        this.projectionMatrix.set(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, c, d,
            0, 0, e, 0
        )

        this.rotationMatrix.makeRotationFromEuler(this.rotation)

        this.needsUpdate = false

        return this
    }

//    render(renderer: WebGL2Renderer, uniforms: RenderUniforms) {
//         renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
//         renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
//         renderer.gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix)
//     }
}