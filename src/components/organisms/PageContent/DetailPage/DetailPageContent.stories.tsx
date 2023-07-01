import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import DetailPageContent, { DetailPageContentProps } from './DetailPageContent'

export default {
  title: 'PageContent/DetailPage',
  component: DetailPageContent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof DetailPageContent>

type Story = StoryObj<typeof DetailPageContent>

const storyRenderer = (args: DetailPageContentProps) => (
  <DetailPageContent {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}
Default.args = {
  data: currentObservationPanel,
}

Default.storyName = 'With data from server side'
