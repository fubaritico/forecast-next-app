import axios, {AxiosResponse} from "axios";

export type ForeCast = {
    wind_cdir:string
    rh:number
    pod:string
    pres:number
    clouds:number
    vis:number
    wind_spd:number
    wind_cdir_full:string
    slp:number
    pop:number
    ozone:number
    clouds_hi:number
    clouds_low:number
    clouds_mid:number
    datetime:string
    ts:number
    snow:number
    wind_gust_spd:number
    dewpt:number
    uv:0.5
    wind_dir:number
    ghi:number
    dhi:number
    precip:number
    weather: {
        icon: string
        description: string
        code: number
    }
    temp:number
    app_temp:number
    timestamp_utc:string
    timestamp_local:string
    snow_depth:number
    dni:number
    solar_rad:number
}

export type ForeCasts = {
    city_name: string
    country_code: string
    data: ForeCast[]
    lat: number
    lon: number
    state_code: string
    timezone: string
}

export type GetWeatherParams = {
    lat: string
    lon: string
}

export default async function getWeather( params: GetWeatherParams ): Promise<AxiosResponse<ForeCasts, any>> {
    const options = {
        method: 'GET',
        url: 'http://127.0.0.1:9000/api/weather/get',
        params,
    };

    return await axios.request<ForeCasts, AxiosResponse<ForeCasts>>(options)
}
