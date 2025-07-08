import Loader from "./Loader"

export default class ImageLoader extends Loader<HTMLImageElement, ErrorEvent> {
    constructor() {
        super()
    }

    load(src: string, onload: (img: HTMLImageElement) => void, onerror: (error: ErrorEvent) => void) {
        const imgElement = new Image()

        imgElement.src = src
        imgElement.onload = () => {
            if(onload) onload(imgElement)

            this.events.dispatchEvent('onload', imgElement)
        }
        
        imgElement.onerror = (error: ErrorEvent) => {
            if(onerror) onerror(error)

            this.events.dispatchEvent('onerror', error)
        }
    }
}