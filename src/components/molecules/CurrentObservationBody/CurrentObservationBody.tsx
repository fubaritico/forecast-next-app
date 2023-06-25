'use client'

import { FC } from 'react'
import { getWeatherMediumIcon } from '@Svg/weatherMediumIcons'
import MaxMinTemperatures from '@Molecules/MaxMinTemperatures/MaxMinTemperatures'
import {
  Root,
  CurrentTemperature,
  Degrees,
  Description,
  IconAndDescription,
  IconContainer,
  Content,
  Temperatures,
  MaxMinTemperaturesContainer,
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
      <Content>
        <IconAndDescription aria-label="Weather description">
          <IconContainer>{Icon && <Icon aria-hidden />}</IconContainer>
          <Description>{weatherDescription}</Description>
        </IconAndDescription>
        <Temperatures>
          <CurrentTemperature aria-label="Current temperature">
            {parseInt(temperature as string, 10)}
            <Degrees>°</Degrees>
          </CurrentTemperature>
          <MaxMinTemperaturesContainer>
            <MaxMinTemperatures
              aria-label="Amplitude of temperatures"
              apparentMinimumTemperature={apparentMinimumTemperature}
              apparentMaximumTemperature={apparentMaximumTemperature}
            />
          </MaxMinTemperaturesContainer>
        </Temperatures>
      </Content>
    </Root>
  )
}
export default CurrentObservationBody
