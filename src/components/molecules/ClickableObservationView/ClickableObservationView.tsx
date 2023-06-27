import { FC, PropsWithChildren, ReactNode } from 'react'
import { ReactComponent as Icon } from '@Svg/weather/large/t01n.svg'

export type ClickableObservationViewProps = {
  title: ReactNode
  description: ReactNode
  // eslint-disable-next-line react/no-unused-prop-types
  icon?: ReactNode
  // eslint-disable-next-line react/no-unused-prop-types
  code?: string
}

const ClickableObservationView: FC<
  PropsWithChildren<ClickableObservationViewProps>
> = ({ title, description }) => (
  <div>
    <div className="w-[128px]">
      <Icon aria-hidden />
    </div>
    <h2 className="font-mono font-medium mb-0.5">
      {title} <span>-&gt;</span>
    </h2>
    <p className="font-mono font-normal opacity-60 text-[0.9rem] leading-normal max-w-[30ch] m-0">
      {description}
    </p>
  </div>
)

export default ClickableObservationView
