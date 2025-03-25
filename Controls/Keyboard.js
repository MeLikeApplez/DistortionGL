/**
 * @typedef {Object} Keyboard
 * @property {HTMLElement | null} element
 * @property {Set} keys
 * @property {boolean} lowerCase
 * @property {Events} events
 */

import { Events } from "../Core/Events"

/**
 * @type {Keyboard}
 * @module Keyboard
 */
export default class Keyboard {
    /**
     * @param {HTMLElement} element 
     * @param {boolean} [lowerCase=false] 
     */
    constructor(element, lowerCase=false) {
        this.element = element

        this.keys = new Set()
        this.lowerCase = lowerCase

        this.events = new Events()

        this.events.createEvent('onkeydown')
        this.events.createEvent('onkeyup')
    
        if(element) this.load(element)
    }

    dispose() {
        if(!this.element) return false

        window.onkeydown = undefined
        window.onkeyup = undefined

        this.element = null
        this.keys.clear()

        return true
    }

    /**
     * @param {HTMLElement} element
     */
    load(element) {
        this.element = element
        this.keys.clear()

        window.onkeydown = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key

            if(this.keys.has(key)) return;

            this.keys.add(key)
        
            this.events.dispatchEvent('onkeydown', this)
        }

        window.onkeyup = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key
            
            if(!this.keys.has(key)) return;
        
            this.keys.delete(key)
        
            this.events.dispatchEvent('onkeyup', this)
        }

        return true
    }
}