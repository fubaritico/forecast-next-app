import Head from 'next/head'
import {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'
import { SSR_WeatherAPI } from '@Api'
import { ForeCastsResponse, ForeCast } from '@Requests/getWeather'
import GoogleMapsWrapper from '@Components/GoogleMaps/GoogleMapsWrapper'
import MainLayout from '@Layouts/MainLayout'
import Grid from '@Components/Grid'
import ClickableCard from '@Components/ClickableCard'
import Map from '@Components/GoogleMaps/Map'

import MapMouseEvent = google.maps.MapMouseEvent

type ForeCastsProps = {
  forecasts: ForeCastsResponse
}

export const getServerSideProps: GetServerSideProps<ForeCastsProps> = async (
  context: GetServerSidePropsContext
) => {
  const response: Response = await SSR_WeatherAPI.default(context.params)
  const forecasts = (await response.json()) as unknown as ForeCastsResponse

  return {
    props: {
      forecasts,
    },
  }
}

const ForeCasts: NextPage<ForeCastsProps> = ({
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
      <MainLayout>
        <GoogleMapsWrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
        >
          <Map onClick={onClickMap} onIdle={onIdleMap} />
        </GoogleMapsWrapper>
        <Grid>
          {forecasts.data?.map((f: ForeCast) => (
            <ClickableCard
              key={f.ts}
              href={`/forecasts/${f.ts}`}
              title={<>Wind direction: {f.wind_cdir}</>}
              description={<>Desc: {f.weather.description}</>}
              isExternalLink
            />
          ))}
        </Grid>
      </MainLayout>
    </>
  )
}
export default ForeCasts
