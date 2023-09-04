'use client'

import React, {
  FC,
  MouseEventHandler,
  MouseEvent,
  useState,
  useEffect,
  useCallback,
} from 'react'

import MoreDetailsPanelContainer from '@Atoms/MoreDetailsPanelContainer'
import MoreDetailsPanel from '@Organisms/MoreDetailsPanel/MoreDetailsPanel'

import {
  ReadonlyURLSearchParams,
  useParams,
  useSearchParams,
} from 'next/navigation'

import { getObservationDetailsRequest } from '@Api/getObservationsDetails'
import { AxiosError, isAxiosError, RequestResponse } from '@Utils/client/error'
import CurrentObservationPanel from '@Organisms/CurrentObservationPanel'

export type DetailPageContentProps = {
  data: RequestResponse<GetDetailedForecatsResponse>
}

const DetailPageContent: FC<DetailPageContentProps> = ({ data }) => {
  const [observation, setObservation] =
    useState<RequestResponse<GetDetailedForecatsResponse>>(data)
  const params = useParams()
  const searchParams: ReadonlyURLSearchParams | null = useSearchParams()

  const getData = useCallback(async (): Promise<
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

  /**
   * Route handler test on client side
   */
  useEffect(() => {
    const testHandler = async () => {
      const routeHandlerResponse = await fetch(
        `http://localhost:3000/api/weatherbit/forecasts/detail/${params?.cityName}`
      )
      // the body response has to be extracted with the json method asynchronously
      const result = await routeHandlerResponse.json()
      console.log(
        'DetailPageContent::testHandler - routeHandlerResponse: ',
        result
      )
    }

    testHandler()
  }, [])

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
      weatherIcon,
      feelsLike,
      windSpeed,
      relativeHumidity,
      pressure,
      visibility,
      dewPoint,
    },
    hourlyForecasts: { chancesOfRain },
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
      <CurrentObservationPanel
        data={observation}
        onMenuClick={onMenuClick}
        onMoreClick={onMoreClick}
      />
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

export default DetailPageContent
