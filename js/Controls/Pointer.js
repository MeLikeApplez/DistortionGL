import Events from '../Core/Events.js';
import Vector2 from '../Math/Vector2.js';
export default class Pointer {
    element;
    position;
    down;
    drag;
    offset;
    mouseScroll;
    isPointerDragging;
    isPointerDown;
    isPointerUp;
    devicePixelRatio;
    events;
    /**
     * @param {HTMLElement | null} element
     * @param {number} [devicePixelRatio=1]
     */
    constructor(element, devicePixelRatio = 1) {
        this.element = element;
        this.position = new Vector2(0, 0);
        this.down = new Vector2(0, 0);
        this.drag = new Vector2(0, 0);
        this.offset = new Vector2(0, 0);
        this.mouseScroll = 0;
        this.isPointerDragging = false;
        this.isPointerDown = false;
        this.isPointerUp = true;
        this.devicePixelRatio = devicePixelRatio;
        this.events = new Events(['onpointerup', 'onpointermove', 'onpointerdown', 'onmousescroll']);
        if (element)
            this.load(element);
    }
    /**
     * @returns {boolean}
     */
    dispose() {
        if (!this.element)
            return false;
        this.position.set(0, 0);
        this.down.set(0, 0);
        this.drag.set(0, 0);
        this.offset.set(0, 0);
        this.element.onpointerdown = null;
        this.element.onpointermove = null;
        this.element.onpointerup = null;
        this.element.onwheel = null;
        this.element = null;
        return true;
    }
    /**
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    load(element) {
        this.element = element;
        element.onwheel = event => {
            this.mouseScroll += event.deltaY;
            this.events.dispatchEvent('onmousescroll', this);
        };
        element.onpointerdown = event => {
            this.isPointerDown = true;
            this.isPointerUp = false;
            const rect = element.getBoundingClientRect();
            this.position.set(this.devicePixelRatio * (event.clientX - rect.left + this.offset.x), this.devicePixelRatio * (event.clientY - rect.top + this.offset.y));
            this.drag.set(0, 0);
            if (!this.isPointerDragging && this.isPointerDown) {
                this.isPointerDragging = true;
                this.down.copy(this.position);
            }
            this.events.dispatchEvent('onpointerdown', this);
        };
        element.onpointermove = event => {
            const rect = element.getBoundingClientRect();
            this.position.set(this.devicePixelRatio * (event.clientX - rect.left + this.offset.x), this.devicePixelRatio * (event.clientY - rect.top + this.offset.y));
            if (this.isPointerDown) {
                this.drag.set(this.position.x - this.down.x, this.position.y - this.down.y);
            }
            this.events.dispatchEvent('onpointermove', this);
        };
        element.onpointerup = event => {
            this.isPointerDown = false;
            this.isPointerUp = true;
            if (this.isPointerDragging) {
                this.isPointerDragging = false;
                this.down.set(0, 0);
                this.drag.set(0, 0);
            }
            this.events.dispatchEvent('onpointerup', this);
        };
        return true;
    }
}
/**
 * @typedef {Object} PointerEvents
 * @property {Pointer} onpointerdown
 * @property {Pointer} onpointermove
 * @property {Pointer} onpointerup
 * @property {Pointer} onmousescroll
 */
