import { Loader } from "./Loader"

interface ShaderOptions {
    name?: string
    vertexShader: string
    fragmentShader: string
}
export class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
    name: string
    vertexShader: string
    fragmentShader: string
    gl: WebGL2RenderingContext | null
    program: WebGLProgram | null

    constructor(option: ShaderOptions) {
        super()

        this.name = option?.name ?? 'WebGL2Shader'
        this.vertexShader = option.vertexShader
        this.fragmentShader = option.fragmentShader
        
        this.gl = null
        this.program = null
    }

    getUniform(name: string) {
        if(!this.gl || !this.program || !this.ready) return null

        return this.gl.getUniformLocation(this.program, name)
    }

    getAttribute(name: string) {
        if(!this.gl || !this.program || !this.ready) return -1

        return this.gl.getAttribLocation(this.program, name)
    }

    load(gl: WebGL2RenderingContext, onload?: (program: WebGLProgram) => void, onerror?: (error: Error) => void) {
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)

        if(!vertexShader) {
            return console.error('Failed to create vertex shader!')
        }

        gl.shaderSource(vertexShader, this.vertexShader)
        gl.compileShader(vertexShader)

        if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(vertexShader)
            const compileError = new Error(`[Vertex Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false

            if(onerror) onerror(compileError)

            this.dispatchEvent('onerror', compileError)

            return console.error(compileError)
        }

        // setup and compile fragment shader
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

         if(!fragmentShader) {
            return console.error('Failed to create fragment shader!')
        }

        gl.shaderSource(fragmentShader, this.fragmentShader)
        gl.compileShader(fragmentShader)

        if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            const shaderLogError = gl.getShaderInfoLog(fragmentShader)
            const compileError = new Error(`[Fragment Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false

            if(onerror) onerror(compileError)

            this.dispatchEvent('onerror', compileError)

            return console.error(compileError)
        }

        // create and attach program
        const program = gl.createProgram()
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            const shaderLogError = gl.getProgramInfoLog(program)
            const compileError = new Error(`[Link Shader]: "${shaderLogError}"`) 

            this.program = null
            this.ready = false

            if(onerror) onerror(compileError)

            this.dispatchEvent('onerror', compileError)

            return console.error(compileError)
        }

        this.program = program
        
        if(onload) onload(program)

        this.dispatchEvent('onload', program)

        this.gl = gl
        this.ready = true
    }
}