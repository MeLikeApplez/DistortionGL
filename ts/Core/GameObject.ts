import { generateUUID } from '../Math/MathUtils.ts'
import Vector3 from '../Math/Vector3.ts'
import Euler from '../Math/Euler.ts'
import Renderer from '../Renderers/Renderer.ts'
import Matrix4 from '../Math/Matrix4.ts'
import Quaternion from '../Math/Quaternion.ts'
import Matrix3 from '../Math/Matrix3.ts'
import Vector2 from '../Math/Vector2.ts'
import Vector4 from '../Math/Vector4.ts'

export default class GameObject<TRenderer=Renderer> {
    uuid: string
    name: string
    type: string
    position: Vector2 | Vector3 | Vector4
    scale: Vector2 | Vector3 | Vector4
    rotation: Euler
    quaternion: Quaternion
    matrix: Matrix3 | Matrix4
    matrixAutoUpdate: boolean
    matrixNeedsUpdate: boolean
    autoUpdate: boolean
    needsUpdate: boolean

    constructor() {
        this.uuid = generateUUID()
        this.name = ''
        this.type = ''
            
        this.position = new Vector3()
        this.scale = new Vector3()
        this.rotation = new Euler()
        this.quaternion = new Quaternion()
    
        this.matrix = new Matrix4()

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