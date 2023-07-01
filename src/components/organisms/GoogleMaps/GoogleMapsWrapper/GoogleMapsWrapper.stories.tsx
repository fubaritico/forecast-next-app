import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout } from '@Decorators/withLayout'
import Map from '@Organisms/GoogleMaps/Map'
import GoogleMapsWrapper, { GoogleMapsWrapperProps } from './GoogleMapsWrapper'

export default {
  title: 'Components/Organisms/GoogleMapsWrapper',
  component: GoogleMapsWrapper,
  parameters: {
    layout: 'fullscreen',
    actions: {
      handles: ['click', 'mouseup'],
    },
  },
  decorators: [withLayout],
} as Meta<typeof GoogleMapsWrapper>

type Story = StoryObj<typeof GoogleMapsWrapper>

const storyRenderer = (args: GoogleMapsWrapperProps) => {
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
export const Default: Story = {
  render: storyRenderer,
}
Default.args = {
  apiKey: process.env.STORYBOOK_GOOGLE_MAP_API_KEY,
}
