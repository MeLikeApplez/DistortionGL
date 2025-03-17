import Matrix4 from '../Math/Matrix4.js'
import Vector3 from '../Math/Vector3.js'

/**
 * @typedef {Object} _Camera
 * @property {Vector3} position
 * @property {Matrix4} projectionMatrix
 */

/**
 * @type {_Camera}
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
     */
    render(gl, program) {}
}