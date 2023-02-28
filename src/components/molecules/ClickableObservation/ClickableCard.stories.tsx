import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withGrid, withPadding } from '@Decorators/withLayout'
import ClickableCard, { ClickableCardProps } from './ClickableCard'

export default {
  title: 'Components/ClickableCard',
  component: ClickableCard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withGrid],
} as ComponentMeta<typeof ClickableCard>

const Template: ComponentStory<typeof ClickableCard> = (
  args: ClickableCardProps
) => <ClickableCard {...args} />

export const AsAnExternalLink = Template.bind({})
AsAnExternalLink.args = {
  href: 'https://www.google.com',
  title: 'Paris',
  description: 'Mostly cloudy',
  isExternalLink: true,
}

export const AsAnInternalLink = Template.bind({})
AsAnInternalLink.args = {
  href: '#',
  title: 'Moscow',
  description: 'Snowy',
}
