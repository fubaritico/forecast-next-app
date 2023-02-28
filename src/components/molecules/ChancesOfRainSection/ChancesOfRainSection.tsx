import React, { FC } from 'react'
import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'
import LineChart from '@Molecules/LineChart/LineChart'
import SectionTitle from '@Atoms/SectionTitle/SectionTitle'
import { Root } from './ChancesOfRain.styled'

type ChancesOfRainSectionProps = {
  data: ChartData[]
}

const ChancesOfRainSection: FC<ChancesOfRainSectionProps> = ({ data }) => {
  const chartData = useMapChartData(data, '#ffffff', 'chancesOfRain', '%')

  return (
    <Root>
      <SectionTitle title="Chances of rain" />
      <LineChart
        {...chartData}
        height={115}
        dataLabelsOffsetY={-7}
        dataLabelsFontSize="14px"
        ariaLabel="Chart showing chances of rain"
      />
    </Root>
  )
}

export default ChancesOfRainSection
