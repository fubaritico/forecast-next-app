import { applyDegreesShort, applyPercentage } from '@Utils/server/units'
import { timestampLocalToProps, round } from '@Utils/server/convert'

type ForecastHour = WeatherbitAPI.ForecastHour

export const hourlyDetailedForecastsMapper = (
  forecastHours: ForecastHour[]
): MappedHourlyForecast => ({
  temperatures: forecastHours
    .map(
      (forecastHour, index): ChartData => ({
        chartValue: {
          value: forecastHour.temp,
          display: applyDegreesShort(round(forecastHour.temp)),
        },
        timestampLocal: timestampLocalToProps(
          index,
          forecastHour.timestamp_local
        ),
      })
    )
    .filter((_, i) => i < 7),
  chancesOfRain: forecastHours
    .map(
      (forecastHour, index): ChartData => ({
        chartValue: {
          value: forecastHour.pop,
          display: applyPercentage(forecastHour.pop),
        },
        timestampLocal: timestampLocalToProps(
          index,
          forecastHour.timestamp_local
        ),
      })
    )
    .filter((_, i) => i % 3 === 0)
    .filter((_, i) => i < 7),
})
