import { Matrix4 } from "../Math/Matrix4"
import { Vector3 } from "../Math/Vector3"
import { WebGL2Renderer } from "../Renderers/WebGL2Renderer"
import { Camera } from "./Camera"

type RenderUniforms = {
    position: WebGLUniformLocation | null
    projection: WebGLUniformLocation | null
    rotation: WebGLUniformLocation | null
}

export class OrthographicCamera extends Camera {
    left: number
    right: number
    top: number
    bottom: number
    aspect: number
    near: number
    far: number
    zoom: number
    rotationMatrix: Matrix4

    constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number) {
        super()
    
        this.left = left
        this.right = right
        this.top = top
        this.bottom = bottom

        this.aspect = aspect
        this.near = near
        this.far = far

        this.zoom = 1

        this.rotationMatrix = new Matrix4()
        
        this.updateProjectionMatrix()
    }

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

    // https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
    // https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169
    updateProjectionMatrix(reversedDepth=false) {
        const aspectRight = this.right * this.aspect
        const aspectLeft = this.left * this.aspect

        const dx = (aspectRight - aspectLeft) / (2 * this.zoom)
		const dy = (this.top - this.bottom) / (2 * this.zoom)
		const cx = (aspectRight + aspectLeft) / 2
		const cy = (this.top + this.bottom) / 2

		const left = cx - dx
		const right = cx + dx
		const top = cy + dy
		const bottom = cy - dy

        const x = 2 / (right - left)
		const y = 2 / (top - bottom)

		const a = - (right + left) / (right - left)
		const b = - (top + bottom) / (top - bottom)

        let c = 0
        let d = 0

        if(reversedDepth) {
            c = 1 / (this.far - this.near)
			d = this.far / (this.far - this.near)
        } else {
            c = - 2 / (this.far - this.near)
            d = - (this.far + this.near) / (this.far - this.near)
        }

        this.projectionMatrix.set(
            x, 0, 0, a,
            0, y, 0, b,
            0, 0, c, d,
            0, 0, 0, 1,
        )

        this.rotationMatrix.makeRotationFromEuler(this.rotation)

        return this
    }

       render(renderer: WebGL2Renderer, uniforms: RenderUniforms) {
           renderer.gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z)
           renderer.gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix)
            renderer.gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix)
        }
}