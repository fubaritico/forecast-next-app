import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  withMainLayout,
  withStyledComponentsTheme,
} from '@Decorators/withLayout'
import LineChart, { LineChartProps } from './LineChart'

export default {
  title: 'Components/LineChart',
  component: LineChart,
  decorators: [withStyledComponentsTheme, withMainLayout],
} as ComponentMeta<typeof LineChart>

export const Default: ComponentStory<typeof LineChart> = (
  args: LineChartProps
) => <LineChart {...args} />

Default.args = {
  color: '#ffffff',
  categories: ['NOW', '3pm', '6pm', '9pm', '12am', '3am', '6am'],
  serieName: 'temperatures',
  serieData: [30, 40, 35, 50, 49, 60, 70],
  dataUnits: '°',
}
