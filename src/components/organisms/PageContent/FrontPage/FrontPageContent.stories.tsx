import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout } from '@Decorators/withLayout'
import FrontPageContent, { FrontPageContentProps } from './FrontPageContent'
import currentDefaultObservations from './FrontPageContent.stubs'

export default {
  title: 'PageContent/FrontPage',
  component: FrontPageContent,
  decorators: [withLayout],
} as Meta<typeof FrontPageContent>

type Story = StoryObj<typeof FrontPageContent>

const storyRenderer = (args: FrontPageContentProps) => (
  <FrontPageContent {...args} />
)

export const Default: Story = {
  render: storyRenderer,
}

Default.args = {
  forecasts: currentDefaultObservations,
}
