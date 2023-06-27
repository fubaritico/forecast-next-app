import { getDefaultObservationsRequest } from '@Api/getDefaultObservationsRequest'

import FrontPageContent from '@Organisms/PageContent/FrontPage'
import { Metadata } from 'next'
import { AxiosError, isAxiosError, RequestResponse } from '@Utils/error'

const getCurrentDefaultObservations = async (): Promise<
  RequestResponse<GetCurrentDefaultObservationsResponse>
> => {
  try {
    const response: GetCurrentDefaultObservationsAxiosResponse =
      await getDefaultObservationsRequest()
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

export const metadata: Metadata = {
  description:
    'List of observation links, also a map to access detailed information for a given place',
  title: 'Application front page',
}

const FrontPage = async () => {
  const apiCallResult = await getCurrentDefaultObservations()

  if (isAxiosError(apiCallResult)) {
    return <div>No observation list has been found (Server side)</div>
  }

  return <FrontPageContent forecasts={apiCallResult} />
}

export default FrontPage
