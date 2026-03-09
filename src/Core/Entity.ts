import { generateUUID } from '../Math/MathUtils'
import { Vector3 } from '../Math/Vector3'
import { Euler } from '../Math/Euler'
import { Renderer } from '../Renderers/Renderer'
import { Matrix4 } from '../Math/Matrix4'
import { Quaternion } from '../Math/Quaternion'
import { Vector2 } from '../Math/Vector2'
import { Vector4 } from '../Math/Vector4'
import { Matrix3 } from '../Math/Matrix3'

interface EntityOptions {
    name?: string
    type?: string
}

export abstract class Entity<TRenderer=Renderer> {
    readonly uuid: string
    readonly name: string
    readonly type: string
    position: Vector2 | Vector3 | Vector4 | null
    scale: Vector2 | Vector3 | Vector4 | null
    rotation: Euler | null
    quaternion: Quaternion | null
    matrix: Matrix3 | Matrix4 | null
    visible: boolean
    loaded: boolean

    constructor(options?: EntityOptions) {
        this.uuid = generateUUID()
        this.name = options?.name ?? ''
        this.type = options?.type ?? ''
            
        this.position = null
        this.scale = null
        this.rotation = null
        this.quaternion = null
    
        this.matrix = null

        this.visible = true

        this.loaded = false
    }

    /**
     * @description Destroys any data/buffers for clean up .
     * @example
     * gl.deleteBuffer(vertexBuffer)
     * gl.deleteBuffer(transformBuffer)
     */
    abstract dispose(renderer: TRenderer, ...any: any): void

    /**
     * @description Initializes entity data. Use it once to setup the entity.
     * @example
     * this._vertexData = gl.createBuffer()
     * 
     * const transformData = new Float32Array([
     *      0, 0, 0,
     *      0, 0, 1,
     *      0, 1, 0
     *      0, 0, 1,
     *      0, 1, 1,
     *      0, 1, 0,
     * ])
     * 
     * gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexData)
     * gl.bufferData(gl.ARRAY_BUFFER, this._vertexData, gl.STATIC_DRAW)
     * 
     * this.loaded = true
     */
    abstract load(renderer: TRenderer, ...any: any): void

    /**
     * @description Updates entity data. Use for scene updates only.
     * @example
     * 
     * for(let i = 0; i < this.count; i++) {
     *      const transformDataIndex = rowSize * i
     *      const matrix = this.instanceMatrices[i]
     *      
     *      transformData.set(matrix.elements, transformDataIndex)
     *      transformData.set(this.instanceColor[i], transformDataIndex + matrix.elements.length)
     * }
     * 
     * gl.bindBuffer(gl.ARRAY_BUFFER, this._transformBuffer)
     * gl.bufferData(gl.ARRAY_BUFFER, transformData, gl.STATIC_DRAW)
     */
    abstract update(renderer: TRenderer, ...any: any): void
    
    /**
     * @description Renders the entity. Use for scene renders.
     * @example
     * gl.bindBuffer(gl.ARRAY_BUFFER, transformBuffer)
     * 
     * gl.enableVertexAttribArray(data)
     * 
     * gl.drawArraysInstanced(gl.TRIANGLES, 0, verticesLength, instanceCount)
     */
    abstract render(renderer: TRenderer, ...any: any): void
}