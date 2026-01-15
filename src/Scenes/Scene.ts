import { Camera } from '../Camera/Camera'
import { Entity } from '../Core/Entity'
import { Renderer } from '../Renderers/Renderer'

export class Scene<TCamera=Camera, TRenderer=Renderer> {
    camera: TCamera
    children: Entity[]
    enabled: boolean

    constructor(camera: TCamera) {
        this.camera = camera
        this.children = []

        this.enabled = true
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

    dispose(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }

    load(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }

    render(renderer: TRenderer, ...any: any) {
        // Write scene code here
    }
}