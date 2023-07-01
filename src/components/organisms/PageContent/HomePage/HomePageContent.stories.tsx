import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout } from '@Decorators/withLayout'
import HomePageContent from './HomePageContent'

export default {
  title: 'PageContent/HomePage',
  component: HomePageContent,
  decorators: [withLayout],
} as Meta<typeof HomePageContent>

type Story = StoryObj<typeof HomePageContent>

const storyRenderer = () => <HomePageContent />

export const Default: Story = {
  render: storyRenderer,
}

Default.storyName = 'With data from server side'
