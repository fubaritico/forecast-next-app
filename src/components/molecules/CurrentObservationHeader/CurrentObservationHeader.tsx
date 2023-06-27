'use client'

import { FC, MouseEventHandler } from 'react'

import { ReactComponent as MenuIcon } from '@Svg/detail/small/menu.svg'
import { ReactComponent as MoreIcon } from '@Svg/detail/small/more.svg'

type CurrentObservationHeaderProps = {
  cityName?: string
  date?: string
  onMenuClick?: MouseEventHandler
  onMoreClick?: MouseEventHandler
}
const CurrentObservationHeader: FC<CurrentObservationHeaderProps> = ({
  cityName,
  date,
  onMenuClick,
  onMoreClick,
}) => (
  <header className="flex flex-row flex-nowrap justify-between items-start m-2">
    {onMenuClick && (
      <button
        aria-label="Menu button"
        className="appearance-none cursor-pointer w-8 border-0 border-none"
        onClick={onMenuClick}
        type="button"
      >
        <MenuIcon aria-hidden className="fill-white" />
      </button>
    )}
    <div
      className="font-mono flex flex-row flex-wrap justify-center items-start flex-10"
      aria-label="location and date"
    >
      <h1 className="font-extralight text-[32px] text-white text-center w-full">
        {cityName}
      </h1>
      <p
        className="font-light text-[20px] text-white opacity-70"
        aria-label="Date"
      >
        {date}
      </p>
    </div>
    {onMoreClick && (
      <button
        aria-label="More information button"
        className="appearance-none cursor-pointer w-8 border-0 border-none"
        onClick={onMoreClick}
        type="button"
      >
        <MoreIcon aria-hidden className="fill-white" />
      </button>
    )}
  </header>
)

export default CurrentObservationHeader
