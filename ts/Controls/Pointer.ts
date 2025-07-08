import Events from '../Core/Events.js'
import Vector2 from '../Math/Vector2.js'

interface PointerEvents {
    onpointerdown: Pointer
    onpointermove: Pointer
    onpointerup: Pointer
    onmousescroll: Pointer
}

export default class Pointer {
    element: HTMLElement | null
    position: Vector2
    down: Vector2
    drag: Vector2
    offset: Vector2
    mouseScroll: number
    isPointerDragging: boolean
    isPointerDown: boolean
    isPointerUp: boolean
    devicePixelRatio: number
    events: Events<PointerEvents>

    constructor(element: HTMLElement | null, devicePixelRatio=1) {
        this.element = element

        this.position = new Vector2(0, 0)
        this.down = new Vector2(0, 0)
        this.drag = new Vector2(0, 0)
        this.offset = new Vector2(0, 0)
        this.mouseScroll = 0

        this.isPointerDragging = false
        this.isPointerDown = false
        this.isPointerUp = true

        this.devicePixelRatio = devicePixelRatio

        this.events = new Events()

        this.events.createEventDispatch('onpointerdown')
        this.events.createEventDispatch('onpointermove')
        this.events.createEventDispatch('onpointerup')
        this.events.createEventDispatch('onmousescroll')

        if(element) this.load(element)
    }

    dispose() {
        if(!this.element) return false

        this.position.set(0, 0)
        this.down.set(0, 0)
        this.drag.set(0, 0)
        this.offset.set(0, 0)

        this.element.onpointerdown = null
        this.element.onpointermove = null
        this.element.onpointerup = null
        this.element.onwheel = null

        this.element = null

        return true
    }

    load(element: HTMLElement) {
        this.element = element

        element.onwheel = event => {
            this.mouseScroll += event.deltaY

            this.events.dispatchEvent('onmousescroll', this)
        }

        element.onpointerdown = event => {
            this.isPointerDown = true
            this.isPointerUp = false

            const rect = element.getBoundingClientRect()

            this.position.set(
                this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
                this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
            )
            this.drag.set(0, 0)

            if(!this.isPointerDragging && this.isPointerDown) {
                this.isPointerDragging = true

                this.down.copy(this.position)
            }

            this.events.dispatchEvent('onpointerdown', this)
        }

        element.onpointermove = event => {
            const rect = element.getBoundingClientRect()

            this.position.set(
                this.devicePixelRatio * (event.clientX - rect.left + this.offset.x),
                this.devicePixelRatio * (event.clientY - rect.top + this.offset.y)
            )

            if(this.isPointerDown) {
                this.drag.set(
                    this.position.x - this.down.x,
                    this.position.y - this.down.y,
                )
            }
        
            this.events.dispatchEvent('onpointermove', this)
        }

        element.onpointerup = event => {
            this.isPointerDown = false
            this.isPointerUp = true
        
            if(this.isPointerDragging) {
                this.isPointerDragging = false
         
                this.down.set(0, 0)
                this.drag.set(0, 0)
            }
        
            this.events.dispatchEvent('onpointerup', this)
        }

        return true
    }
}