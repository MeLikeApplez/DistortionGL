import { Events } from "../Core/Events"

interface KeyboardEvents {
    onkeydown: Keyboard
    onkeyup: Keyboard
}

export class Keyboard extends Events<KeyboardEvents> {
    element: HTMLElement | null
    keys: Set<string>
    lowerCase: boolean

    constructor(element: HTMLElement, lowerCase=false) {
        super(['onkeyup', 'onkeydown'])

        this.element = element

        this.keys = new Set()
        this.lowerCase = lowerCase
    
        if(element) this.load(element)
    }

    /**
     * @description Destroys keyboard event listeners
     */
    dispose() {
        if(!this.element) return false

        window.onkeydown = null
        window.onkeyup = null

        this.element = null
        this.keys.clear()

        return true
    }

    /**
     * @description Checks if a key is being pressed down
     */
    hasKey(key: string) {
        return this.keys.has(key)
    }

    /**
     * @description Attaches event listeners to an HTML Element and activates the keyboard
     */
    load(element: HTMLElement) {
        this.element = element
        this.keys.clear()

        window.onkeydown = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key

            if(this.keys.has(key)) return;

            this.keys.add(key)
        
            this.dispatchEvent('onkeydown', this)
        }

        window.onkeyup = event => {
            const key = this.lowerCase ? event.key.toLowerCase() : event.key
            
            if(!this.keys.has(key)) return;
        
            this.keys.delete(key)
        
            this.dispatchEvent('onkeyup', this)
        }

        return true
    }
}