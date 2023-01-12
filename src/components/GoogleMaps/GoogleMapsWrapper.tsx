import { FC, PropsWithChildren } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import Map from '@Components/GoogleMaps/Map'
import MapMouseEvent = google.maps.MapMouseEvent

const GoogleMapsWrapper: FC<PropsWithChildren> = () => {
  const render = (status: Status) => <h1>{status}</h1>

  const onClickMap = (ev: MapMouseEvent) => {
    console.log('onClickMap - coordinates: ', ev.latLng.lat(), ev.latLng.lng())
  }

  const onIdleMap = (map: google.maps.Map<Element>) => {
    console.log('onIdleMap - map: ', map)
  }

  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string}
      render={render}
    >
      <Map onClick={onClickMap} onIdle={onIdleMap} />
    </Wrapper>
  )
}

export default GoogleMapsWrapper
