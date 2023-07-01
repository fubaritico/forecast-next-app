import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout, withPadding } from '@Decorators/withLayout'
import DynamicIcons, { DynamicIconsProps } from './DynamicIcons'
import { smallIcons, mediumIcons, largeIcons } from './iconsGroups'

export default {
  title: 'Design System/DynamicIcons',
  component: DynamicIcons,
  parameters: {
    layout: 'fullscreen',
    docs: { disable: true },
  },
  decorators: [withPadding, withLayout],
} as Meta<typeof DynamicIcons>

type Story = StoryObj<typeof DynamicIcons>

const storyRenderer = (args: DynamicIconsProps) => <DynamicIcons {...args} />

export const Small: Story = {
  render: storyRenderer,
}

Small.storyName = 'Small weather icons'
Small.args = {
  path: 'weather/small',
  size: 32,
  title: 'Small weather icons (daily forecast)',
  iconsNames: smallIcons,
}

export const Medium: Story = {
  render: storyRenderer,
}
Medium.storyName = 'Medium weather icons'
Medium.args = {
  path: 'weather/medium',
  iconsNames: mediumIcons,
  size: 48,
  title: 'Medium icons (current observation)',
}

export const Large: Story = {
  render: storyRenderer,
}
Large.storyName = 'Large weather icons'
Large.args = {
  path: 'weather/large',
  iconsNames: largeIcons,
  size: 64,
  title: 'Large weather icon (not yet defined where to be used',
}
