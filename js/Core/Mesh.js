import GameObject from "./GameObject";
/** @extends GameObject<TRenderer> */
export default class Mesh extends GameObject {
    shader;
    /**
     *
     */
    constructor() {
        super();
        this.shader = null;
    }
}
