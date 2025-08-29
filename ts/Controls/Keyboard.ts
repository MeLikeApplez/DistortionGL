import { generateUUID } from "../Math/MathUtils.ts"

interface EventListeners {
    uuid: string
    callback: (data: any) => void
}

export default class Events<T extends Record<string, any>> {
    _listeners: Map<keyof T, Array<EventListeners>>

    constructor(eventNames?: Array<keyof T>) {
        this._listeners = new Map()

        if(Array.isArray(eventNames)) {
            for(let i = 0; i < eventNames.length; i++) {
                this._listeners.set(eventNames[i], [])
            }
        }
    }
    
    createEvent(eventName: keyof T) {
        this._listeners.set(eventName, [])
    
        return this
    }

    removeEvent(eventName: keyof T) {
        this._listeners.delete(eventName)
    }

    dispatchEvent<K extends keyof T>(eventName: K, data: T[K]) {
        const group = this._listeners.get(eventName)

        if(!group) return false

        for(let i = 0; i < group.length; i++) {
            const listener = group[i]
            
            listener.callback(data)
        }

        return true
    }

    listen<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): string | Error {
        const group = this._listeners.get(eventName)

        if(!group) return new Error(`Unable to find event eventName: "${String(eventName)}"`)
        if(typeof callback !== 'function') return new Error('Callback function is required!')

        const uuid = generateUUID()
        
        group.push({ uuid, callback })

        return uuid
    }

    unlisten<K extends keyof T>(eventName: K, uuid: string): true | Error {
        const group = this._listeners.get(eventName)

        if(!group) return new Error(`Unable to find event eventName: "${String(eventName)}"`)
        const index = group.findIndex(v => v.uuid === uuid)

        if(index === -1) return new Error(`Unable to find listener function with uuid: "${uuid}"`)
    
        group.splice(index, 1)
        
        return true
    }
}