// GENERATED CODE - DO NOT MODIFY BY HAND
// For all changes please modify scripts/iconsGroup.template.txt file first and regenerate.
import svgLazyLoader from '@Utils/icons'

const DewPoint = svgLazyLoader('detail/small/dewPoint.svg')
const FeelsLike = svgLazyLoader('detail/small/feelsLike.svg')
const Humidity = svgLazyLoader('detail/small/humidity.svg')
const Menu = svgLazyLoader('detail/small/menu.svg')
const More = svgLazyLoader('detail/small/more.svg')
const Pressure = svgLazyLoader('detail/small/pressure.svg')
const Visibility = svgLazyLoader('detail/small/visibility.svg')
const WindSpeed = svgLazyLoader('detail/small/windSpeed.svg')

export const ALL_DETAIL_SMALL_ICONS = [
  'dewPoint',
  'feelsLike',
  'humidity',
  'menu',
  'more',
  'pressure',
  'visibility',
  'windSpeed',
] as const

export type DetailSmallIcon = typeof ALL_DETAIL_SMALL_ICONS[number]

const isDetailSmallIcon = (
  DetailSmallIconKey: string
): DetailSmallIconKey is DetailSmallIcon =>
  ALL_DETAIL_SMALL_ICONS.includes(DetailSmallIconKey as DetailSmallIcon)

const ICONS: LazyIconsGroup<DetailSmallIcon> = {
  dewPoint: DewPoint,
  feelsLike: FeelsLike,
  humidity: Humidity,
  menu: Menu,
  more: More,
  pressure: Pressure,
  visibility: Visibility,
  windSpeed: WindSpeed,
}

/**
 * Will fetch and load one icon by providing its name, return undefined if icon is not found
 * @param {string | undefined} DetailSmallKey the icon component
 * @returns LazyIcon | undefined
 */
export const getDetailSmallIcon = (
  DetailSmallKey: string | undefined
): LazyIcon | undefined =>
  DetailSmallKey && isDetailSmallIcon(DetailSmallKey)
    ? ICONS[DetailSmallKey]
    : undefined

/**
 * Will return all icons components of the icon group stored in an object
 * @returns LazyIconsGroup<DetailSmallIcon>
 */
export const getDetailSmallIcons = (): LazyIconsGroup<DetailSmallIcon> => ICONS
