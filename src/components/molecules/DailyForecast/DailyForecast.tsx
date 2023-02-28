import React, { FC } from 'react'
import MaxMinTemperatures from '@Molecules/MaxMinTemperatures/MaxMinTemperatures'
import {
  Root,
  ChancesOfRain,
  WeekDay,
  WeatherIcon,
} from './DailyForecast.styled'

export type DailyForecastProps = {
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
  chancesOfRain?: string
  weatherIcon?: string
  timestampLocal?: DateProps
}

const DailyForecast: FC<DailyForecastProps> = ({
  apparentMaximumTemperature,
  apparentMinimumTemperature,
  weatherIcon,
  chancesOfRain,
  timestampLocal,
}) => (
  <Root>
    {timestampLocal && <WeekDay>{timestampLocal.weekDay}</WeekDay>}
    <ChancesOfRain>{chancesOfRain}</ChancesOfRain>
    {weatherIcon && (
      <WeatherIcon path="weather/small" name={weatherIcon} size={32} />
    )}
    <MaxMinTemperatures
      apparentMinimumTemperature={apparentMinimumTemperature}
      apparentMaximumTemperature={apparentMaximumTemperature}
      size="small"
      hasUnit={false}
    />
  </Root>
)

export default DailyForecast
