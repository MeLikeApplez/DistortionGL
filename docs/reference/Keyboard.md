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

# KeyboardEvents (interface)

```ts
interface KeyboardEvents {
  onkeydown: Keyboard;
  onkeyup: Keyboard;
}
```

## KeyboardEvents.onkeydown (Keyboard property)

```ts
onkeydown: Keyboard;
```

## KeyboardEvents.onkeyup (Keyboard property)

```ts
onkeyup: Keyboard;
```

# Keyboard (class)

```ts
declare class Keyboard extends Events<KeyboardEvents> {
  element: HTMLElement | null;
  keys: Set<string>;
  lowerCase: boolean;
  constructor(element: HTMLElement, lowerCase?: boolean);
  dispose(): boolean;
  hasKey(key: string): boolean;
  load(element: HTMLElement): boolean;
}
```

## Keyboard.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Keyboard.prototype.keys (property)

```ts
keys: Set<string>;
```

## Keyboard.prototype.lowerCase (boolean property)

```ts
lowerCase: boolean;
```

## Keyboard (constructor)

```ts
constructor(element: HTMLElement, lowerCase?: boolean);
```

## Keyboard.prototype.dispose (method)

- `@description` _Destroys_ — keyboard event listeners

```ts
dispose(): boolean;
```

## Keyboard.prototype.hasKey (method)

- `@description` _Checks_ — if a key is being pressed down

```ts
hasKey(key: string): boolean;
```

## Keyboard.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the keyboard

```ts
load(element: HTMLElement): boolean;
```

# Keyboard (exported binding)

```ts
export { Keyboard };
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

# KeyboardEvents (interface)

```ts
interface KeyboardEvents {
  onkeydown: Keyboard;
  onkeyup: Keyboard;
}
```

## KeyboardEvents.onkeydown (Keyboard property)

```ts
onkeydown: Keyboard;
```

## KeyboardEvents.onkeyup (Keyboard property)

```ts
onkeyup: Keyboard;
```

# Keyboard (class)

```ts
declare class Keyboard extends Events<KeyboardEvents> {
  element: HTMLElement | null;
  keys: Set<string>;
  lowerCase: boolean;
  constructor(element: HTMLElement, lowerCase?: boolean);
  dispose(): boolean;
  hasKey(key: string): boolean;
  load(element: HTMLElement): boolean;
}
```

## Keyboard.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Keyboard.prototype.keys (property)

```ts
keys: Set<string>;
```

## Keyboard.prototype.lowerCase (boolean property)

```ts
lowerCase: boolean;
```

## Keyboard (constructor)

```ts
constructor(element: HTMLElement, lowerCase?: boolean);
```

## Keyboard.prototype.dispose (method)

- `@description` _Destroys_ — keyboard event listeners

```ts
dispose(): boolean;
```

## Keyboard.prototype.hasKey (method)

- `@description` _Checks_ — if a key is being pressed down

```ts
hasKey(key: string): boolean;
```

## Keyboard.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the keyboard

```ts
load(element: HTMLElement): boolean;
```

# Keyboard (exported binding)

```ts
export { Keyboard };
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

# KeyboardEvents (interface)

```ts
interface KeyboardEvents {
  onkeydown: Keyboard;
  onkeyup: Keyboard;
}
```

## KeyboardEvents.onkeydown (Keyboard property)

```ts
onkeydown: Keyboard;
```

## KeyboardEvents.onkeyup (Keyboard property)

```ts
onkeyup: Keyboard;
```

# Keyboard (class)

```ts
declare class Keyboard extends Events<KeyboardEvents> {
  element: HTMLElement | null;
  keys: Set<string>;
  lowerCase: boolean;
  constructor(element: HTMLElement, lowerCase?: boolean);
  dispose(): boolean;
  hasKey(key: string): boolean;
  load(element: HTMLElement): boolean;
}
```

## Keyboard.prototype.element (property)

```ts
element: HTMLElement | null;
```

## Keyboard.prototype.keys (property)

```ts
keys: Set<string>;
```

## Keyboard.prototype.lowerCase (boolean property)

```ts
lowerCase: boolean;
```

## Keyboard (constructor)

```ts
constructor(element: HTMLElement, lowerCase?: boolean);
```

## Keyboard.prototype.dispose (method)

- `@description` _Destroys_ — keyboard event listeners

```ts
dispose(): boolean;
```

## Keyboard.prototype.hasKey (method)

- `@description` _Checks_ — if a key is being pressed down

```ts
hasKey(key: string): boolean;
```

## Keyboard.prototype.load (method)

- `@description` _Attaches_ — event listeners to an HTML Element and activates the keyboard

```ts
load(element: HTMLElement): boolean;
```

# Keyboard (exported binding)

```ts
export { Keyboard };
```
