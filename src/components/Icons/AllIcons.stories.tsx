import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayout, withPadding } from '@Decorators/withLayout'

import AllIcons, { AllIconsProps } from './AllIcons'

export default {
  title: 'Design System/AllIcons',
  component: AllIcons,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withMainLayout],
} as ComponentMeta<typeof AllIcons>

const Template: ComponentStory<typeof AllIcons> = (args: AllIconsProps) => (
  <AllIcons {...args} />
)

export const Small = Template.bind({})
Small.storyName = 'Small weather icons'
Small.args = {
  iconGroupName: 'WeatherSmall',
  iconsSize: 32,
  title: 'Small weather icons (daily forecast)',
}

export const Medium = Template.bind({})
Medium.storyName = 'Medium weather icons'
Medium.args = {
  iconGroupName: 'WeatherMedium',
  iconsSize: 48,
  title: 'Medium icons (current observation)',
}

export const Large = Template.bind({})
Large.storyName = 'Large weather icons'
Large.args = {
  iconGroupName: 'WeatherLarge',
  iconsSize: 64,
  title: 'Large weather icons (not yet defined where to be used)',
}

export const DetailSmall = Template.bind({})
DetailSmall.storyName = 'Small detail panel UI'
DetailSmall.args = {
  iconGroupName: 'DetailSmall',
  iconsSize: 32,
  title: 'Small icons used in detail panel',
}
