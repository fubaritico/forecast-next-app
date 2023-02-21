import { ApexOptions } from 'apexcharts'
import SVGLinearGradientsDefinitions from '@Components/LineChart/compounds/SVGLinearGradientsDefinitions'

type LineChartConfig = {
  config: ApexOptions
  series: ApexAxisChartSeries
  GradientDefinitions: JSX.Element
}

type SerieData =
  | (number | null)[]
  | {
      x: any
      y: any
      fill?: ApexFill
      fillColor?: string
      strokeColor?: string
      meta?: any
      goals?: any
      barHeightOffset?: number
      columnWidthOffset?: number
    }[]
  | [number, number | null][]
  | [number, (number | null)[]][]
  | number[][]

export type LineChartConfigParams<TDatum extends SerieData> = {
  color: string
  categories: string[]
  serieName: string
  serieData: TDatum
  dataUnits: string
}

export default function useLineChartConfig<TDatum extends SerieData>(
  params: LineChartConfigParams<TDatum>
): LineChartConfig {
  const { color, categories, serieName, serieData, dataUnits } = params

  if (categories.length !== serieData.length) {
    throw Error(
      'The length of categories must be equal to the length of data displayed in the chart'
    )
  }

  const series: ApexAxisChartSeries = [
    {
      name: serieName,
      data: serieData,
    },
  ]

  const chartConfig: ApexOptions = {
    chart: {
      id: `line-chart-${serieName}`,
      toolbar: {
        show: false,
      },
      animations: {
        enabled: false,
      },
      selection: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      type: 'line',
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      categories,
      labels: {
        style: {
          colors: categories.map(() => color),
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      borderColor: `${color}33`,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'round',
      colors: [color],
      width: 1,
      dashArray: 4,
    },
    markers: {
      size: 2,
      strokeOpacity: 0,
      strokeWidth: 5,
      strokeColors: ['#00000000'],
      colors: [color],
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          size: 3,
          fillColor: color,
          strokeColor: `${color}66`,
        },
      ],
    },
    dataLabels: {
      enabled: true,
      offsetY: -7,
      style: {
        colors: [color],
      },
      formatter(value) {
        return `${value}${dataUnits}`
      },
      background: {
        enabled: false,
      },
    },
  }

  return {
    config: chartConfig,
    series,
    GradientDefinitions: (
      <SVGLinearGradientsDefinitions gridGradient={`${color}33`} />
    ),
  }
}
