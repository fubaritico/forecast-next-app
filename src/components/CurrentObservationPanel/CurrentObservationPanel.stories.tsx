import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayout, withPadding } from '@Decorators/withLayout'
import { currentObservationPanel } from '@Stubs/details'
import CurrentObservationPanel, {
  CurrentObservationPanelProps,
} from './CurrentObservationPanel'

export default {
  title: 'Components/CurrentObservationPanel',
  component: CurrentObservationPanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withPadding, withMainLayout],
} as ComponentMeta<typeof CurrentObservationPanel>
const Template: ComponentStory<typeof CurrentObservationPanel> = (
  args: CurrentObservationPanelProps
) => <CurrentObservationPanel {...args} />

export const Default = Template.bind({})
Default.args = {
  data: currentObservationPanel,
}
