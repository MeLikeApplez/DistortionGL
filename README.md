# DistortionGL (v0.4.2 EXPERIMENTAL/UNSTABLE)
A JavaScript WebGL2 library template customizable for 3D or 2D projects.

## Why?
- I know libraries like [ThreeJS](https://threejs.org/) exist but I want to understand the underlying mechanics of how the math and graphics work.
- This is just purely out of interest and fun. 
- Most code is sourced from other people and places, such as Stack Overflow and ThreeJS. Those are commented within the code and attributed to the individuals who created them.

## Inspiration
- This project is heavily inspired by [ThreeJS](https://threejs.org/), and many parts of this project are very ThreeJS-like, so similarities will show up

## What is this?
- This library is mainly used to utilize common game dev functions such as shader loader, scenes, math, etc.
- Modules such as Scene, Entity, etc, are purposely empty for customizable and organized code.

### Library Contents
- [2D Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API), [WebGPU (Experimental)](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)
- > Note that [WebGPU](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) is still in experimental phase (as of 12/23/2025) which means that most devices may not support WebGPU at all. [Please check if your browser supports WebGPU.](https://caniuse.com/?search=webgpu) Check out the [WebGPU Examples/Demos](https://webkit.org/demos/webgpu/) to test if your browser is compatible with WebGPU
- 2D Camera & 3D Perspective Camera
- Keyboard & Mouse/Touch Controls
- Event handlers & Entity class template
- Math utilities including vectors, matrices, quaternions, euler and other math utils
- Typescript now supported including a separate index.d.ts for type annotations, a minified index.js barrel file and a non-minified js library

## Docs
Table of contents -> [Docs](./docs/reference)


## Installation
```
npm i distortiongl
```

## Usage Example (Typescript)
```typescript
import { Clock, Keyboard, OrbitControls, PerspectiveCamera, Pointer, Scene, Vector3, WebGL2Renderer } from 'distortiongl'
import Chunk from '../../Engine/Chunks/Chunk'
import OverworldScene from './OverworldScene'

export default function main(canvas: HTMLCanvasElement) {
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
    const scene = new OverworldScene()
    const renderer = new WebGL2Renderer(canvas, {
        antialias: true,
        powerPreference: 'high-performance'
    })

    const clock = new Clock()
    const pointer = new Pointer(canvas)
    const controls = new OrbitControls(canvas, camera)
    const keyboard = new Keyboard(canvas)

    window.addEventListener('resize', resize)
    clock.addEventListener('onupdate', animate)
    
    resize()
    clock.start()

    const chunk = new Chunk()
    
    scene.add(chunk)

    camera.position.set(1, 1, 1).normalize().multiplyScalar(2.5)
    camera.lookAt(new Vector3(0.5, 0.5, 0.5))

    controls.rotateSpeed = 2.5

    function animate() {
        controls.orbit(pointer)
        renderer.render(scene, camera)
    }

    function resize() {
         renderer.setSize(window.innerWidth, window.innerHeight, window.devicePixelRatio)

        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    }
}
```