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
  size?: 'small' | 'normal'
  hasUnit?: boolean
}

const MaxMinTemperatures: FC<MaxMinTemperaturesProps> = ({
  apparentMinimumTemperature,
  apparentMaximumTemperature,
  size = 'normal',
  hasUnit = true,
}) => (
  <Root size={size}>
    <MaxTemperature aria-label="maximum temperature">
      {apparentMaximumTemperature &&
        (Math.round(
          parseFloat(apparentMaximumTemperature)
        ) as unknown as string)}
      <Degrees>°</Degrees>
      {hasUnit && <> C</>}
    </MaxTemperature>
    <Separator />
    <MinTemperature aria-label="minimum temperature">
      {apparentMinimumTemperature &&
        (Math.round(
          parseFloat(apparentMinimumTemperature)
        ) as unknown as string)}
      <Degrees>°</Degrees>
      {hasUnit && <> C</>}
    </MinTemperature>
  </Root>
)

export default MaxMinTemperatures
