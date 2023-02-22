import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayout, withPadding } from '@Decorators/withLayout'
import DynamicIcons from './DynamicIcons'
import { smallIcons, mediumIcons, largeIcons } from './iconsGroups'

export default {
  title: 'Design System/DynamicIcons',
  component: DynamicIcons,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withMainLayout],
} as ComponentMeta<typeof DynamicIcons>
const Template: ComponentStory<typeof DynamicIcons> = (args) => (
  <DynamicIcons {...args} />
)

export const Small = Template.bind({})
Small.storyName = 'Small weather icons'
Small.args = {
  path: 'weather/small',
  size: 32,
  title: 'Small weather icons (daily forecast)',
  iconsNames: smallIcons,
}

export const Medium = Template.bind({})
Medium.storyName = 'Medium weather icons'
Medium.args = {
  path: 'weather/medium',
  iconsNames: mediumIcons,
  size: 48,
  title: 'Medium icons (current observation)',
}

export const Large = Template.bind({})
Large.storyName = 'Large weather icons'
Large.args = {
  path: 'weather/large',
  iconsNames: largeIcons,
  size: 64,
  title: 'Large weather icon (not yet defined where to be used',
}
