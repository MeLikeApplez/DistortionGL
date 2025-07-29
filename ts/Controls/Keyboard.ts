import Events from "../Core/Events"

interface KeyboardEvents {
    onkeydown: Keyboard
    onkeyup: Keyboard
}

export default class Keyboard {
    element: HTMLElement | null
    keys: Set<string>
    lowerCase: boolean
    events: Events<KeyboardEvents>

    constructor(element: HTMLElement, lowerCase=false) {
        this.element = element

        this.keys = new Set()
        this.lowerCase = lowerCase

        this.events = new Events(['onkeyup', 'onkeydown'])
    
        if(element) this.load(element)
    }

    dispose() {
        if(!this.element) return false

        window.onkeydown = null
        window.onkeyup = null

        this.element = null
        this.keys.clear()

        return true
    }

    load(element: HTMLElement) {
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