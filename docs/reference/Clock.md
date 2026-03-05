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

# ClockEvents (interface)

```ts
interface ClockEvents {
  onstart: Clock;
  onupdate: Clock;
  onstop: Clock;
}
```

## ClockEvents.onstart (Clock property)

```ts
onstart: Clock;
```

## ClockEvents.onupdate (Clock property)

```ts
onupdate: Clock;
```

## ClockEvents.onstop (Clock property)

```ts
onstop: Clock;
```

# Clock (class)

```ts
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
```

## Clock.prototype.animationId (property)

```ts
private animationId;
```

## Clock.prototype.startTime (number property)

```ts
startTime: number;
```

## Clock.prototype.fps (number property)

```ts
fps: number;
```

## Clock.prototype.deltaTime (number property)

```ts
deltaTime: number;
```

## Clock (constructor)

```ts
constructor();
```

## Clock.prototype.start (method)

```ts
start(): number;
```

## Clock.prototype.stop (method)

```ts
stop(): number;
```

## Clock.prototype.update (method)

```ts
update(time: number): void;
```

# Clock (exported binding)

```ts
export { Clock };
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

# ClockEvents (interface)

```ts
interface ClockEvents {
  onstart: Clock;
  onupdate: Clock;
  onstop: Clock;
}
```

## ClockEvents.onstart (Clock property)

```ts
onstart: Clock;
```

## ClockEvents.onupdate (Clock property)

```ts
onupdate: Clock;
```

## ClockEvents.onstop (Clock property)

```ts
onstop: Clock;
```

# Clock (class)

```ts
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
```

## Clock.prototype.animationId (property)

```ts
private animationId;
```

## Clock.prototype.startTime (number property)

```ts
startTime: number;
```

## Clock.prototype.fps (number property)

```ts
fps: number;
```

## Clock.prototype.deltaTime (number property)

```ts
deltaTime: number;
```

## Clock (constructor)

```ts
constructor();
```

## Clock.prototype.start (method)

```ts
start(): number;
```

## Clock.prototype.stop (method)

```ts
stop(): number;
```

## Clock.prototype.update (method)

```ts
update(time: number): void;
```

# Clock (exported binding)

```ts
export { Clock };
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

# ClockEvents (interface)

```ts
interface ClockEvents {
  onstart: Clock;
  onupdate: Clock;
  onstop: Clock;
}
```

## ClockEvents.onstart (Clock property)

```ts
onstart: Clock;
```

## ClockEvents.onupdate (Clock property)

```ts
onupdate: Clock;
```

## ClockEvents.onstop (Clock property)

```ts
onstop: Clock;
```

# Clock (class)

```ts
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
```

## Clock.prototype.animationId (property)

```ts
private animationId;
```

## Clock.prototype.startTime (number property)

```ts
startTime: number;
```

## Clock.prototype.fps (number property)

```ts
fps: number;
```

## Clock.prototype.deltaTime (number property)

```ts
deltaTime: number;
```

## Clock (constructor)

```ts
constructor();
```

## Clock.prototype.start (method)

```ts
start(): number;
```

## Clock.prototype.stop (method)

```ts
stop(): number;
```

## Clock.prototype.update (method)

```ts
update(time: number): void;
```

# Clock (exported binding)

```ts
export { Clock };
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

# ClockEvents (interface)

```ts
interface ClockEvents {
  onstart: Clock;
  onupdate: Clock;
  onstop: Clock;
}
```

## ClockEvents.onstart (Clock property)

```ts
onstart: Clock;
```

## ClockEvents.onupdate (Clock property)

```ts
onupdate: Clock;
```

## ClockEvents.onstop (Clock property)

```ts
onstop: Clock;
```

# Clock (class)

```ts
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
```

## Clock.prototype.animationId (property)

```ts
private animationId;
```

## Clock.prototype.startTime (number property)

```ts
startTime: number;
```

## Clock.prototype.fps (number property)

```ts
fps: number;
```

## Clock.prototype.deltaTime (number property)

```ts
deltaTime: number;
```

## Clock (constructor)

```ts
constructor();
```

## Clock.prototype.start (method)

```ts
start(): number;
```

## Clock.prototype.stop (method)

```ts
stop(): number;
```

## Clock.prototype.update (method)

```ts
update(time: number): void;
```

# Clock (exported binding)

```ts
export { Clock };
```
