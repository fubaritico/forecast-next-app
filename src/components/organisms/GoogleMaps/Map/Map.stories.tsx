import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout } from '@Decorators/withLayout'
import Map, { MapProps } from './Map'

export default {
  title: 'Components/Organisms/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  decorators: [withLayout],
  argTypes: {
    onClick: { action: 'Map clicked' },
    onIdle: { action: 'Map idle' },
  },
} as Meta<typeof Map>

type Story = StoryObj<typeof Map>

const storyRenderer = (args: MapProps) => <Map {...args} />

export const Default: Story = {
  render: storyRenderer,
}
