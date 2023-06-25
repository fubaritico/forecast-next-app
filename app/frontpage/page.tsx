import { AxiosError } from 'axios'
import { getDefaultObservationsRequest } from '@Api/getDefaultObservationsRequest'

import FrontPageContent from '@Organisms/PageContent/FrontPageContent'
import { Metadata } from 'next'

type RequestResponse = GetCurrentDefaultObservationsResponse | AxiosError

const getCurrentDefaultObservations = async (): Promise<RequestResponse> => {
  console.log('getCurrentDefaultObservations')

  try {
    const response: GetCurrentDefaultObservationsAxiosResponse =
      await getDefaultObservationsRequest()
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const isAxiosError = (res: RequestResponse): res is AxiosError =>
  typeof (res as unknown as AxiosError).isAxiosError !== 'undefined'

export const metadata: Metadata = {
  description:
    'List of observation links, also a map to access detailed information for a given place',
  title: 'Application front page',
}

const FrontPage = async () => {
  const apiCallResult = await getCurrentDefaultObservations()

  if (isAxiosError(apiCallResult)) {
    return <div>An error occured</div>
  }

  return <FrontPageContent forecasts={apiCallResult} />
}

export default FrontPage
