import { FC, PropsWithChildren, ReactNode } from 'react'
// import Icon from '@Svg/t01n.svg'
import {
  Description,
  IconContainer,
  Title,
} from '@Components/ForecastSmallView/ForecastSmallView.styled'
import { ReactComponent as Icon } from '@Svg/t01n.svg'

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
    <IconContainer>
      <Icon aria-hidden />
    </IconContainer>
    <Title>
      {title} <span>-&gt;</span>
    </Title>
    <Description>{description}</Description>
  </div>
)

export default ForecastSmallView
