import toQueryString from '@Utils/server/queryString'

const isUsingRapidApi = process.env.APP_USE_RAPID_API === 'true'

console.log('getApiRequestConfig - isUsingRapidApi: ', isUsingRapidApi)

/**
 * Will create a configuration object initially for "http.request",
 * defines a configuration object for RapidAPI or the original
 *
 * @param {QueryParameters} parameters Parameters passed to the endpoint if any, can be an empty object.
 * @param {string} entrypointPath Path to the entrypoint.
 * @param {string} rapidApiBasePath defaults to '/v2.0'.
 */
const getApiRequestConfig = (
  parameters: QueryParameters = {},
  entrypointPath = '',
  rapidApiBasePath = '/v2.0'
): ApiRequestConfig => ({
  hostname: isUsingRapidApi
    ? process.env.APP_RAPID_API_WEATHER_API_HOST
    : process.env.APP_WEATHER_API_HOST,
  path: `${
    rapidApiBasePath && !isUsingRapidApi ? rapidApiBasePath : ''
  }${entrypointPath}${toQueryString(parameters)}${
    !isUsingRapidApi ? `&key=${process.env.APP_WEATHER_API_KEY}` : ''
  }`,
  method: 'GET',
  headers: {
    ...(isUsingRapidApi
      ? {
          'X-RapidAPI-Key': process.env.APP_RAPID_API_WEATHER_API_KEY,
          'X-RapidAPI-Host': process.env.APP_RAPID_API_WEATHER_API_HOST,
        }
      : undefined),
  },
})

export const getApiDailyForecastsRequestConfig = (
  parameters: QueryParameters,
  path = '/forecast/daily'
): ApiRequestConfig => getApiRequestConfig(parameters, path)

export const getApiHourlyForecastsRequestConfig = (
  parameters: QueryParameters,
  path = '/forecast/hourly'
): ApiRequestConfig => getApiRequestConfig(parameters, path)

export default getApiRequestConfig
