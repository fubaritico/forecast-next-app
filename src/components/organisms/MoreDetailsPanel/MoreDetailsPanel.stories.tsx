import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import MoreDetailsPanel, { MoreDetailsPanelProps } from './MoreDetailsPanel'

export default {
  title: 'Components/MoreDetailsPanel',
  component: MoreDetailsPanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withMainLayout],
} as ComponentMeta<typeof MoreDetailsPanel>
const Template: ComponentStory<typeof MoreDetailsPanel> = (
  args: MoreDetailsPanelProps
) => <MoreDetailsPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  weather: currentObservationPanel.currentObservation.weatherIcon,
  details: currentObservationPanel.currentObservation,
  dailyForecasts: currentObservationPanel.dailyForecasts,
  chancesOfRain: currentObservationPanel.hourlyForecasts.chancesOfRain,
}
