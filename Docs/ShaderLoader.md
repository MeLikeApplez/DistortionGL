## Modules

<dl>
<dt><a href="#module_ShaderLoader">ShaderLoader</a> : <code><a href="#_ShaderLoader">_ShaderLoader</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#URLOption">URLOption</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SourceCodeOption">SourceCodeOption</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#_ShaderLoader">_ShaderLoader</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="module_ShaderLoader"></a>

## ShaderLoader : [<code>\_ShaderLoader</code>](#_ShaderLoader)

* [ShaderLoader](#module_ShaderLoader) : [<code>\_ShaderLoader</code>](#_ShaderLoader)
    * [module.exports](#exp_module_ShaderLoader--module.exports) ⏏
        * [new module.exports(options)](#new_module_ShaderLoader--module.exports_new)
        * _instance_
            * [.uniforms](#module_ShaderLoader--module.exports+uniforms) : <code>Uniforms</code>
            * [.attributes](#module_ShaderLoader--module.exports+attributes) : <code>Attributes</code>
            * [._setSourceCodeFromURL(vertexSrc, fragmentSrc)](#module_ShaderLoader--module.exports+_setSourceCodeFromURL)
            * [.load(gl, [recompile])](#module_ShaderLoader--module.exports+load)
        * _static_
            * [.loadAll(gl, shaders, [recompile])](#module_ShaderLoader--module.exports.loadAll)

<a name="exp_module_ShaderLoader--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_ShaderLoader--module.exports_new"></a>

#### new module.exports(options)

| Param | Type |
| --- | --- |
| options | [<code>URLOption</code>](#URLOption) \| [<code>SourceCodeOption</code>](#SourceCodeOption) | 

<a name="module_ShaderLoader--module.exports+uniforms"></a>

#### module.exports.uniforms : <code>Uniforms</code>
**Kind**: instance property of [<code>module.exports</code>](#exp_module_ShaderLoader--module.exports)  
<a name="module_ShaderLoader--module.exports+attributes"></a>

#### module.exports.attributes : <code>Attributes</code>
**Kind**: instance property of [<code>module.exports</code>](#exp_module_ShaderLoader--module.exports)  
<a name="module_ShaderLoader--module.exports+_setSourceCodeFromURL"></a>

#### module.exports.\_setSourceCodeFromURL(vertexSrc, fragmentSrc)
**Kind**: instance method of [<code>module.exports</code>](#exp_module_ShaderLoader--module.exports)  

| Param | Type |
| --- | --- |
| vertexSrc | <code>string</code> | 
| fragmentSrc | <code>string</code> | 

<a name="module_ShaderLoader--module.exports+load"></a>

#### module.exports.load(gl, [recompile])
**Kind**: instance method of [<code>module.exports</code>](#exp_module_ShaderLoader--module.exports)  

| Param | Type | Default |
| --- | --- | --- |
| gl | <code>WebGL2RenderingContext</code> |  | 
| [recompile] | <code>boolean</code> | <code>false</code> | 

<a name="module_ShaderLoader--module.exports.loadAll"></a>

#### module.exports.loadAll(gl, shaders, [recompile])
**Kind**: static method of [<code>module.exports</code>](#exp_module_ShaderLoader--module.exports)  

| Param | Type | Default |
| --- | --- | --- |
| gl | <code>WebGL2RenderingContext</code> |  | 
| shaders | <code>Array.&lt;ShaderLoader&gt;</code> |  | 
| [recompile] | <code>boolean</code> | <code>false</code> | 

<a name="URLOption"></a>

## URLOption : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>&#x27;url&#x27;</code> | 
| [name] | <code>string</code> | 
| vertexShader | <code>string</code> | 
| fragmentShader | <code>string</code> | 

<a name="SourceCodeOption"></a>

## SourceCodeOption : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>&#x27;source-code&#x27;</code> | 
| [name] | <code>string</code> | 
| vertexShader | <code>string</code> | 
| fragmentShader | <code>string</code> | 

<a name="_ShaderLoader"></a>

## \_ShaderLoader : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| vertexCode | <code>string</code> \| <code>null</code> | 
| shaderCode | <code>string</code> \| <code>null</code> | 
| program | <code>WebGLProgram</code> \| <code>null</code> | 
| ready | <code>boolean</code> | 
| error | <code>Error</code> \| <code>null</code> | 

