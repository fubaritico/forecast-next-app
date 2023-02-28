import { ComponentType, FC, HTMLAttributes } from 'react'
import {
  IconContainer,
  Label,
  Root,
  Value,
} from './ObservationInformation.styled'

type ObservationInformationProps = {
  value?: string
  label: string
  icon: HTMLAttributes<SVGElement> & ComponentType
  className?: string
}

const ObservationInformation: FC<ObservationInformationProps> = ({
  value,
  label,
  icon: Icon,
  className,
}) => (
  <Root className={className}>
    <IconContainer>{Icon && <Icon />}</IconContainer>
    <Label>{label}</Label>
    <Value>{value || 'N/A'}</Value>
  </Root>
)

export default ObservationInformation
