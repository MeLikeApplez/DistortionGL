import { generateUUID } from '../Math/MathUtils.ts';
// import Material from '../Materials/Material.ts'
import Vector3 from '../Math/Vector3.ts';
import Euler from '../Math/Euler.ts';
export default class GameObject {
    uuid;
    // material: Material | null
    position;
    rotation;
    autoUpdate;
    needsUpdate;
    /**
     *
     */
    constructor() {
        this.uuid = generateUUID();
        // this.material = material
        this.position = new Vector3(0, 0, 0);
        this.rotation = new Euler();
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
