import axios, { AxiosResponse } from 'axios'

/**
 * Fetches detailed data about an observation,
 * the location information is fetched with coordinates
 *
 * @param params {GetObservationDetailsRequestParams}
 * @returns GetObservationDetailsAxiosResponse
 */
export async function getObservationDetailsRequest(
  params: GetObservationDetailsRequestParams
): GetObservationDetailsAxiosResponse {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:9000/api/weatherbit/forecasts/detail',
    params,
  }

  return axios.request<
    GetObservationDetailsAxiosResponse,
    AxiosResponse<GetObservationDetailsAxiosResponse>
  >(options)
}
