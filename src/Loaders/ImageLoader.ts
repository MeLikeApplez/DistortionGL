import { Loader } from "./Loader"

export class ImageLoader extends Loader<HTMLImageElement, string | Event> {
    constructor() {
        super()
    }

    load(src: string, onload: (img: HTMLImageElement) => void, onerror: (error: string | Event) => void) {
        const imgElement = new Image()

        imgElement.src = src
        imgElement.onload = () => {
            if(onload) onload(imgElement)

            this.dispatchEvent('onload', imgElement)
        }
        
        imgElement.onerror = (error: string | Event) => {
            if(onerror) onerror(error)

            this.dispatchEvent('onerror', error)
        }
    }
}