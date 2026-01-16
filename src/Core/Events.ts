type EventCallback = (...data: any) => void

export class Events<T extends Record<string, any>> {
    private _listeners: Map<keyof T, Array<EventCallback>>

    constructor(eventNames?: Array<keyof T>) {
        this._listeners = new Map()

        if(Array.isArray(eventNames)) {
            for(let i = 0; i < eventNames.length; i++) {
                this._listeners.set(eventNames[i], [])
            }
        }
    }

    dispatchEvent<K extends keyof T>(eventName: K, data: T[K]) {
        const group = this._listeners.get(eventName)

        if(!Array.isArray(group)) {
            this._listeners.set(eventName, [])
        
            return false
        }

        for(let i = 0; i < group.length; i++) {
            const listener = group[i]
            
            listener(data)
        }

        return true
    }

    addEventListener<K extends keyof T>(eventName: K, callback: (data: T[K]) => void) {
        const group = this._listeners.get(eventName)

        if(!group) throw Error(`Unable to find event event name: "${String(eventName)}"`)
        if(typeof callback !== 'function') throw Error('Callback function is required!')

        group.push(callback)
    }
}