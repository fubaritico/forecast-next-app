import { FC, MouseEventHandler } from 'react'
import { ReactComponent as MenuIcon } from '@Svg/detail/small/menu.svg'
import { ReactComponent as MoreIcon } from '@Svg/detail/small/more.svg'
import {
  Date,
  Header,
  Location,
  LocationAndDate,
  MenuButton,
  MoreButton,
} from './CurrentObservationHeader.styled'

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
  <Header>
    {onMenuClick && (
      <MenuButton role="button" aria-label="Menu button" onClick={onMenuClick}>
        <MenuIcon aria-hidden />
      </MenuButton>
    )}
    <LocationAndDate aria-label="city and date">
      <Location>{cityName}</Location>
      <Date aria-label="Date">{date}</Date>
    </LocationAndDate>
    {onMoreClick && (
      <MoreButton
        role="button"
        aria-label="More information button"
        onClick={onMoreClick}
      >
        <MoreIcon aria-hidden />
      </MoreButton>
    )}
  </Header>
)

export default CurrentObservationHeader
