import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'

import AllIcons, { AllIconsProps } from './AllIcons'

export default {
  title: 'Design System/AllIcons',
  component: AllIcons,
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof AllIcons>

type Story = StoryObj<typeof AllIcons>

const storyRenderer = (args: AllIconsProps) => <AllIcons {...args} />

export const Small: Story = {
  render: storyRenderer,
}
Small.storyName = 'Small weather icons'
Small.args = {
  iconGroupName: 'WeatherSmall',
  iconsSize: 32,
  title: 'Small weather icons (daily forecast)',
}

export const Medium: Story = {
  render: storyRenderer,
}
Medium.storyName = 'Medium weather icons'
Medium.args = {
  iconGroupName: 'WeatherMedium',
  iconsSize: 48,
  title: 'Medium icons (current observation)',
}

export const Large: Story = {
  render: storyRenderer,
}
Large.storyName = 'Large weather icons'
Large.args = {
  iconGroupName: 'WeatherLarge',
  iconsSize: 64,
  title: 'Large weather icons (not yet defined where to be used)',
}

export const DetailSmall: Story = {
  render: storyRenderer,
}
DetailSmall.storyName = 'Small detail panel UI'
DetailSmall.args = {
  iconGroupName: 'DetailSmall',
  iconsSize: 32,
  title: 'Small icons used in detail panel',
}
