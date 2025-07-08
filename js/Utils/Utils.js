/**
 * @template TData
 * @template TError
 * @param {Promise<TData>} promiseFunc
 * @param {TError} [customError]
 * @returns {Promisified<TData, TError>}
 */
export function Promisify(promiseFunc, customError) {
    return new Promise(res => {
        promiseFunc.then((value) => {
            res([value, null]);
        }).catch((err) => {
            console.error(customError || err);
            res([null, customError || err]);
        });
    });
}
/**
 * @param {string | URL} url
 * @param {RequestInitOptions} [options={ json: false }]
 * @returns {Promisified<Response | object, Error>}
 */
export async function APIFetch(url, options = { json: false }) {
    const [data, dataError] = await Promisify(fetch(url, options), Error('Failed to fetch!'));
    if (dataError || !data)
        return [null, dataError];
    try {
        if (options.json)
            return [await data.json(), null];
        return [data, null];
    }
    catch (err) {
        console.error(err);
        return [null, Error("Failed to fetch!")];
    }
}
/**
 * @typedef {Promise<[TData, null] | [null, TError]>} Promisified
 * @template TData
 * @template TError
 */
/**
 * @typedef {Object} RequestInitOptions
 * @property {boolean} json
 */
