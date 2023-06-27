import { FC, PropsWithChildren, ReactNode } from 'react'

import { ReactComponent as Icon } from '@Svg/weather/large/t01n.svg'

export type ForecastSmallViewProps = {
  title: ReactNode
  description: ReactNode
  // eslint-disable-next-line react/no-unused-prop-types
  icon?: ReactNode
  // eslint-disable-next-line react/no-unused-prop-types
  code?: string
}

const ForecastSmallView: FC<PropsWithChildren<ForecastSmallViewProps>> = ({
  title,
  description,
}) => (
  <div>
    <div className="w-[128px]">
      <Icon aria-hidden />
    </div>
    <h2 className="font-mono font-semibold">
      {title} <span>-&gt;</span>
    </h2>
    <p className="font-mono m-0 opacity-60 text-[9px] leading-normal max-w-[30ch]">
      {description}
    </p>
  </div>
)

export default ForecastSmallView
