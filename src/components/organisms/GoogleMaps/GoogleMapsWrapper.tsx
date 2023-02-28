import { FC, PropsWithChildren } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

export type GoogleMapsWrapperProps = {
  apiKey: string
}

const GoogleMapsWrapper: FC<PropsWithChildren<GoogleMapsWrapperProps>> = ({
  apiKey,
  children,
}) => {
  const render = (status: Status) => <h1>{status}</h1>

  return (
    <Wrapper apiKey={apiKey} render={render}>
      {children}
    </Wrapper>
  )
}

export default GoogleMapsWrapper
