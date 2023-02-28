import { ApexOptions } from 'apexcharts'
import SVGLinearGradientsDefinitions from '@Molecules/LineChart/compounds/SVGLinearGradientsDefinitions'

type LineChartConfig = {
  config: ApexOptions
  series: ApexAxisChartSeries
  GradientDefinitions: JSX.Element
}

export type SerieData =
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

export type ExtraLineChartConfigParams = {
  color?: string
  height?: string | number
  dataLabelsFontSize?: string
  dataLabelsOffsetY?: number
}

export type LineChartConfigParams<TDatum extends SerieData> = {
  categories: string[]
  serieName: string
  serieData: TDatum
  dataUnits: string
} & ExtraLineChartConfigParams

export default function useLineChartConfig<TDatum extends SerieData>(
  params: LineChartConfigParams<TDatum>
): LineChartConfig {
  const {
    color,
    categories,
    serieName,
    serieData,
    dataUnits,
    dataLabelsFontSize,
    dataLabelsOffsetY,
  } = params

  console.log('useLineChartConfig - categories: ', categories)

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
      fontFamily: "'Inter', sans-serif",
      type: 'line',
      brush: {
        autoScaleYaxis: true,
      },
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
          fontSize: '14px',
          colors: color && categories.map(() => color),
          fontWeight: 'normal',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      borderColor: color && `${color}33`,
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
      colors: color ? [color] : undefined,
      width: 1,
      dashArray: 4,
    },
    markers: {
      size: 2,
      strokeOpacity: 0,
      strokeWidth: 5,
      strokeColors: ['#00000000'],
      colors: color ? [color] : undefined,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          size: 3,
          fillColor: color,
          strokeColor: color && `${color}66`,
        },
      ],
    },
    dataLabels: {
      enabled: true,
      offsetY: dataLabelsOffsetY,
      style: {
        fontSize: dataLabelsFontSize,
        fontWeight: 'normal',
        colors: color ? [color] : undefined,
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
      <SVGLinearGradientsDefinitions gradientColor={color} />
    ),
  }
}
