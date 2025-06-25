import GameObject from "./GameObject"

/**
 * @typedef {Object} _Group
 * @property {Array<GameObject>} children
 */

/**
 * @type {_Group}
 * @module Group
 */
export default class Group extends GameObject {
    constructor() {
        super()

        this.children = []
    }
}