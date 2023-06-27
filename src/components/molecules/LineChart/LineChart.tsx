import './styles.css'
import { FC, PropsWithChildren } from 'react'
import Chart from 'react-apexcharts'
import useLineChartConfig, {
  ExtraLineChartConfigParams,
  LineChartConfigParams,
} from './hooks/useLineChartConfig'

export type LineChartProps = LineChartConfigParams<number[]> &
  ExtraLineChartConfigParams & {
    ariaLabel?: string
  }

const LineChart: FC<PropsWithChildren<LineChartProps>> = ({
  ariaLabel,
  height,
  dataLabelsFontSize = '18px',
  dataLabelsOffsetY = -10,
  ...rest
}) => {
  const { config, series, GradientDefinitions } = useLineChartConfig({
    dataLabelsOffsetY,
    dataLabelsFontSize,
    ...rest,
  })

  return (
    <>
      {GradientDefinitions}
      <div className="chart-wrapper" aria-label={ariaLabel}>
        <Chart options={config} series={series} height="100%" />
      </div>
    </>
  )
}

export default LineChart
