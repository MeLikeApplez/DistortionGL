import Events from "../Core/Events";
export default class Clock {
    events;
    animationId;
    startTime;
    fps;
    deltaTime;
    /**
     *
     */
    constructor() {
        this.events = new Events();
        this.animationId = -1;
        this.startTime = -1;
        this.fps = 0;
        this.deltaTime = 0;
        this.events.createEventDispatch('onstart');
        this.events.createEventDispatch('onupdate');
        this.events.createEventDispatch('onstop');
    }
    /**
     * @returns {number}
     */
    start() {
        this.startTime = -1;
        this.animationId = window.requestAnimationFrame(this.update.bind(this));
        this.events.dispatchEvent('onstart', this);
        return this.animationId;
    }
    /**
     * @returns {number}
     */
    stop() {
        window.cancelAnimationFrame(this.animationId);
        this.animationId = -1;
        this.startTime = -1;
        this.events.dispatchEvent('onstop', this);
        return this.animationId;
    }
    /**
     * @param {any} time
     * @returns {void}
     */
    update(time) {
        this.animationId = window.requestAnimationFrame(this.update.bind(this));
        if (this.startTime === -1) {
            this.startTime = time;
            return;
        }
        this.deltaTime = (time - this.startTime) / 1000;
        this.fps = 1 / this.deltaTime;
        this.startTime = time;
        this.events.dispatchEvent('onupdate', this);
    }
}
/**
 * @typedef {Object} ClockEvents
 * @property {Clock} onstart
 * @property {Clock} onupdate
 * @property {Clock} onstop
 */
