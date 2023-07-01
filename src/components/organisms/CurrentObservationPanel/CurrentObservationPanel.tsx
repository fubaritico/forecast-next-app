'use client'

import React, { FC, MouseEventHandler } from 'react'

import CurrentObservationHeader from '@Molecules/CurrentObservationHeader'
import CurrentObservationBody from '@Molecules/CurrentObservationBody'
import CurrentObservationTemperatures from '@Molecules/CurrentObservationTemperatures'
import PanelBackground from '@Atoms/PanelBackground'

export type CurrentObservationPanelProps = {
  data: GetDetailedForecatsResponse
  onMenuClick: MouseEventHandler
  onMoreClick: MouseEventHandler
}

const CurrentObservationPanel: FC<CurrentObservationPanelProps> = ({
  data,
  onMenuClick,
  onMoreClick,
}) => {
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
    <PanelBackground weatherIconName={weatherIcon as string}>
      <CurrentObservationHeader
        cityName={cityName}
        date={dateLocal?.formatted}
        onMenuClick={onMenuClick}
        onMoreClick={onMoreClick}
      />
      <CurrentObservationBody
        apparentMaximumTemperature={apparentMaximumTemperature}
        apparentMinimumTemperature={apparentMinimumTemperature}
        temperature={temperature}
        weatherDescription={weatherDescription}
        weatherIcon={weatherIcon}
      />
      <CurrentObservationTemperatures data={temperatures} height={115} />
    </PanelBackground>
  )
}

export default CurrentObservationPanel
