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
          apparentMaximumTemperature,
          apparentMinimumTemperature,
          chancesOfRain,
          id,
          timestampLocal,
          weatherIcon,
        }) => (
          <DailyForecast
            key={id}
            apparentMinimumTemperature={apparentMinimumTemperature}
            apparentMaximumTemperature={apparentMaximumTemperature}
            chancesOfRain={chancesOfRain}
            timestampLocal={timestampLocal}
            weatherIcon={weatherIcon}
          />
        )
      )}
    </ForecastsContainer>
  </Root>
)

export default DailyForecastsSection
