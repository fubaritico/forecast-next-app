import { FC } from 'react'
import {
  Degrees,
  MaxTemperature,
  MinTemperature,
  Root,
  Separator,
} from './MaxMinTemperatures.styled'

export type MaxMinTemperaturesProps = {
  apparentMaximumTemperature?: string
  apparentMinimumTemperature?: string
}

const MaxMinTemperatures: FC<MaxMinTemperaturesProps> = ({
  apparentMinimumTemperature,
  apparentMaximumTemperature,
}) => (
  <Root>
    <MaxTemperature aria-label="maximum temperature">
      {parseInt(apparentMaximumTemperature as string, 10)}
      <Degrees>°</Degrees> C
    </MaxTemperature>
    <Separator />
    <MinTemperature aria-label="minimum temperature">
      {parseInt(apparentMinimumTemperature as string, 10)}
      <Degrees>°</Degrees> C
    </MinTemperature>
  </Root>
)

export default MaxMinTemperatures
