import { getObservationDetailsRequest } from '@Api/getObservationsDetails'

import { Metadata } from 'next'
import { AxiosError, isAxiosError, RequestResponse } from '@Utils/error'
import React from 'react'
import DetailPageContent from '@Organisms/PageContent/DetailPage'

type PageContext = {
  params: { cityName: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const getObservationDetails = async ({
  params,
  searchParams,
}: PageContext): Promise<RequestResponse<GetDetailedForecatsResponse>> => {
  const requestParams = { ...searchParams, ...params }
  console.log('getObservationDetails - params: ', params)

  try {
    const response: GetObservationDetailsAxiosResponse =
      await getObservationDetailsRequest(
        requestParams as unknown as GetObservationDetailsRequestParams
      )
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

export const metadata: Metadata = {
  description: 'Detailed forecast information for a given place',
  title: 'Forecasts',
}

const DetailsPage = async ({ params, searchParams }: PageContext) => {
  const apiCallResult = await getObservationDetails({
    searchParams,
    params,
  })

  if (isAxiosError<GetDetailedForecatsResponse>(apiCallResult)) {
    return <div>No observation returned - (Client)</div>
  }

  return <DetailPageContent data={apiCallResult} />
}

export default DetailsPage
