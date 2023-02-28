import { ReactElement } from 'react'
import MainLayout from '@Layouts/MainLayout'
import FrontPageContent from '@Organisms/PageContent/FrontPageContent'
import currentDefaultObservations from '@Organisms/PageContent/FrontPageContent.stubs'

const Frontpage: NextPageWithLayout = () => (
  <FrontPageContent forecasts={currentDefaultObservations} />
)

export const FrontPageLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

FrontPageLayout.getLayout = FrontPageLayout

export default Frontpage
