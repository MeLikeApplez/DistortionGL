import { generateUUID } from '../Math/MathUtils'
import { Renderer } from '../Renderers/Renderer'

export interface NodeOptions {
    name?: string
    type?: string
}
export class Node<TRenderer extends Renderer = Renderer> {
    readonly uuid: string
    readonly name: string
    visible: boolean
    loaded: boolean

    constructor(options?: NodeOptions) {
        this.uuid = generateUUID()
        this.name = options?.name ?? ''

        this.visible = true

        this.loaded = false
    }

    /**
     * @description Destroys any data/buffers for clean up .
     * @example
     * gl.deleteBuffer(vertexBuffer)
     * gl.deleteBuffer(transformBuffer)
     */
    dispose?(renderer: TRenderer, ...any: any): void

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
    load?(renderer: TRenderer, ...any: any): void

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
    update?(renderer: TRenderer, ...any: any): void

    /**
     * @description Renders the entity. Use for scene renders.
     * @example
     * gl.bindBuffer(gl.ARRAY_BUFFER, transformBuffer)
     * 
     * gl.enableVertexAttribArray(data)
     * 
     * gl.drawArraysInstanced(gl.TRIANGLES, 0, verticesLength, instanceCount)
     */
    render?(renderer: TRenderer, ...any: any): void
}