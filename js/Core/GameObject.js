import { generateUUID } from '../Math/MathUtils.ts';
export default class GameObject {
    uuid;
    name;
    type;
    position;
    scale;
    rotation;
    quaternion;
    matrix;
    matrixAutoUpdate;
    matrixNeedsUpdate;
    autoUpdate;
    needsUpdate;
    /**
     *
     */
    constructor() {
        this.uuid = generateUUID();
        this.name = '';
        this.type = '';
        this.position = null;
        this.scale = null;
        this.rotation = null;
        this.quaternion = null;
        this.matrix = null;
        this.matrixAutoUpdate = false;
        this.matrixNeedsUpdate = false;
        this.autoUpdate = false;
        this.needsUpdate = false;
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    dispose(renderer, ...any) {
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    update(renderer, ...any) {
    }
    /**
     * @param {TRenderer} renderer
     * @param {...any} [any]
     * @returns {void}
     */
    render(renderer, ...any) {
    }
}
