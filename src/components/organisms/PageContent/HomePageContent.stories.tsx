import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import HomePageContent from './HomePageContent'

export default {
  title: 'Pages/HomePage',
  component: HomePageContent,
  decorators: [withMainLayout],
} as ComponentMeta<typeof HomePageContent>

export const Default: ComponentStory<typeof HomePageContent> = () => (
  <HomePageContent />
)
