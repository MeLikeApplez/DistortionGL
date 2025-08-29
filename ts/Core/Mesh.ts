import ShaderLoader from "../Loaders/ShaderLoader"
import Renderer from "../Renderers/Renderer"
import GameObject from "./GameObject"

export default class Mesh<TRenderer=Renderer> extends GameObject<TRenderer> {
    shader: ShaderLoader<any, any> | null

    constructor() {
        super()

        this.shader = null
    }
}