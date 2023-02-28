import DashboardPageContent from '@Organisms/PageContent/DashboardPageContent'
import { HomePageLayout } from '../index'

const DashboardPage: NextPageWithLayout = () => <DashboardPageContent />
export default DashboardPage

DashboardPage.getLayout = HomePageLayout
