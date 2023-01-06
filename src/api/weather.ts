import {getUrlSearchParams} from "@Utils";
import {ParsedUrlQuery} from "querystring";

export default async function apiRouteGetWeather(params?:ParsedUrlQuery): Promise<Response> {
    return fetch(`http://127.0.0.1:3000/api/forecast/3hourly?${  getUrlSearchParams(params)}`, {
        method: 'GET'
    })
}