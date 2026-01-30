import { Euler } from "./Euler"
import { Quaternion } from "./Quaternion"
import { Vector3 } from "./Vector3"

export class Matrix4 extends Array {
    constructor(n11=1, n12=0, n13=0, n14=0, n21=0, n22=1, n23=0, n24=0, n31=0, n32=0, n33=1, n34=0, n41=0, n42=0, n43=0, n44=1) {
        super(16)

        this[0] = n11
        this[1] = n12
        this[2] = n13
        this[3] = n14
        this[4] = n21
        this[5] = n22
        this[6] = n23
        this[7] = n24
        this[8] = n31
        this[9] = n32
        this[10] = n33
        this[11] = n34
        this[12] = n41
        this[13] = n42
        this[14] = n43
        this[15] = n44
    }

    set(n11: number, n12: number, n13: number, n14: number, n21: number, n22: number, n23: number, n24: number, n31: number, n32: number, n33: number, n34: number, n41: number, n42: number, n43: number, n44: number) {
        this[0] = n11
        this[1] = n12
        this[2] = n13
        this[3] = n14
        this[4] = n21
        this[5] = n22
        this[6] = n23
        this[7] = n24
        this[8] = n31
        this[9] = n32
        this[10] = n33
        this[11] = n34
        this[12] = n41
        this[13] = n42
        this[14] = n43
        this[15] = n44

        return this
    }
    
    setFromMatrix4(matrix: Matrix4) {
        this[0] = matrix[0]
        this[1] = matrix[1]
        this[2] = matrix[2]
        this[3] = matrix[3]
        this[4] = matrix[4]
        this[5] = matrix[5]
        this[6] = matrix[6]
        this[7] = matrix[7]
        this[8] = matrix[8]
        this[9] = matrix[9]
        this[10] = matrix[10]
        this[11] = matrix[11]
        this[12] = matrix[12]
        this[13] = matrix[13]
        this[14] = matrix[14]
        this[15] = matrix[15]
        
        return this
    }

    identity() {
        this.set(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        )

        return this
    }

    makeTranslation(x: number, y: number, z: number) {
        this.set(
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, z,
            0, 0, 0, 1
        )

        return this
    }

    translate(x: number, y: number, z: number) {
        this.set(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        )

        return this
    }

    makeScale(x: number, y: number, z: number) {
        this.set(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        )

        return this
    }
    
    makeRotationX(theta: number) {
        const sin = Math.sin(theta)
        const cos = Math.cos(theta)
        
        this.set(
            1, 0, 0, 0,
            0, cos, -sin, 0,
            0, sin, cos, 0,
            0, 0, 0, 1
        )

        return this
    }

    makeRotationY(theta: number) {
        const sin = Math.sin(theta)
        const cos = Math.cos(theta)
        
        this.set(
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1
        )

        return this
    }

    makeRotationZ(theta: number) {
        const sin = Math.sin(theta)
        const cos = Math.cos(theta)
        
        this.set(
            cos, -sin, 0, 0,
            sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        )

        return this
    }

    /**
     * @see https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix
     */
    makeRotationFromEuler(euler: Euler) {
        const { s1, s2, s3, c1, c2, c3 } = euler.getEulerByOrderTrig()
        
        switch(euler.order) {
            // proper euler angles
            case 'XZX':
                return this.set(
                    c2, -c3 * s2, s2 * s3, 0,
                    c1 * s2, (c1 * c2 * c3) - (s1 * s3), (-c3 * s1) - (c1 * c2 * s3), 0,
                    s1 * s2, (c1 * s3) + (c2 * c3 * s1), (c1 * c3) - (c2 * s1 * s3), 0,
                    0, 0, 0, 1
                )
            case 'XYX':
                return this.set(
                    c2, s2 * s3, c3 * s2, 0,
                    s1 * s2, (c1 * c3) - (c2 * s1 * s3), -(c1 * s3) - (c2 * c3 * s1), 0,
                    -c1 * s2, (c3 * s1) + (c1 * c2 * s3), (c1 * c2 * c3) - (s1 * s3), 0,
                    0, 0, 0, 1
                )
            case 'YXY':
                return this.set(
                    (c1 * c3) - (c2 * s1 * s3), (s1 * s2), (c1 * s3) + (c2 * c3 * s1), 0,
                    s2 * s3, c2, -c3 * s2, 0,
                    (-c3 * s1) - (-c1 * c2 * s3), c1 * s2, (c1 * c2 * c3) - (s1 * s3), 0,
                    0, 0, 0, 1
                )
            case 'YZY':
                return this.set(
                    (c1 * c2 * c3) - (s1 * s3), -   c1 * s2, (c3 * s1) + (c1 * c2 * s3), 0,
                    c3 * s2, c2, s2 * s3, 0,
                    (-c1 * s3) - (c2 * c3 * s1), s1 * s2, (c1 * c3) - (c2 * s1 * s3), 0,
                    0, 0, 0, 1
                )
            case 'ZYZ':
                return this.set(
                    (c1 * c2 * c3) - (s1 * s3), (-c3 * s1) - (c1 * c2 * s3), c1 * s2, 0,
                    (c1 * s3) + (c2 * c3 * s1), (c1 * c3) - (c2 * s1 * s3), s1 * s2, 0,
                    -c3 * s2, s2 * s3, c2, 0,
                    0, 0, 0, 1
                )
            case 'ZXZ':
                return this.set(
                    (c1 * c3) - (c2 * s1 * s3), (-c1 * s3) - (c2 * c3 * s1), s1 * s2, 0,
                    (c3 * s1) + (c1 * c2 * s3), (c1 * c2 * c3) - (s1 * s3), -c1 * s2, 0,
                    s2 * s3, c3 * s2, c2, 0,
                    0, 0, 0, 1
                )
            // tait-bryan angles
            case 'XZY':
                return this.set(
                    c2 * c3, -s2, c2 * s3, 0,
                    (s1 * s3) + (c1 * c3 * s2), c1 * c2, (c1 * s2 * s3) - (c3 * s1), 0,
                    (c3 * s1 * s2) - (c1 * s3), c2 * s1, (c1 * c3) + (s1 * s2 * s3), 0,
                    0, 0, 0, 1
                )
            case 'XYZ':
                return this.set(
                    c2 * c3, -c2 * s3, s2, 0,
                    (c1 * s3) + (c3 * s1 * s2), (c1 * c3) - (s1 * s2 * s3), -c2 * s1, 0,
                    (s1 * s3) - (c1 * c3 * s2), (c3 * s1) + (c1 * s2 * s3), c1 * c2, 0,
                    0, 0, 0, 1
                )
            case 'YXZ':
                return this.set(
                    (c1 * c3) + (s1 * s2 * s3), (c3 * s1 * s2) - (c1 * s3), (c2 * s1), 0,
                    c2 * s3, c2 * c3, -s2, 0,
                    (c1 * s2 * s3) - (c3 * s1), (c1 * c3 * s2) + (s1 * s3), (c1 * c2), 0,
                    0, 0, 0, 1
                )
            case 'YZX':
                return this.set(
                    c1 * c2, (s1 * s3) - (c1 * c3 * s2), (c3 * s1) + (c1 * s2 * s3), 0,
                    s2, c2 * c3, -c2 * s3, 0,
                    -c2 * s1, (c1 * s3) + (c3 * s1 * s2), (c1 * c3) - (s1 * s2 * s3), 0,
                    0, 0, 0, 1
                )
            case 'ZYX':
                return this.set(
                    c1 * c2, (c1 * s2 * s3) - (c3 * s1), (s1 * s3) + (c1 * c3 * s2), 0,
                    c2 * s1, (c1 * c3) + (s1 * s2 * s3), (c3 * s1 * s2) - (c1 * s3), 0,
                    -s2, c2 * s3, c2 * c3, 0,
                    0, 0, 0, 1
                )
            case 'ZXY':
                return this.set(
                    (c1 * c3) - (s1 * s2 * s3), -c1 * s1, (c1 * s3) + (c3 * s1 * s2), 0,
                    (c3 * s1) + (c1 * s2 * s3), c1 * c2, (s1 * s3) - (c1 * c3 * s2), 0,
                    -c2 * s3, s2, c2 * c3, 0,
                    0, 0, 0, 1
                )
        }

        return null
    }

    makeRotationFromQuaternion(quaternion: Quaternion) {
        const x2 = quaternion.x * quaternion.x
        const y2 = quaternion.y * quaternion.y
        const z2 = quaternion.z * quaternion.z
        
        const xy = quaternion.x * quaternion.y
        const xz = quaternion.x * quaternion.z
        const yz = quaternion.y * quaternion.z

        const xw = quaternion.x * quaternion.w
        const yw = quaternion.y * quaternion.w
        const zw = quaternion.z * quaternion.w

        const m11 = 1 - ((2 * y2) - (2 * z2))
        const m12 = (2 * xy) - (2 * zw)
        const m13 = (2 * xz) + (2 * yw)
        const m21 = (2 * xy) + (2 * zw)
        const m22 = 1 - ((2 * x2) - (2 * z2))
        const m23 = (2 * yz) - (2 * xw)
        const m31 = (2 * xz) - (2 * yw)
        const m32 = (2 * yz) + (2 * xw)
        const m33 = 1 - ((2 * x2) - (2 * y2))
    
        return this.set(
            m11, m12, m13, 0,
            m21, m22, m23, 0,
            m31, m32, m33, 0,
            0, 0, 0, 1
        )
    }

    multiply(matrix: Matrix4) {
        this.multiplyMatrices(this, matrix)
    
        return this
    }

    /**
     * @see https://github.com/mrdoob/three.js/blob/0af9729d0c143a86a1d725d6e2c3ad83301f3f34/src/math/Matrix4.js#L542
     */
    multiplyMatrices(a: Matrix4, b: Matrix4) {
        const ae = a;
		const be = b;
		const te = this;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;
    }

    multiplyScalar(scale: number) {
        for(let i = 0; i < this.length; i++) {
            this[i] *= scale
        }
    
        return this
    }

    /**
     * @see https://evanw.github.io/lightgl.js/docs/matrix.html
     */
    inverse() {
        const result = new Matrix4()

        const r = result
        const m = this

        r[0] = m[5]*m[10]*m[15] - m[5]*m[14]*m[11] - m[6]*m[9]*m[15] + m[6]*m[13]*m[11] + m[7]*m[9]*m[14] - m[7]*m[13]*m[10]
        r[1] = -m[1]*m[10]*m[15] + m[1]*m[14]*m[11] + m[2]*m[9]*m[15] - m[2]*m[13]*m[11] - m[3]*m[9]*m[14] + m[3]*m[13]*m[10]
        r[2] = m[1]*m[6]*m[15] - m[1]*m[14]*m[7] - m[2]*m[5]*m[15] + m[2]*m[13]*m[7] + m[3]*m[5]*m[14] - m[3]*m[13]*m[6]
        r[3] = -m[1]*m[6]*m[11] + m[1]*m[10]*m[7] + m[2]*m[5]*m[11] - m[2]*m[9]*m[7] - m[3]*m[5]*m[10] + m[3]*m[9]*m[6]

        r[4] = -m[4]*m[10]*m[15] + m[4]*m[14]*m[11] + m[6]*m[8]*m[15] - m[6]*m[12]*m[11] - m[7]*m[8]*m[14] + m[7]*m[12]*m[10]
        r[5] = m[0]*m[10]*m[15] - m[0]*m[14]*m[11] - m[2]*m[8]*m[15] + m[2]*m[12]*m[11] + m[3]*m[8]*m[14] - m[3]*m[12]*m[10]
        r[6] = -m[0]*m[6]*m[15] + m[0]*m[14]*m[7] + m[2]*m[4]*m[15] - m[2]*m[12]*m[7] - m[3]*m[4]*m[14] + m[3]*m[12]*m[6]
        r[7] = m[0]*m[6]*m[11] - m[0]*m[10]*m[7] - m[2]*m[4]*m[11] + m[2]*m[8]*m[7] + m[3]*m[4]*m[10] - m[3]*m[8]*m[6]

        r[8] = m[4]*m[9]*m[15] - m[4]*m[13]*m[11] - m[5]*m[8]*m[15] + m[5]*m[12]*m[11] + m[7]*m[8]*m[13] - m[7]*m[12]*m[9]
        r[9] = -m[0]*m[9]*m[15] + m[0]*m[13]*m[11] + m[1]*m[8]*m[15] - m[1]*m[12]*m[11] - m[3]*m[8]*m[13] + m[3]*m[12]*m[9]
        r[10] = m[0]*m[5]*m[15] - m[0]*m[13]*m[7] - m[1]*m[4]*m[15] + m[1]*m[12]*m[7] + m[3]*m[4]*m[13] - m[3]*m[12]*m[5]
        r[11] = -m[0]*m[5]*m[11] + m[0]*m[9]*m[7] + m[1]*m[4]*m[11] - m[1]*m[8]*m[7] - m[3]*m[4]*m[9] + m[3]*m[8]*m[5]

        r[12] = -m[4]*m[9]*m[14] + m[4]*m[13]*m[10] + m[5]*m[8]*m[14] - m[5]*m[12]*m[10] - m[6]*m[8]*m[13] + m[6]*m[12]*m[9]
        r[13] = m[0]*m[9]*m[14] - m[0]*m[13]*m[10] - m[1]*m[8]*m[14] + m[1]*m[12]*m[10] + m[2]*m[8]*m[13] - m[2]*m[12]*m[9]
        r[14] = -m[0]*m[5]*m[14] + m[0]*m[13]*m[6] + m[1]*m[4]*m[14] - m[1]*m[12]*m[6] - m[2]*m[4]*m[13] + m[2]*m[12]*m[5]
        r[15] = m[0]*m[5]*m[10] - m[0]*m[9]*m[6] - m[1]*m[4]*m[10] + m[1]*m[8]*m[6] + m[2]*m[4]*m[9] - m[2]*m[8]*m[5]

        const det = m[0]*r[0] + m[1]*r[4] + m[2]*r[8] + m[3]*r[12]

        for (var i = 0; i < 16; i++) {
            r[i] /= det
        }

        this.set(
            r[0], r[1], r[2], r[3],
            r[4], r[5], r[6], r[7],
            r[8], r[9], r[10], r[11],
            r[12], r[13], r[14], r[15],
        )

        return this
    }

    /**
     * @see https://github.com/mrdoob/three.js/blob/3b1ff7661884f26e6d9af1d94c293129aaba885c/src/math/Matrix4.js#L1001
     */
    compose(position: Vector3, quaternion: Quaternion, scale: Vector3) {
        const te = this;

		const x = quaternion.x, y = quaternion.y, z = quaternion.z, w = quaternion.w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;
    }

    clone() {
        return new Matrix4(...this)
    }

    copy(matrix: Matrix4) {
        return this.set(
            matrix[0], matrix[1], matrix[2], matrix[3], 
            matrix[4], matrix[5], matrix[6], matrix[7], 
            matrix[8], matrix[9], matrix[10], matrix[11], 
            matrix[12], matrix[13], matrix[14], matrix[15], 
        )
    }
}