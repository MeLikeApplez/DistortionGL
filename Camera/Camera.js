import Matrix4 from '../Math/Matrix4.js'
import Vector3 from '../Math/Vector3.js'

/**
 * @typedef {Object} _Camera
 * @property {Vector3} position
 * @property {Matrix4} projectionMatrix
 */

/**
 * @type {_Camera}
 * @module Camera
 */
export default class Camera {
    constructor() {
        this.position = new Vector3(0, 0, 0)

        this.projectionMatrix = new Matrix4()
    }

    updateProjectionMatrix() {}

    /**
     * @param {WebGL2RenderingContext} gl 
     * @param {WebGLProgram} program 
     * @param {WebGLUniformLocation | null} uniformPositionLocation
     * @param {WebGLUniformLocation | null} uniformProjectionMatrixLocation  
     */
    render(gl, program, uniformPositionLocation, uniformProjectionMatrixLocation) {
        gl.useProgram(program)

        gl.uniform3f(uniformPositionLocation, this.position.x, this.position.y, this.position.z)
        gl.uniformMatrix4fv(uniformProjectionMatrixLocation, false, this.projectionMatrix)
    }
}