import { Loader } from "./Loader"

interface URLOption<TU extends string[],TA extends string[]> {
    type: 'url'
    name?: string
    vertexShader: string
    fragmentShader: string
    uniforms?: TU
    attributes?: TA
}

interface SourceCodeOption<TU extends string[],TA extends string[]> {
    type: 'source-code'
    name?: string
    vertexShader: string
    fragmentShader: string
    uniforms?: TU
    attributes?: TA
}

type Uniform<K extends string> = Record<K, WebGLUniformLocation | null>
type Attribute<K extends string> = Record<K, number>

export class ShaderLoader<
    const TU extends string[],
    const TA extends string[]
    > extends Loader<WebGLProgram, Error> {
    
    name: string
    vertexCode: string | null
    fragmentCode: string | null
    program: WebGLProgram | null
    uniforms: Uniform<TU[number]>
    attributes: Attribute<TA[number]>
    preloaded: boolean
    ready: boolean
    error: Error | null

    constructor(options: URLOption<TU, TA> | SourceCodeOption<TU, TA>) {
        super()

        this.name = options?.name || 'Shader'

        this.vertexCode = null
        this.fragmentCode = null

        this.uniforms = {} as Uniform<TU[number]>
        this.attributes = {} as Attribute<TA[number]>

        this.program = null

        this.preloaded = false
        this.ready = false
        this.error = null

        this._setUniformsAndAttributes(options)

        if(options.type === 'source-code') {
            this.vertexCode = options.vertexShader
            this.fragmentCode = options.fragmentShader
        } else if(options.type === 'url') {
            this._setSourceCodeFromURL(options.vertexShader, options.fragmentShader)
        } else {
            throw Error('Invalid Shader Loader options!')
        }
    }

    static loadAll(gl: WebGL2RenderingContext, shaders: Array<ShaderLoader<any, any>>, recompile=false) {
        for(let i = 0; i < shaders.length; i++) {
            const shader = shaders[i]

            shader.load(gl, recompile)
        }
    }

    async _setSourceCodeFromURL(vertexSrc: string, fragmentSrc: string) {
        const [ vertexResponse, fragmentResponse ] = await Promise.allSettled([
            fetch(vertexSrc),
            fetch(fragmentSrc)
        ])

        if(vertexResponse.status === 'rejected' || !vertexResponse.value.ok) {
            this.ready = false
            this.error = new Error('Failed to fetch vertex shader!')

            this.dispatchEvent('onerror', this.error)
            
            return void console.error(this.error)
        }
        
        if(fragmentResponse.status === 'rejected' || !fragmentResponse.value.ok) {
            this.ready = false
            this.error = new Error('Failed to fetch fragment shader!')
            
            this.dispatchEvent('onerror', this.error)

            return void console.error(this.error)
        }

        const [ vertexCode, fragmentCode ] = await Promise.allSettled([
            vertexResponse.value.text(),
            fragmentResponse.value.text()
        ])

        if(vertexCode.status === 'rejected') {
            this.ready = false
            this.error = new Error('Failed to parse text for vertex shader!')
            
            this.dispatchEvent('onerror', this.error)
         
            return void console.error(this.error)
        }

        if(fragmentCode.status === 'rejected') {
            this.ready = false
            this.error = new Error('Failed to parse text for fragment shader!')
            
            this.dispatchEvent('onerror', this.error)
         
            return void console.error(this.error)
        }

        this.vertexCode = vertexCode.value
        this.fragmentCode = fragmentCode.value
    }

    _setUniformsAndAttributes(options: URLOption<TU, TA> | SourceCodeOption<TU, TA>) {
        if(Array.isArray(options.uniforms)) {
            for(let i = 0; i < options.uniforms.length; i++) {
                const key = options.uniforms[i]

                // @ts-ignore
                this.uniforms[key] = null
            }
        }

        if(Array.isArray(options.attributes)) {
            for(let i = 0; i < options.attributes.length; i++) {
                const key = options.attributes[i]

                // @ts-ignore
                this.attributes[key] = -1
            }
        }
    }

    load(gl: WebGL2RenderingContext, recompile=false) {
        if(!recompile && this.ready && this.program && !this.error) return

        // setup and compile glsl vertex shader
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)

        if(!vertexShader) {
            return void console.error('Failed to create vertex shader!')
        }

        if(this.vertexCode === null) return void console.error('Vertex shader code is not a string!')
        if(this.fragmentCode === null) return void console.error('Fragment shader code is not a string!')

        gl.shaderSource(vertexShader, this.vertexCode)
        gl.compileShader(vertexShader)

        if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(vertexShader)
            const compileError = new  Error(`[Vertex Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        // setup and compile fragment shader
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

         if(!fragmentShader) {
            return void console.error('Failed to create fragment shader!')
        }

        gl.shaderSource(fragmentShader, this.fragmentCode)
        gl.compileShader(fragmentShader)

        if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(fragmentShader)
            const compileError = new  Error(`[Fragment Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        // create and attach program
        const program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            const shaderLogError = gl.getProgramInfoLog(program)
            const compileError = new  Error(`[Link Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false
            this.error = compileError

            this.dispatchEvent('onerror', compileError)

            return void console.error(compileError)
        }

        const numOfActiveUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)

        for(let i = 0; i < numOfActiveUniforms; i++) {
            const activeUniform = gl.getActiveUniform(program, i)

            if(activeUniform === null) continue

            // @ts-ignore
            this.uniforms[activeUniform.name] = gl.getUniformLocation(program, activeUniform.name)
        }
        
        const numOfActiveAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES)
        
        for(let i = 0; i < numOfActiveAttribs; i++) {
            const activeAttrib = gl.getActiveAttrib(program, i)

            if(activeAttrib === null) continue
            
            // @ts-ignore
            this.attributes[activeAttrib.name] = gl.getAttribLocation(program, activeAttrib.name)
        }

        this.program = program
        this.ready = true
        this.error = null

        this.dispatchEvent('onload', this.program)
    }
}