import Events from "../Core/Events";
export default class Loader {
    events;
    /**
     *
     */
    constructor() {
        this.events = new Events();
        this.events.createEventDispatch('onload');
        this.events.createEventDispatch('onerror');
    }
    /**
     * @param {...any} [any]
     * @returns {void}
     */
    load(...any) {
        // Write loader code here
    }
}
/**
 * @typedef {Object} LoaderEvents
 * @property {L} onload
 * @property {E} onerror
 */
