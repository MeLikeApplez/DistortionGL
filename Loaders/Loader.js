import Events from "../Core/Events"

/**
 * @typedef {'onload' | 'onerror'} LoaderEvents
 */

/**
 * @typedef {Object} _Loader
 * @property {Events<LoaderEvents>} events
 */

/**
 * @type {_Loader}
 * @module Loader
 */
export default class Loader {
    constructor() {
        this.events = new Events()

        this.events.createEventDispatch('onload')
        this.events.createEventDispatch('onerror')
    }

    /**
     * @param {string | URL} src 
     * @param {function=} onload 
     * @param {function=} onerror 
     */
    load(src, onload, onerror) {
        // Write loader code here
    }
}

