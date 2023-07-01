import React, { FC } from 'react'

import DailyForecast from '@Molecules/DailyForecast'
import SectionTitle from '@Atoms/SectionTitle'

export type DailyForecastsSectionProps = {
  data: MappedForecast[]
}

const DailyForecastsSection: FC<DailyForecastsSectionProps> = ({ data }) => (
  <section className="flex flex-row flex-wrap justify-between gap-2 m-4">
    <SectionTitle title="Next 7 days" />
    <div className="flex flex-row flex-nowrap w-full">
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
            weatherIconName={weatherIcon}
          />
        )
      )}
    </div>
  </section>
)

export default DailyForecastsSection
