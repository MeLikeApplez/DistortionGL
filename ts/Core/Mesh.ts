import ShaderLoader from "../Loaders/ShaderLoader"
import Renderer from "../Renderers/Renderer"
import GameObject from "./GameObject"

type Uniform = Record<string, WebGLUniformLocation | null>
type Attribute = Record<string, number>

export default class Mesh<TRenderer=Renderer> extends GameObject<TRenderer> {
    shader: ShaderLoader<Uniform, Attribute> | null

    constructor() {
        super()

        this.shader = null
    }
}