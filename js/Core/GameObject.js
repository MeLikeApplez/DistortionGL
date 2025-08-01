import { generateUUID } from '../Math/MathUtils.ts';
import Vector3 from '../Math/Vector3.ts';
import Euler from '../Math/Euler.ts';
import Matrix4 from '../Math/Matrix4.ts';
import Quaternion from '../Math/Quaternion.ts';
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
        this.position = new Vector3();
        this.scale = new Vector3();
        this.rotation = new Euler();
        this.quaternion = new Quaternion();
        this.matrix = new Matrix4();
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
