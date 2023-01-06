import {ParsedUrlQuery} from "querystring";

export function doSomething() {}

/**
 * Issues when getting query parameters
 * @param params ParsedUrlQuery
 */
export function getUrlSearchParams(params?: ParsedUrlQuery): URLSearchParams {
    const urlSearchParams = new URLSearchParams()

    if(params) {
        for (const prop in params) {
            urlSearchParams.append(prop, params[prop] as string)
        }
    }

    return urlSearchParams
}