import { Vector3 } from '../Math/Vector3'
import { Euler } from '../Math/Euler'
import { Renderer } from '../Renderers/Renderer'
import { Matrix4 } from '../Math/Matrix4'
import { Quaternion } from '../Math/Quaternion'
import { Vector2 } from '../Math/Vector2'
import { Vector4 } from '../Math/Vector4'
import { Matrix3 } from '../Math/Matrix3'
import { Node, NodeOptions } from './Node'

export class Entity<TRenderer extends Renderer = Renderer> extends Node<TRenderer> {
    position: Vector2 | Vector3 | Vector4 | null
    scale: Vector2 | Vector3 | Vector4 | null
    rotation: Euler | Quaternion | null
    matrix: Matrix3 | Matrix4 | null
    
    constructor(options?: NodeOptions) {
        super(options)

        this.position = null
        this.scale = null
        this.rotation = null
    
        this.matrix = null
    }
}