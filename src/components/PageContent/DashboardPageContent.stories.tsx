import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import DashboardPageContent from './DashboardPageContent'

export default {
  title: 'Pages/DashboardPageContent',
  component: DashboardPageContent,
  decorators: [withMainLayout],
} as ComponentMeta<typeof DashboardPageContent>

export const Default: ComponentStory<typeof DashboardPageContent> = () => (
  <DashboardPageContent />
)
