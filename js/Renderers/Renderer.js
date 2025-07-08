export default class Renderer {
    scene;
    canvasElement;
    devicePixelRatio;
    /**
     * @param {HTMLCanvasElement} canvasElement
     */
    constructor(canvasElement) {
        this.scene = null;
        this.canvasElement = canvasElement;
        this.devicePixelRatio = 1;
    }
    /**
     * @param {number} width
     * @param {number} height
     * @param {number} [devicePixelRatio=1]
     * @returns {void}
     */
    setSize(width, height, devicePixelRatio = 1) {
        this.devicePixelRatio = devicePixelRatio;
        this.canvasElement.width = width * devicePixelRatio;
        this.canvasElement.height = height * devicePixelRatio;
    }
    /**
     * @param {Scene} scene
     * @returns {void}
     */
    loadScene(scene) {
        if (this.scene !== null)
            this.scene.unload(this);
        this.scene = scene;
        this.scene.load(this);
    }
    /**
     * @param {...any} [any]
     * @returns {void}
     */
    render(...any) { }
}
