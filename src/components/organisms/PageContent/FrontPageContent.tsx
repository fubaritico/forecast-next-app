import { FC, PropsWithChildren } from 'react'
import GoogleMapsWrapper from '@Organisms/GoogleMaps/GoogleMapsWrapper'
import Map from '@Organisms/GoogleMaps/Map'
import Grid from '@Atoms/Grid/Grid'
import ClickableCard from '@Molecules/ClickableObservation/ClickableCard'
import MapMouseEvent = google.maps.MapMouseEvent

type FrontPageContentProps = {
  forecasts: GetCurrentDefaultObservationsResponse
}

const FrontPageContent: FC<PropsWithChildren<FrontPageContentProps>> = ({
  forecasts,
}) => {
  const onClickMap = (ev: MapMouseEvent) => {
    // eslint-disable-next-line no-console
    console.log(
      'FrontPageContent::onClickMap - coordinates: ',
      ev.latLng.lat(),
      ev.latLng.lng()
    )
  }

  const onIdleMap = (map: google.maps.Map<Element>) => {
    // eslint-disable-next-line no-console
    console.log('FrontPageContent::onIdleMap - map: ', map)
  }

  return (
    <>
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
export default FrontPageContent
