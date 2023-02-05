import type { ReactElement } from 'react'
import Head from 'next/head'
import HomePage from '@Pages/HomePage'
import MainLayout from '@Layouts/MainLayout'
import type { NextPageWithLayout } from '@Routes/_app'

const Index: NextPageWithLayout = () => (
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
    <HomePage />
  </>
)

export default Index

Index.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
