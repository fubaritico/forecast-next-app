import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import FrontPageContent, { FrontPageContentProps } from './FrontPageContent'
import currentDefaultObservations from './FrontPageContent.stubs'

export default {
  title: 'PageContent/FrontPage',
  component: FrontPageContent,
  decorators: [withMainLayout],
} as ComponentMeta<typeof FrontPageContent>

const Template: ComponentStory<typeof FrontPageContent> = (
  args: FrontPageContentProps
) => <FrontPageContent {...args} />

export const Default = Template.bind({})
Default.args = {
  forecasts: currentDefaultObservations,
}
