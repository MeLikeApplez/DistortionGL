export type Promisified<TData, TError> = Promise<[TData, null] | [null, TError]>

export function Promisify<TData, TError>(promiseFunc: Promise<TData>, customError?: TError): Promisified<TData, TError> {
    return new Promise(res => {
        promiseFunc.then((value: TData) => {
            res([value, null])
        }).catch((err: TError) => {
            console.error(customError || err)

            res([null, customError || err])
        })
    })    
}