import Euler from '../Math/Euler.ts';
import Matrix4 from '../Math/Matrix4.ts';
import Vector3 from '../Math/Vector3.ts';
export default class Camera {
    position;
    rotation;
    projectionMatrix;
    target;
    autoUpdate;
    needsUpdate;
    /**
     *
     */
    constructor() {
        this.position = new Vector3(0, 0, 0);
        this.rotation = new Euler();
        this.projectionMatrix = new Matrix4();
        this.target = new Vector3(0, 0, 0);
        this.autoUpdate = false;
        this.needsUpdate = false;
    }
    /**
     * @returns {void}
     */
    updateProjectionMatrix() { }
    /**
     * @param {WebGL2RenderingContext} gl
     * @param {WebGLProgram} program
     * @param {...any} [any]
     * @returns {void}
     */
    render(gl, program, ...any) { }
}
