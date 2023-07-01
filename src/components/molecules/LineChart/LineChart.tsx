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

/**
 * Update issues :
 * ---------------
 * @see https://stackoverflow.com/questions/71841390/how-to-fix-react-apex-chart-initial-mount-delay
 *
 * if you have to fetch, get or update data from somewhere try resizing the window object
 * in the fetch/get/update data function. This will enforce to (re)render data
 *
 * window.dispatchEvent(new Event('resize'));
 *
 */
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
