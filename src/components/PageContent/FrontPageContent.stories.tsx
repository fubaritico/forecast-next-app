import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import FrontPageContent from './FrontPageContent'
import currentDefaultObservations from './FrontPageContent.stubs'

export default {
  title: 'Pages/FrontPage',
  component: FrontPageContent,
  decorators: [withMainLayout],
} as ComponentMeta<typeof FrontPageContent>

export const Default: ComponentStory<typeof FrontPageContent> = () => (
  <FrontPageContent forecasts={currentDefaultObservations} />
)
