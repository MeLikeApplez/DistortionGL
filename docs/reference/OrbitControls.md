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

# Matrix3 (class)

```ts
declare class Matrix3 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n31?: number,
    n32?: number,
    n33?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n21: number,
    n22: number,
    n23: number,
    n31: number,
    n32: number,
    n33: number,
  ): this;
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
```

## Matrix3 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n21?: number, n22?: number, n23?: number, n31?: number, n32?: number, n33?: number);
```

## Matrix3.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): this;
```

## Matrix3.prototype.setFromMatrix3 (method)

```ts
setFromMatrix3(matrix: Matrix3): this;
```

## Matrix3.prototype.identity (method)

```ts
identity(): this;
```

## Matrix3.prototype.makeRotation (method)

```ts
makeRotation(theta: number): this;
```

## Matrix3.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number): this;
```

## Matrix3.prototype.translate (method)

```ts
translate(x: number, y: number): this;
```

## Matrix3.prototype.makeScale (method)

```ts
makeScale(x: number, y: number): this;
```

## Matrix3.prototype.multiply (method)

```ts
multiply(matrix: Matrix3): this;
```

## Matrix3.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix3.js#L215

```ts
multiplyMatrices(a: Matrix3, b: Matrix3): this;
```

## Matrix3.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix3.prototype.inverse (method)

@link https://stackoverflow.com/a/72596891/13159492

```ts
inverse(): this;
```

## Matrix3.prototype.compose (method)

```ts
compose(position: Vector2, theta: number, scale: Vector2): this;
```

## Matrix3.prototype.clone (method)

```ts
clone(): Matrix3;
```

## Matrix3.prototype.copy (method)

```ts
copy(matrix: Matrix3): this;
```

# Vector3 (class)

```ts
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
```

## Vector3.prototype.x (number property)

```ts
x: number;
```

## Vector3.prototype.y (number property)

```ts
y: number;
```

## Vector3.prototype.z (number property)

```ts
z: number;
```

## Vector3 (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Vector3.UP (static Vector3 property)

```ts
static UP: Vector3;
```

## Vector3.prototype.set (method)

```ts
set(x: number, y: number, z: number): this;
```

## Vector3.prototype.add (method)

```ts
add(vector: Vector3): this;
```

## Vector3.prototype.subtract (method)

```ts
subtract(vector: Vector3): this;
```

## Vector3.prototype.multiply (method)

```ts
multiply(vector: Vector3): this;
```

## Vector3.prototype.divide (method)

```ts
divide(vector: Vector3): this;
```

## Vector3.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector3.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector3.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector3.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector3.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector3): number;
```

## Vector3.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector3): number;
```

## Vector3.prototype.floor (method)

```ts
floor(): this;
```

## Vector3.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector3.prototype.round (method)

```ts
round(): this;
```

## Vector3.prototype.clamp (method)

```ts
clamp(min: Vector3, max: Vector3): this;
```

## Vector3.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector3.prototype.applyFromMatrix3 (method)

```ts
applyFromMatrix3(matrix: Matrix3): this;
```

## Vector3.prototype.applyQuaternion (method)

```ts
applyQuaternion(quaternion: Quaternion): this;
```

## Vector3.prototype.applyEuler (method)

```ts
applyEuler(euler: Euler): this;
```

## Vector3.prototype.dot (method)

```ts
dot(vector: Vector3): number;
```

## Vector3.prototype.cross (method)

```ts
cross(vector: Vector3): Vector3;
```

## Vector3.prototype.setFromCylindricalCoordinates (method)

rho = distance from origin
theta = angle in x-y plane
phi = angle in z axis
@link https://mathworld.wolfram.com/SphericalCoordinates.html

```ts
setFromCylindricalCoordinates(rho: number, theta: number, phi: number): this;
```

## Vector3.prototype.equals (method)

```ts
equals(vector: Vector3): boolean;
```

## Vector3.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector3.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector3.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector3.prototype.length (method)

```ts
length(): number;
```

## Vector3.prototype.clone (method)

```ts
clone(): Vector3;
```

## Vector3.prototype.copy (method)

```ts
copy(vector: Vector3): this;
```

# Quaternion (class)

```ts
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
```

## Quaternion.prototype.x (number property)

```ts
x: number;
```

## Quaternion.prototype.y (number property)

```ts
y: number;
```

## Quaternion.prototype.z (number property)

```ts
z: number;
```

## Quaternion.prototype.w (number property)

```ts
w: number;
```

## Quaternion (constructor)

```ts
constructor(x?: number, y?: number, z?: number, w?: number);
```

## Quaternion.prototype.set (method)

```ts
set(x: number, y: number, z: number, w: number): this;
```

## Quaternion.prototype.setFromEuler (method)

@link https://stackoverflow.com/a/50012073/13159492

```ts
setFromEuler(euler: Euler): this;
```

## Quaternion.prototype.setFromAxisAngle (method)

```ts
setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
```

## Quaternion.prototype.identity (method)

```ts
identity(): this;
```

## Quaternion.prototype.normalize (method)

```ts
normalize(): this;
```

## Quaternion.prototype.conjugate (method)

```ts
conjugate(): this;
```

## Quaternion.prototype.multiply (method)

```ts
multiply(quaternion: Quaternion): this;
```

## Quaternion.prototype.clone (method)

```ts
clone(): Quaternion;
```

## Quaternion.prototype.copy (method)

```ts
copy(quaternion: Quaternion): this;
```

# LetterOrders (type)

```ts
type LetterOrders = "X" | "Y" | "Z";
```

# EulerOrder (type)

```ts
type EulerOrder = `${LetterOrders}${LetterOrders}${LetterOrders}`;
```

# Euler (class)

```ts
declare class Euler {
  x: number;
  y: number;
  z: number;
  order: EulerOrder;
  constructor(x?: number, y?: number, z?: number);
  set(x: number, y: number, z: number, order?: EulerOrder): this;
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
```

## Euler.prototype.x (number property)

```ts
x: number;
```

## Euler.prototype.y (number property)

```ts
y: number;
```

## Euler.prototype.z (number property)

```ts
z: number;
```

## Euler.prototype.order (EulerOrder property)

```ts
order: EulerOrder;
```

## Euler (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Euler.prototype.set (method)

```ts
set(x: number, y: number, z: number, order?: EulerOrder): this;
```

## Euler.prototype.setFromQuaternion (method)

@link https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles

```ts
setFromQuaternion(quaternion: Quaternion): this;
```

## Euler.prototype.getEulerByOrder (method)

```ts
getEulerByOrder(): {
  a: number;
  b: number;
  c: number;
};
```

## Euler.prototype.getEulerByOrderTrig (method)

```ts
getEulerByOrderTrig(): {
  s1: number;
  s2: number;
  s3: number;
  c1: number;
  c2: number;
  c3: number;
};
```

## Euler.prototype.setFromRotationMatrix (method)

```ts
setFromRotationMatrix(matrix4: Matrix4): this;
```

## Euler.prototype.reorder (method)

```ts
reorder(order: EulerOrder): this;
```

## Euler.prototype.clone (method)

```ts
clone(): Euler;
```

## Euler.prototype.copy (method)

```ts
copy(euler: Euler): this;
```

# Matrix4 (class)

```ts
declare class Matrix4 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n14?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n24?: number,
    n31?: number,
    n32?: number,
    n33?: number,
    n34?: number,
    n41?: number,
    n42?: number,
    n43?: number,
    n44?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n14: number,
    n21: number,
    n22: number,
    n23: number,
    n24: number,
    n31: number,
    n32: number,
    n33: number,
    n34: number,
    n41: number,
    n42: number,
    n43: number,
    n44: number,
  ): this;
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
```

## Matrix4 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);
```

## Matrix4.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): this;
```

## Matrix4.prototype.setFromMatrix4 (method)

```ts
setFromMatrix4(matrix: Matrix4): this;
```

## Matrix4.prototype.identity (method)

```ts
identity(): this;
```

## Matrix4.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number, z: number): this;
```

## Matrix4.prototype.translate (method)

```ts
translate(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeScale (method)

```ts
makeScale(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeRotationX (method)

```ts
makeRotationX(theta: number): this;
```

## Matrix4.prototype.makeRotationY (method)

```ts
makeRotationY(theta: number): this;
```

## Matrix4.prototype.makeRotationZ (method)

```ts
makeRotationZ(theta: number): this;
```

## Matrix4.prototype.makeRotationFromEuler (method)

@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix

```ts
makeRotationFromEuler(euler: Euler): this;
```

## Matrix4.prototype.makeRotationFromQuaternion (method)

```ts
makeRotationFromQuaternion(quaternion: Quaternion): this;
```

## Matrix4.prototype.multiply (method)

```ts
multiply(matrix: Matrix4): this;
```

## Matrix4.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542

```ts
multiplyMatrices(a: Matrix4, b: Matrix4): this;
```

## Matrix4.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix4.prototype.inverse (method)

@link https://evanw.github.io/lightgl.js/docs/matrix.html

```ts
inverse(): this;
```

## Matrix4.prototype.compose (method)

@link https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001

```ts
compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
```

## Matrix4.prototype.clone (method)

```ts
clone(): Matrix4;
```

## Matrix4.prototype.copy (method)

```ts
copy(matrix: Matrix4): this;
```

# Camera (class)

```ts
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
  getViewDirection(): Vector3;
  abstract updateProjectionMatrix(): this;
}
```

## Camera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## Camera.prototype.rotation (Euler property)

```ts
rotation: Euler;
```

## Camera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## Camera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## Camera.prototype.target (Vector3 property)

```ts
target: Vector3;
```

## Camera.prototype.autoUpdate (boolean property)

```ts
autoUpdate: boolean;
```

## Camera.prototype.needsUpdate (boolean property)

```ts
needsUpdate: boolean;
```

## Camera.prototype.enabled (boolean property)

```ts
enabled: boolean;
```

## Camera (constructor)

```ts
constructor();
```

## Camera.prototype.getViewDirection (method)

- `@description` _Gets_ — the current camera forward facing direction in 3d space

```ts
getViewDirection(): Vector3;
```

## Camera.prototype.updateProjectionMatrix (method)

- `@description` _Updates_ — the projection matrix

```ts
abstract updateProjectionMatrix(): this;
```

# OrthographicCamera (class)

```ts
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
  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    aspect: number,
    near: number,
    far: number,
  );
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## OrthographicCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## OrthographicCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## OrthographicCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## OrthographicCamera.prototype.left (number property)

```ts
left: number;
```

## OrthographicCamera.prototype.right (number property)

```ts
right: number;
```

## OrthographicCamera.prototype.top (number property)

```ts
top: number;
```

## OrthographicCamera.prototype.bottom (number property)

```ts
bottom: number;
```

## OrthographicCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## OrthographicCamera.prototype.near (number property)

```ts
near: number;
```

## OrthographicCamera.prototype.far (number property)

```ts
far: number;
```

## OrthographicCamera.prototype.zoom (number property)

```ts
zoom: number;
```

## OrthographicCamera (constructor)

```ts
constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number);
```

## OrthographicCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## OrthographicCamera.prototype.updateProjectionMatrix (method)

@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
@link https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
```

# PerspectiveCamera (class)

```ts
declare class PerspectiveCamera extends Camera {
  position: Vector3;
  projectionMatrix: Matrix4;
  rotationMatrix: Matrix4;
  fov: number;
  aspect: number;
  near: number;
  far: number;
  constructor(fov: number, aspect: number, near: number, far: number);
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## PerspectiveCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## PerspectiveCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## PerspectiveCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## PerspectiveCamera.prototype.fov (number property)

```ts
fov: number;
```

## PerspectiveCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## PerspectiveCamera.prototype.near (number property)

```ts
near: number;
```

## PerspectiveCamera.prototype.far (number property)

```ts
far: number;
```

## PerspectiveCamera (constructor)

```ts
constructor(fov: number, aspect: number, near: number, far: number);
```

## PerspectiveCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## PerspectiveCamera.prototype.updateProjectionMatrix (method)

@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix
@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Matrix4.js#L1109

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
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

# AvailableCameras (type)

```ts
type AvailableCameras = PerspectiveCamera | OrthographicCamera;
```

# OrbitControls (class)

```ts
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
  dispose(): boolean;
  orbit(controller: Pointer): void;
  zoom(controller: Pointer): void;
}
```

## OrbitControls.prototype.element (property)

```ts
element: HTMLElement | null;
```

## OrbitControls.prototype.camera (AvailableCameras property)

```ts
camera: AvailableCameras;
```

## OrbitControls.prototype.\_initialRotatePosition (Vector2 property)

```ts
_initialRotatePosition: Vector2;
```

## OrbitControls.prototype.rotatePosition (Vector2 property)

```ts
rotatePosition: Vector2;
```

## OrbitControls.prototype.\_initialZoom (number property)

```ts
_initialZoom: number;
```

## OrbitControls.prototype.zoomDistance (number property)

```ts
zoomDistance: number;
```

## OrbitControls.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## OrbitControls.prototype.rotateSpeed (number property)

```ts
rotateSpeed: number;
```

## OrbitControls.prototype.panSpeed (number property)

```ts
panSpeed: number;
```

## OrbitControls.prototype.zoomSpeed (number property)

```ts
zoomSpeed: number;
```

## OrbitControls.prototype.minZoom (number property)

```ts
minZoom: number;
```

## OrbitControls.prototype.maxZoom (number property)

```ts
maxZoom: number;
```

## OrbitControls.prototype.enableOrbit (boolean property)

```ts
enableOrbit: boolean;
```

## OrbitControls.prototype.enableZoom (boolean property)

```ts
enableZoom: boolean;
```

## OrbitControls (constructor)

```ts
constructor(element: HTMLElement | null, camera: AvailableCameras);
```

## OrbitControls.prototype.dispose (method)

- `@description` _Destroys_ — orbit control event listeners

```ts
dispose(): boolean;
```

## OrbitControls.prototype.orbit (method)

- `@description` _Updates_ — the cameras position on orbit. Must be updated every frame

```ts
orbit(controller: Pointer): void;
```

## OrbitControls.prototype.zoom (method)

- `@description` _Updates_ — the camera zoom in/out. Must be updated every frame

```ts
zoom(controller: Pointer): void;
```

# OrbitControls (exported binding)

```ts
export { OrbitControls };
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

# Matrix3 (class)

```ts
declare class Matrix3 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n31?: number,
    n32?: number,
    n33?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n21: number,
    n22: number,
    n23: number,
    n31: number,
    n32: number,
    n33: number,
  ): this;
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
```

## Matrix3 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n21?: number, n22?: number, n23?: number, n31?: number, n32?: number, n33?: number);
```

## Matrix3.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): this;
```

## Matrix3.prototype.setFromMatrix3 (method)

```ts
setFromMatrix3(matrix: Matrix3): this;
```

## Matrix3.prototype.identity (method)

```ts
identity(): this;
```

## Matrix3.prototype.makeRotation (method)

```ts
makeRotation(theta: number): this;
```

## Matrix3.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number): this;
```

## Matrix3.prototype.translate (method)

```ts
translate(x: number, y: number): this;
```

## Matrix3.prototype.makeScale (method)

```ts
makeScale(x: number, y: number): this;
```

## Matrix3.prototype.multiply (method)

```ts
multiply(matrix: Matrix3): this;
```

## Matrix3.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix3.js#L215

```ts
multiplyMatrices(a: Matrix3, b: Matrix3): this;
```

## Matrix3.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix3.prototype.inverse (method)

@link https://stackoverflow.com/a/72596891/13159492

```ts
inverse(): this;
```

## Matrix3.prototype.compose (method)

```ts
compose(position: Vector2, theta: number, scale: Vector2): this;
```

## Matrix3.prototype.clone (method)

```ts
clone(): Matrix3;
```

## Matrix3.prototype.copy (method)

```ts
copy(matrix: Matrix3): this;
```

# Vector3 (class)

```ts
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
```

## Vector3.prototype.x (number property)

```ts
x: number;
```

## Vector3.prototype.y (number property)

```ts
y: number;
```

## Vector3.prototype.z (number property)

```ts
z: number;
```

## Vector3 (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Vector3.UP (static Vector3 property)

```ts
static UP: Vector3;
```

## Vector3.prototype.set (method)

```ts
set(x: number, y: number, z: number): this;
```

## Vector3.prototype.add (method)

```ts
add(vector: Vector3): this;
```

## Vector3.prototype.subtract (method)

```ts
subtract(vector: Vector3): this;
```

## Vector3.prototype.multiply (method)

```ts
multiply(vector: Vector3): this;
```

## Vector3.prototype.divide (method)

```ts
divide(vector: Vector3): this;
```

## Vector3.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector3.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector3.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector3.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector3.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector3): number;
```

## Vector3.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector3): number;
```

## Vector3.prototype.floor (method)

```ts
floor(): this;
```

## Vector3.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector3.prototype.round (method)

```ts
round(): this;
```

## Vector3.prototype.clamp (method)

```ts
clamp(min: Vector3, max: Vector3): this;
```

## Vector3.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector3.prototype.applyFromMatrix3 (method)

```ts
applyFromMatrix3(matrix: Matrix3): this;
```

## Vector3.prototype.applyQuaternion (method)

```ts
applyQuaternion(quaternion: Quaternion): this;
```

## Vector3.prototype.applyEuler (method)

```ts
applyEuler(euler: Euler): this;
```

## Vector3.prototype.dot (method)

```ts
dot(vector: Vector3): number;
```

## Vector3.prototype.cross (method)

```ts
cross(vector: Vector3): Vector3;
```

## Vector3.prototype.setFromCylindricalCoordinates (method)

rho = distance from origin
theta = angle in x-y plane
phi = angle in z axis
@link https://mathworld.wolfram.com/SphericalCoordinates.html

```ts
setFromCylindricalCoordinates(rho: number, theta: number, phi: number): this;
```

## Vector3.prototype.equals (method)

```ts
equals(vector: Vector3): boolean;
```

## Vector3.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector3.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector3.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector3.prototype.length (method)

```ts
length(): number;
```

## Vector3.prototype.clone (method)

```ts
clone(): Vector3;
```

## Vector3.prototype.copy (method)

```ts
copy(vector: Vector3): this;
```

# Quaternion (class)

```ts
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
```

## Quaternion.prototype.x (number property)

```ts
x: number;
```

## Quaternion.prototype.y (number property)

```ts
y: number;
```

## Quaternion.prototype.z (number property)

```ts
z: number;
```

## Quaternion.prototype.w (number property)

```ts
w: number;
```

## Quaternion (constructor)

```ts
constructor(x?: number, y?: number, z?: number, w?: number);
```

## Quaternion.prototype.set (method)

```ts
set(x: number, y: number, z: number, w: number): this;
```

## Quaternion.prototype.setFromEuler (method)

@link https://stackoverflow.com/a/50012073/13159492

```ts
setFromEuler(euler: Euler): this;
```

## Quaternion.prototype.setFromAxisAngle (method)

```ts
setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
```

## Quaternion.prototype.identity (method)

```ts
identity(): this;
```

## Quaternion.prototype.normalize (method)

```ts
normalize(): this;
```

## Quaternion.prototype.conjugate (method)

```ts
conjugate(): this;
```

## Quaternion.prototype.multiply (method)

```ts
multiply(quaternion: Quaternion): this;
```

## Quaternion.prototype.clone (method)

```ts
clone(): Quaternion;
```

## Quaternion.prototype.copy (method)

```ts
copy(quaternion: Quaternion): this;
```

# LetterOrders (type)

```ts
type LetterOrders = "X" | "Y" | "Z";
```

# EulerOrder (type)

```ts
type EulerOrder = `${LetterOrders}${LetterOrders}${LetterOrders}`;
```

# Euler (class)

```ts
declare class Euler {
  x: number;
  y: number;
  z: number;
  order: EulerOrder;
  constructor(x?: number, y?: number, z?: number);
  set(x: number, y: number, z: number, order?: EulerOrder): this;
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
```

## Euler.prototype.x (number property)

```ts
x: number;
```

## Euler.prototype.y (number property)

```ts
y: number;
```

## Euler.prototype.z (number property)

```ts
z: number;
```

## Euler.prototype.order (EulerOrder property)

```ts
order: EulerOrder;
```

## Euler (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Euler.prototype.set (method)

```ts
set(x: number, y: number, z: number, order?: EulerOrder): this;
```

## Euler.prototype.setFromQuaternion (method)

@link https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles

```ts
setFromQuaternion(quaternion: Quaternion): this;
```

## Euler.prototype.getEulerByOrder (method)

```ts
getEulerByOrder(): {
  a: number;
  b: number;
  c: number;
};
```

## Euler.prototype.getEulerByOrderTrig (method)

```ts
getEulerByOrderTrig(): {
  s1: number;
  s2: number;
  s3: number;
  c1: number;
  c2: number;
  c3: number;
};
```

## Euler.prototype.setFromRotationMatrix (method)

```ts
setFromRotationMatrix(matrix4: Matrix4): this;
```

## Euler.prototype.reorder (method)

```ts
reorder(order: EulerOrder): this;
```

## Euler.prototype.clone (method)

```ts
clone(): Euler;
```

## Euler.prototype.copy (method)

```ts
copy(euler: Euler): this;
```

# Matrix4 (class)

```ts
declare class Matrix4 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n14?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n24?: number,
    n31?: number,
    n32?: number,
    n33?: number,
    n34?: number,
    n41?: number,
    n42?: number,
    n43?: number,
    n44?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n14: number,
    n21: number,
    n22: number,
    n23: number,
    n24: number,
    n31: number,
    n32: number,
    n33: number,
    n34: number,
    n41: number,
    n42: number,
    n43: number,
    n44: number,
  ): this;
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
```

## Matrix4 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);
```

## Matrix4.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): this;
```

## Matrix4.prototype.setFromMatrix4 (method)

```ts
setFromMatrix4(matrix: Matrix4): this;
```

## Matrix4.prototype.identity (method)

```ts
identity(): this;
```

## Matrix4.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number, z: number): this;
```

## Matrix4.prototype.translate (method)

```ts
translate(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeScale (method)

```ts
makeScale(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeRotationX (method)

```ts
makeRotationX(theta: number): this;
```

## Matrix4.prototype.makeRotationY (method)

```ts
makeRotationY(theta: number): this;
```

## Matrix4.prototype.makeRotationZ (method)

```ts
makeRotationZ(theta: number): this;
```

## Matrix4.prototype.makeRotationFromEuler (method)

@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix

```ts
makeRotationFromEuler(euler: Euler): this;
```

## Matrix4.prototype.makeRotationFromQuaternion (method)

```ts
makeRotationFromQuaternion(quaternion: Quaternion): this;
```

## Matrix4.prototype.multiply (method)

```ts
multiply(matrix: Matrix4): this;
```

## Matrix4.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542

```ts
multiplyMatrices(a: Matrix4, b: Matrix4): this;
```

## Matrix4.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix4.prototype.inverse (method)

@link https://evanw.github.io/lightgl.js/docs/matrix.html

```ts
inverse(): this;
```

## Matrix4.prototype.compose (method)

@link https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001

```ts
compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
```

## Matrix4.prototype.clone (method)

```ts
clone(): Matrix4;
```

## Matrix4.prototype.copy (method)

```ts
copy(matrix: Matrix4): this;
```

# Camera (class)

```ts
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
  getViewDirection(): Vector3;
  abstract updateProjectionMatrix(): this;
}
```

## Camera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## Camera.prototype.rotation (Euler property)

```ts
rotation: Euler;
```

## Camera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## Camera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## Camera.prototype.target (Vector3 property)

```ts
target: Vector3;
```

## Camera.prototype.autoUpdate (boolean property)

```ts
autoUpdate: boolean;
```

## Camera.prototype.needsUpdate (boolean property)

```ts
needsUpdate: boolean;
```

## Camera.prototype.enabled (boolean property)

```ts
enabled: boolean;
```

## Camera (constructor)

```ts
constructor();
```

## Camera.prototype.getViewDirection (method)

- `@description` _Gets_ — the current camera forward facing direction in 3d space

```ts
getViewDirection(): Vector3;
```

## Camera.prototype.updateProjectionMatrix (method)

- `@description` _Updates_ — the projection matrix

```ts
abstract updateProjectionMatrix(): this;
```

# OrthographicCamera (class)

```ts
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
  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    aspect: number,
    near: number,
    far: number,
  );
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## OrthographicCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## OrthographicCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## OrthographicCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## OrthographicCamera.prototype.left (number property)

```ts
left: number;
```

## OrthographicCamera.prototype.right (number property)

```ts
right: number;
```

## OrthographicCamera.prototype.top (number property)

```ts
top: number;
```

## OrthographicCamera.prototype.bottom (number property)

```ts
bottom: number;
```

## OrthographicCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## OrthographicCamera.prototype.near (number property)

```ts
near: number;
```

## OrthographicCamera.prototype.far (number property)

```ts
far: number;
```

## OrthographicCamera.prototype.zoom (number property)

```ts
zoom: number;
```

## OrthographicCamera (constructor)

```ts
constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number);
```

## OrthographicCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## OrthographicCamera.prototype.updateProjectionMatrix (method)

@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
@link https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
```

# PerspectiveCamera (class)

```ts
declare class PerspectiveCamera extends Camera {
  position: Vector3;
  projectionMatrix: Matrix4;
  rotationMatrix: Matrix4;
  fov: number;
  aspect: number;
  near: number;
  far: number;
  constructor(fov: number, aspect: number, near: number, far: number);
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## PerspectiveCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## PerspectiveCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## PerspectiveCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## PerspectiveCamera.prototype.fov (number property)

```ts
fov: number;
```

## PerspectiveCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## PerspectiveCamera.prototype.near (number property)

```ts
near: number;
```

## PerspectiveCamera.prototype.far (number property)

```ts
far: number;
```

## PerspectiveCamera (constructor)

```ts
constructor(fov: number, aspect: number, near: number, far: number);
```

## PerspectiveCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## PerspectiveCamera.prototype.updateProjectionMatrix (method)

@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix
@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Matrix4.js#L1109

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
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

# AvailableCameras (type)

```ts
type AvailableCameras = PerspectiveCamera | OrthographicCamera;
```

# OrbitControls (class)

```ts
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
  dispose(): boolean;
  orbit(controller: Pointer): void;
  zoom(controller: Pointer): void;
}
```

## OrbitControls.prototype.element (property)

```ts
element: HTMLElement | null;
```

## OrbitControls.prototype.camera (AvailableCameras property)

```ts
camera: AvailableCameras;
```

## OrbitControls.prototype.\_initialRotatePosition (Vector2 property)

```ts
_initialRotatePosition: Vector2;
```

## OrbitControls.prototype.rotatePosition (Vector2 property)

```ts
rotatePosition: Vector2;
```

## OrbitControls.prototype.\_initialZoom (number property)

```ts
_initialZoom: number;
```

## OrbitControls.prototype.zoomDistance (number property)

```ts
zoomDistance: number;
```

## OrbitControls.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## OrbitControls.prototype.rotateSpeed (number property)

```ts
rotateSpeed: number;
```

## OrbitControls.prototype.panSpeed (number property)

```ts
panSpeed: number;
```

## OrbitControls.prototype.zoomSpeed (number property)

```ts
zoomSpeed: number;
```

## OrbitControls.prototype.minZoom (number property)

```ts
minZoom: number;
```

## OrbitControls.prototype.maxZoom (number property)

```ts
maxZoom: number;
```

## OrbitControls.prototype.enableOrbit (boolean property)

```ts
enableOrbit: boolean;
```

## OrbitControls.prototype.enableZoom (boolean property)

```ts
enableZoom: boolean;
```

## OrbitControls (constructor)

```ts
constructor(element: HTMLElement | null, camera: AvailableCameras);
```

## OrbitControls.prototype.dispose (method)

- `@description` _Destroys_ — orbit control event listeners

```ts
dispose(): boolean;
```

## OrbitControls.prototype.orbit (method)

- `@description` _Updates_ — the cameras position on orbit. Must be updated every frame

```ts
orbit(controller: Pointer): void;
```

## OrbitControls.prototype.zoom (method)

- `@description` _Updates_ — the camera zoom in/out. Must be updated every frame

```ts
zoom(controller: Pointer): void;
```

# OrbitControls (exported binding)

```ts
export { OrbitControls };
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

# Matrix3 (class)

```ts
declare class Matrix3 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n31?: number,
    n32?: number,
    n33?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n21: number,
    n22: number,
    n23: number,
    n31: number,
    n32: number,
    n33: number,
  ): this;
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
```

## Matrix3 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n21?: number, n22?: number, n23?: number, n31?: number, n32?: number, n33?: number);
```

## Matrix3.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number): this;
```

## Matrix3.prototype.setFromMatrix3 (method)

```ts
setFromMatrix3(matrix: Matrix3): this;
```

## Matrix3.prototype.identity (method)

```ts
identity(): this;
```

## Matrix3.prototype.makeRotation (method)

```ts
makeRotation(theta: number): this;
```

## Matrix3.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number): this;
```

## Matrix3.prototype.translate (method)

```ts
translate(x: number, y: number): this;
```

## Matrix3.prototype.makeScale (method)

```ts
makeScale(x: number, y: number): this;
```

## Matrix3.prototype.multiply (method)

```ts
multiply(matrix: Matrix3): this;
```

## Matrix3.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix3.js#L215

```ts
multiplyMatrices(a: Matrix3, b: Matrix3): this;
```

## Matrix3.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix3.prototype.inverse (method)

@link https://stackoverflow.com/a/72596891/13159492

```ts
inverse(): this;
```

## Matrix3.prototype.compose (method)

```ts
compose(position: Vector2, theta: number, scale: Vector2): this;
```

## Matrix3.prototype.clone (method)

```ts
clone(): Matrix3;
```

## Matrix3.prototype.copy (method)

```ts
copy(matrix: Matrix3): this;
```

# Vector3 (class)

```ts
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
```

## Vector3.prototype.x (number property)

```ts
x: number;
```

## Vector3.prototype.y (number property)

```ts
y: number;
```

## Vector3.prototype.z (number property)

```ts
z: number;
```

## Vector3 (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Vector3.UP (static Vector3 property)

```ts
static UP: Vector3;
```

## Vector3.prototype.set (method)

```ts
set(x: number, y: number, z: number): this;
```

## Vector3.prototype.add (method)

```ts
add(vector: Vector3): this;
```

## Vector3.prototype.subtract (method)

```ts
subtract(vector: Vector3): this;
```

## Vector3.prototype.multiply (method)

```ts
multiply(vector: Vector3): this;
```

## Vector3.prototype.divide (method)

```ts
divide(vector: Vector3): this;
```

## Vector3.prototype.addScalar (method)

```ts
addScalar(factor: number): this;
```

## Vector3.prototype.subtractScalar (method)

```ts
subtractScalar(factor: number): this;
```

## Vector3.prototype.multiplyScalar (method)

```ts
multiplyScalar(factor: number): this;
```

## Vector3.prototype.divideScalar (method)

```ts
divideScalar(factor: number): this;
```

## Vector3.prototype.distanceTo (method)

```ts
distanceTo(vector: Vector3): number;
```

## Vector3.prototype.distanceToSquared (method)

```ts
distanceToSquared(vector: Vector3): number;
```

## Vector3.prototype.floor (method)

```ts
floor(): this;
```

## Vector3.prototype.ceil (method)

```ts
ceil(): this;
```

## Vector3.prototype.round (method)

```ts
round(): this;
```

## Vector3.prototype.clamp (method)

```ts
clamp(min: Vector3, max: Vector3): this;
```

## Vector3.prototype.normalize (method)

```ts
normalize(): this;
```

## Vector3.prototype.applyFromMatrix3 (method)

```ts
applyFromMatrix3(matrix: Matrix3): this;
```

## Vector3.prototype.applyQuaternion (method)

```ts
applyQuaternion(quaternion: Quaternion): this;
```

## Vector3.prototype.applyEuler (method)

```ts
applyEuler(euler: Euler): this;
```

## Vector3.prototype.dot (method)

```ts
dot(vector: Vector3): number;
```

## Vector3.prototype.cross (method)

```ts
cross(vector: Vector3): Vector3;
```

## Vector3.prototype.setFromCylindricalCoordinates (method)

rho = distance from origin
theta = angle in x-y plane
phi = angle in z axis
@link https://mathworld.wolfram.com/SphericalCoordinates.html

```ts
setFromCylindricalCoordinates(rho: number, theta: number, phi: number): this;
```

## Vector3.prototype.equals (method)

```ts
equals(vector: Vector3): boolean;
```

## Vector3.prototype.toArray (method)

```ts
toArray(): number[];
```

## Vector3.prototype.fromArray (method)

```ts
fromArray(array: number[]): this;
```

## Vector3.prototype.getComponent (method)

```ts
getComponent(index: number): number;
```

## Vector3.prototype.length (method)

```ts
length(): number;
```

## Vector3.prototype.clone (method)

```ts
clone(): Vector3;
```

## Vector3.prototype.copy (method)

```ts
copy(vector: Vector3): this;
```

# Quaternion (class)

```ts
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
```

## Quaternion.prototype.x (number property)

```ts
x: number;
```

## Quaternion.prototype.y (number property)

```ts
y: number;
```

## Quaternion.prototype.z (number property)

```ts
z: number;
```

## Quaternion.prototype.w (number property)

```ts
w: number;
```

## Quaternion (constructor)

```ts
constructor(x?: number, y?: number, z?: number, w?: number);
```

## Quaternion.prototype.set (method)

```ts
set(x: number, y: number, z: number, w: number): this;
```

## Quaternion.prototype.setFromEuler (method)

@link https://stackoverflow.com/a/50012073/13159492

```ts
setFromEuler(euler: Euler): this;
```

## Quaternion.prototype.setFromAxisAngle (method)

```ts
setFromAxisAngle(axis: Vector3, angle: number): Quaternion;
```

## Quaternion.prototype.identity (method)

```ts
identity(): this;
```

## Quaternion.prototype.normalize (method)

```ts
normalize(): this;
```

## Quaternion.prototype.conjugate (method)

```ts
conjugate(): this;
```

## Quaternion.prototype.multiply (method)

```ts
multiply(quaternion: Quaternion): this;
```

## Quaternion.prototype.clone (method)

```ts
clone(): Quaternion;
```

## Quaternion.prototype.copy (method)

```ts
copy(quaternion: Quaternion): this;
```

# LetterOrders (type)

```ts
type LetterOrders = "X" | "Y" | "Z";
```

# EulerOrder (type)

```ts
type EulerOrder = `${LetterOrders}${LetterOrders}${LetterOrders}`;
```

# Euler (class)

```ts
declare class Euler {
  x: number;
  y: number;
  z: number;
  order: EulerOrder;
  constructor(x?: number, y?: number, z?: number);
  set(x: number, y: number, z: number, order?: EulerOrder): this;
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
```

## Euler.prototype.x (number property)

```ts
x: number;
```

## Euler.prototype.y (number property)

```ts
y: number;
```

## Euler.prototype.z (number property)

```ts
z: number;
```

## Euler.prototype.order (EulerOrder property)

```ts
order: EulerOrder;
```

## Euler (constructor)

```ts
constructor(x?: number, y?: number, z?: number);
```

## Euler.prototype.set (method)

```ts
set(x: number, y: number, z: number, order?: EulerOrder): this;
```

## Euler.prototype.setFromQuaternion (method)

@link https://en.wikipedia.org/wiki/Conversion_between_quaternions_and_Euler_angles

```ts
setFromQuaternion(quaternion: Quaternion): this;
```

## Euler.prototype.getEulerByOrder (method)

```ts
getEulerByOrder(): {
  a: number;
  b: number;
  c: number;
};
```

## Euler.prototype.getEulerByOrderTrig (method)

```ts
getEulerByOrderTrig(): {
  s1: number;
  s2: number;
  s3: number;
  c1: number;
  c2: number;
  c3: number;
};
```

## Euler.prototype.setFromRotationMatrix (method)

```ts
setFromRotationMatrix(matrix4: Matrix4): this;
```

## Euler.prototype.reorder (method)

```ts
reorder(order: EulerOrder): this;
```

## Euler.prototype.clone (method)

```ts
clone(): Euler;
```

## Euler.prototype.copy (method)

```ts
copy(euler: Euler): this;
```

# Matrix4 (class)

```ts
declare class Matrix4 extends Array {
  constructor(
    n11?: number,
    n12?: number,
    n13?: number,
    n14?: number,
    n21?: number,
    n22?: number,
    n23?: number,
    n24?: number,
    n31?: number,
    n32?: number,
    n33?: number,
    n34?: number,
    n41?: number,
    n42?: number,
    n43?: number,
    n44?: number,
  );
  set(
    n11: number,
    n12: number,
    n13: number,
    n14: number,
    n21: number,
    n22: number,
    n23: number,
    n24: number,
    n31: number,
    n32: number,
    n33: number,
    n34: number,
    n41: number,
    n42: number,
    n43: number,
    n44: number,
  ): this;
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
```

## Matrix4 (constructor)

```ts
constructor(n11?: number, n12?: number, n13?: number, n14?: number, n21?: number, n22?: number, n23?: number, n24?: number, n31?: number, n32?: number, n33?: number, n34?: number, n41?: number, n42?: number, n43?: number, n44?: number);
```

## Matrix4.prototype.set (method)

```ts
set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number): this;
```

## Matrix4.prototype.setFromMatrix4 (method)

```ts
setFromMatrix4(matrix: Matrix4): this;
```

## Matrix4.prototype.identity (method)

```ts
identity(): this;
```

## Matrix4.prototype.makeTranslation (method)

```ts
makeTranslation(x: number, y: number, z: number): this;
```

## Matrix4.prototype.translate (method)

```ts
translate(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeScale (method)

```ts
makeScale(x: number, y: number, z: number): this;
```

## Matrix4.prototype.makeRotationX (method)

```ts
makeRotationX(theta: number): this;
```

## Matrix4.prototype.makeRotationY (method)

```ts
makeRotationY(theta: number): this;
```

## Matrix4.prototype.makeRotationZ (method)

```ts
makeRotationZ(theta: number): this;
```

## Matrix4.prototype.makeRotationFromEuler (method)

@link https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix

```ts
makeRotationFromEuler(euler: Euler): this;
```

## Matrix4.prototype.makeRotationFromQuaternion (method)

```ts
makeRotationFromQuaternion(quaternion: Quaternion): this;
```

## Matrix4.prototype.multiply (method)

```ts
multiply(matrix: Matrix4): this;
```

## Matrix4.prototype.multiplyMatrices (method)

@link https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542

```ts
multiplyMatrices(a: Matrix4, b: Matrix4): this;
```

## Matrix4.prototype.multiplyScalar (method)

```ts
multiplyScalar(scale: number): this;
```

## Matrix4.prototype.inverse (method)

@link https://evanw.github.io/lightgl.js/docs/matrix.html

```ts
inverse(): this;
```

## Matrix4.prototype.compose (method)

@link https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001

```ts
compose(position: Vector3, quaternion: Quaternion, scale: Vector3): this;
```

## Matrix4.prototype.clone (method)

```ts
clone(): Matrix4;
```

## Matrix4.prototype.copy (method)

```ts
copy(matrix: Matrix4): this;
```

# Camera (class)

```ts
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
  getViewDirection(): Vector3;
  abstract updateProjectionMatrix(): this;
}
```

## Camera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## Camera.prototype.rotation (Euler property)

```ts
rotation: Euler;
```

## Camera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## Camera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## Camera.prototype.target (Vector3 property)

```ts
target: Vector3;
```

## Camera.prototype.autoUpdate (boolean property)

```ts
autoUpdate: boolean;
```

## Camera.prototype.needsUpdate (boolean property)

```ts
needsUpdate: boolean;
```

## Camera.prototype.enabled (boolean property)

```ts
enabled: boolean;
```

## Camera (constructor)

```ts
constructor();
```

## Camera.prototype.getViewDirection (method)

- `@description` _Gets_ — the current camera forward facing direction in 3d space

```ts
getViewDirection(): Vector3;
```

## Camera.prototype.updateProjectionMatrix (method)

- `@description` _Updates_ — the projection matrix

```ts
abstract updateProjectionMatrix(): this;
```

# OrthographicCamera (class)

```ts
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
  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    aspect: number,
    near: number,
    far: number,
  );
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## OrthographicCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## OrthographicCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## OrthographicCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## OrthographicCamera.prototype.left (number property)

```ts
left: number;
```

## OrthographicCamera.prototype.right (number property)

```ts
right: number;
```

## OrthographicCamera.prototype.top (number property)

```ts
top: number;
```

## OrthographicCamera.prototype.bottom (number property)

```ts
bottom: number;
```

## OrthographicCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## OrthographicCamera.prototype.near (number property)

```ts
near: number;
```

## OrthographicCamera.prototype.far (number property)

```ts
far: number;
```

## OrthographicCamera.prototype.zoom (number property)

```ts
zoom: number;
```

## OrthographicCamera (constructor)

```ts
constructor(left: number, right: number, top: number, bottom: number, aspect: number, near: number, far: number);
```

## OrthographicCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## OrthographicCamera.prototype.updateProjectionMatrix (method)

@link https://github.com/mrdoob/three.js/blob/master/src/cameras/OrthographicCamera.js#L195
@link https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L1169

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
```

# PerspectiveCamera (class)

```ts
declare class PerspectiveCamera extends Camera {
  position: Vector3;
  projectionMatrix: Matrix4;
  rotationMatrix: Matrix4;
  fov: number;
  aspect: number;
  near: number;
  far: number;
  constructor(fov: number, aspect: number, near: number, far: number);
  lookAt(target: Vector3, up?: Vector3): this;
  updateProjectionMatrix(reversedDepth?: boolean): this;
}
```

## PerspectiveCamera.prototype.position (Vector3 property)

```ts
position: Vector3;
```

## PerspectiveCamera.prototype.projectionMatrix (Matrix4 property)

```ts
projectionMatrix: Matrix4;
```

## PerspectiveCamera.prototype.rotationMatrix (Matrix4 property)

```ts
rotationMatrix: Matrix4;
```

## PerspectiveCamera.prototype.fov (number property)

```ts
fov: number;
```

## PerspectiveCamera.prototype.aspect (number property)

```ts
aspect: number;
```

## PerspectiveCamera.prototype.near (number property)

```ts
near: number;
```

## PerspectiveCamera.prototype.far (number property)

```ts
far: number;
```

## PerspectiveCamera (constructor)

```ts
constructor(fov: number, aspect: number, near: number, far: number);
```

## PerspectiveCamera.prototype.lookAt (method)

- `@description` _Focuses_ — the camera at the specified target

```ts
lookAt(target: Vector3, up?: Vector3): this;
```

## PerspectiveCamera.prototype.updateProjectionMatrix (method)

@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#perspective_projection_matrix
@link https://github.com/mrdoob/three.js/blob/a58e9ecf225b50e4a28a934442e854878bc2a959/src/math/Matrix4.js#L1109

```ts
updateProjectionMatrix(reversedDepth?: boolean): this;
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

# AvailableCameras (type)

```ts
type AvailableCameras = PerspectiveCamera | OrthographicCamera;
```

# OrbitControls (class)

```ts
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
  dispose(): boolean;
  orbit(controller: Pointer): void;
  zoom(controller: Pointer): void;
}
```

## OrbitControls.prototype.element (property)

```ts
element: HTMLElement | null;
```

## OrbitControls.prototype.camera (AvailableCameras property)

```ts
camera: AvailableCameras;
```

## OrbitControls.prototype.\_initialRotatePosition (Vector2 property)

```ts
_initialRotatePosition: Vector2;
```

## OrbitControls.prototype.rotatePosition (Vector2 property)

```ts
rotatePosition: Vector2;
```

## OrbitControls.prototype.\_initialZoom (number property)

```ts
_initialZoom: number;
```

## OrbitControls.prototype.zoomDistance (number property)

```ts
zoomDistance: number;
```

## OrbitControls.prototype.drag (Vector2 property)

```ts
drag: Vector2;
```

## OrbitControls.prototype.rotateSpeed (number property)

```ts
rotateSpeed: number;
```

## OrbitControls.prototype.panSpeed (number property)

```ts
panSpeed: number;
```

## OrbitControls.prototype.zoomSpeed (number property)

```ts
zoomSpeed: number;
```

## OrbitControls.prototype.minZoom (number property)

```ts
minZoom: number;
```

## OrbitControls.prototype.maxZoom (number property)

```ts
maxZoom: number;
```

## OrbitControls.prototype.enableOrbit (boolean property)

```ts
enableOrbit: boolean;
```

## OrbitControls.prototype.enableZoom (boolean property)

```ts
enableZoom: boolean;
```

## OrbitControls (constructor)

```ts
constructor(element: HTMLElement | null, camera: AvailableCameras);
```

## OrbitControls.prototype.dispose (method)

- `@description` _Destroys_ — orbit control event listeners

```ts
dispose(): boolean;
```

## OrbitControls.prototype.orbit (method)

- `@description` _Updates_ — the cameras position on orbit. Must be updated every frame

```ts
orbit(controller: Pointer): void;
```

## OrbitControls.prototype.zoom (method)

- `@description` _Updates_ — the camera zoom in/out. Must be updated every frame

```ts
zoom(controller: Pointer): void;
```

# OrbitControls (exported binding)

```ts
export { OrbitControls };
```
