## Modules

<dl>
<dt><a href="#module_OrbitControls">OrbitControls</a> : <code><a href="#_OrbitControls">_OrbitControls</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#_OrbitControls">_OrbitControls</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_OrbitControls"></a>

## OrbitControls : [<code>\_OrbitControls</code>](#_OrbitControls)

* [OrbitControls](#module_OrbitControls) : [<code>\_OrbitControls</code>](#_OrbitControls)
    * [module.exports](#exp_module_OrbitControls--module.exports) ⏏
        * [new module.exports(camera)](#new_module_OrbitControls--module.exports_new)
        * [.update(isControllerUp)](#module_OrbitControls--module.exports+update)
        * [.calculateOrbit(point, pitch, roll, yaw)](#module_OrbitControls--module.exports+calculateOrbit) ⇒ <code>Vector3</code>

<a name="exp_module_OrbitControls--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_OrbitControls--module.exports_new"></a>

#### new module.exports(camera)

| Param | Type |
| --- | --- |
| camera | <code>Camera</code> | 

<a name="module_OrbitControls--module.exports+update"></a>

#### module.exports.update(isControllerUp)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_OrbitControls--module.exports)  

| Param | Type |
| --- | --- |
| isControllerUp | <code>boolean</code> | 

<a name="module_OrbitControls--module.exports+calculateOrbit"></a>

#### module.exports.calculateOrbit(point, pitch, roll, yaw) ⇒ <code>Vector3</code>
**Kind**: instance method of [<code>module.exports</code>](#exp_module_OrbitControls--module.exports)  

| Param | Type |
| --- | --- |
| point | <code>Vector3</code> | 
| pitch | <code>Number</code> | 
| roll | <code>Number</code> | 
| yaw | <code>Number</code> | 

<a name="_OrbitControls"></a>

## \_OrbitControls : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| camera | <code>Camera</code> | 
| initialDown | <code>number</code> | 
| initialX | <code>number</code> | 
| initialY | <code>number</code> | 
| initialCameraX | <code>number</code> | 
| initialCameraY | <code>number</code> | 
| initialCameraZ | <code>number</code> | 
| initialDistance | <code>number</code> | 
| initialAngle | <code>number</code> | 
| scale | <code>Vector2</code> | 
| dragX | <code>number</code> | 
| dragY | <code>number</code> | 

