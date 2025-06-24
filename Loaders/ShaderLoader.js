import Loader from "./Loader"
import Shader from '../Shaders/Shader'

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
 */

/**
 * @type {_ShaderLoader}
 * @template {Record<string, WebGLUniformLocation | null>} Uniforms
 * @template {Record<string, number>} Attributes
 * @module Shader
 */
export default class ShaderLoader extends Loader {
    /**
     * @param {URLOption | SourceCodeOption} options 
     */
    constructor(options) {
        super(options.name)

        /**
         * @type {Shader<Uniforms, Attributes>}
         */
        this.shader = new Shader()
    
        if(options.type === 'url') {
            this._loadFromURL(options.vertexShader, options.fragmentShader)
        } else if(options.type === 'source-code') {
            this._loadFromSourceCode(options.vertexShader, options.fragmentShader)
        } else {
            throw Error('Invalid Shader Loader parameters!')
        }
    }

    /**
     * @param {string} vertexSrc 
     * @param {string} fragmentSrc 
     */
    async _loadFromURL(vertexSrc, fragmentSrc) {
        const [ vertexResponse, fragmentResponse ] = await Promise.allSettled([
            fetch(vertexSrc),
            fetch(fragmentSrc)
        ])

        if(vertexResponse.status === 'rejected' || !vertexResponse.value.ok) {
            this.shader.ready = false
            
            return void console.error('Vertex Fetch failed to load!')
        }
        
        if(fragmentResponse.status === 'rejected' || !fragmentResponse.value.ok) {
            this.shader.ready = false
            
            return void console.error('Fragment Fetch failed to load!')
        }

        const [ vertexCode, fragmentCode ] = await Promise.allSettled([
            vertexResponse.value.text(),
            fragmentResponse.value.text()
        ])

        if(vertexCode.status === 'rejected') {
            this.shader.ready = false
            
            return void console.error('Vertex Source failed to HTTP parse!')
        }

        if(fragmentCode.status === 'rejected') {
            this.shader.ready = false
            
            return void console.error('Fragment Source failed to HTTP parse!')
        }

        this.shader.preloadSourceCode(vertexCode.value, fragmentCode.value)
    }

    /**
     * @param {string} vertexCode 
     * @param {string} fragmentCode 
     */
    _loadFromSourceCode(vertexCode, fragmentCode) {
        this.shader.preloadSourceCode(vertexCode, fragmentCode)
    }

    /**
     * @param {WebGL2RenderingContext} gl 
     */
    load(gl) {
        if(!this.shader.preloaded) return void console.error('Shader loader has not loaded any source code!')

        this.shader.loadSourceCode(gl)
    }
}