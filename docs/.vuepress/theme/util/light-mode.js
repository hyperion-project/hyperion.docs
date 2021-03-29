import { event } from "./event.js";

class LightMode {

  constructor() {
    this._light = false;
    event.$on('light-mode', (isLight) => this._light = isLight);
  }

	destroy() {
    event.$off("light-mode");
	}

  init() {
    this._light = window.localStorage.getItem('hyperion_light') === 'on';
    document.getElementsByTagName('html')[0].classList[this._light ? 'remove' : 'add']('dark');
  }

  toggle() {
    this._light = !this._light;
    window.localStorage.setItem('hyperion_light', this._light ? 'on' : 'off');
    document.getElementsByTagName('html')[0].classList[this._light ? 'remove' : 'add']('dark');
    event.$emit("light-mode", this._light);
  }

}

export default LightMode;
