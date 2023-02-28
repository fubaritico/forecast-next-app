import React, { FC } from 'react'
import {
  StyledSectionTitle,
  ForecastsContainer,
  Root,
} from '@Molecules/DailyForecastsSection/DailyForecastsSection.styled'
import DailyForecast from '@Molecules/DailyForecast/DailyForecast'

type DailyForecastsSectionProps = {
  data: MappedForecast[]
}

const DailyForecastsSection: FC<DailyForecastsSectionProps> = ({ data }) => (
  <Root>
    <StyledSectionTitle title="Next 7 days" />
    <ForecastsContainer>
      {data.map(
        ({
          apparentMinimumTemperature,
          apparentMaximumTemperature,
          chancesOfRain,
          weatherIcon,
          timestampLocal,
        }) => (
          <DailyForecast
            apparentMinimumTemperature={apparentMinimumTemperature}
            apparentMaximumTemperature={apparentMaximumTemperature}
            chancesOfRain={chancesOfRain}
            weatherIcon={weatherIcon}
            timestampLocal={timestampLocal}
          />
        )
      )}
    </ForecastsContainer>
  </Root>
)

export default DailyForecastsSection
