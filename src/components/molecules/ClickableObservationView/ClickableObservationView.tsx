import { FC, PropsWithChildren, ReactNode } from 'react'
import { ReactComponent as Icon } from '@Svg/weather/large/t01n.svg'
import {
  Description,
  IconContainer,
  Title,
} from './ClickableObservationView.styled'

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
    <IconContainer>
      <Icon aria-hidden />
    </IconContainer>
    <Title>
      {title} <span>-&gt;</span>
    </Title>
    <Description>{description}</Description>
  </div>
)

export default ClickableObservationView
