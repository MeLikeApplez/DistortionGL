// ../src/Math/MathUtils.ts
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function clamp(min, value, max) {
  return value < min ? min : value > max ? max : value;
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}
var lut = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
function generateUUID() {
  const d0 = Math.random() * 4294967295 | 0;
  const d1 = Math.random() * 4294967295 | 0;
  const d2 = Math.random() * 4294967295 | 0;
  const d3 = Math.random() * 4294967295 | 0;
  return lut[d0 & 255] + lut[d0 >> 8 & 255] + lut[d0 >> 16 & 255] + lut[d0 >> 24 & 255] + "-" + lut[d1 & 255] + lut[d1 >> 8 & 255] + "-" + lut[d1 >> 16 & 15 | 64] + lut[d1 >> 24 & 255] + "-" + lut[d2 & 63 | 128] + lut[d2 >> 8 & 255] + "-" + lut[d2 >> 16 & 255] + lut[d2 >> 24 & 255] + lut[d3 & 255] + lut[d3 >> 8 & 255] + lut[d3 >> 16 & 255] + lut[d3 >> 24 & 255];
}
function extendArray(array, size) {
  const ArrayConstructor = array.constructor;
  const arrayCopy = ArrayConstructor(array.length * size);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < array.length; j++) {
      arrayCopy[array.length * i + j] = array[j];
    }
  }
  return arrayCopy;
}

// ../src/Core/Events.ts
var Events = class {
  _listeners;
  constructor(eventNames) {
    this._listeners = /* @__PURE__ */ new Map();
    if (Array.isArray(eventNames)) {
      for (let i = 0; i < eventNames.length; i++) {
        this._listeners.set(eventNames[i], []);
      }
    }
  }
  createEvent(eventName) {
    this._listeners.set(eventName, []);
    return this;
  }
  dispatchEvent(eventName, data) {
    const group = this._listeners.get(eventName);
    if (!group) return false;
    for (let i = 0; i < group.length; i++) {
      const listener = group[i];
      listener.callback(data);
    }
    return true;
  }
  listen(eventName, callback) {
    const group = this._listeners.get(eventName);
    if (!group) return new Error(`Unable to find event eventName: "${String(eventName)}"`);
    if (typeof callback !== "function") return new Error("Callback function is required!");
    const uuid = generateUUID();
    group.push({ uuid, callback });
    return uuid;
  }
};

// ../src/Loaders/Loader.ts
var Loader = class extends Events {
  constructor() {
    super();
  }
  load(...any) {
  }
};

// ../src/Loaders/ShaderLoader.ts
var ShaderLoader = class extends Loader {
  name;
  vertexCode;
  fragmentCode;
  program;
  uniforms;
  attributes;
  preloaded;
  ready;
  error;
  constructor(options) {
    super();
    this.name = options?.name || "Shader";
    this.vertexCode = null;
    this.fragmentCode = null;
    this.uniforms = {};
    this.attributes = {};
    this.program = null;
    this.preloaded = false;
    this.ready = false;
    this.error = null;
    this._setUniformsAndAttributes(options);
    if (options.type === "source-code") {
      this.vertexCode = options.vertexShader;
      this.fragmentCode = options.fragmentShader;
    } else if (options.type === "url") {
      this._setSourceCodeFromURL(options.vertexShader, options.fragmentShader);
    } else {
      throw Error("Invalid Shader Loader options!");
    }
  }
  static loadAll(gl, shaders, recompile = false) {
    for (let i = 0; i < shaders.length; i++) {
      const shader = shaders[i];
      shader.load(gl, recompile);
    }
  }
  async _setSourceCodeFromURL(vertexSrc, fragmentSrc) {
    const [vertexResponse, fragmentResponse] = await Promise.allSettled([
      fetch(vertexSrc),
      fetch(fragmentSrc)
    ]);
    if (vertexResponse.status === "rejected" || !vertexResponse.value.ok) {
      this.ready = false;
      this.error = new Error("Failed to fetch vertex shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    if (fragmentResponse.status === "rejected" || !fragmentResponse.value.ok) {
      this.ready = false;
      this.error = new Error("Failed to fetch fragment shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    const [vertexCode, fragmentCode] = await Promise.allSettled([
      vertexResponse.value.text(),
      fragmentResponse.value.text()
    ]);
    if (vertexCode.status === "rejected") {
      this.ready = false;
      this.error = new Error("Failed to parse text for vertex shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    if (fragmentCode.status === "rejected") {
      this.ready = false;
      this.error = new Error("Failed to parse text for fragment shader!");
      this.dispatchEvent("onerror", this.error);
      return void console.error(this.error);
    }
    this.vertexCode = vertexCode.value;
    this.fragmentCode = fragmentCode.value;
  }
  _setUniformsAndAttributes(options) {
    if (Array.isArray(options.uniforms)) {
      for (let i = 0; i < options.uniforms.length; i++) {
        const key = options.uniforms[i];
        this.uniforms[key] = null;
      }
    }
    if (Array.isArray(options.attributes)) {
      for (let i = 0; i < options.attributes.length; i++) {
        const key = options.attributes[i];
        this.attributes[key] = -1;
      }
    }
  }
  load(gl, recompile = false) {
    if (!recompile && this.ready && this.program && !this.error) return;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    if (!vertexShader) {
      return void console.error("Failed to create vertex shader!");
    }
    if (this.vertexCode === null) return void console.error("Vertex shader code is not a string!");
    if (this.fragmentCode === null) return void console.error("Fragment shader code is not a string!");
    gl.shaderSource(vertexShader, this.vertexCode);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      const shaderLogError = gl.getShaderInfoLog(vertexShader);
      const compileError = new Error(`[Vertex Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fragmentShader) {
      return void console.error("Failed to create fragment shader!");
    }
    gl.shaderSource(fragmentShader, this.fragmentCode);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      const shaderLogError = gl.getShaderInfoLog(fragmentShader);
      const compileError = new Error(`[Fragment Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const shaderLogError = gl.getProgramInfoLog(program);
      const compileError = new Error(`[Link Shader]: "${shaderLogError}"`);
      this.program = null;
      this.ready = false;
      this.error = compileError;
      this.dispatchEvent("onerror", compileError);
      return void console.error(compileError);
    }
    const numOfActiveUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < numOfActiveUniforms; i++) {
      const activeUniform = gl.getActiveUniform(program, i);
      if (activeUniform === null) continue;
      this.uniforms[activeUniform.name] = gl.getUniformLocation(program, activeUniform.name);
    }
    const numOfActiveAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < numOfActiveAttribs; i++) {
      const activeAttrib = gl.getActiveAttrib(program, i);
      if (activeAttrib === null) continue;
      this.attributes[activeAttrib.name] = gl.getAttribLocation(program, activeAttrib.name);
    }
    this.program = program;
    this.ready = true;
    this.error = null;
    this.dispatchEvent("onload", this.program);
  }
};
export {
  ShaderLoader as default
};
