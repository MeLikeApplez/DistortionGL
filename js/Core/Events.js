import { generateUUID } from "../Math/MathUtils.ts";
export default class Events {
    _listeners;
    /**
     *
     */
    constructor() {
        this._listeners = new Map();
    }
    /**
     * @param {keyof T} eventName
     * @returns {this}
     */
    createEventDispatch(eventName) {
        this._listeners.set(eventName, []);
        return this;
    }
    /**
     * @param {keyof T} eventName
     * @returns {void}
     */
    removeEventDispatch(eventName) {
        this._listeners.delete(eventName);
    }
    /**
     * @template {keyof T} K
     * @param {K} eventName
     * @param {T[K]} data
     * @returns {boolean}
     */
    dispatchEvent(eventName, data) {
        const group = this._listeners.get(eventName);
        if (!group)
            return false;
        for (let i = 0; i < group.length; i++) {
            const listener = group[i];
            listener.callback(data);
        }
        return true;
    }
    /**
     * @template {keyof T} K
     * @param {K} eventName
     * @param {(data: T[K]) => void} callback
     * @returns {string | Error}
     */
    addEventListener(eventName, callback) {
        const group = this._listeners.get(eventName);
        if (!group)
            return new Error(`Unable to find event eventName: "${String(eventName)}"`);
        if (typeof callback !== 'function')
            return new Error('Callback function is required!');
        const uuid = generateUUID();
        group.push({ uuid, callback });
        return uuid;
    }
    /**
     * @template {keyof T} K
     * @param {K} eventName
     * @param {string} uuid
     * @returns {true | Error}
     */
    removeEventListener(eventName, uuid) {
        const group = this._listeners.get(eventName);
        if (!group)
            return new Error(`Unable to find event eventName: "${String(eventName)}"`);
        const index = group.findIndex(v => v.uuid === uuid);
        if (index === -1)
            return new Error(`Unable to find listener function with uuid: "${uuid}"`);
        group.splice(index, 1);
        return true;
    }
}
/**
 * @typedef {Object} EventListeners
 * @property {string} uuid
 * @property {(data: any) => void} callback
 */
