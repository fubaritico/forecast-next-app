import { FC } from 'react'
import PanelBackground from '@Atoms/PanelBackground/PanelBackground'
import DetailsSection from '@Molecules/DetailsSection/DetailsSection'
import ChancesOfRainSection from '@Molecules/ChancesOfRainSection/ChancesOfRainSection'
import DailyForecastsSection from '@Molecules/DailyForecastsSection/DailyForecastsSection'

export type MoreDetailsPanelProps = {
  weather: string
  dailyForecasts: MappedForecast[]
  chancesOfRain: ChartData[]
  details: {
    feelsLike?: string
    winSpeed?: string
    humidity?: string
    pressure?: string
    visibility?: string
    dewPoint?: string
  }
}

const MoreDetailsPanel: FC<MoreDetailsPanelProps> = ({
  weather,
  details,
  dailyForecasts,
  chancesOfRain,
}) => (
  <PanelBackground weather={weather as string}>
    <DetailsSection {...details} />
    <ChancesOfRainSection data={chancesOfRain} />
    <DailyForecastsSection data={dailyForecasts} />
  </PanelBackground>
)

export default MoreDetailsPanel
