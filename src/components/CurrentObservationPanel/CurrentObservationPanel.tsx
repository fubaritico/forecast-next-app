import React, { FC, MouseEventHandler, MouseEvent } from 'react'
import CurrentObservationHeader from '@Components/CurrentObservationHeader/CurrentObservationHeader'
import CurrentObservationBody from '@Components/CurrentObservationBody/CurrentObservationBody'
import CurrentObservationsTemperatures from '@Components/CurrentObsevrationTemperatures/CurrentObservationsTemperatures'
import { Body, Root } from './CurrentObservationPanel.styled'

export type CurrentObservationPanelProps = {
  data: GetDetailedForecatsResponse
}

const CurrentObservationPanel: FC<CurrentObservationPanelProps> = ({
  data,
}) => {
  const onMenuClick: MouseEventHandler = (e: MouseEvent) => {
    console.log('CurrentObservationPanel::onMenuClick - e: ', e)
  }
  const onMoreClick: MouseEventHandler = (e: MouseEvent) => {
    console.log('CurrentObservationPanel::onMoreClick - e: ', e)
  }

  const {
    currentObservation: {
      cityName,
      weatherIcon,
      weatherDescription,
      temperature,
      apparentMaximumTemperature,
      apparentMinimumTemperature,
      dateLocal,
    },
    hourlyForecasts: { temperatures },
  } = data

  return (
    <Root weather={weatherIcon as string}>
      <CurrentObservationHeader
        cityName={cityName}
        date={dateLocal?.formatted}
        onMenuClick={onMenuClick}
        onMoreClick={onMoreClick}
      />
      <Body>
        <CurrentObservationBody
          apparentMaximumTemperature={apparentMaximumTemperature}
          apparentMinimumTemperature={apparentMinimumTemperature}
          temperature={temperature}
          weatherDescription={weatherDescription}
          weatherIcon={weatherIcon}
        />
      </Body>
      <CurrentObservationsTemperatures data={temperatures} />
    </Root>
  )
}

export default CurrentObservationPanel
