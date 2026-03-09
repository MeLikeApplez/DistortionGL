declare class Events<T extends Record<string, any>> {
    private _listeners;
    constructor(eventNames?: Array<keyof T>);
    /**
     * @description Dispatches data to all event listeners
     */
    dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
    /**
     * @description Adds a function to listen to events
     */
    addEventListener<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): void;
}

interface ClockEvents {
    onstart: Clock;
    onupdate: Clock;
    onstop: Clock;
}
declare class Clock extends Events<ClockEvents> {
    private animationId;
    startTime: number;
    fps: number;
    deltaTime: number;
    constructor();
    start(): number;
    stop(): number;
    update(time: number): void;
}

declare class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    set(x: number, y: number, z: number, w: number): this;
    /**
     * @link https://stackoverflow.com/a/50012073/13159492
     */
    setFromEuler(euler: Euler): this;
    setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
    identity(): this;
    normalize(): this;
    conjugate(): this;
    multiply(quaternion: Quaternion): this;
    clone(): Quaternion;
    copy(quaternion: Quaternion): this;
}

declare class Matrix4 extends Array {
    constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);
    set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): this;
    setFromMatrix4(matrix: Matrix4): this;
    identity(): this;
    makeTranslation(x: number, y: number, z: number): this;
    translate(x: number, y: number, z: number): this;
    makeScale(x: number, y: number, z: number): this;
    makeRotationX(theta: number): this;
    makeRotationY(theta: number): this;
    makeRotationZ(theta: number): this;
    /**
     * @link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix
     */
    makeRotationFromEuler(euler: Euler): this;
    makeRotationFromQuaternion(quaternion: Quaternion): this;
    multiply(matrix: Matrix4): this;
    /**
     * @link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542
     */
    multiplyMatrices(a: Matrix4, b: Matrix4): this;
    multiplyScalar(scale: number): this;
    /**
     * @link https://evanw.github.io/lightgl.js/docs/matrix.html
     */
    inverse(): this;
    /**
     * @link https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001
     */
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
    clone(): Matrix4;
    copy(matrix: Matrix4): this;
}

type LetterOrders = 'X' | 'Y' | 'Z';
type EulerOrder = `${LetterOrders}${LetterOrders}${LetterOrders}`;
declare class Euler {
    x: number;
    y: number;
    z: number;
    order: EulerOrder;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number, order?: EulerOrder): this;
    /**
     * @link https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles
     */
    setFromQuaternion(quaternion: Quaternion): this;
    getEulerByOrder(): {
        a: number;
        b: number;
        c: number;
    };
    getEulerByOrderTrig(): {
        s1: number;
        s2: number;
        s3: number;
        c1: number;
        c2: number;
        c3: number;
    };
    setFromRotationMatrix(matrix4: Matrix4): this;
    reorder(order: EulerOrder): this;
    clone(): Euler;
    copy(euler: Euler): this;
}

declare class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y: number): this;
    add(vector: Vector2): this;
    subtract(vector: Vector2): this;
    multiply(vector: Vector2): this;
    divide(vector: Vector2): this;
    addScalar(factor: number): this;
    subtractScalar(factor: number): this;
    multiplyScalar(factor: number): this;
    divideScalar(factor: number): this;
    distanceTo(vector: Vector2): number;
    distanceToSquared(vector: Vector2): number;
    floor(): this;
    ceil(): this;
    round(): this;
    clamp(min: Vector2, max: Vector2): this;
    normalize(): this;
    dot(vector: Vector2): number;
    equals(vector: Vector2): boolean;
    /**
     * @link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Vector2.js#L828
     */
    rotateAround(center: Vector2, angle: number): this;
    toArray(): number[];
    fromArray(array: number[]): this;
    getComponent(index: number): number;
    length(): number;
    clone(): Vector2;
    copy(vector: Vector2): this;
}

declare class Matrix3 extends Array {
    constructor(n11?: number, n12?: number, n13?: number, n21?: number, n22?: number, n23?: number, n31?: number, n32?: number, n33?: number);
    set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): this;
    setFromMatrix3(matrix: Matrix3): this;
    identity(): this;
    makeRotation(theta: number): this;
    makeTranslation(x: number, y: number): this;
    translate(x: number, y: number): this;
    makeScale(x: number, y: number): this;
    multiply(matrix: Matrix3): this;
    /**
     * @link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix3.js#L215
     */
    multiplyMatrices(a: Matrix3, b: Matrix3): this;
    multiplyScalar(scale: number): this;
    /**
     * @link https://stackoverflow.com/a/72596891/13159492
     */
    inverse(): this;
    compose(position: Vector2, theta: number, scale: Vector2): this;
    clone(): Matrix3;
    copy(matrix: Matrix3): this;
}

declare class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    static UP: Vector3;
    set(x: number, y: number, z: number): this;
    add(vector: Vector3): this;
    subtract(vector: Vector3): this;
    multiply(vector: Vector3): this;
    divide(vector: Vector3): this;
    addScalar(factor: number): this;
    subtractScalar(factor: number): this;
    multiplyScalar(factor: number): this;
    divideScalar(factor: number): this;
    distanceTo(vector: Vector3): number;
    distanceToSquared(vector: Vector3): number;
    floor(): this;
    ceil(): this;
    round(): this;
    clamp(min: Vector3, max: Vector3): this;
    normalize(): this;
    applyFromMatrix3(matrix: Matrix3): this;
    applyQuaternion(quaternion: Quaternion): this;
    applyEuler(euler: Euler): this;
    dot(vector: Vector3): number;
    cross(vector: Vector3): Vector3;
    /**
     * rho = distance from origin
     * theta = angle in x-y plane
     * phi = angle in z axis
     * @link https://mathworld.wolfram.com/SphericalCoordinates.html
     */
    setFromCylindricalCoordinates(rho: number, theta: number, phi: number): this;
    equals(vector: Vector3): boolean;
    toArray(): number[];
    fromArray(array: number[]): this;
    getComponent(index: number): number;
    length(): number;
    clone(): Vector3;
    copy(vector: Vector3): this;
}

declare abstract class Camera {
    position: Vector3;
    rotation: Euler;
    projectionMatrix: Matrix4;
    rotationMatrix: Matrix4;
    target: Vector3;
    autoUpdate: boolean;
    needsUpdate: boolean;
    enabled: boolean;
    constructor();
    /**
     * @description Gets the current camera forward facing direction in 3d space
     */
    getViewDirection(): Vector3;
    /**
     * @description Updates the projection matrix
     */
    abstract updateProjectionMatrix(): this;
}

declare class Renderer {
    canvasElement: HTMLCanvasElement;
    ready: boolean;
    constructor(canvasElement: HTMLCanvasElement);
    /**
     * @description
     */
    setSize(width: number, height: number, devicePixelRatio?: number): void;
    /**
     * @description
     */
    render(scene: Scene, camera: Camera, ...any: any): void;
}

declare class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    set(x: number, y: number, z: number, w: number): this;
    add(vector: Vector4): this;
    subtract(vector: Vector4): this;
    multiply(vector: Vector4): this;
    divide(vector: Vector4): this;
    addScalar(factor: number): this;
    subtractScalar(factor: number): this;
    multiplyScalar(factor: number): this;
    divideScalar(factor: number): this;
    distanceTo(vector: Vector4): number;
    distanceToSquared(vector: Vector4): number;
    floor(): this;
    ceil(): this;
    round(): this;
    clamp(min: Vector4, max: Vector4): this;
    normalize(): this;
    applyFromMatrix4(matrix: Matrix4): this;
    dot(vector: Vector4): number;
    equals(vector: Vector4): boolean;
    toArray(): number[];
    fromArray(array: number[]): this;
    getComponent(index: number): number;
    length(): number;
    clone(): Vector4;
    copy(vector: Vector4): this;
}

interface EntityOptions {
    name?: string;
    type?: string;
}
declare abstract class Entity<TRenderer = Renderer> {
    readonly uuid: string;
    readonly name: string;
    readonly type: string;
    position: Vector2 | Vector3 | Vector4 | null;
    scale: Vector2 | Vector3 | Vector4 | null;
    rotation: Euler | null;
    quaternion: Quaternion | null;
    matrix: Matrix3 | Matrix4 | null;
    visible: boolean;
    loaded: boolean;
    constructor(options?: EntityOptions);
    /**
     * @description Destroys any data/buffers for clean up .
     * @example
     * gl.deleteBuffer(vertexBuffer)
     * gl.deleteBuffer(transformBuffer)
     */
    abstract dispose(renderer: TRenderer, ...any: any): void;
    /**
     * @description Initializes entity data. Use it once to setup the entity.
     * @example
     * this._vertexData = gl.createBuffer()
     *
     * const transformData = new Float32Array([
     *      0, 0, 0,
     *      0, 0, 1,
     *      0, 1, 0
     *      0, 0, 1,
     *      0, 1, 1,
     *      0, 1, 0,
     * ])
     *
     * gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexData)
     * gl.bufferData(gl.ARRAY_BUFFER, this._vertexData, gl.STATIC_DRAW)
     *
     * this.loaded = true
     */
    abstract load(renderer: TRenderer, ...any: any): void;
    /**
     * @description Updates entity data. Use for scene updates only.
     * @example
     *
     * for(let i = 0; i < this.count; i++) {
     *      const transformDataIndex = rowSize * i
     *      const matrix = this.instanceMatrices[i]
     *
     *      transformData.set(matrix.elements, transformDataIndex)
     *      transformData.set(this.instanceColor[i], transformDataIndex + matrix.elements.length)
     * }
     *
     * gl.bindBuffer(gl.ARRAY_BUFFER, this._transformBuffer)
     * gl.bufferData(gl.ARRAY_BUFFER, transformData, gl.STATIC_DRAW)
     */
    abstract update(renderer: TRenderer, ...any: any): void;
    /**
     * @description Renders the entity. Use for scene renders.
     * @example
     * gl.bindBuffer(gl.ARRAY_BUFFER, transformBuffer)
     *
     * gl.enableVertexAttribArray(data)
     *
     * gl.drawArraysInstanced(gl.TRIANGLES, 0, verticesLength, instanceCount)
     */
    abstract render(renderer: TRenderer, ...any: any): void;
}

declare abstract class Scene<TRenderer = Renderer, TCamera = Camera> {
    entities: Entity[];
    enabled: boolean;
    loaded: boolean;
    ready: boolean;
    constructor();
    /**
     * @description
     */
    add(...entities: Entity[]): void;
    /**
     * @description
     */
    remove(...entities: Entity[]): void;
    /**
     * @description Iterates and destroys all entities
     * @example
     * for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     *
     *      entity.dispose(renderer)
     * }
     */
    abstract dispose(renderer: TRenderer, camera: TCamera, ...any: any): void;
    /**
     * @description Initializes scene and entity data. Use it once to setup the scene.
     * @example
     * // Load other stuff here...
     *  for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     *
     *      entity.load(renderer)
     * }
     *
     * // "Set this.ready = true" to allow the render function to loop
     * this.ready = true
     */
    abstract load(renderer: TRenderer, camera: TCamera, ...any: any): void;
    /**
     * @description Renders entities per frame
     * @example
     * // Render other stuff here...
     *  for(let i = 0; i < this.entities.length; i++) {
     *      const entity = this.entities[i]
     *
     *      entity.render(renderer)
     * }
     */
    abstract render(renderer: TRenderer, camera: TCamera, ...any: any): void;
}

declare class OrthographicCamera extends Camera {
    position: Vector3;
    projectionMatrix: Matrix4;
    rotationMatrix: Matrix4;
    left: number;
    right: number;
    top: number;
    bottom: number;
    aspect: number;
    near: number;
    far: number;
    zoom: number;
    constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number);
    /**
     * @description Focuses the camera at the specified target
     */
    lookAt(target: Vector3, up?: Vector3): this;
    /**
     * @link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
     * @link https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169
     */
    updateProjectionMatrix(reversedDepth?: boolean): this;
}

type AvailableCameras$3 = OrthographicCamera;
interface Canvas2DRendererOptions extends CanvasRenderingContext2DSettings {
}
declare class Canvas2DRenderer extends Renderer {
    ctx: CanvasRenderingContext2D;
    constructor(canvasElement: HTMLCanvasElement, ctxOptions?: Canvas2DRendererOptions);
    render(scene: Scene, camera: AvailableCameras$3): void;
}

declare class PerspectiveCamera extends Camera {
    position: Vector3;
    projectionMatrix: Matrix4;
    rotationMatrix: Matrix4;
    fov: number;
    aspect: number;
    near: number;
    far: number;
    constructor(fov: number, aspect: number, near: number, far: number);
    /**
     * @description Focuses the camera at the specified target
     */
    lookAt(target: Vector3, up?: Vector3): this;
    /**
     * @link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix
     * @link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Matrix4.js#L1109
     */
    updateProjectionMatrix(reversedDepth?: boolean): this;
}

type AvailableCameras$2 = PerspectiveCamera | OrthographicCamera;
declare class WebGPURenderer extends Renderer {
    static getGPUDetails(canvas: HTMLCanvasElement): Promise<{
        adapter: any;
        device: any;
        context: RenderingContext;
        format: any;
    }>;
    constructor(canvasElement: HTMLCanvasElement);
    render(scene: Scene, camera: AvailableCameras$2): void;
}

type AvailableCameras$1 = PerspectiveCamera | OrthographicCamera;
declare class WebGL2Renderer extends Renderer {
    gl: WebGL2RenderingContext;
    constructor(canvasElement: HTMLCanvasElement, glOptions?: WebGLContextAttributes);
    render(scene: Scene, camera: AvailableCameras$1): void;
}

declare function randomInt(min: number, max: number): number;
declare function randomFloat(min: number, max: number): number;
declare function clamp(min: number, value: number, max: number): number;
declare function lerp(a: number, b: number, t: number): number;
declare function radToDeg(rad: number): number;
declare function degToRad(deg: number): number;
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
declare function generateUUID(): string;
declare function extendArray<T extends ArrayLike<any>>(array: T, size: number): T;
declare function bezierCurve4pt(a: number, b: number, c: number, d: number, t: number): number;

declare class Color extends Array {
    constructor(r: number, g: number, b: number, a?: number);
    set(r: number, g: number, b: number, a?: number): this;
    setFromArray(array: number[]): this;
    setFromVector3(vector: Vector3): this;
    setFromVector4(vector: Vector4): this;
    setRgb(r: number, g: number, b: number, a?: number): this;
    setHex(hex: number, alpha?: number): this;
    add(color: Color): this;
    subtract(color: Color): this;
    multiply(color: Color): this;
    divide(color: Color): this;
    addScalar(factor: number): this;
    subtractScalar(factor: number): this;
    multiplyScalar(factor: number): this;
    divideScalar(factor: number): this;
    normalize(): this;
    floor(): this;
    ceil(): this;
    round(): this;
    clamp(min: Vector4, max: Vector4): this;
    equals(color: Color): boolean;
    /**
     * @link https://github.com/mrdoob/three.js/blob/1939c35f2d92a4c870568da011aab54dabdfdd30/src/math/Color.js#L778
     */
    lerp(color: Color, alpha: number): this;
    clone(): Color;
    copy(color: Color): this;
}

interface LoaderEvents<L, E> {
    onload: L;
    onerror: E;
}
declare abstract class Loader<L, E> extends Events<LoaderEvents<L, E>> {
    ready: boolean;
    constructor();
    abstract load(...any: any): this;
}

interface ShaderOptions {
    name?: string;
    vertexShader: string;
    fragmentShader: string;
}
declare class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
    name: string;
    vertexShader: string;
    fragmentShader: string;
    gl: WebGL2RenderingContext | null;
    program: WebGLProgram | null;
    constructor(option: ShaderOptions);
    getUniform(name: string): WebGLUniformLocation;
    getAttribute(name: string): number;
    load(gl: WebGL2RenderingContext, onload?: (program: WebGLProgram) => void, onerror?: (error: Error) => void): this;
}

declare class ImageLoader extends Loader<HTMLImageElement, string | Event> {
    img: HTMLImageElement;
    constructor();
    load(src: string, onload?: (img: HTMLImageElement) => void, onerror?: (error: string | Event) => void): this;
}

interface PointerEvents {
    onpointerdown: Pointer;
    onpointermove: Pointer;
    onpointerup: Pointer;
    onmousescroll: Pointer;
}
type ClipSpaceOptions = 'normalized-device-coordinates' | 'normalized-dom' | 'dom';
interface PointerOptions {
    devicePixelRatio?: number;
    clipSpace?: ClipSpaceOptions;
}
declare class Pointer extends Events<PointerEvents> {
    element: HTMLElement | null;
    position: Vector2;
    down: Vector2;
    drag: Vector2;
    offset: Vector2;
    mouseScroll: number;
    isPointerDragging: boolean;
    isPointerDown: boolean;
    isPointerUp: boolean;
    devicePixelRatio: number;
    clipSpace: ClipSpaceOptions;
    constructor(element: HTMLElement | null, options?: PointerOptions);
    private _setPosition;
    /**
     * @description Destroys pointer event listeners
     */
    dispose(): boolean;
    /**
     * @description Attaches event listeners to an HTML Element and activates the pointer
     */
    load(element: HTMLElement): boolean;
}

type AvailableCameras = PerspectiveCamera | OrthographicCamera;
declare class OrbitControls {
    element: HTMLElement | null;
    camera: AvailableCameras;
    _initialRotatePosition: Vector2;
    rotatePosition: Vector2;
    _initialZoom: number;
    zoomDistance: number;
    drag: Vector2;
    rotateSpeed: number;
    panSpeed: number;
    zoomSpeed: number;
    minZoom: number;
    maxZoom: number;
    enableOrbit: boolean;
    enableZoom: boolean;
    constructor(element: HTMLElement | null, camera: AvailableCameras);
    /**
     * @description Destroys orbit control event listeners
     */
    dispose(): boolean;
    /**
     * @description Updates the cameras position on orbit. Must be updated every frame
     */
    orbit(controller: Pointer): void;
    /**
     * @description Updates the camera zoom in/out. Must be updated every frame
     */
    zoom(controller: Pointer): void;
}

interface KeyboardEvents {
    onkeydown: Keyboard;
    onkeyup: Keyboard;
}
declare class Keyboard extends Events<KeyboardEvents> {
    element: HTMLElement | null;
    keys: Set<string>;
    lowerCase: boolean;
    constructor(element: HTMLElement, lowerCase?: boolean);
    /**
     * @description Destroys keyboard event listeners
     */
    dispose(): boolean;
    /**
     * @description Checks if a key is being pressed down
     */
    hasKey(key: string): boolean;
    /**
     * @description Attaches event listeners to an HTML Element and activates the keyboard
     */
    load(element: HTMLElement): boolean;
}

export { Camera, Canvas2DRenderer, Clock, Color, Entity, Euler, Events, ImageLoader, Keyboard, Loader, Matrix3, Matrix4, OrbitControls, OrthographicCamera, PerspectiveCamera, Pointer, Quaternion, Renderer, Scene, Vector2, Vector3, Vector4, WebGL2Renderer, WebGL2ShaderLoader, WebGPURenderer, bezierCurve4pt, clamp, degToRad, extendArray, generateUUID, lerp, radToDeg, randomFloat, randomInt };
