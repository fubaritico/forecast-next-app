import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import DetailPageContent from './DetailPageContent'

export default {
  title: 'Pages/DetailPage',
  component: DetailPageContent,
  decorators: [withMainLayout],
} as ComponentMeta<typeof DetailPageContent>

export const Default: ComponentStory<typeof DetailPageContent> = () => (
  <DetailPageContent detailedForecasts={currentObservationPanel} />
)
