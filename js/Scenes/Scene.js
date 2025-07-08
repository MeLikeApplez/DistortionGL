export default class Scene {
    camera;
    enabled;
    /**
     * @param {TCamera} camera
     */
    constructor(camera) {
        this.camera = camera;
        this.enabled = true;
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    dispose(renderer, ...any) {
        // Write scene code here
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    load(renderer, ...any) {
        // Write scene code here
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    unload(renderer, ...any) {
        // Write scene code here
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    render(renderer, ...any) {
        // Write scene code here
    }
}
