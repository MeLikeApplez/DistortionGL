import Loader from "./Loader";
/** @extends Loader<HTMLImageElement, ErrorEvent> */
export default class ImageLoader extends Loader {
    /**
     *
     */
    constructor() {
        super();
    }
    /**
     * @param {string} src
     * @param {(img: HTMLImageElement) => void} onload
     * @param {(error: ErrorEvent) => void} onerror
     * @returns {void}
     */
    load(src, onload, onerror) {
        const imgElement = new Image();
        imgElement.src = src;
        imgElement.onload = () => {
            if (onload)
                onload(imgElement);
            this.events.dispatchEvent('onload', imgElement);
        };
        imgElement.onerror = (error) => {
            if (onerror)
                onerror(error);
            this.events.dispatchEvent('onerror', error);
        };
    }
}
