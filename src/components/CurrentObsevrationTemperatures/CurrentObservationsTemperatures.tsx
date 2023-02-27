import React, { FC } from 'react'
import LineChart from '@Components/LineChart/LineChart'
import useMapChartData from '@Components/LineChart/hooks/useMapChartData'

type CurrentObservationsTemperaturesProps = {
  data: ChartData[]
}

const CurrentObservationsTemperatures: FC<
  CurrentObservationsTemperaturesProps
> = ({ data }) => {
  const chartData = useMapChartData(data, '#ffffff', 'temperatures', '°')

  return <LineChart {...chartData} />
}
export default CurrentObservationsTemperatures
