import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { getDefaultObservationsRequest } from '@Api/getDefaultObservationsRequest'

import MainLayout from '@Layouts/MainLayout'
import FrontPageContent from '@Organisms/PageContent/FrontPageContent'

type FrontPageProps = {
  /** Grid of current observations for ten locations */
  observations: GetCurrentDefaultObservationsResponse
}

export const getServerSideProps: GetServerSideProps<
  FrontPageProps
> = async () => {
  const response: GetObservationDetailsAxiosResponse =
    await getDefaultObservationsRequest()

  return {
    props: {
      observations: response.data,
    },
  }
}

// eslint-disable-next-line react/prop-types
const Frontpage: NextPageWithLayout<FrontPageProps> = ({ observations }) => (
  <FrontPageContent forecasts={observations} />
)

export const FrontPageLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

FrontPageLayout.getLayout = FrontPageLayout

export default Frontpage
