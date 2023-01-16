import Head from 'next/head'
import { NextPage } from 'next'
import HomePage from '@Pages/HomePage'
import MainLayout from '@Layouts/MainLayout'

const Index: NextPage = () => (
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
    <MainLayout>
      <HomePage />
    </MainLayout>
  </>
)

export default Index
