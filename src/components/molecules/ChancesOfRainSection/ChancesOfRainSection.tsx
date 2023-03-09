import React, { FC } from 'react'
import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'
import useNoSsrLineChart from '@Molecules/LineChart/hooks/useNoSsrLineChart'
import SectionTitle from '@Atoms/SectionTitle/SectionTitle'
import { Root } from './ChancesOfRain.styled'

type ChancesOfRainSectionProps = {
  data: ChartData[]
}

const ChancesOfRainSection: FC<ChancesOfRainSectionProps> = ({ data }) => {
  const chartData = useMapChartData(data, '#ffffff', 'chancesOfRain', '%')
  const LineChart = useNoSsrLineChart({
    ...chartData,
    height: 115,
    dataLabelsOffsetY: -7,
    dataLabelsFontSize: '14px',
    ariaLabel: 'Chart showing chances of rain',
  })

  return (
    <Root>
      <SectionTitle title="Chances of rain" />
      <LineChart />
    </Root>
  )
}

export default ChancesOfRainSection
