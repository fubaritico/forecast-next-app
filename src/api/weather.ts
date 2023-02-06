import { getCurrentDefaultObservations } from '@Requests/getCurrentDefaultObservations'

// THIS NOT AN API ROUTE, THIS IS AN API CALL
// IMPORTANT: NOT IN USE
export default async function apiRouteGetWeather(
  params: Coordinates
): GetCurrentDefaultObservationsAxiosResponse {
  return getCurrentDefaultObservations(params)
}
