import type { ReactElement } from 'react'
import Head from 'next/head'
import MainLayout from '@Layouts/MainLayout'
import HomePageContent from '@PageContent/HomePageContent'

const HomePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Next project providing weather forecast</title>
      <meta
        name="description"
        content="Next project providing weather forecast through a panel and a detailed dashboard for any location"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePageContent />
  </>
)

export const HomePageLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
)

HomePage.getLayout = HomePageLayout

export default HomePage
