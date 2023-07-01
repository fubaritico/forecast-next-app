import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import MoreDetailsPanel, { MoreDetailsPanelProps } from './MoreDetailsPanel'

const { currentObservation, dailyForecasts, hourlyForecasts } =
  currentObservationPanel

export default {
  title: 'Components/Organisms/MoreDetailsPanel',
  component: MoreDetailsPanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof MoreDetailsPanel>

type Story = StoryObj<typeof MoreDetailsPanel>

const storyRenderer = (args: MoreDetailsPanelProps) => (
  <MoreDetailsPanel {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}

Default.args = {
  weather: currentObservation.weatherIcon,
  details: currentObservation,
  dailyForecasts,
  chancesOfRain: hourlyForecasts.chancesOfRain,
}
