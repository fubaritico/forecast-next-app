'use client'

import { FC } from 'react'
import clsx from 'clsx'

export type MaxMinTemperaturesProps = {
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
  size?: 'small' | 'normal'
  hasUnit?: boolean
}

const MaxMinTemperatures: FC<MaxMinTemperaturesProps> = ({
  apparentMinimumTemperature,
  apparentMaximumTemperature,
  size = 'normal',
  hasUnit = true,
}) => (
  <div
    className={clsx('flex flex-row flex-wrap', {
      'flex-1 !flex-col': size === 'normal',
      'flex-01 justify-end': size === 'normal',
    })}
  >
    <div
      className={clsx(
        'font-mono font-extralight text-[24px] text-white leading-none text-right w-full',
        {
          'text-[24px]': size === 'normal',
          '!text-[16px] font-light !text-center': size === 'small',
        }
      )}
      aria-label="maximum temperature"
    >
      {apparentMaximumTemperature &&
        (Math.round(
          parseFloat(apparentMaximumTemperature)
        ) as unknown as string)}
      <sup className="font-[inherit]text-[50%] text-inherit !top-[-3px]">°</sup>
      {hasUnit && <> C</>}
    </div>
    <div className="h-[1px] w-full bg-white opacity-30 my-1 mx-0" />
    <div
      className={clsx(
        'font-mono font-extralight text-[24px] text-white leading-none text-right w-full',
        {
          'text-[24px]': size === 'normal',
          '!text-[16px] font-light opacity-50 !text-center': size === 'small',
        }
      )}
      aria-label="minimum temperature"
    >
      {apparentMinimumTemperature &&
        (Math.round(
          parseFloat(apparentMinimumTemperature)
        ) as unknown as string)}
      <sup className="font-[inherit]text-[50%] text-inherit !top-[-3px]">°</sup>
      {hasUnit && <> C</>}
    </div>
  </div>
)

export default MaxMinTemperatures
