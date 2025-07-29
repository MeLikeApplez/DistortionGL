import Events from "../Core/Events"

interface LoaderEvents<L, E> {
    onload: L
    onerror: E
}

export default class Loader<L, E> {
    events: Events<LoaderEvents<L, E>>

    constructor() {
        this.events = new Events(['onload', 'onerror'])
    }

    load(...any: any) {
        // Write loader code here
    }
}

