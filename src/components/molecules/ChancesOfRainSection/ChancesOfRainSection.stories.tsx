import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import ChancesOfRainSection, {
  ChancesOfRainSectionProps,
} from './ChancesOfRainSection'

export default {
  title: 'Components/Molecules/ChancesOfRainSection',
  component: ChancesOfRainSection,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof ChancesOfRainSection>

type Story = StoryObj<typeof ChancesOfRainSection>

const storyRenderer = (args: ChancesOfRainSectionProps) => (
  <ChancesOfRainSection {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}

Default.args = {
  data: currentObservationPanel.hourlyForecasts.chancesOfRain,
}
