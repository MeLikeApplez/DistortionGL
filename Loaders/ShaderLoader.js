import Events from "../Core/Events"
import Loader from "./Loader"

/**
 * @typedef {object} URLOption
 * @property {'url'} type
 * @property {string=} name
 * @property {string} vertexShader
 * @property {string} fragmentShader
 */

/**
 * @typedef {object} SourceCodeOption
 * @property {'source-code'} type
 * @property {string=} name
 * @property {string} vertexShader
 * @property {string} fragmentShader
 */

/**
 * @typedef {object} _ShaderLoader
 * @property {string | null} vertexCode
 * @property {string | null} shaderCode
 * @property {WebGLProgram | null} program
 * @property {boolean} ready
 * @property {Error | null} error
 */

/**
 * @type {_ShaderLoader}
 * @template {Record<string, WebGLUniformLocation | null>} Uniforms
 * @template {Record<string, GLint>} Attributes
 * @module ShaderLoader
 */
export default class ShaderLoader extends Loader {
    /**
     * @param {URLOption | SourceCodeOption} options 
     */
    constructor(options) {
        super()

        this.name = options?.name || 'Shader'

        this.vertexCode = null
        this.fragmentCode = null

        /**
         * @type {Uniforms}
         */
        this.uniforms = {}
        /**
         * @type {Attributes}
         */
        this.attributes = {}

        this.program = null

        this.preloaded = false
        this.ready = false
        this.error = null

        if(options.type === 'source-code') {
            this.vertexCode = options.vertexShader
            this.fragmentCode = options.fragmentShader
        } else if(options.type === 'url') {
            this._setSourceCodeFromURL(options.vertexShader, options.fragmentShader)
        } else {
            throw Error('Invalid Shader Loader options!')
        }
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     * @param {Array<ShaderLoader2>} shaders 
     * @param {boolean=} recompile
     */
    static loadAll(gl, shaders, recompile=false) {
        for(let i = 0; i < shaders.length; i++) {
            const shader = shaders[i]

            shader.load(gl, recompile)
        }
    }

    /**
     * @param {string} vertexSrc 
     * @param {string} fragmentSrc 
     */
    async _setSourceCodeFromURL(vertexSrc, fragmentSrc) {
        const [ vertexResponse, fragmentResponse ] = await Promise.allSettled([
            fetch(vertexSrc),
            fetch(fragmentSrc)
        ])

        if(vertexResponse.status === 'rejected' || !vertexResponse.value.ok) {
            this.shader.ready = false
            this.error = new Error('Failed to fetch vertex shader!')

            this.events.dispatchEvent('onerror', this.error)
            
            return void console.error(this.error)
        }
        
        if(fragmentResponse.status === 'rejected' || !fragmentResponse.value.ok) {
            this.shader.ready = false
            this.error = new Error('Failed to fetch fragment shader!')
            
            this.events.dispatchEvent('onerror', this.error)

            return void console.error(this.error)
        }

        const [ vertexCode, fragmentCode ] = await Promise.allSettled([
            vertexResponse.value.text(),
            fragmentResponse.value.text()
        ])

        if(vertexCode.status === 'rejected') {
            this.shader.ready = false
            this.error = new Error('Failed to parse text for vertex shader!')
            
            this.events.dispatchEvent('onerror', this.error)
         
            return void console.error(this.error)
        }

        if(fragmentCode.status === 'rejected') {
            this.shader.ready = false
            this.error = new Error('Failed to parse text for fragment shader!')
            
            this.events.dispatchEvent('onerror', this.error)
         
            return void console.error(this.error)
        }

        this.vertexCode = vertexCode.value
        this.fragmentCode = fragmentCode.value
    }

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {boolean=} [recompile=false]  
     */
    load(gl, recompile=false) {
        if(!recompile && this.ready && this.program && !this.error) return

        // setup and compile glsl vertex shader
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(vertexShader, this.vertexCode)
        gl.compileShader(vertexShader)

        if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            let compileError = gl.getShaderInfoLog(vertexShader)
            compileError = new  Error(`[Vertex Shader]: "${compileError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.events.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        // setup and compile fragment shader
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(fragmentShader, this.fragmentCode)
        gl.compileShader(fragmentShader)

        if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            let compileError = gl.getShaderInfoLog(fragmentShader)
            compileError = new  Error(`[Fragment Shader]: "${compileError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.events.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        // create and attach program
        const program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            let compileError = gl.getProgramInfoLog(program)
            compileError = new  Error(`[Link Shader]: "${compileError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.events.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        for(const key in this.uniforms) {
            const uniformLocation = gl.getUniformLocation(program, key)

            this.uniforms[key] = uniformLocation
        }

        
        for(const key in this.attributes) {
            const attributeLocation = gl.getAttribLocation(program, key)
            
            this.attributes[key] = attributeLocation
        }

        this.program = program
        this.ready = true
        this.error = null

        this.events.dispatchEvent('onload', this.program)
    }
}