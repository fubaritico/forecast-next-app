// GENERATED CODE - DO NOT MODIFY BY HAND
// For all changes please modify scripts/iconsGroups.template.txt file first and regenerate.

import { getDetailMediumIcons } from './detailMediumIcons'
import { getDetailSmallIcons } from './detailSmallIcons'
import { getWeatherLargeIcons } from './weatherLargeIcons'
import { getWeatherMediumIcons } from './weatherMediumIcons'
import { getWeatherSmallIcons } from './weatherSmallIcons'

const ICONS_GROUPS = {
  DetailMedium: getDetailMediumIcons,
  DetailSmall: getDetailSmallIcons,
  WeatherLarge: getWeatherLargeIcons,
  WeatherMedium: getWeatherMediumIcons,
  WeatherSmall: getWeatherSmallIcons,
} as const

export type IconsGroup = keyof typeof ICONS_GROUPS

/**
 * Check if a given icon group exists (or is defined)
 * @param {string} iconsGroup The icon group name
 * @returns boolean
 */
const isIconsGroup = (iconsGroupKey: string): iconsGroupKey is IconsGroup =>
  (Object.keys(ICONS_GROUPS) as IconsGroup[]).includes(
    iconsGroupKey as IconsGroup
  )

/**
 * Check if icon is part of a given icon group
 * @param {string} iconKey The icon name
 * @param {ReturnType<typeof ICONS_GROUPS[IconsGroup]>} iconsGroup The icon group name
 * @returns boolean
 */
const isIconOfIconsGroup = (
  iconKey: string,
  iconsGroup: ReturnType<(typeof ICONS_GROUPS)[IconsGroup]>
): iconKey is keyof typeof iconsGroup =>
  (Object.keys(iconsGroup) as (keyof typeof iconsGroup)[]).includes(
    iconKey as keyof typeof iconsGroup
  )

/**
 * Will get the list of all loadable icon for a given group
 * @param {string | undefined} iconsGroupKey The icon group name
 * @returns ReturnType<typeof ICONS_GROUPS[IconsGroup]> | undefined
 */
export const getDsIcons = (
  iconsGroupKey: string | undefined
): ReturnType<(typeof ICONS_GROUPS)[IconsGroup]> | undefined =>
  iconsGroupKey && isIconsGroup(iconsGroupKey)
    ? ICONS_GROUPS[iconsGroupKey]()
    : undefined

/**
 * Will fetch and load one icon by providing icon group name and icon name
 * @param {IconID | undefined} iconId object with iconGroupName and iconName property
 * @returns an icon or undefined if no icon is found
 */
export const getDsIcon = (iconID: IconID | undefined): LazyIcon | undefined => {
  if (iconID) {
    const { iconGroupName: groupName, iconName } = iconID
    const iconsGroup = getDsIcons(groupName)

    return iconsGroup && isIconOfIconsGroup(iconName, iconsGroup)
      ? iconsGroup[iconName]
      : undefined
  }

  return undefined
}
