import { Renderer } from '../Renderers/Renderer'
import type { Camera } from '../Camera/Camera'
import { Node } from '../Core/Node'

export abstract class Scene<TRenderer extends Renderer = Renderer, TCamera extends Camera = Camera> {
    entities: Node[]
    enabled: boolean
    loaded: boolean
    ready: boolean

    constructor() {
        this.entities = []

        this.enabled = true
        this.loaded = false
        this.ready = false
    }

    /**
     * @description
     */
    add(...entities: Node[]) {
        this.entities.push(...entities)
    }

    /**
     * @description
     */
    remove(...entities: Node[]) {
        for(let i = 0; i < entities.length; i++) {
            const entity = entities[i]
            const index = this.entities.findIndex(e => e.uuid === entity.uuid)

            if(index === -1) continue

            this.entities.splice(index, 1)
        }
    }

    /**
     * @description Iterates and destroys all entities
     * @example
     * for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     * 
     *      entity.dispose(renderer)
     * }
     */
    dispose(renderer: TRenderer, camera: TCamera, ...any: any): void {
        for(let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i]

            if(!entity.dispose) continue

            entity.dispose(renderer)
        }
    }

    /**
     * @description Initializes scene and entity data. Use it once to setup the scene. 
     * @example
     * // Load other stuff here...
     *  for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     * 
     *      entity.load(renderer)
     * }
     * 
     * // "Set this.ready = true" to allow the render function to loop
     * this.ready = true
     */
    load(renderer: TRenderer, camera: TCamera, ...any: any): void {
        for(let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i]

            if(entity.loaded || !entity.load) continue

            entity.load(renderer)
        }
    }

    /**
     * @description Renders entities per frame
     * @example
     * // Render other stuff here...
     *  for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     * 
     *      entity.render(renderer)
     * }
     */
    render(renderer: TRenderer, camera: TCamera, ...any: any): void {
        for(let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i]

            if(entity.visible || !entity.render) continue

            entity.render(renderer)
        }
    }
}