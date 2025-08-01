import GameObject from "./GameObject"
import Renderer from '../Renderers/Renderer.ts'

export default class Group<TRenderer=Renderer> extends GameObject<TRenderer> {
    children: Array<GameObject<TRenderer>>
    
    constructor() {
        super()

        this.children = []
    }
}