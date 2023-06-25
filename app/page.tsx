import HomePageContent from '@Organisms/PageContent/HomePageContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Next project providing weather forecast through a panel and a detailed dashboard for any location',
  title: 'Next project providing weather forecast',
}

const HomePage = () => <HomePageContent />

export default HomePage
