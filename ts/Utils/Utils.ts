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

interface RequestInitOptions extends RequestInit {
    json: boolean
}

export async function APIFetch(url: string | URL, options: RequestInitOptions={ json: false }): Promisified<Response | object, Error> {
    const [ data, dataError ] = await Promisify<Response, Error>(fetch(url, options), Error('Failed to fetch!'))

    if(dataError || !data) return [null, dataError]

    try {
        if(options.json) return [await data.json(), null]

        return [data, null]
    } catch(err: unknown) {
        console.error(err)

        return [null, Error("Failed to fetch!")]
    }
}