import type { OrthographicCamera } from '../Camera/OrthographicCamera'
import { PerspectiveCamera } from '../Camera/PerspectiveCamera'

import { Vector2 } from '../Math/Vector2'
import { Vector3 } from '../Math/Vector3'
import { type Pointer}  from './Pointer'

type AvailableCameras = PerspectiveCamera | OrthographicCamera

export class OrbitControls {
    element: HTMLElement | null
    camera: AvailableCameras
    _initialRotatePosition: Vector2
    rotatePosition: Vector2
    // _initialPanPosition: Vector2
    // panPosition: Vector2
    _initialZoom: number
    zoomDistance: number
    drag: Vector2
    rotateSpeed: number
    panSpeed: number
    zoomSpeed: number
    minZoom: number
    maxZoom: number
    enableOrbit: boolean
    enableZoom: boolean

    constructor(element: HTMLElement | null, camera: AvailableCameras) {
        this.element = element
        this.camera = camera
        
        this._initialRotatePosition = new Vector2(0, 0)
        this.rotatePosition = new Vector2(0, 0)

        // this._initialPanPosition = new Vector2(0, 0)
        // this.panPosition = new Vector2(0, 0)

        this._initialZoom = 0
        this.zoomDistance = 0

        this.drag = new Vector2(0, 0)

        this.rotateSpeed = 1
        this.panSpeed = 1
        this.zoomSpeed = 1

        this.minZoom = -5
        this.maxZoom = 10

        this.enableOrbit = true
        this.enableZoom = true
    }

    dispose() {
        if(!this.element) return false

        this.element = null

        // this._initialPanPosition.set(0, 0)
        // this.panPosition.set(0, 0)
        
        this._initialRotatePosition.set(0, 0)
        this.rotatePosition.set(0, 0)

        this.drag = new Vector2(0, 0)

        return true
    }

    orbit(controller: Pointer) {
        if(!this.enableOrbit) return

        this.rotatePosition.copy(controller.position)

        if(!this.element || controller.isPointerUp) {
            this.drag.set(0, 0)
            
            this._initialRotatePosition.copy(this.rotatePosition)

            return
        }

        this.drag.x = this.rotatePosition.x - this._initialRotatePosition.x
        this.drag.y = this.rotatePosition.y - this._initialRotatePosition.y

        const { width, height } = this.element.getBoundingClientRect()

        const distance = this.camera.position.distanceTo(this.camera.target)
        const dx = this.drag.x / width  * distance * this.rotateSpeed
        const dy = this.drag.y / height  * distance * this.rotateSpeed

        const position = new Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z).subtract(this.camera.target)

        const rho = Math.sqrt(position.x * position.x + position.y * position.y + position.z * position.z)
        const theta = Math.atan2(position.z, position.x) + dx
        const phi = Math.asin(position.y / rho) + dy

        this.camera.position.set(
            rho * Math.cos(phi) * Math.cos(theta),
            rho * Math.sin(phi),
            rho * Math.cos(phi) * Math.sin(theta)
        ).add(this.camera.target)
        
        this.camera.lookAt(this.camera.target)

        this._initialRotatePosition.copy(this.rotatePosition)
    }

    zoom(controller: Pointer) {
        if(!this.enableZoom || !this.element || this._initialZoom === controller.mouseScroll) return

        const zoomDirection = (this._initialZoom - controller.mouseScroll) > 0 ? -1 : 1
        const zoomQuantity = zoomDirection * this.zoomSpeed

        if((this.zoomDistance + zoomQuantity) < this.minZoom || (this.zoomDistance + zoomQuantity) > this.maxZoom) {
            this._initialZoom = controller.mouseScroll

            return
        }

        this.zoomDistance += zoomQuantity
        // const cameraDirection = new Vector3(this.camera.position.x, this.camera.position.y, this.camera.position.z).subtract(this.camera.target).normalize().multiplyScalar(zoomQuantity)
        const cameraDirection = this.camera.getWorldDirection().multiplyScalar(zoomQuantity)

        this.camera.position.add(cameraDirection)

        this._initialZoom = controller.mouseScroll
    }

}

