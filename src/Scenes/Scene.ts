import { Entity } from '../Core/Entity'
import { Renderer } from '../Renderers/Renderer'
import type { Camera } from '../Camera/Camera'

export abstract class Scene<TRenderer=Renderer, TCamera=Camera> {
    children: Entity[]
    enabled: boolean
    loaded: boolean
    ready: boolean

    constructor() {
        this.children = []

        this.enabled = true
        this.loaded = false
        this.ready = false
    }

    add(entities: Entity[]) {
        this.children.push(...entities)
    }

    remove(entities: Entity[]) {
        for(let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            const index = this.children.findIndex(e => e.uuid === entity.uuid)

            if(index === -1) continue

            this.children.splice(index, 1)
        }
    }

    abstract dispose(renderer: TRenderer, camera: TCamera, ...any: any): void
    abstract load(renderer: TRenderer, camera: TCamera, ...any: any): void
    abstract render(renderer: TRenderer, camera: TCamera, ...any: any): void
}