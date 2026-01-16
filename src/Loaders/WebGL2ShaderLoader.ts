import { Loader } from "./Loader"

interface URLOption {
    type: 'url'
    name?: string
    vertexShader: string
    fragmentShader: string
}

interface SourceCodeOption {
    type: 'source-code'
    name?: string
    vertexShader: string
    fragmentShader: string
}

export class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
    type: URLOption['type'] | SourceCodeOption['type']
    name: string
    vertexShader: string
    fragmentShader: string
    program: WebGLProgram | null

    constructor(option: URLOption | SourceCodeOption) {
        super()

        this.type = option.type
        this.name = option?.name ?? 'WebGL2Shader'
        this.vertexShader = option.vertexShader
        this.fragmentShader = option.fragmentShader

        this.program = null
    }

    getUniform(gl: WebGL2RenderingContext, name: string) {
        if(!this.program || !this.ready) return null

        return gl.getUniformLocation(this.program, name)
    }

    getAttribute(gl: WebGL2RenderingContext, name: string) {
        if(!this.program || !this.ready) return -1

        return gl.getAttribLocation(this.program, name)
    }

    async load(gl: WebGL2RenderingContext) {
        if(this.type === 'url') {
            const [ vertexShaderResponse, fragmentShaderResponse ] = await Promise.allSettled([
                fetch(this.vertexShader),
                fetch(this.fragmentShader),
            ])

            if(vertexShaderResponse.status === 'rejected') {
                const error = new Error(vertexShaderResponse.reason)

                this.ready = false

                this.dispatchEvent('onerror', error)
                throw error
            }

            if(fragmentShaderResponse.status === 'rejected') {
                const error = new Error(fragmentShaderResponse.status)
                
                this.ready = false

                this.dispatchEvent('onerror', error)
                throw error
            }

            this.vertexShader = await vertexShaderResponse.value.text()
            this.fragmentShader = await fragmentShaderResponse.value.text()
        }

        const vertexShader = gl.createShader(gl.VERTEX_SHADER)

        if(!vertexShader) {
            throw new Error('Failed to create vertex shader!')
        }

        gl.shaderSource(vertexShader, this.vertexShader)
        gl.compileShader(vertexShader)

        if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(vertexShader)
            const compileError = new  Error(`[Vertex Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false

            this.dispatchEvent('onerror', compileError)

            throw compileError
        }

        // setup and compile fragment shader
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

         if(!fragmentShader) {
            throw new Error('Failed to create fragment shader!')
        }

        gl.shaderSource(fragmentShader, this.fragmentShader)
        gl.compileShader(fragmentShader)

        if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(fragmentShader)
            const compileError = new  Error(`[Fragment Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false

            this.dispatchEvent('onerror', compileError)

            throw compileError
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

            this.dispatchEvent('onerror', compileError)

            throw compileError
        }

        this.program = program

        this.dispatchEvent('onload', program)

        this.ready = true
    }
}