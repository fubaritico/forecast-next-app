import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import GoogleMapsWrapper from '@Organisms/GoogleMaps/GoogleMapsWrapper'
import Map from '@Organisms/GoogleMaps/Map'
import Grid from '@Atoms/Grid/Grid'
import ClickableObservationCard from '@Molecules/ClickableObservationCard/ClickableObservationCard'
import MapMouseEvent = google.maps.MapMouseEvent
import LatLng = google.maps.LatLng
import GeocoderResult = google.maps.GeocoderResult

export type FrontPageContentProps = {
  forecasts: GetCurrentDefaultObservationsResponse
}

const FrontPageContent: FC<PropsWithChildren<FrontPageContentProps>> = ({
  forecasts,
}) => {
  const router = useRouter()
  const pushDetailsPage = async (latLng: LatLng) => {
    const geocoder = new google.maps.Geocoder()
    await geocoder.geocode(
      {
        location: { lat: latLng.lat(), lng: latLng.lng() },
      },
      (results: GeocoderResult[]) => {
        // Geocoder sends back results ordered by most zoomed
        const closestResult = results[0]
        const { address_components: ac } = closestResult

        const locality =
          ac.find((item) => item.types.includes('postal_town'))?.short_name ||
          ac.find((item) => item.types.includes('locality'))?.short_name

        const country = ac.find((item) =>
          item.types.includes('country')
        )?.short_name

        if (!locality || !country) {
          // Send message through a modal for instance (user click in the middle of the sea)
          console.warn('No clear place found, please pick another one')
          return
        }

        router.push(
          {
            pathname: '/details/[cityName]',
            query: {
              lat: latLng.lat(),
              lon: latLng.lng(),
            },
          },
          `/details/${locality}-${country}`
        )
      }
    )
  }

  const onClickMap = async (ev: MapMouseEvent) => {
    await pushDetailsPage(ev.latLng)
  }

  return (
    <>
      <GoogleMapsWrapper
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      >
        <Map onClick={onClickMap} />
      </GoogleMapsWrapper>
      <Grid>
        {forecasts.map((f: MappedObservation) => (
          <ClickableObservationCard
            key={f.id}
            href={{
              pathname: '/details/[cityName]',
              query: {
                lat: f.lat,
                lon: f.lon,
              },
            }}
            title={f.cityName}
            description={f.weatherDescription}
            as={`/details/${f.cityName}-${f.countryCode}`}
          />
        ))}
      </Grid>
    </>
  )
}
export default FrontPageContent
