import { FC } from 'react'
import {
  Root,
  ObservationInformationInGrid,
} from '@Molecules/DetailsSection/DetailsSection.styled'

import { ReactComponent as FeelsLikeIcon } from '@Svg/detail/small/feelsLike.svg'
import { ReactComponent as WindIcon } from '@Svg/detail/small/windSpeed.svg'
import { ReactComponent as HumidityIcon } from '@Svg/detail/small/humidity.svg'
import { ReactComponent as PressureIcon } from '@Svg/detail/small/pressure.svg'
import { ReactComponent as VisibilityIcon } from '@Svg/detail/small/visibility.svg'
import { ReactComponent as DewPointIcon } from '@Svg/detail/small/dewPoint.svg'
import SectionTitle from '@Atoms/SectionTitle/SectionTitle'

type DetailsSectionProps = {
  feelsLike?: string
  winSpeed?: string
  humidity?: string
  pressure?: string
  visibility?: string
  dewPoint?: string
}

const DetailsSection: FC<DetailsSectionProps> = ({
  feelsLike,
  winSpeed,
  humidity,
  pressure,
  visibility,
  dewPoint,
}) => (
  <Root>
    <SectionTitle title="details" />
    <ObservationInformationInGrid
      icon={FeelsLikeIcon}
      label="Feels like"
      value={feelsLike}
    />
    <ObservationInformationInGrid
      icon={WindIcon}
      label="Wind"
      value={winSpeed}
    />
    <ObservationInformationInGrid
      icon={HumidityIcon}
      label="Humidity"
      value={humidity}
    />
    <ObservationInformationInGrid
      icon={PressureIcon}
      label="Pressure"
      value={pressure}
    />
    <ObservationInformationInGrid
      icon={VisibilityIcon}
      label="Visibility"
      value={visibility}
    />
    <ObservationInformationInGrid
      icon={DewPointIcon}
      label="Dew point"
      value={dewPoint}
    />
  </Root>
)

export default DetailsSection
