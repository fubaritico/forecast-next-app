import React, { FC } from 'react'
import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'
import useNoSsrLineChart from '@Molecules/LineChart/hooks/useNoSsrLineChart'
import SectionTitle from '@Atoms/SectionTitle'

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
    <section className="flex flex-row flex-wrap gap-2 m-4">
      <SectionTitle title="Chances of rain" />
      <LineChart />
    </section>
  )
}

export default ChancesOfRainSection
