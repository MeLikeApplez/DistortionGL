import Events from "../Core/Events";
export default class Keyboard {
    element;
    keys;
    lowerCase;
    events;
    /**
     * @param {HTMLElement} element
     * @param {boolean} [lowerCase=false]
     */
    constructor(element, lowerCase = false) {
        this.element = element;
        this.keys = new Set();
        this.lowerCase = lowerCase;
        this.events = new Events();
        this.events.createEventDispatch('onkeydown');
        this.events.createEventDispatch('onkeyup');
        if (element)
            this.load(element);
    }
    /**
     * @returns {boolean}
     */
    dispose() {
        if (!this.element)
            return false;
        window.onkeydown = null;
        window.onkeyup = null;
        this.element = null;
        this.keys.clear();
        return true;
    }
    /**
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    load(element) {
        this.element = element;
        this.keys.clear();
        window.onkeydown = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key;
            if (this.keys.has(key))
                return;
            this.keys.add(key);
            this.events.dispatchEvent('onkeydown', this);
        };
        window.onkeyup = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key;
            if (!this.keys.has(key))
                return;
            this.keys.delete(key);
            this.events.dispatchEvent('onkeyup', this);
        };
        return true;
    }
}
/**
 * @typedef {Object} KeyboardEvents
 * @property {Keyboard} onkeydown
 * @property {Keyboard} onkeyup
 */
