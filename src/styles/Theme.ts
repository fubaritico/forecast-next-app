import { DefaultTheme } from 'styled-components'
import Colors from './Colors'

const Theme: DefaultTheme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  light: {
    maxWidth: '1100px',
    borderRadius: '12px',
    fontsMono:
      "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\n" +
      "    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\n" +
      "    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
    foregroundRgb: Colors.rgbBlack,
    backgroundStartRgb: Colors.rgbVeryLightGrey1,
    backgroundEndRgb: Colors.rgbWhite,
    primaryGlow: {
      color1: Colors.darkBlue1,
      color2: Colors.darkBlue2,
      color3: Colors.darkBlue3,
      color4: Colors.darkBlue4,
    },
    secondaryGlow: Colors.rgbWhite,
    tileStartRgb: Colors.rgbVeryLightGrey2,
    tileEndRgb: Colors.rgbVeryLightGrey3,
    tileBorder: Colors.black,
    calloutRgb: Colors.rgbVeryLightGrey4,
    calloutBorderRgb: Colors.rgbLightGrey1,
    cardRgb: Colors.rgbLightGrey2,
    cardBorderRgb: Colors.rgbMediumGrey1,
  },
  dark: {
    maxWidth: '1100px',
    borderRadius: '12px',
    fontsMono:
      "ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\n" +
      "    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\n" +
      "    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace",
    foregroundRgb: Colors.rgbWhite,
    backgroundStartRgb: Colors.rgbBlack,
    backgroundEndRgb: Colors.rgbBlack,
    primaryGlow: {
      color1: Colors.rgbBlue,
    },
    secondaryGlow: Colors.rgbBlue,
    tileStartRgb: Colors.rgbVeryDarkBlue1,
    tileEndRgb: Colors.rgbVeryDarkBlue2,
    tileBorder: Colors.white,
    calloutRgb: Colors.rgbVeryDarkGrey3,
    calloutBorderRgb: Colors.rgbMediumGrey2,
    cardRgb: Colors.rgbMediumGrey3,
    cardBorderRgb: Colors.rgbVeryLightGrey5,
  },
}

export default Theme
