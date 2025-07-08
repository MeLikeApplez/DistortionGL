import Renderer from './Renderer';
/** @extends Renderer */
export default class WebGL2Renderer extends Renderer {
    gl;
    /**
     * @static
     * @param {HTMLCanvasElement} canvasElement
     * @returns {boolean}
     */
    static isAvailable(canvasElement) {
        return !!canvasElement.getContext('webgl2');
    }
    /**
     * @param {HTMLCanvasElement} canvasElement
     * @param {WebGLContextAttributes} [glOptions={}]
     */
    constructor(canvasElement, glOptions = {}) {
        super(canvasElement);
        this.gl = canvasElement.getContext('webgl2', glOptions);
    }
    /**
     * @returns {void}
     */
    clear() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
    /**
     * @returns {void}
     */
    render() {
        if (this.scene === null || !this.scene.enabled)
            return;
        this.clear();
        this.gl.viewport(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.scene.render(this);
    }
}
