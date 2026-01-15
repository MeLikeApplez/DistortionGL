import { Events } from "../Core/Events"

interface LoaderEvents<L, E> {
    onload: L
    onerror: E
}

export class Loader<L, E> extends Events<LoaderEvents<L, E>> {
    constructor() {
        super()
    }

    load(...any: any) {
        // Write loader code here
    }
}

