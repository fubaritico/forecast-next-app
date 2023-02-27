import { FC } from 'react'
import { getWeatherMediumIcon } from '@Svg/weatherMediumIcons'
import MaxMinTemperatures from '@Components/MaxMinTemperatures/MaxMinTemperatures'
import {
  CurrentTemperature,
  Degrees,
  Description,
  IconAndDescription,
  IconContainer,
  Root,
  Temperatures,
} from './CurrentObservationBody.styled'

export type CurrentObservationBodyProps = {
  temperature?: string
  weatherIcon?: string
  weatherDescription?: string
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
}

const CurrentObservationBody: FC<CurrentObservationBodyProps> = ({
  temperature,
  weatherIcon,
  weatherDescription,
  apparentMinimumTemperature,
  apparentMaximumTemperature,
}) => {
  const Icon = getWeatherMediumIcon(weatherIcon)

  return (
    <Root>
      <IconAndDescription aria-label="weather description">
        <IconContainer>{Icon && <Icon aria-hidden />}</IconContainer>
        <Description>{weatherDescription}</Description>
      </IconAndDescription>
      <Temperatures>
        <CurrentTemperature aria-label="current temperature">
          {parseInt(temperature as string, 10)}
          <Degrees>°</Degrees>
        </CurrentTemperature>
        <MaxMinTemperatures
          aria-label="temperatures"
          apparentMinimumTemperature={apparentMinimumTemperature}
          apparentMaximumTemperature={apparentMaximumTemperature}
        />
      </Temperatures>
    </Root>
  )
}
export default CurrentObservationBody
