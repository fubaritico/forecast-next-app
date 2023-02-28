import React, { FC } from 'react'
import LineChart from '@Molecules/LineChart/LineChart'
import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'
import { Root } from './CurrentObservationsTemperatures.styled'

type CurrentObservationsTemperaturesProps = {
  data: ChartData[]
  height?: string | number
}

const CurrentObservationsTemperatures: FC<
  CurrentObservationsTemperaturesProps
> = ({ data, height }) => {
  const chartData = useMapChartData(data, '#ffffff', 'temperatures', '°')

  return (
    <Root>
      <LineChart
        {...chartData}
        height={height}
        ariaLabel="chart showing temperatures forecasts"
      />
    </Root>
  )
}
export default CurrentObservationsTemperatures
