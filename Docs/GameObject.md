## Modules

<dl>
<dt><a href="#module_GameObject">GameObject</a> : <code><a href="#_GameObject">_GameObject</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#_GameObject">_GameObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="module_GameObject"></a>

## GameObject : [<code>\_GameObject</code>](#_GameObject)

* [GameObject](#module_GameObject) : [<code>\_GameObject</code>](#_GameObject)
    * [.dispose(gl, ...any)](#module_GameObject+dispose)
    * [.update(gl, ...any)](#module_GameObject+update)
    * [.render(gl, ...any)](#module_GameObject+render)

<a name="module_GameObject+dispose"></a>

### gameObject.dispose(gl, ...any)
**Kind**: instance method of [<code>GameObject</code>](#module_GameObject)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| ...any | <code>\*</code> | 

<a name="module_GameObject+update"></a>

### gameObject.update(gl, ...any)
**Kind**: instance method of [<code>GameObject</code>](#module_GameObject)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| ...any | <code>\*</code> | 

<a name="module_GameObject+render"></a>

### gameObject.render(gl, ...any)
**Kind**: instance method of [<code>GameObject</code>](#module_GameObject)  

| Param | Type |
| --- | --- |
| gl | <code>WebGL2RenderingContext</code> | 
| ...any | <code>\*</code> | 

<a name="_GameObject"></a>

## \_GameObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| uuid | <code>string</code> | 
| material | <code>Material</code> \| <code>null</code> | 
| position | <code>Vector3</code> | 
| rotation | <code>Euler</code> | 
| autoUpdate | <code>boolean</code> | 
| needsUpdate | <code>boolean</code> | 

