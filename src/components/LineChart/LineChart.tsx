import { FC, PropsWithChildren } from 'react'
import Chart from 'react-apexcharts'
import useLineChartConfig, {
  LineChartConfigParams,
} from './hooks/useLineChartConfig'

// eslint-disable-next-line import/no-named-as-default
import ChartLineWrapper from './LineChart.styled'

export type LineChartProps = LineChartConfigParams<number[]> & {
  color: string
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
      <ChartLineWrapper data-name="line-chart">
        <Chart options={config} series={series} width={500} height={320} />
      </ChartLineWrapper>
    </>
  )
}

export default LineChart
