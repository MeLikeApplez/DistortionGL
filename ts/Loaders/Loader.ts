import Events from "../Core/Events"

interface LoaderEvents<L, E> {
    onload: L
    onerror: E
}

export default class Loader<L, E> {
    events: Events<LoaderEvents<L, E>>

    constructor() {
        this.events = new Events()

        this.events.createEventDispatch('onload')
        this.events.createEventDispatch('onerror')
    }

    load(...any: any) {
        // Write loader code here
    }
}

