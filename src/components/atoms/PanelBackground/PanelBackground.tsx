'use client'

import { FC, PropsWithChildren } from 'react'
import { WEATHER_GRADIENTS } from './gradients'

type PanelBackgroundProps = {
  /** weather icon name as a basis to choose gradient colors according to current weather */
  weatherIconName: string
}

const createBackgroundGradient = (weather: string): Record<string, string> => ({
  backgroundColor: `rgb(${WEATHER_GRADIENTS[weather][0]})`,
  background: `linear-gradient(180deg, rgb(${WEATHER_GRADIENTS[weather][0]}) 0%, rgb(${WEATHER_GRADIENTS[weather][1]}) 30%, rgb(${WEATHER_GRADIENTS[weather][3]}) 63%, rgb(${WEATHER_GRADIENTS[weather][2]}) 100%)`,
})

const PanelBackground: FC<PropsWithChildren<PanelBackgroundProps>> = ({
  children,
  weatherIconName,
}) => (
  <article
    className="flex flex-col p-2 min-w-[320px] max-w-[360px] h-[640px]"
    style={createBackgroundGradient(weatherIconName)}
  >
    {children}
  </article>
)

export default PanelBackground
