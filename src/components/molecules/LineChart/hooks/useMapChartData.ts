import { LineChartConfigParams } from '@Components/molecules/LineChart/hooks/useLineChartConfig'

const useMapChartData = (
  chartData: ChartData[],
  color: string,
  serieName: string,
  dataUnits: string
): LineChartConfigParams<number[]> => {
  let categories: string[] = []
  let serieData: number[] = []

  if (Array.isArray(chartData)) {
    categories = chartData.map((forecast) => forecast?.timestampLocal?.display)
    serieData = chartData.map((forecast) =>
      Math.round(forecast?.chartValue?.value)
    )
  }

  return {
    color,
    categories,
    serieName,
    serieData,
    dataUnits,
  }
}

export default useMapChartData
