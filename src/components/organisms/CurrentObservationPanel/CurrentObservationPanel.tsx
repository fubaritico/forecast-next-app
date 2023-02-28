import React, { FC, MouseEventHandler, MouseEvent } from 'react'
import CurrentObservationHeader from '@Molecules/CurrentObservationHeader/CurrentObservationHeader'
import CurrentObservationBody from '@Molecules/CurrentObservationBody/CurrentObservationBody'
import CurrentObservationsTemperatures from '@Molecules/CurrentObsevrationTemperatures/CurrentObservationsTemperatures'
import PanelBackground from '@Atoms/PanelBackground/PanelBackground'
import MoreDetailsPanel from '@Organisms/MoreDetailsPanel/MoreDetailsPanel'
import MoreDetailsPanelContainer from '@Atoms/MoreDetailsPanelContainer/MoreDetailsPanelContainer'

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
      feelsLike,
      windSpeed,
      relativeHumidity,
      pressure,
      visibility,
      dewPoint,
    },
    hourlyForecasts: { temperatures, chancesOfRain },
    dailyForecasts,
  } = data

  const details = {
    feelsLike,
    windSpeed,
    relativeHumidity,
    pressure,
    visibility,
    dewPoint,
  }

  return (
    <>
      <PanelBackground weather={weatherIcon as string}>
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
        <CurrentObservationsTemperatures data={temperatures} height={115} />
      </PanelBackground>
      <MoreDetailsPanelContainer>
        <MoreDetailsPanel
          weather={weatherIcon as string}
          chancesOfRain={chancesOfRain}
          dailyForecasts={dailyForecasts}
          details={details}
        />
      </MoreDetailsPanelContainer>
    </>
  )
}

export default CurrentObservationPanel
