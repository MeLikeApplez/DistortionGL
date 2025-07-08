import { generateUUID } from '../Math/MathUtils.ts'
// import Material from '../Materials/Material.ts'
import Vector3 from '../Math/Vector3.ts'
import Euler from '../Math/Euler.ts'
import Renderer from '../Renderers/Renderer.ts'

export default class GameObject<TRenderer=Renderer> {
    uuid: string
    // material: Material | null
    position: Vector3
    rotation: Euler
    autoUpdate: boolean
    needsUpdate: boolean

    constructor() {
        this.uuid = generateUUID()
    
        // this.material = material
    
        this.position = new Vector3(0, 0, 0)
        this.rotation = new Euler()
    
        this.autoUpdate = false
        this.needsUpdate = false
    }

    dispose(renderer: TRenderer, ...any: any) {
        
    }

    update(renderer: TRenderer, ...any: any) {
        
    }

    render(renderer: TRenderer, ...any: any) {
        
    }
}