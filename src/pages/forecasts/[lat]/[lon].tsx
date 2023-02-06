import Head from 'next/head'
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { SSR_WeatherAPI } from '@ApiRoutes'
import MainLayout from '@Layouts/MainLayout'
import GoogleMapsWrapper from '@Components/GoogleMaps/GoogleMapsWrapper'
import Grid from '@Components/Grid/Grid'
import ClickableCard from '@Components/ClickableCard/ClickableCard'
import Map from '@Components/GoogleMaps/Map'

import { ReactElement } from 'react'
import MapMouseEvent = google.maps.MapMouseEvent

type ForeCastsProps = {
  forecasts: GetCurrentDefaultObservationsResponse // For now will display 10 selected observations, not forecasts for a place
}

export const getServerSideProps: GetServerSideProps<ForeCastsProps> = async (
  context: GetServerSidePropsContext
) => {
  const response: GetCurrentDefaultObservationsAxiosResponse =
    await SSR_WeatherAPI.default(context.params as unknown as Coordinates)

  return {
    props: {
      forecasts: response.data,
    },
  }
}

const ForeCasts: NextPageWithLayout<ForeCastsProps> = ({
  forecasts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const onClickMap = (ev: MapMouseEvent) => {
    // eslint-disable-next-line no-console
    console.log('onClickMap - coordinates: ', ev.latLng.lat(), ev.latLng.lng())
  }

  const onIdleMap = (map: google.maps.Map<Element>) => {
    // eslint-disable-next-line no-console
    console.log('onIdleMap - map: ', map)
  }

  return (
    <>
      <Head>
        <title>Forecasts</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleMapsWrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <Map onClick={onClickMap} onIdle={onIdleMap} />
      </GoogleMapsWrapper>
      <Grid>
        {forecasts.map((f: MappedObservation) => (
          <ClickableCard
            key={f.cityName}
            href={`/forecasts/${f.coordinates?.lat}/${f.coordinates?.lon}`}
            title={f.cityName}
            description={f.weatherDescription}
            isExternalLink
          />
        ))}
      </Grid>
    </>
  )
}
export default ForeCasts

ForeCasts.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
