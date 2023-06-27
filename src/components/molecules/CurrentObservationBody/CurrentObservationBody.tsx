'use client'

import { FC } from 'react'
import { getWeatherMediumIcon } from '@Svg/weatherMediumIcons'
import MaxMinTemperatures from '@Molecules/MaxMinTemperatures/MaxMinTemperatures'

export type CurrentObservationBodyProps = {
  temperature?: string
  weatherIcon?: string
  weatherDescription?: string
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
}

const CurrentObservationBody: FC<CurrentObservationBodyProps> = ({
  temperature,
  weatherIcon,
  weatherDescription,
  apparentMinimumTemperature,
  apparentMaximumTemperature,
}) => {
  const Icon = getWeatherMediumIcon(weatherIcon)

  return (
    <section className="flex items-center flex-10 m-4">
      <div className="flex flex-row flex-wrap items-start w-full">
        <div
          className="flex flex-row flex-wrap items-start w-full"
          aria-label="Weather description"
        >
          <div className="w-[48px]">
            {Icon && <Icon aria-hidden className="fill-white" />}
          </div>
          <p className="font-mono font-extralight text-[42px] text-white flex-10 leading-10 py-0 pr-0 pl-2">
            {weatherDescription}
          </p>
        </div>
        <div className="flex flex-row flex-nowrap items-end justify-between w-full">
          <div
            className="font-sans text-[124px] font-extralight leading-none text-white tracking-[-3px]"
            aria-label="Current temperature"
          >
            {parseInt(temperature as string, 10)}
            <sup className="font-sans font-extralight text-[50%] top-[-41px]">
              °
            </sup>
          </div>
          <div className="mb-4">
            <MaxMinTemperatures
              aria-label="Amplitude of temperatures"
              apparentMinimumTemperature={apparentMinimumTemperature}
              apparentMaximumTemperature={apparentMaximumTemperature}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default CurrentObservationBody
