import { FC, PropsWithChildren } from 'react'
import Chart from 'react-apexcharts'
import useLineChartConfig, {
  LineChartConfigParams,
} from './hooks/useLineChartConfig'

import ChartLineWrapper from './LineChart.styled'

export type LineChartProps = LineChartConfigParams<number[]> & {
  color?: string
}

const LineChart: FC<PropsWithChildren<LineChartProps>> = ({
  color,
  categories,
  serieName,
  serieData,
  dataUnits,
}) => {
  const { config, series, GradientDefinitions } = useLineChartConfig({
    color,
    categories,
    serieName,
    serieData,
    dataUnits,
  })

  return (
    <>
      {GradientDefinitions}
      <ChartLineWrapper aria-label="chart showing temperatures forecasts">
        <Chart options={config} series={series} />
      </ChartLineWrapper>
    </>
  )
}

export default LineChart
