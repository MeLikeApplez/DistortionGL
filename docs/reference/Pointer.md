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

# Vector2 (class)

```ts
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
```

## Vector2.prototype.x (number property)

```ts
x: number;
```

## Vector2.prototype.y (number property)

```ts
y: number;
```

## Vector2 (constructor)

```ts
constructor(x?: number, y?: number);
```

## Vector2.prototype.set (method)

```ts
set(x: number, y: number): this;
```

## Vector2.prototype.add (method)

```ts
add(vector: Vector2): this;
```

## Vector2.prototype.subtract (method)

```ts
subtract(vector: Vector2): this;
```

## Vector2.prototype.multiply (method)

```ts
multiply(vector: Vector2): this;
```

## Vector2.prototype.divide (method)

```ts
divide(vector: Vector2): this;
```

## Vector2.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector2.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector2.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector2.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector2.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector2): number;
```

## Vector2.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector2): number;
```

## Vector2.prototype.floor (method)

```ts
floor(): this;
```

## Vector2.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector2.prototype.round (method)

```ts
round(): this;
```

## Vector2.prototype.clamp (method)

```ts
clamp(min: Vector2, max: Vector2): this;
```

## Vector2.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector2.prototype.dot (method)

```ts
dot(vector: Vector2): number;
```

## Vector2.prototype.equals (method)

```ts
equals(vector: Vector2): boolean;
```

## Vector2.prototype.rotateAround (method)

@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Vector2.js#L828

```ts
rotateAround(center: Vector2, angle: number): this;
```

## Vector2.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector2.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector2.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector2.prototype.length (method)

```ts
length(): number;
```

## Vector2.prototype.clone (method)

```ts
clone(): Vector2;
```

## Vector2.prototype.copy (method)

```ts
copy(vector: Vector2): this;
```

# PointerEvents (interface)

```ts
interface PointerEvents {
  onpointerdown: Pointer;
  onpointermove: Pointer;
  onpointerup: Pointer;
  onmousescroll: Pointer;
}
```

## PointerEvents.onpointerdown (Pointer property)

```ts
onpointerdown: Pointer;
```

## PointerEvents.onpointermove (Pointer property)

```ts
onpointermove: Pointer;
```

## PointerEvents.onpointerup (Pointer property)

```ts
onpointerup: Pointer;
```

## PointerEvents.onmousescroll (Pointer property)

```ts
onmousescroll: Pointer;
```

# ClipSpaceOptions (type)

```ts
type ClipSpaceOptions =
  | "normalized-device-coordinates"
  | "normalized-dom"
  | "dom";
```

# PointerOptions (interface)

```ts
interface PointerOptions {
  devicePixelRatio?: number;
  clipSpace?: ClipSpaceOptions;
}
```

## PointerOptions.devicePixelRatio (number property)

```ts
devicePixelRatio?: number;
```

## PointerOptions.clipSpace (ClipSpaceOptions property)

```ts
clipSpace?: ClipSpaceOptions;
```

# Pointer (class)

```ts
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
  dispose(): boolean;
  load(element: HTMLElement): boolean;
}
```

## Pointer.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Pointer.prototype.position (Vector2 property)

```ts
position: Vector2;
```

## Pointer.prototype.down (Vector2 property)

```ts
down: Vector2;
```

## Pointer.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## Pointer.prototype.offset (Vector2 property)

```ts
offset: Vector2;
```

## Pointer.prototype.mouseScroll (number property)

```ts
mouseScroll: number;
```

## Pointer.prototype.isPointerDragging (boolean property)

```ts
isPointerDragging: boolean;
```

## Pointer.prototype.isPointerDown (boolean property)

```ts
isPointerDown: boolean;
```

## Pointer.prototype.isPointerUp (boolean property)

```ts
isPointerUp: boolean;
```

## Pointer.prototype.devicePixelRatio (number property)

```ts
devicePixelRatio: number;
```

## Pointer.prototype.clipSpace (ClipSpaceOptions property)

```ts
clipSpace: ClipSpaceOptions;
```

## Pointer (constructor)

```ts
constructor(element: HTMLElement | null, options?: PointerOptions);
```

## Pointer.prototype.\_setPosition (property)

```ts
private _setPosition;
```

## Pointer.prototype.dispose (method)

- `@description` _Destroys_ — pointer event listeners

```ts
dispose(): boolean;
```

## Pointer.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the pointer

```ts
load(element: HTMLElement): boolean;
```

# Pointer (exported binding)

```ts
export { Pointer };
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

# Vector2 (class)

```ts
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
```

## Vector2.prototype.x (number property)

```ts
x: number;
```

## Vector2.prototype.y (number property)

```ts
y: number;
```

## Vector2 (constructor)

```ts
constructor(x?: number, y?: number);
```

## Vector2.prototype.set (method)

```ts
set(x: number, y: number): this;
```

## Vector2.prototype.add (method)

```ts
add(vector: Vector2): this;
```

## Vector2.prototype.subtract (method)

```ts
subtract(vector: Vector2): this;
```

## Vector2.prototype.multiply (method)

```ts
multiply(vector: Vector2): this;
```

## Vector2.prototype.divide (method)

```ts
divide(vector: Vector2): this;
```

## Vector2.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector2.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector2.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector2.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector2.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector2): number;
```

## Vector2.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector2): number;
```

## Vector2.prototype.floor (method)

```ts
floor(): this;
```

## Vector2.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector2.prototype.round (method)

```ts
round(): this;
```

## Vector2.prototype.clamp (method)

```ts
clamp(min: Vector2, max: Vector2): this;
```

## Vector2.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector2.prototype.dot (method)

```ts
dot(vector: Vector2): number;
```

## Vector2.prototype.equals (method)

```ts
equals(vector: Vector2): boolean;
```

## Vector2.prototype.rotateAround (method)

@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Vector2.js#L828

```ts
rotateAround(center: Vector2, angle: number): this;
```

## Vector2.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector2.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector2.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector2.prototype.length (method)

```ts
length(): number;
```

## Vector2.prototype.clone (method)

```ts
clone(): Vector2;
```

## Vector2.prototype.copy (method)

```ts
copy(vector: Vector2): this;
```

# PointerEvents (interface)

```ts
interface PointerEvents {
  onpointerdown: Pointer;
  onpointermove: Pointer;
  onpointerup: Pointer;
  onmousescroll: Pointer;
}
```

## PointerEvents.onpointerdown (Pointer property)

```ts
onpointerdown: Pointer;
```

## PointerEvents.onpointermove (Pointer property)

```ts
onpointermove: Pointer;
```

## PointerEvents.onpointerup (Pointer property)

```ts
onpointerup: Pointer;
```

## PointerEvents.onmousescroll (Pointer property)

```ts
onmousescroll: Pointer;
```

# ClipSpaceOptions (type)

```ts
type ClipSpaceOptions =
  | "normalized-device-coordinates"
  | "normalized-dom"
  | "dom";
```

# PointerOptions (interface)

```ts
interface PointerOptions {
  devicePixelRatio?: number;
  clipSpace?: ClipSpaceOptions;
}
```

## PointerOptions.devicePixelRatio (number property)

```ts
devicePixelRatio?: number;
```

## PointerOptions.clipSpace (ClipSpaceOptions property)

```ts
clipSpace?: ClipSpaceOptions;
```

# Pointer (class)

```ts
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
  dispose(): boolean;
  load(element: HTMLElement): boolean;
}
```

## Pointer.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Pointer.prototype.position (Vector2 property)

```ts
position: Vector2;
```

## Pointer.prototype.down (Vector2 property)

```ts
down: Vector2;
```

## Pointer.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## Pointer.prototype.offset (Vector2 property)

```ts
offset: Vector2;
```

## Pointer.prototype.mouseScroll (number property)

```ts
mouseScroll: number;
```

## Pointer.prototype.isPointerDragging (boolean property)

```ts
isPointerDragging: boolean;
```

## Pointer.prototype.isPointerDown (boolean property)

```ts
isPointerDown: boolean;
```

## Pointer.prototype.isPointerUp (boolean property)

```ts
isPointerUp: boolean;
```

## Pointer.prototype.devicePixelRatio (number property)

```ts
devicePixelRatio: number;
```

## Pointer.prototype.clipSpace (ClipSpaceOptions property)

```ts
clipSpace: ClipSpaceOptions;
```

## Pointer (constructor)

```ts
constructor(element: HTMLElement | null, options?: PointerOptions);
```

## Pointer.prototype.\_setPosition (property)

```ts
private _setPosition;
```

## Pointer.prototype.dispose (method)

- `@description` _Destroys_ — pointer event listeners

```ts
dispose(): boolean;
```

## Pointer.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the pointer

```ts
load(element: HTMLElement): boolean;
```

# Pointer (exported binding)

```ts
export { Pointer };
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

# Vector2 (class)

```ts
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
```

## Vector2.prototype.x (number property)

```ts
x: number;
```

## Vector2.prototype.y (number property)

```ts
y: number;
```

## Vector2 (constructor)

```ts
constructor(x?: number, y?: number);
```

## Vector2.prototype.set (method)

```ts
set(x: number, y: number): this;
```

## Vector2.prototype.add (method)

```ts
add(vector: Vector2): this;
```

## Vector2.prototype.subtract (method)

```ts
subtract(vector: Vector2): this;
```

## Vector2.prototype.multiply (method)

```ts
multiply(vector: Vector2): this;
```

## Vector2.prototype.divide (method)

```ts
divide(vector: Vector2): this;
```

## Vector2.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector2.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector2.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector2.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector2.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector2): number;
```

## Vector2.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector2): number;
```

## Vector2.prototype.floor (method)

```ts
floor(): this;
```

## Vector2.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector2.prototype.round (method)

```ts
round(): this;
```

## Vector2.prototype.clamp (method)

```ts
clamp(min: Vector2, max: Vector2): this;
```

## Vector2.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector2.prototype.dot (method)

```ts
dot(vector: Vector2): number;
```

## Vector2.prototype.equals (method)

```ts
equals(vector: Vector2): boolean;
```

## Vector2.prototype.rotateAround (method)

@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Vector2.js#L828

```ts
rotateAround(center: Vector2, angle: number): this;
```

## Vector2.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector2.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector2.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector2.prototype.length (method)

```ts
length(): number;
```

## Vector2.prototype.clone (method)

```ts
clone(): Vector2;
```

## Vector2.prototype.copy (method)

```ts
copy(vector: Vector2): this;
```

# PointerEvents (interface)

```ts
interface PointerEvents {
  onpointerdown: Pointer;
  onpointermove: Pointer;
  onpointerup: Pointer;
  onmousescroll: Pointer;
}
```

## PointerEvents.onpointerdown (Pointer property)

```ts
onpointerdown: Pointer;
```

## PointerEvents.onpointermove (Pointer property)

```ts
onpointermove: Pointer;
```

## PointerEvents.onpointerup (Pointer property)

```ts
onpointerup: Pointer;
```

## PointerEvents.onmousescroll (Pointer property)

```ts
onmousescroll: Pointer;
```

# ClipSpaceOptions (type)

```ts
type ClipSpaceOptions =
  | "normalized-device-coordinates"
  | "normalized-dom"
  | "dom";
```

# PointerOptions (interface)

```ts
interface PointerOptions {
  devicePixelRatio?: number;
  clipSpace?: ClipSpaceOptions;
}
```

## PointerOptions.devicePixelRatio (number property)

```ts
devicePixelRatio?: number;
```

## PointerOptions.clipSpace (ClipSpaceOptions property)

```ts
clipSpace?: ClipSpaceOptions;
```

# Pointer (class)

```ts
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
  dispose(): boolean;
  load(element: HTMLElement): boolean;
}
```

## Pointer.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Pointer.prototype.position (Vector2 property)

```ts
position: Vector2;
```

## Pointer.prototype.down (Vector2 property)

```ts
down: Vector2;
```

## Pointer.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## Pointer.prototype.offset (Vector2 property)

```ts
offset: Vector2;
```

## Pointer.prototype.mouseScroll (number property)

```ts
mouseScroll: number;
```

## Pointer.prototype.isPointerDragging (boolean property)

```ts
isPointerDragging: boolean;
```

## Pointer.prototype.isPointerDown (boolean property)

```ts
isPointerDown: boolean;
```

## Pointer.prototype.isPointerUp (boolean property)

```ts
isPointerUp: boolean;
```

## Pointer.prototype.devicePixelRatio (number property)

```ts
devicePixelRatio: number;
```

## Pointer.prototype.clipSpace (ClipSpaceOptions property)

```ts
clipSpace: ClipSpaceOptions;
```

## Pointer (constructor)

```ts
constructor(element: HTMLElement | null, options?: PointerOptions);
```

## Pointer.prototype.\_setPosition (property)

```ts
private _setPosition;
```

## Pointer.prototype.dispose (method)

- `@description` _Destroys_ — pointer event listeners

```ts
dispose(): boolean;
```

## Pointer.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the pointer

```ts
load(element: HTMLElement): boolean;
```

# Pointer (exported binding)

```ts
export { Pointer };
```
