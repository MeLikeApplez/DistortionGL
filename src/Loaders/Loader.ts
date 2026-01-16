import { Events } from "../Core/Events"

interface LoaderEvents<L, E> {
    onload: L
    onerror: E
}

export class Loader<L, E> extends Events<LoaderEvents<L, E>> {
    ready: boolean

    constructor() {
        super()

        this.ready = false
    }

    load(...any: any) {
        // Write loader code here
    }
}

