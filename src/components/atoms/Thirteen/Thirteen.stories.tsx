import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withPadding } from '@Decorators/withLayout'
import Thirteen from './Thirteen'

export default {
  title: 'Components/Atoms/Thirteen',
  component: Thirteen,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding],
} as Meta<typeof Thirteen>

type Story = StoryObj<typeof Thirteen>

const storyRenderer = () => <Thirteen />

export const Default: Story = {
  render: storyRenderer,
}
