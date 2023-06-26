// GENERATED CODE - DO NOT MODIFY BY HAND
// For all changes please modify scripts/iconsGroup.template.txt file first and regenerate.
import svgLazyLoader from '@Utils/icons'

const Placeholder = svgLazyLoader('weather/large/placeholder.svg')
const T01d = svgLazyLoader('weather/large/t01d.svg')
const T01n = svgLazyLoader('weather/large/t01n.svg')
const T02d = svgLazyLoader('weather/large/t02d.svg')
const T02n = svgLazyLoader('weather/large/t02n.svg')
const T03d = svgLazyLoader('weather/large/t03d.svg')
const T03n = svgLazyLoader('weather/large/t03n.svg')

export const ALL_WEATHER_LARGE_ICONS = [
  'placeholder',
  't01d',
  't01n',
  't02d',
  't02n',
  't03d',
  't03n',
] as const

export type WeatherLargeIcon = (typeof ALL_WEATHER_LARGE_ICONS)[number]

const isWeatherLargeIcon = (
  WeatherLargeIconKey: string
): WeatherLargeIconKey is WeatherLargeIcon =>
  ALL_WEATHER_LARGE_ICONS.includes(WeatherLargeIconKey as WeatherLargeIcon)

const ICONS: LazyIconsGroup<WeatherLargeIcon> = {
  placeholder: Placeholder,
  t01d: T01d,
  t01n: T01n,
  t02d: T02d,
  t02n: T02n,
  t03d: T03d,
  t03n: T03n,
}

/**
 * Will fetch and load one icon by providing its name, return undefined if icon is not found
 * @param {string | undefined} WeatherLargeKey the icon component
 * @returns LazyIcon | undefined
 */
export const getWeatherLargeIcon = (
  WeatherLargeKey: string | undefined
): LazyIcon | undefined =>
  WeatherLargeKey && isWeatherLargeIcon(WeatherLargeKey)
    ? ICONS[WeatherLargeKey]
    : undefined

/**
 * Will return all icons components of the icon group stored in an object
 * @returns LazyIconsGroup<WeatherLargeIcon>
 */
export const getWeatherLargeIcons = (): LazyIconsGroup<WeatherLargeIcon> =>
  ICONS
