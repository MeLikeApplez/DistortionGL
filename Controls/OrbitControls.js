import Camera from '../Camera/Camera'

import Vector2 from '../Math/Vector2'
import Vector3 from '../Math/Vector3'

/**
 * @typedef {Object} _OrbitControls
 * @property {Camera} camera
 * @property {number} initialDown
 * @property {number} initialX
 * @property {number} initialY
 * @property {number} initialCameraX
 * @property {number} initialCameraY
 * @property {number} initialCameraZ
 * @property {number} initialDistance
 * @property {number} initialAngle
 * @property {Vector2} scale
 * @property {number} dragX
 * @property {number} dragY
 */

/**
 * @type {_OrbitControls}
 * @module OrbitControls
 */
export default class OrbitControls {
    /**
     * @param {Camera} camera 
     */
    constructor(camera) {
        this.camera = camera

        this.initialDown = true

        this.initialX = 0
        this.initialY = 0

        this.initialCameraX = 0
        this.initialCameraY = 0
        this.initialCameraZ = 0

        this.initialDistance = 0
        this.initialAngle = 0

        this.scale = new Vector2(1, 1)

        this.dragX = 0
        this.dragY = 0
    }

    /**
     * @param {boolean} isControllerUp 
     */
    update(isControllerUp) {
        if(!this.camera.target) return
        
        if(isControllerUp) {
            this.dragX = 0
            this.dragY = 0

            this.initialX = 0
            this.initialY = 0

            this.initialCameraX = 0
            this.initialCameraY = 0
            this.initialCameraZ = 0
            
            this.initialDistance = 0
            this.initialAngle = 0

            this.initialDown = true

            return
        }

        if(this.initialDown) {
            this.initialX = this.x
            this.initialY = this.y

            this.initialCameraX = this.camera.position.x
            this.initialCameraY = this.camera.position.y
            this.initialCameraZ = this.camera.position.z

            this.initialDistance = this.camera.position.distanceTo(this.camera.target)
            this.initialAngleX = Math.atan2(this.initialCameraZ - this.camera.target.z, this.initialCameraX - this.camera.target.x)
            this.initialAngleY = Math.atan2(this.initialCameraY - this.camera.target.y, this.initialCameraZ - this.camera.target.z)

            this.initialDown = false
        }

        this.dragX = this.x - this.initialX
        this.dragY = this.y - this.initialY

        const rx = this.dragX / this.getTargetWidth()
        const ry = this.dragY / this.getTargetHeight()
        const rz = 0

        const orbit = this.calculateOrbit(this.camera.position, rx, ry, rz)
        
        this.camera.position.x = this.camera.position.x - orbit.x + this.initialCameraX
        this.camera.position.y = this.camera.position.y - orbit.y + this.initialCameraY
        this.camera.position.z = this.camera.position.z - orbit.z + this.initialCameraZ
    }

    /**
     * @param {Vector3} point 
     * @param {Number} pitch 
     * @param {Number} roll 
     * @param {Number} yaw 
     * @returns {Vector3}
     */
    // source: https://stackoverflow.com/a/34060479/13159492
    calculateOrbit(point, pitch, roll, yaw) {
        const cosa = Math.cos(yaw)
        const sina = Math.sin(yaw)
    
        const cosb = Math.cos(pitch)
        const sinb = Math.sin(pitch)
    
        const cosc = Math.cos(roll)
        const sinc = Math.sin(roll)
    
        const Axx = cosa*cosb
        const Axy = cosa*sinb*sinc - sina*cosc
        const Axz = cosa*sinb*cosc + sina*sinc
    
        const Ayx = sina*cosb
        const Ayy = sina*sinb*sinc + cosa*cosc
        const Ayz = sina*sinb*cosc - cosa*sinc
    
        const Azx = -sinb
        const Azy = cosb*sinc
        const Azz = cosb*cosc
    
        const px = point.x
        const py = point.y
        const pz = point.z
        
        return new Vector3(
            Axx*px + Axy*py + Axz*pz,
            Ayx*px + Ayy*py + Ayz*pz,
            Azx*px + Azy*py + Azz*pz
        )
    }
}

