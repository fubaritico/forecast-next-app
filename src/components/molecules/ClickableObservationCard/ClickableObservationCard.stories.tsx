import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withGrid, withPadding } from '@Decorators/withLayout'
import ClickableObservationCard, {
  ClickableObservationCardProps,
} from './ClickableObservationCard'

export default {
  title: 'Components/ClickableObservationCard',
  component: ClickableObservationCard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withGrid],
} as ComponentMeta<typeof ClickableObservationCard>

const Template: ComponentStory<typeof ClickableObservationCard> = (
  args: ClickableObservationCardProps
) => <ClickableObservationCard {...args} />

export const AsAnInternalLink = Template.bind({})
AsAnInternalLink.args = {
  href: '/details/moscow',
  title: 'Moscow',
  description: 'Snowy',
}
