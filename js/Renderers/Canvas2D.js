import Renderer from './Renderer';
/** @extends Renderer */
export default class Canvas2DRenderer extends Renderer {
    context2D;
    /**
     * @static
     * @param {HTMLCanvasElement} canvasElement
     * @returns {boolean}
     */
    static isAvailable(canvasElement) {
        return !!canvasElement.getContext('2d');
    }
    /**
     * @param {HTMLCanvasElement} canvasElement
     */
    constructor(canvasElement) {
        super(canvasElement);
        this.context2D = canvasElement.getContext('2d');
    }
    /**
     * @returns {void}
     */
    render() {
        if (this.scene === null || !this.scene.enabled)
            return;
        this.context2D.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        if (!this.scene.enabled)
            return;
        this.scene.render(this);
    }
}
