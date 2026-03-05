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

# Matrix3 (exported binding)

```ts
export { Matrix3 };
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

# Matrix3 (exported binding)

```ts
export { Matrix3 };
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

# Matrix3 (exported binding)

```ts
export { Matrix3 };
```
