import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withMainLayout } from '@Decorators/withLayout'
import Map from './Map'

export default {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on.*' },
  },
  decorators: [withMainLayout],
  argTypes: {
    onClick: { action: 'clicked' },
    onIdle: { action: 'idle' },
  },
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />

export const Default = Template.bind({})
