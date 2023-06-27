'use client'

import React, { FC } from 'react'
import MaxMinTemperatures from '@Molecules/MaxMinTemperatures/MaxMinTemperatures'
import DynamicIcon from '@Atoms/DynamicIcon'

export type DailyForecastProps = {
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
  chancesOfRain?: string
  weatherIconName?: string
  timestampLocal?: DateProps
}

const DailyForecast: FC<DailyForecastProps> = ({
  apparentMaximumTemperature,
  apparentMinimumTemperature,
  weatherIconName,
  chancesOfRain,
  timestampLocal,
}) => (
  <div className="flex flex-row flex-wrap flex-0 justify-center">
    {timestampLocal && (
      <span className="text-[13px] font-mono font-normal text-center text-white w-full mb-2">
        {timestampLocal.weekDay}
      </span>
    )}
    <span className="text-[12px] font-mono font-light text-center text-white w-full min-h-[15px]">
      {chancesOfRain}
    </span>
    <div className="h-[32px] w-[32px] mb-2">
      {weatherIconName && (
        <DynamicIcon
          aria-hidden
          className="fill-white"
          name={weatherIconName}
          path="weather/small"
        />
      )}
    </div>
    <MaxMinTemperatures
      apparentMinimumTemperature={apparentMinimumTemperature}
      apparentMaximumTemperature={apparentMaximumTemperature}
      size="small"
      hasUnit={false}
    />
  </div>
)

export default DailyForecast
