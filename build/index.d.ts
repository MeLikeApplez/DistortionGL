type Promisified<TData, TError> = Promise<[TData, null] | [null, TError]>;
declare function Promisify<TData, TError>(promiseFunc: Promise<TData>, customError?: TError): Promisified<TData, TError>;

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
    multiplyMatrices(a: Matrix3, b: Matrix3): this;
    multiplyScalar(scale: number): this;
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
    setFromCylindricalCoordinates(rho: number, theta: number, phi: number): this;
    equals(vector: Vector3): boolean;
    toArray(): number[];
    fromArray(array: number[]): this;
    getComponent(index: number): number;
    length(): number;
    clone(): Vector3;
    copy(vector: Vector3): this;
}

declare class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(x?: number, y?: number, z?: number, w?: number);
    set(x: number, y: number, z: number, w: number): this;
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
    makeRotationFromEuler(euler: Euler): this;
    makeRotationFromQuaternion(quaternion: Quaternion): this;
    multiply(matrix: Matrix4): this;
    multiplyMatrices(a: Matrix4, b: Matrix4): this;
    multiplyScalar(scale: number): this;
    inverse(): this;
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
    clone(): Matrix4;
    copy(matrix: Matrix4): this;
}

declare class Euler {
    x: number;
    y: number;
    z: number;
    order: string;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number, order?: string): this;
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
    reorder(order: string): this;
    clone(): Euler;
    copy(euler: Euler): this;
}

declare const WebGL2RenderingSystem = "WebGL2";
declare const WebGPURenderingSystem = "WebGPU";

type RenderingSystem = typeof WebGL2RenderingSystem | typeof WebGPURenderingSystem;
declare class Renderer<TSystem extends RenderingSystem> {
    readonly system: TSystem;
    scene: Scene | null;
    canvasElement: HTMLCanvasElement;
    ready: boolean;
    constructor(system: TSystem, canvasElement: HTMLCanvasElement);
    setSize(width: number, height: number, devicePixelRatio?: number): void;
    render(scene: Scene, camera: Camera): void;
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

declare class Entity<TRenderer = Renderer<RenderingSystem>> {
    uuid: string;
    name: string;
    type: string;
    position: Vector2 | Vector3 | Vector4 | null;
    scale: Vector2 | Vector3 | Vector4 | null;
    rotation: Euler | null;
    quaternion: Quaternion | null;
    matrix: Matrix3 | Matrix4 | null;
    matrixAutoUpdate: boolean;
    matrixNeedsUpdate: boolean;
    autoUpdate: boolean;
    needsUpdate: boolean;
    constructor();
    dispose(renderer: TRenderer, ...any: any): void;
    update(renderer: TRenderer, ...any: any): void;
    render(renderer: TRenderer, ...any: any): void;
}

declare class Scene<TRenderer = Renderer<RenderingSystem>, TCamera = Camera> {
    children: Entity[];
    enabled: boolean;
    ready: boolean;
    constructor();
    add(entities: Entity[]): void;
    remove(entities: Entity[]): void;
    dispose(renderer: TRenderer, camera: TCamera, ...any: any): void;
    load(renderer: TRenderer, camera: TCamera, ...any: any): void;
    render(renderer: TRenderer, camera: TCamera, ...any: any): void;
}

declare class WebGL2Renderer extends Renderer<typeof WebGL2RenderingSystem> {
    gl: WebGL2RenderingContext;
    constructor(canvasElement: HTMLCanvasElement, glOptions?: WebGLContextAttributes);
    render(scene: Scene, camera: Camera): void;
}

interface WebGL2RenderUniforms {
    position: WebGLUniformLocation | null;
    projection: WebGLUniformLocation | null;
    rotation: WebGLUniformLocation | null;
}
interface WebGPURenderUniforms {
    position: null;
    projection: null;
    rotation: null;
}
declare class Camera {
    position: Vector3;
    rotation: Euler;
    projectionMatrix: Matrix4;
    rotationMatrix: Matrix4;
    target: Vector3;
    autoUpdate: boolean;
    needsUpdate: boolean;
    enabled: boolean;
    constructor();
    getWorldDirection(): Vector3;
    updateProjectionMatrix(): void;
    render(renderer: WebGL2Renderer | WebGPURenderer, uniforms: WebGL2RenderUniforms | WebGPURenderUniforms): void;
}

declare class WebGPURenderer extends Renderer<typeof WebGPURenderingSystem> {
    constructor(canvasElement: HTMLCanvasElement);
    render(scene: Scene, camera: Camera): void;
}

declare class Events<T extends Record<string, any>> {
    private _listeners;
    constructor(eventNames?: Array<keyof T>);
    dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
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

declare function randomInt(min: number, max: number): number;
declare function randomFloat(min: number, max: number): number;
declare function clamp(min: number, value: number, max: number): number;
declare function lerp(a: number, b: number, t: number): number;
declare function generateUUID(): string;
declare function extendArray(array: ArrayLike<number>, size: number): ArrayLike<number>;

declare class Color extends Array {
    constructor(r: number, g: number, b: number, a?: number);
    get r(): number;
    get g(): number;
    get b(): number;
    get a(): number;
    set r(value: number);
    set g(value: number);
    set b(value: number);
    set a(value: number);
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
    lerp(color: Color, alpha: number): this;
    clone(): Color;
    copy(color: Color): this;
}

interface LoaderEvents<L, E> {
    onload: L;
    onerror: E;
}
declare class Loader<L, E> extends Events<LoaderEvents<L, E>> {
    ready: boolean;
    constructor();
    load(...any: any): void;
}

interface BaseShaderOptions {
    name?: string;
    vertexShader: string;
    fragmentShader: string;
}
interface URLOption$1 extends BaseShaderOptions {
    type: 'url';
}
interface SourceCodeOption$1 extends BaseShaderOptions {
    type: 'source-code';
}
declare class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
    type: URLOption$1['type'] | SourceCodeOption$1['type'];
    name: string;
    vertexShader: string;
    fragmentShader: string;
    gl: WebGL2RenderingContext | null;
    program: WebGLProgram | null;
    constructor(option: URLOption$1 | SourceCodeOption$1);
    getUniform(name: string): WebGLUniformLocation;
    getAttribute(name: string): number;
    load(gl: WebGL2RenderingContext): Promise<void>;
}

interface URLOption<TU extends string[], TA extends string[]> {
    type: 'url';
    name?: string;
    vertexShader: string;
    fragmentShader: string;
    uniforms?: TU;
    attributes?: TA;
}
interface SourceCodeOption<TU extends string[], TA extends string[]> {
    type: 'source-code';
    name?: string;
    vertexShader: string;
    fragmentShader: string;
    uniforms?: TU;
    attributes?: TA;
}
type Uniform<K extends string> = Record<K, WebGLUniformLocation | null>;
type Attribute<K extends string> = Record<K, number>;
declare class ShaderLoader<const TU extends string[], const TA extends string[]> extends Loader<WebGLProgram, Error> {
    name: string;
    vertexCode: string | null;
    fragmentCode: string | null;
    program: WebGLProgram | null;
    uniforms: Uniform<TU[number]>;
    attributes: Attribute<TA[number]>;
    preloaded: boolean;
    ready: boolean;
    error: Error | null;
    constructor(options: URLOption<TU, TA> | SourceCodeOption<TU, TA>);
    static loadAll(gl: WebGL2RenderingContext, shaders: Array<ShaderLoader<any, any>>, recompile?: boolean): void;
    _setSourceCodeFromURL(vertexSrc: string, fragmentSrc: string): Promise<any>;
    _setUniformsAndAttributes(options: URLOption<TU, TA> | SourceCodeOption<TU, TA>): void;
    load(gl: WebGL2RenderingContext, recompile?: boolean): any;
}

declare class ImageLoader extends Loader<HTMLImageElement, string | Event> {
    img: HTMLImageElement;
    constructor();
    load(src: string, onload: (img: HTMLImageElement) => void, onerror: (error: string | Event) => void): void;
}

interface PointerEvents {
    onpointerdown: Pointer;
    onpointermove: Pointer;
    onpointerup: Pointer;
    onmousescroll: Pointer;
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
    constructor(element: HTMLElement | null, devicePixelRatio?: number);
    dispose(): boolean;
    load(element: HTMLElement): boolean;
}

declare class OrthographicCamera extends Camera {
    left: number;
    right: number;
    top: number;
    bottom: number;
    aspect: number;
    near: number;
    far: number;
    zoom: number;
    constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number);
    lookAt(target: Vector3, up?: Vector3): this;
    updateProjectionMatrix(reversedDepth?: boolean): this;
}

declare class PerspectiveCamera extends Camera {
    fov: number;
    aspect: number;
    near: number;
    far: number;
    constructor(fov: number, aspect: number, near: number, far: number);
    lookAt(target: Vector3, up?: Vector3): this;
    updateProjectionMatrix(): this;
}

type OrbitControlsCameras = PerspectiveCamera | OrthographicCamera;
declare class OrbitControls {
    element: HTMLElement | null;
    camera: OrbitControlsCameras;
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
    constructor(element: HTMLElement | null, camera: OrbitControlsCameras);
    dispose(): boolean;
    orbit(controller: Pointer): void;
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
    dispose(): boolean;
    hasKey(key: string): boolean;
    load(element: HTMLElement): boolean;
}

export { Camera, Clock, Color, Entity, Euler, Events, ImageLoader, Keyboard, Loader, Matrix3, Matrix4, OrbitControls, OrthographicCamera, PerspectiveCamera, Pointer, Promisify, Quaternion, Renderer, Scene, ShaderLoader, Vector2, Vector3, Vector4, WebGL2Renderer, WebGL2RenderingSystem, WebGL2ShaderLoader, WebGPURenderer, WebGPURenderingSystem, clamp, extendArray, generateUUID, lerp, randomFloat, randomInt };
export type { Promisified, RenderingSystem };
