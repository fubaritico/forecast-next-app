import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withGrid, withPadding } from '@Decorators/withLayout'
import ClickableObservationCard, {
  ClickableObservationCardProps,
} from './ClickableObservationCard'

export default {
  title: 'Components/ClickableObservationCard',
  component: ClickableObservationCard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withGrid],
} as Meta<typeof ClickableObservationCard>

type Story = StoryObj<typeof ClickableObservationCard>

const storyRenderer = (args: ClickableObservationCardProps) => (
  <ClickableObservationCard {...args} />
)

export const AsAnInternalLink: Story = {
  render: storyRenderer,
}

AsAnInternalLink.args = {
  href: '/details/moscow',
  title: 'Moscow',
  description: 'Snowy',
}
