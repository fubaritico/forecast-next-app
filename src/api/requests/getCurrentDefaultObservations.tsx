import axios, { AxiosResponse } from 'axios'

/**
 * Fetches Ten locations observation
 * @param params {Coordinates}
 * @returns GetCurrentDefaultObservationsAxiosResponse
 */
// eslint-disable-next-line import/prefer-default-export
export async function getCurrentDefaultObservations(
  params: Coordinates
): GetCurrentDefaultObservationsAxiosResponse {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:9000/api/weatherbit/currents',
    params,
  }

  return axios.request<
    GetCurrentDefaultObservationsResponse,
    AxiosResponse<GetCurrentDefaultObservationsResponse>
  >(options)
}
