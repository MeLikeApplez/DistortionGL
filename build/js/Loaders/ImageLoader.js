import { Loader } from "./Loader";
class ImageLoader extends Loader {
  img;
  constructor() {
    super();
    this.img = new Image();
  }
  load(src, onload, onerror) {
    this.img.src = src;
    this.img.onload = () => {
      if (onload) onload(this.img);
      this.dispatchEvent("onload", this.img);
      this.ready = true;
    };
    this.img.onerror = (error) => {
      if (onerror) onerror(error);
      this.dispatchEvent("onerror", error);
      this.ready = false;
    };
  }
}
export {
  ImageLoader
};
