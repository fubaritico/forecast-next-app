'use client'

import React, { FC } from 'react'
import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'
import useNoSsrLineChart from '@Molecules/LineChart/hooks/useNoSsrLineChart'
import { Root } from './CurrentObservationsTemperatures.styled'

type CurrentObservationsTemperaturesProps = {
  data: ChartData[]
  height?: string | number
}

const CurrentObservationsTemperatures: FC<
  CurrentObservationsTemperaturesProps
> = ({ data, height }) => {
  const chartData = useMapChartData(data, '#ffffff', 'temperatures', '°')
  const LineChart = useNoSsrLineChart({
    ...chartData,
    height,
    ariaLabel: 'chart showing temperatures forecasts',
  })

  return (
    <Root>
      <LineChart />
    </Root>
  )
}
export default CurrentObservationsTemperatures
