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
 * @typedef {Promise<[TData, null] | [null, TError]>} Promisified
 * @template TData
 * @template TError
 */
