import { Events } from "../Core/Events"

export abstract class Controls<T extends Record<string, any>> extends Events<T> {
    element: HTMLElement | null

    constructor(element: HTMLElement | null, events: (keyof T)[]) {
        super(events)

        this.element = element
    }

    /**
     * @description
     */
    abstract dispose(...any: any): void

    /**
     * @description
     */
    abstract load(...any: any): void
}