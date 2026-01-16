import { Loader } from "./Loader"

export class ImageLoader extends Loader<HTMLImageElement, string | Event> {
    img: HTMLImageElement

    constructor() {
        super()

        this.img = new Image()
    }

    load(src: string, onload: (img: HTMLImageElement) => void, onerror: (error: string | Event) => void) {
        this.img.src = src
        this.img.onload = () => {
            if(onload) onload(this.img)

            this.dispatchEvent('onload', this.img)

            this.ready = true
        }
        
        this.img.onerror = (error: string | Event) => {
            if(onerror) onerror(error)

            this.dispatchEvent('onerror', error)
        
            this.ready = false
        }
    }
}