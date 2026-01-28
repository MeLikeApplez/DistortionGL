<!-- # DistortionGL (v1.2.0 STABLE) -->
# DistortionGL (v1.3.0 EXPERIMENTAL/UNSTABLE)
A JavaScript WebGL2 library template customizable for 3D or 2D projects.
<!-- > API Reference [Docs](./js/Docs/API.md) -->

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
