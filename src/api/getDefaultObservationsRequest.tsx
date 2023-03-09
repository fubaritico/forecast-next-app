import axios, { AxiosResponse } from 'axios'

/**
 * Fetches Ten locations observation
 * @returns GetCurrentDefaultObservationsAxiosResponse
 */
// eslint-disable-next-line import/prefer-default-export
export async function getDefaultObservationsRequest(): GetCurrentDefaultObservationsAxiosResponse {
  const options = {
    method: 'GET',
    url: 'http://127.0.0.1:9000/api/weatherbit/currents',
  }

  return axios.request<
    GetCurrentDefaultObservationsResponse,
    AxiosResponse<GetCurrentDefaultObservationsResponse>
  >(options)
}
