export default class Vector2 {
    x: number
    y: number

    constructor(x=0, y=0) {
        this.x = x
        this.y = y
    }

    set(x: number, y: number) {
        this.x = x
        this.y = y

        return this
    }
    
    add(vector: Vector2) {
        this.x += vector.x
        this.y += vector.y
    
        return this
    }

    subtract(vector: Vector2) {
        this.x -= vector.x
        this.y -= vector.y
    
        return this
    }

    multiply(vector: Vector2) {
        this.x *= vector.x
        this.y *= vector.y
    
        return this
    }

    divide(vector: Vector2) {
        this.x /= vector.x
        this.y /= vector.y
    
        return this
    }

    addScalar(factor: number) {
        this.x += factor
        this.y += factor

        return this
    }

    subtractScalar(factor: number) {
        this.x -= factor
        this.y -= factor

        return this
    }

    multiplyScalar(factor: number) {
        this.x *= factor
        this.y *= factor

        return this
    }

    divideScalar(factor: number) {
        this.x /= factor
        this.y /= factor

        return this
    }

    distanceTo(vector: Vector2) {
        const u = vector.x - this.x
        const v = vector.y - this.y
        const distance = Math.sqrt((u * u) + (v * v))

        return distance
    }

    distanceToSquared(vector: Vector2) {
        const u = vector.x - this.x
        const v = vector.y - this.y
        const distance = (u * u) + (v * v)

        return distance
    }

    floor() {
        this.x = Math.floor(this.x)
        this.y = Math.floor(this.y)

        return this
    }

    ceil() {
        this.x = Math.ceil(this.x)
        this.y = Math.ceil(this.y)

        return this
    }

    round() {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y)

        return this
    }

    clamp(min: Vector2, max: Vector2) {
        this.x = Math.max(min.x, Math.min(this.x, max.x))
        this.y = Math.max(min.y, Math.min(this.y, max.y))

        return this
    }

    normalize() {
        const magnitude = Math.sqrt((this.x * this.x) + (this.y * this.y))

        if(magnitude === 0) {
            this.x = 0
            this.y = 0
        } else {
            this.x /= magnitude
            this.y /= magnitude
        }

        return this
    }

    dot(vector: Vector2) {
        return (this.x * vector.x) + (this.y * vector.y)
    }

    equals(vector: Vector2) {
        return this.x === vector.x && this.y === vector.y
    }

    // https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js#L828
    rotateAround(center: Vector2, angle: number) {
        const c = Math.cos(angle), s = Math.sin(angle)

		const x = this.x - center.x
		const y = this.y - center.y

		this.x = x * c - y * s + center.x
		this.y = x * s + y * c + center.y

		return this
    }

    toArray() {
        return [this.x, this.y]
    }

    fromArray(array: number[]) {
        this.x = array[0]
        this.y = array[1]

        return this
    }

    getComponent(index: number) {
        switch(index) {
            case 0:
                return this.x
            case 1:
                return this.y
            default: 
                return 0
        }
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    clone() {
        return new Vector2(this.x, this.y)
    }

    copy(vector: Vector2) {
        this.x = vector.x
        this.y = vector.y

        return this
    }
}