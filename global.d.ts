/// <reference types="api-configuration.d.ts" />
/// <reference types="bff.d.ts" />

import { SVGProps, ReactElement, FC } from 'react'
import { NextPage } from 'next'
import { AxiosError } from 'axios'

export {}

declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}

declare global {
  // STYLES: UX & THEME

  interface GlowColors {
    color1: string
    color2?: string
    color3?: string
    color4?: string
  }

  interface IColors {
    black: string
    darkBlue1: string
    darkBlue2: string
    darkBlue3: string
    darkBlue4: string
    rgbBlack: string
    rgbBlue: string
    rgbLightGrey1: string
    rgbLightGrey2: string
    rgbMediumGrey1: string
    rgbMediumGrey2: string
    rgbMediumGrey3: string
    rgbVeryDarkBlue1: string
    rgbVeryDarkBlue2: string
    rgbVeryDarkGrey3: string
    rgbVeryLightGrey1: string
    rgbVeryLightGrey2: string
    rgbVeryLightGrey3: string
    rgbVeryLightGrey4: string
    rgbVeryLightGrey5: string
    rgbWhite: string
    white: string
  }

  interface IconsTheme {
    iconGridTitleColorRgb: string
    iconContainerBdrRgb: string
    iconPlaceHolderBgRgb: string
    iconFill: string
    iconeNameBgRgb: string
    iconeNameColor: string
  }

  interface IThemeProps {
    maxWidth: string
    borderRadius: string
    fontsMono: string
    foregroundRgb: string
    backgroundStartRgb: string
    backgroundEndRgb: string
    primaryGlow: GlowColors
    secondaryGlow: string
    tileStartRgb: string
    tileEndRgb: string
    tileBorder: string
    calloutRgb: string
    calloutBorderRgb: string
    cardRgb: string
    cardBorderRgb: string
    icons: IconsTheme
  }

  // NEXT: LAYOUTS AND PAGES

  type GetLayoutCallback = (page: ReactElement) => ReactElement

  type NestedLayoutCallback = (
    parent: GetLayoutCallback,
    child: GetLayoutCallback
  ) => GetLayoutCallback

  type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayoutCallback
    getChildren?(): ReactElement[]
  }

  // API AXIOS RESPONSES

  /** Contains a data object of type <i>GetCurrentDefaultObservationsResponse</i> */
  type GetCurrentDefaultObservationsAxiosResponse = AxiosResponse<
    GetCurrentDefaultObservationsResponse,
    AxiosError
  >

  type GetObservationDetailsAxiosResponse = AxiosResponse<
    GetDetailedForecatsResponse,
    AxiosError
  >

  // API ROUTE REQUEST

  type GetObservationDetailsRequestParams = Coordinates & {
    cityName: string
  }

  // DYNAMICALLY DISPLAYED ICONS

  export type LazyIconProps = PropsWithRef<SVGProps<SVGSVGElement>>

  export type LazyIcon = FC<LazyIconProps>

  export type LazyIconsGroup<IconType extends string> = Record<
    IconType,
    LazyIcon
  >

  export type IconID = {
    iconGroupName: string
    iconName: string
  }

  export type Nullable<T> = T | undefined
}
