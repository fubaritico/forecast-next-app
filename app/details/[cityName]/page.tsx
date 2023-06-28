// import { useSearchParams } from 'next/navigation'
import { AxiosError } from 'axios'

import { getObservationDetailsRequest } from '@Api/getObservationsDetails'

import CurrentObservationPanel from '@Organisms/CurrentObservationPanel/CurrentObservationPanel'

import { Metadata } from 'next'

type RequestResponse = GetDetailedForecatsResponse | AxiosError

type PageContext = {
  params: { cityName: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const getObservationDetails = async ({
  params,
  searchParams,
}: PageContext): Promise<RequestResponse> => {
  const requestParams = searchParams || params
  console.log('getObservationDetails - params: ', params)
  console.log('getObservationDetails - requestParams: ', requestParams)

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

const isAxiosError = (res: RequestResponse): res is AxiosError =>
  typeof (res as unknown as AxiosError).isAxiosError !== 'undefined'

const DetailsPage = async ({ params, searchParams }: PageContext) => {
  const apiCallResult = await getObservationDetails({
    searchParams,
    params,
  })

  if (isAxiosError(apiCallResult)) {
    return <div>An error occured</div>
  }

  return <CurrentObservationPanel data={apiCallResult} />
}

export default DetailsPage
