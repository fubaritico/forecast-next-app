import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withPadding } from '@Decorators/withLayout'
import Thirteen from './Thirteen'

export default {
  title: 'Components/Thirteen',
  component: Thirteen,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding],
} as ComponentMeta<typeof Thirteen>

const Template: ComponentStory<typeof Thirteen> = () => <Thirteen />

export const Default = Template.bind({})
