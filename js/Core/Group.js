import GameObject from "./GameObject";
/** @extends GameObject<TRenderer> */
export default class Group extends GameObject {
    children;
    /**
     *
     */
    constructor() {
        super();
        this.children = [];
    }
}
