import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { withLayout } from '@Decorators/withLayout'
import LineChart, { LineChartProps } from './LineChart'

export default {
  title: 'Components/Molecules/LineChart',
  component: LineChart,
  decorators: [withLayout],
} as Meta<typeof LineChart>

type Story = StoryObj<typeof LineChart>

const storyRenderer = (args: LineChartProps) => <LineChart {...args} />

export const Default: Story = {
  render: storyRenderer,
}

Default.args = {
  color: '#ffffff',
  categories: ['NOW', '3pm', '6pm', '9pm', '12am', '3am', '6am'],
  serieName: 'temperatures',
  serieData: [30, 40, 35, 50, 49, 60, 70],
  dataUnits: '°',
}
