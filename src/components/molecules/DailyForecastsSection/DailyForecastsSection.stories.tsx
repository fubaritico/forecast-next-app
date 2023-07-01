import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import DailyForecastsSection, {
  DailyForecastsSectionProps,
} from './DailyForecastsSection'

export default {
  title: 'Components/Molecules/DailyForecastsSection',
  component: DailyForecastsSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof DailyForecastsSection>

type Story = StoryObj<typeof DailyForecastsSection>

const storyRenderer = (args: DailyForecastsSectionProps) => (
  <DailyForecastsSection {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}

Default.args = {
  data: currentObservationPanel.dailyForecasts,
}
