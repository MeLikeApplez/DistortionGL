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

# Loader (exported binding)

```ts
export { Loader };
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

# Loader (exported binding)

```ts
export { Loader };
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

# Loader (exported binding)

```ts
export { Loader };
```
