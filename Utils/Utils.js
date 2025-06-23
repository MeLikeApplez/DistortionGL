/**
 * @template TData
 * @template TError
 * @param {Promise<TData>} promiseFunc 
 * @param {TError=} customError 
 * @returns {Promise<[TData, null] | [null, TError]>}
 */
export function Promisify(promiseFunc, customError) {
    return new Promise(res => {
        promiseFunc.then((value) => {
            res([value, null])
        }).catch((err) => {
            console.error(err || customError)

            res([null, err || customError])
        })
    })    
}

/**
 * @param {string | URL} url 
 * @param {RequestInit} fetchOptions 
 * @param {{ json: boolean }} customOptions 
 * @returns {Promise<[Response | object, null] | [null, Error]>}
 */
export async function APIFetch(url, fetchOptions, customOptions) {
    const [ data, dataError ] = await Promisify(fetch(url, fetchOptions), Error('Failed to fetch!'))

    if(dataError || !data) return [null, dataError]

    try {
        if(customOptions.json) return [await data.json(), null]

        return [data, null]
    } catch(err) {
        console.error(err)

        return [null, Error("Failed to fetch!")]
    }
}