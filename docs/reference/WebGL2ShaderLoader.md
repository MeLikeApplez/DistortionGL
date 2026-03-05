# Events (class)

```ts
declare class Events<T extends Record<string, any>> {
  private _listeners;
  constructor(eventNames?: Array<keyof T>);
  dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
  addEventListener<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void;
}
```

## Events.prototype.\_listeners (property)

```ts
private _listeners;
```

## Events (constructor)

```ts
constructor(eventNames?: Array<keyof T>);
```

## Events.prototype.dispatchEvent (method)

- `@description` _Dispatches_ — data to all event listeners

```ts
dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
```

## Events.prototype.addEventListener (method)

- `@description` _Adds_ — a function to listen to events

```ts
addEventListener<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): void;
```

# LoaderEvents (interface)

```ts
interface LoaderEvents<L, E> {
  onload: L;
  onerror: E;
}
```

## LoaderEvents.onload (L property)

```ts
onload: L;
```

## LoaderEvents.onerror (E property)

```ts
onerror: E;
```

# Loader (class)

```ts
declare abstract class Loader<L, E> extends Events<LoaderEvents<L, E>> {
  ready: boolean;
  constructor();
  abstract load(...any: any): this;
}
```

## Loader.prototype.ready (boolean property)

```ts
ready: boolean;
```

## Loader (constructor)

```ts
constructor();
```

## Loader.prototype.load (method)

```ts
abstract load(...any: any): this;
```

# ShaderOptions (interface)

```ts
interface ShaderOptions {
  name?: string;
  vertexShader: string;
  fragmentShader: string;
}
```

## ShaderOptions.name (string property)

```ts
name?: string;
```

## ShaderOptions.vertexShader (string property)

```ts
vertexShader: string;
```

## ShaderOptions.fragmentShader (string property)

```ts
fragmentShader: string;
```

# WebGL2ShaderLoader (class)

```ts
declare class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
  name: string;
  vertexShader: string;
  fragmentShader: string;
  gl: WebGL2RenderingContext | null;
  program: WebGLProgram | null;
  constructor(option: ShaderOptions);
  getUniform(name: string): WebGLUniformLocation;
  getAttribute(name: string): number;
  load(
    gl: WebGL2RenderingContext,
    onload?: (program: WebGLProgram) => void,
    onerror?: (error: Error) => void,
  ): this;
}
```

## WebGL2ShaderLoader.prototype.name (string property)

```ts
name: string;
```

## WebGL2ShaderLoader.prototype.vertexShader (string property)

```ts
vertexShader: string;
```

## WebGL2ShaderLoader.prototype.fragmentShader (string property)

```ts
fragmentShader: string;
```

## WebGL2ShaderLoader.prototype.gl (property)

```ts
gl: WebGL2RenderingContext | null;
```

## WebGL2ShaderLoader.prototype.program (property)

```ts
program: WebGLProgram | null;
```

## WebGL2ShaderLoader (constructor)

```ts
constructor(option: ShaderOptions);
```

## WebGL2ShaderLoader.prototype.getUniform (method)

```ts
getUniform(name: string): WebGLUniformLocation;
```

## WebGL2ShaderLoader.prototype.getAttribute (method)

```ts
getAttribute(name: string): number;
```

## WebGL2ShaderLoader.prototype.load (method)

```ts
load(gl: WebGL2RenderingContext, onload?: (program: WebGLProgram) => void, onerror?: (error: Error) => void): this;
```

# WebGL2ShaderLoader (exported binding)

```ts
export { WebGL2ShaderLoader };
```
# Events (class)

```ts
declare class Events<T extends Record<string, any>> {
  private _listeners;
  constructor(eventNames?: Array<keyof T>);
  dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
  addEventListener<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void;
}
```

## Events.prototype.\_listeners (property)

```ts
private _listeners;
```

## Events (constructor)

```ts
constructor(eventNames?: Array<keyof T>);
```

## Events.prototype.dispatchEvent (method)

- `@description` _Dispatches_ — data to all event listeners

```ts
dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
```

## Events.prototype.addEventListener (method)

- `@description` _Adds_ — a function to listen to events

```ts
addEventListener<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): void;
```

# LoaderEvents (interface)

```ts
interface LoaderEvents<L, E> {
  onload: L;
  onerror: E;
}
```

## LoaderEvents.onload (L property)

```ts
onload: L;
```

## LoaderEvents.onerror (E property)

```ts
onerror: E;
```

# Loader (class)

```ts
declare abstract class Loader<L, E> extends Events<LoaderEvents<L, E>> {
  ready: boolean;
  constructor();
  abstract load(...any: any): this;
}
```

## Loader.prototype.ready (boolean property)

```ts
ready: boolean;
```

## Loader (constructor)

```ts
constructor();
```

## Loader.prototype.load (method)

```ts
abstract load(...any: any): this;
```

# ShaderOptions (interface)

```ts
interface ShaderOptions {
  name?: string;
  vertexShader: string;
  fragmentShader: string;
}
```

## ShaderOptions.name (string property)

```ts
name?: string;
```

## ShaderOptions.vertexShader (string property)

```ts
vertexShader: string;
```

## ShaderOptions.fragmentShader (string property)

```ts
fragmentShader: string;
```

# WebGL2ShaderLoader (class)

```ts
declare class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
  name: string;
  vertexShader: string;
  fragmentShader: string;
  gl: WebGL2RenderingContext | null;
  program: WebGLProgram | null;
  constructor(option: ShaderOptions);
  getUniform(name: string): WebGLUniformLocation;
  getAttribute(name: string): number;
  load(
    gl: WebGL2RenderingContext,
    onload?: (program: WebGLProgram) => void,
    onerror?: (error: Error) => void,
  ): this;
}
```

## WebGL2ShaderLoader.prototype.name (string property)

```ts
name: string;
```

## WebGL2ShaderLoader.prototype.vertexShader (string property)

```ts
vertexShader: string;
```

## WebGL2ShaderLoader.prototype.fragmentShader (string property)

```ts
fragmentShader: string;
```

## WebGL2ShaderLoader.prototype.gl (property)

```ts
gl: WebGL2RenderingContext | null;
```

## WebGL2ShaderLoader.prototype.program (property)

```ts
program: WebGLProgram | null;
```

## WebGL2ShaderLoader (constructor)

```ts
constructor(option: ShaderOptions);
```

## WebGL2ShaderLoader.prototype.getUniform (method)

```ts
getUniform(name: string): WebGLUniformLocation;
```

## WebGL2ShaderLoader.prototype.getAttribute (method)

```ts
getAttribute(name: string): number;
```

## WebGL2ShaderLoader.prototype.load (method)

```ts
load(gl: WebGL2RenderingContext, onload?: (program: WebGLProgram) => void, onerror?: (error: Error) => void): this;
```

# WebGL2ShaderLoader (exported binding)

```ts
export { WebGL2ShaderLoader };
```
# Events (class)

```ts
declare class Events<T extends Record<string, any>> {
  private _listeners;
  constructor(eventNames?: Array<keyof T>);
  dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
  addEventListener<K extends keyof T>(
    eventName: K,
    callback: (data: T[K]) => void,
  ): void;
}
```

## Events.prototype.\_listeners (property)

```ts
private _listeners;
```

## Events (constructor)

```ts
constructor(eventNames?: Array<keyof T>);
```

## Events.prototype.dispatchEvent (method)

- `@description` _Dispatches_ — data to all event listeners

```ts
dispatchEvent<K extends keyof T>(eventName: K, data: T[K]): boolean;
```

## Events.prototype.addEventListener (method)

- `@description` _Adds_ — a function to listen to events

```ts
addEventListener<K extends keyof T>(eventName: K, callback: (data: T[K]) => void): void;
```

# LoaderEvents (interface)

```ts
interface LoaderEvents<L, E> {
  onload: L;
  onerror: E;
}
```

## LoaderEvents.onload (L property)

```ts
onload: L;
```

## LoaderEvents.onerror (E property)

```ts
onerror: E;
```

# Loader (class)

```ts
declare abstract class Loader<L, E> extends Events<LoaderEvents<L, E>> {
  ready: boolean;
  constructor();
  abstract load(...any: any): this;
}
```

## Loader.prototype.ready (boolean property)

```ts
ready: boolean;
```

## Loader (constructor)

```ts
constructor();
```

## Loader.prototype.load (method)

```ts
abstract load(...any: any): this;
```

# ShaderOptions (interface)

```ts
interface ShaderOptions {
  name?: string;
  vertexShader: string;
  fragmentShader: string;
}
```

## ShaderOptions.name (string property)

```ts
name?: string;
```

## ShaderOptions.vertexShader (string property)

```ts
vertexShader: string;
```

## ShaderOptions.fragmentShader (string property)

```ts
fragmentShader: string;
```

# WebGL2ShaderLoader (class)

```ts
declare class WebGL2ShaderLoader extends Loader<WebGLProgram, Error> {
  name: string;
  vertexShader: string;
  fragmentShader: string;
  gl: WebGL2RenderingContext | null;
  program: WebGLProgram | null;
  constructor(option: ShaderOptions);
  getUniform(name: string): WebGLUniformLocation;
  getAttribute(name: string): number;
  load(
    gl: WebGL2RenderingContext,
    onload?: (program: WebGLProgram) => void,
    onerror?: (error: Error) => void,
  ): this;
}
```

## WebGL2ShaderLoader.prototype.name (string property)

```ts
name: string;
```

## WebGL2ShaderLoader.prototype.vertexShader (string property)

```ts
vertexShader: string;
```

## WebGL2ShaderLoader.prototype.fragmentShader (string property)

```ts
fragmentShader: string;
```

## WebGL2ShaderLoader.prototype.gl (property)

```ts
gl: WebGL2RenderingContext | null;
```

## WebGL2ShaderLoader.prototype.program (property)

```ts
program: WebGLProgram | null;
```

## WebGL2ShaderLoader (constructor)

```ts
constructor(option: ShaderOptions);
```

## WebGL2ShaderLoader.prototype.getUniform (method)

```ts
getUniform(name: string): WebGLUniformLocation;
```

## WebGL2ShaderLoader.prototype.getAttribute (method)

```ts
getAttribute(name: string): number;
```

## WebGL2ShaderLoader.prototype.load (method)

```ts
load(gl: WebGL2RenderingContext, onload?: (program: WebGLProgram) => void, onerror?: (error: Error) => void): this;
```

# WebGL2ShaderLoader (exported binding)

```ts
export { WebGL2ShaderLoader };
```
