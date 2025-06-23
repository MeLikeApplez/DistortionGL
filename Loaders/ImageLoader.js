import Loader from "./Loader"

export default class ImageLoader extends Loader {
    constructor() {
        super()
    }

    /**
     * @param {string | URL} src 
     * @param {function(Image)=} onload 
     * @param {function=} onerror 
     */
    load(src, onload, onerror) {
        const imgElement = new Image()

        imgElement.src = src
        imgElement.onload = () => {
            if(onload) onload(imgElement)

            this.events.dispatchEvent('onload', imgElement)
        }
        
        imgElement.onerror = (...args) => {
            if(onerror) onerror(...args)

            this.events.dispatchEvent('onerror', ...args)
        }
    }
}