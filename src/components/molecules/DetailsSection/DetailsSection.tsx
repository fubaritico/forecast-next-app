import { FC } from 'react'

import { ReactComponent as FeelsLikeIcon } from '@Svg/detail/small/feelsLike.svg'
import { ReactComponent as WindIcon } from '@Svg/detail/small/windSpeed.svg'
import { ReactComponent as HumidityIcon } from '@Svg/detail/small/humidity.svg'
import { ReactComponent as PressureIcon } from '@Svg/detail/small/pressure.svg'
import { ReactComponent as VisibilityIcon } from '@Svg/detail/small/visibility.svg'
import { ReactComponent as DewPointIcon } from '@Svg/detail/small/dewPoint.svg'

import SectionTitle from '@Atoms/SectionTitle'
import ObservationInformation from '@Molecules/ObservationInformation/ObservationInformation'

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
  <section className="flex flex-row flex-wrap justify-between gap-2 m-4">
    <SectionTitle title="details" />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={FeelsLikeIcon}
      label="Feels like"
      value={feelsLike}
    />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={WindIcon}
      label="Wind"
      value={winSpeed}
    />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={HumidityIcon}
      label="Humidity"
      value={humidity}
    />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={PressureIcon}
      label="Pressure"
      value={pressure}
    />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={VisibilityIcon}
      label="Visibility"
      value={visibility}
    />
    <ObservationInformation
      className="flex-1 basis-[31%]"
      icon={DewPointIcon}
      label="Dew point"
      value={dewPoint}
    />
  </section>
)

export default DetailsSection
