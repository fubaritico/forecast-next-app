'use client'

import React, { FC } from 'react'
import type { LineChartProps } from '@Molecules/LineChart/LineChart'

import SectionTitle from '@Atoms/SectionTitle'
import LineChart from '@Molecules/LineChart'

import useMapChartData from '@Molecules/LineChart/hooks/useMapChartData'

export type ChancesOfRainSectionProps = {
  data: ChartData[]
}

const ChancesOfRainSection: FC<ChancesOfRainSectionProps> = ({ data }) => {
  const chartData = useMapChartData(data, '#ffffff', 'chancesOfRain', '%')
  const lineChartProps: LineChartProps = {
    ...chartData,
    height: 115,
    dataLabelsOffsetY: -7,
    dataLabelsFontSize: '14px',
    ariaLabel: 'Chart showing chances of rain',
  }

  return (
    <section className="flex flex-col gap-2 m-4">
      <SectionTitle title="Chances of rain" />
      <LineChart {...lineChartProps} />
    </section>
  )
}

export default ChancesOfRainSection
