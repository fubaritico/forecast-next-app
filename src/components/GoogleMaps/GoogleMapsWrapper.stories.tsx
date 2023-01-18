import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import Map from '@Components/GoogleMaps/Map'
import GoogleMapsWrapper, { GoogleMapsWrapperProps } from './GoogleMapsWrapper'

export default {
  title: 'Components/GoogleMapsWrapper',
  component: GoogleMapsWrapper,
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['click', 'mouseup'],
    },
  },
  decorators: [withMainLayout],
} as ComponentMeta<typeof GoogleMapsWrapper>

const Template: ComponentStory<typeof GoogleMapsWrapper> = (
  args: GoogleMapsWrapperProps
) => {
  const onClickMap = (ev: google.maps.MapMouseEvent) => {
    // eslint-disable-next-line no-console
    console.log('onClickMap - coordinates: ', ev.latLng.lat(), ev.latLng.lng())
  }

  const onIdleMap = (map: google.maps.Map<Element>) => {
    // eslint-disable-next-line no-console
    console.log('onIdleMap - map: ', map)
  }

  return (
    <GoogleMapsWrapper {...args}>
      <Map onClick={onClickMap} onIdle={onIdleMap} />
    </GoogleMapsWrapper>
  )
}
export const Default = Template.bind({})
Default.args = {
  apiKey: process.env.STORYBOOK_GOOGLE_MAP_API_KEY,
}
