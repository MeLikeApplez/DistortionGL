import { Loader } from "./Loader";
class ImageLoader extends Loader {
  constructor() {
    super();
  }
  load(src, onload, onerror) {
    const imgElement = new Image();
    imgElement.src = src;
    imgElement.onload = () => {
      if (onload) onload(imgElement);
      this.dispatchEvent("onload", imgElement);
    };
    imgElement.onerror = (error) => {
      if (onerror) onerror(error);
      this.dispatchEvent("onerror", error);
    };
  }
}
export {
  ImageLoader
};
