import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { Props } from 'react-apexcharts'
import type { LineChartProps } from '@Molecules/LineChart/LineChart'

const useNoSsrLineChart = (props: LineChartProps): ComponentType<Props> => {
  const LineChart = dynamic(() => import('../LineChart'), { ssr: false })

  const SuspenseLazyChart: ComponentType<Props> = () => <LineChart {...props} />

  return SuspenseLazyChart
}

export default useNoSsrLineChart
