import getApiRequestConfig from '@Requests/getApiRequestConfig' // getApiDailyForecastsRequestConfig,
import { currentObservationMapper } from '@Requests/mappers/currentDefaultObservationsMapper'

type Params = {
  params: {
    cityName: string
  }
}

type RequestParams = {
  city: string
  country: string
}

type Observation = WeatherbitAPI.CurrentObs

type ReturnTypeItem = string | boolean | number | null | undefined
// type ForecastDay = WeatherbitAPI.ForecastDay
// type Forecast = WeatherbitAPI.Forecast

interface MyReturnType {
  [name: string]: ReturnTypeItem | Record<string, ReturnTypeItem>
}

const fetchObservationData = async <T>(
  apiConfig: ApiRequestConfig,
  revalidate = 3600
): Promise<T> => {
  const { headers, hostname, method, path } = apiConfig

  const response = await fetch(`https://${hostname}${path}`, {
    headers,
    method,
    next: { revalidate },
  })

  const data = await response.json()

  return data
}

/**
 * Will get current observation details, regroup hourly and weekly results and map them all
 * @param params
 */
export async function getObservationDetailsRequest({
  params,
}: Params): Promise<MyReturnType> {
  const requestParams: RequestParams = {
    city: params.cityName.split('-')[0],
    country: params.cityName.split('-')[1],
  }

  console.log('getObservationDetailsRequest - params: ', params)

  const observationResponse = await fetchObservationData<{
    data: Observation[]
  }>(getApiRequestConfig(requestParams, '/current'))

  // const observation = observationResponse.data[0]
  //
  // const dailyObservationResponse = await fetchObservationData<{
  //   data: Forecast[]
  // }>(getApiDailyForecastsRequestConfig({ days: 8 }, '/forecast/daily'))
  //
  // const observation = observationResponse.data[0]

  return currentObservationMapper(observationResponse.data[0])
}
