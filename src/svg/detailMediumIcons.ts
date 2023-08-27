// GENERATED CODE - DO NOT MODIFY BY HAND
// For all changes please modify scripts/iconsGroup.template.txt file first and regenerate.
import svgLazyLoader from '@Utils/client/icons'

const FeelsLike = svgLazyLoader('detail/medium/feelsLike.svg')
const Humidity = svgLazyLoader('detail/medium/humidity.svg')
const Visibility = svgLazyLoader('detail/medium/visibility.svg')
const WindSpeed = svgLazyLoader('detail/medium/windSpeed.svg')

export const ALL_DETAIL_MEDIUM_ICONS = [
  'feelsLike',
  'humidity',
  'visibility',
  'windSpeed',
] as const

export type DetailMediumIcon = (typeof ALL_DETAIL_MEDIUM_ICONS)[number]

const isDetailMediumIcon = (
  DetailMediumIconKey: string
): DetailMediumIconKey is DetailMediumIcon =>
  ALL_DETAIL_MEDIUM_ICONS.includes(DetailMediumIconKey as DetailMediumIcon)

const ICONS: LazyIconsGroup<DetailMediumIcon> = {
  feelsLike: FeelsLike,
  humidity: Humidity,
  visibility: Visibility,
  windSpeed: WindSpeed,
}

/**
 * Will fetch and load one icon by providing its name, return undefined if icon is not found
 * @param {string | undefined} DetailMediumKey the icon component
 * @returns LazyIcon | undefined
 */
export const getDetailMediumIcon = (
  DetailMediumKey: string | undefined
): LazyIcon | undefined =>
  DetailMediumKey && isDetailMediumIcon(DetailMediumKey)
    ? ICONS[DetailMediumKey]
    : undefined

/**
 * Will return all icons components of the icon group stored in an object
 * @returns LazyIconsGroup<DetailMediumIcon>
 */
export const getDetailMediumIcons = (): LazyIconsGroup<DetailMediumIcon> =>
  ICONS
