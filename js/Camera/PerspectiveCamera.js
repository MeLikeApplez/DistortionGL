import Camera from './Camera.ts';
import Matrix4 from '../Math/Matrix4.ts';
import Vector3 from '../Math/Vector3.ts';
/** @extends Camera */
export default class PerspectiveCamera extends Camera {
    fov;
    aspect;
    near;
    far;
    rotationMatrix;
    /**
     * @param {number} fov
     * @param {number} aspect
     * @param {number} near
     * @param {number} far
     */
    constructor(fov, aspect, near, far) {
        super();
        this.fov = fov;
        this.aspect = aspect;
        this.near = near;
        this.far = far;
        this.rotationMatrix = new Matrix4();
        this.updateProjectionMatrix();
    }
    /**
     * @param {Vector3} target
     * @param {any} [up=new Vector3(0, 1, 0)]
     * @returns {this}
     */
    lookAt(target, up = new Vector3(0, 1, 0)) {
        const zAxis = this.position.clone().subtract(target).normalize();
        const xAxis = up.cross(zAxis).normalize();
        const yAxis = zAxis.cross(xAxis).normalize();
        const rotationMatrix = new Matrix4(xAxis.x, xAxis.y, xAxis.z, 0, yAxis.x, yAxis.y, yAxis.z, 0, zAxis.x, zAxis.y, zAxis.z, 0, 0, 0, 0, 1);
        this.target.set(target.x, target.y, target.z);
        this.rotationMatrix.setFromMatrix4(rotationMatrix);
        this.rotation.setFromRotationMatrix(this.rotationMatrix);
        return this;
    }
    /**
     * @returns {this}
     */
    updateProjectionMatrix() {
        const fovRadian = this.fov * (Math.PI / 180);
        const f = 1 / Math.tan(fovRadian / 2);
        const rangeInv = 1 / (this.near - this.far);
        this.projectionMatrix.set(f / this.aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (this.near + this.far) * rangeInv, -1, 0, 0, this.near * this.far * rangeInv * 2, 0);
        this.rotationMatrix.makeRotationFromEuler(this.rotation);
        return this;
    }
    /**
      * @param {WebGL2RenderingContext} gl
      * @param {WebGLProgram} program
      * @param {RenderUniforms} uniforms
      * @returns {void}
      */
    render(gl, program, uniforms) {
        gl.uniform3f(uniforms.position, this.position.x, this.position.y, this.position.z);
        gl.uniformMatrix4fv(uniforms.matrix, false, this.projectionMatrix);
        gl.uniformMatrix4fv(uniforms.rotation, false, this.rotationMatrix);
    }
}
/**
 * @typedef {Object} RenderUniforms
 * @property {WebGLUniformLocation | null} position
 * @property {WebGLUniformLocation | null} matrix
 * @property {WebGLUniformLocation | null} rotation
 */
