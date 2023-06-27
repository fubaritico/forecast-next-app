'use client'

import React, {
  FC,
  MouseEventHandler,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
} from 'react'
import CurrentObservationHeader from '@Molecules/CurrentObservationHeader'
import CurrentObservationBody from '@Molecules/CurrentObservationBody'
import CurrentObservationTemperatures from '@Molecules/CurrentObservationTemperatures'
import MoreDetailsPanelContainer from '@Atoms/MoreDetailsPanelContainer'
import PanelBackground from '@Atoms/PanelBackground'
import MoreDetailsPanel from '@Organisms/MoreDetailsPanel/MoreDetailsPanel'
import {
  ReadonlyURLSearchParams,
  useParams,
  useSearchParams,
} from 'next/navigation'
import { getObservationDetailsRequest } from '@Api/getObservationsDetails'
import { AxiosError, isAxiosError, RequestResponse } from '@Utils/error'

export type CurrentObservationPanelProps = {
  data: RequestResponse<GetDetailedForecatsResponse>
}

const CurrentObservationPanel: FC<CurrentObservationPanelProps> = ({
  data,
}) => {
  const [observation, setObservation] =
    useState<RequestResponse<GetDetailedForecatsResponse>>(data)
  const params = useParams()
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams()

  const getData = useCallback((): Promise<
    RequestResponse<GetDetailedForecatsResponse>
  > => {
    const requestParams = { ...searchParams, ...params }

    return getObservationDetailsRequest(
      requestParams as unknown as GetObservationDetailsRequestParams
    )
  }, [params, searchParams])

  useEffect(() => {
    if (data) {
      setObservation(data)
      return
    }

    getData()
      .then((response) => setObservation(response))
      .catch((e) => setObservation(e as AxiosError))
  }, [data, getData])

  const onMenuClick: MouseEventHandler = (e: MouseEvent) => {
    console.log('CurrentObservationPanel::onMenuClick - e: ', e)
  }
  const onMoreClick: MouseEventHandler = (e: MouseEvent) => {
    console.log('CurrentObservationPanel::onMoreClick - e: ', e)
  }

  if (isAxiosError<GetDetailedForecatsResponse>(observation)) {
    return <div>No observation returned - (Client)</div>
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
  } = observation

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
