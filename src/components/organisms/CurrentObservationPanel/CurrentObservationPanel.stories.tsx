import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import CurrentObservationPanel, {
  CurrentObservationPanelProps,
} from './CurrentObservationPanel'

export default {
  title: 'Components/Organisms/CurrentObservationPanel',
  component: CurrentObservationPanel,
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  decorators: [withPadding, withLayout],
  argTypes: {
    onMenuClick: { action: 'onMenuClick clicked' },
    onMoreClick: { action: 'onMoreClick clicked' },
  },
} as Meta<typeof CurrentObservationPanel>

type Story = StoryObj<typeof CurrentObservationPanel>

const storyRenderer = (args: CurrentObservationPanelProps) => (
  <CurrentObservationPanel {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}
Default.args = {
  data: currentObservationPanel,
}
