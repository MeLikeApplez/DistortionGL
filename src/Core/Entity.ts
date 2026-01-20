import { generateUUID } from '../Math/MathUtils'
import { Vector3 } from '../Math/Vector3'
import { Euler } from '../Math/Euler'
import { Renderer, type RenderingSystem } from '../Renderers/Renderer'
import { Matrix4 } from '../Math/Matrix4'
import { Quaternion } from '../Math/Quaternion'
import { Matrix3 } from '../Math/Matrix3'
import { Vector2 } from '../Math/Vector2'
import { Vector4 } from '../Math/Vector4'

export class Entity<TRenderer=Renderer<RenderingSystem>> {
    uuid: string
    name: string
    type: string
    position: Vector2 | Vector3 | Vector4 | null
    scale: Vector2 | Vector3 | Vector4 | null
    rotation: Euler | null
    quaternion: Quaternion | null
    matrix: Matrix3 | Matrix4 | null
    matrixAutoUpdate: boolean
    matrixNeedsUpdate: boolean
    autoUpdate: boolean
    needsUpdate: boolean

    constructor() {
        this.uuid = generateUUID()
        this.name = ''
        this.type = ''
            
        this.position = null
        this.scale = null
        this.rotation = null
        this.quaternion = null
    
        this.matrix = null

        this.matrixAutoUpdate = false
        this.matrixNeedsUpdate = false

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