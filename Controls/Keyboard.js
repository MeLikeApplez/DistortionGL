/**
 * @typedef {Object} _Keyboard
 * @property {HTMLElement | null} element
 * @property {Set} keys
 * @property {boolean} lowerCase
 */

/**
 * @type {_Keyboard}
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
    
        if(element) this.load(element)
    }

    dispose() {
        if(!this.element) return false

        this.element.onkeydown = undefined
        this.element.onkeyup = undefined

        this.element = null
        this.keys.clear()

        return true
    }

    /**
     * @param {HTMLElement} element
     */
    load(element) {
        this.keys.clear()

        element.onkeydown = event => {
            key = this.lowerCase ? event.key.toLowerCase() : event.key

            if(this.keys.has(key)) return;

            this.keys.add(key)
        }

        element.onkeyup = event => {
            key = this.lowerCase ? event.key.toLowerCase() : event.key
            
            if(!this.keys.has(key)) return;
        
            this.keys.delete(key)
        }

        return true
    }
}