import { createGlobalStyle, css } from 'styled-components'
import Fonts from '@Styles/Fonts'

const lightValues = css`
  --max-width: ${({ theme }) => theme.light.maxWidth};
  --border-radius: ${({ theme }) => theme.light.borderRadius};
  --font-mono: ${({ theme }) => theme.light.fontsMono};

  --foreground-rgb: ${({ theme }) => theme.light.foregroundRgb};
  --background-start-rgb: ${({ theme }) => theme.light.backgroundStartRgb};
  --background-end-rgb: ${({ theme }) => theme.light.backgroundEndRgb};

  --primary-glow: ${({ theme }) => css`conic-gradient(
    from 180deg at 50% 50%,
    ${theme.light.primaryGlow.color1} 0deg,
    ${theme.light.primaryGlow.color2} 55deg,
    ${theme.light.primaryGlow.color3} 120deg,
    ${theme.light.primaryGlow.color4} 160deg,
    transparent 360deg
  )`};
  --secondary-glow: ${({ theme }) => css`radial-gradient(
          rgba(${theme.light.secondaryGlow}, 1),
          rgba(${theme.light.secondaryGlow}, 0)
  )`};

  --tile-start-rgb: ${({ theme }) => theme.light.tileStartRgb};
  --tile-end-rgb: ${({ theme }) => theme.light.tileEndRgb};
  --tile-border: ${({ theme }) => css`conic-gradient(
          ${`${theme.light.tileBorder}80`},
          ${`${theme.light.tileBorder}40`},
          ${`${theme.light.tileBorder}30`},
          ${`${theme.light.tileBorder}20`},
          ${`${theme.light.tileBorder}10`},
          ${`${theme.light.tileBorder}10`},
          ${`${theme.light.tileBorder}80`})`};

  --callout-rgb: ${({ theme }) => theme.light.calloutRgb};
  --callout-border-rgb: ${({ theme }) => theme.light.calloutBorderRgb};
  --card-rgb: ${({ theme }) => theme.light.cardRgb};
  --card-border-rgb: ${({ theme }) => theme.light.cardBorderRgb};

  --icon-grid-title-color-rgb: ${({ theme }) =>
    theme.light.icons.iconGridTitleColorRgb};
  --icon-container-border-rgb: ${({ theme }) =>
    theme.light.icons.iconContainerBdrRgb};
  --icon-name-bg-rgb: ${({ theme }) => theme.light.icons.iconeNameBgRgb};
  --icon-fill: ${({ theme }) => theme.light.icons.iconFill};
  --icon-name-color: ${({ theme }) => theme.light.icons.iconeNameColor};
  --icon-placeholder-rgb: ${({ theme }) =>
    theme.light.icons.iconPlaceHolderBgRgb};
`

// set up dark theme CSS variables
const darkValues = css`
  --max-width: ${({ theme }) => theme.dark.maxWidth};
  --border-radius: ${({ theme }) => theme.dark.borderRadius};

  --foreground-rgb: ${({ theme }) => theme.dark.foregroundRgb};
  --background-start-rgb: ${({ theme }) => theme.dark.backgroundStartRgb};
  --background-end-rgb: ${({ theme }) => theme.dark.backgroundEndRgb};

  --primary-glow: ${({ theme }) => css`
    radial-gradient(rgba(${theme.dark.primaryGlow.color1}, 0.4), rgba(${theme.dark.primaryGlow.color1}, 0))`};
  --secondary-glow: ${({ theme }) => css`
    linear-gradient(
            to bottom right,
            rgba(${theme.dark.secondaryGlow}, 0),
            rgba(${theme.dark.secondaryGlow}, 0),
            rgba(${theme.dark.secondaryGlow}, 0.3)
    )`};

  --tile-start-rgb: ${({ theme }) => theme.dark.tileStartRgb};
  --tile-end-rgb: ${({ theme }) => theme.dark.tileEndRgb};
  --tile-border: ${({ theme }) => css`conic-gradient(
          ${`${theme.dark.tileBorder}80`},
          ${`${theme.dark.tileBorder}40`},
          ${`${theme.dark.tileBorder}30`},
          ${`${theme.dark.tileBorder}20`},
          ${`${theme.dark.tileBorder}10`},
          ${`${theme.dark.tileBorder}10`},
          ${`${theme.dark.tileBorder}80`})`};

  --callout-rgb: ${({ theme }) => theme.dark.calloutRgb};
  --callout-border-rgb: ${({ theme }) => theme.dark.calloutBorderRgb};
  --card-rgb: ${({ theme }) => theme.dark.cardRgb};
  --card-border-rgb: ${({ theme }) => theme.dark.cardBorderRgb};

  --icon-grid-title-color-rgb: ${({ theme }) =>
    theme.dark.icons.iconGridTitleColorRgb};
  --icon-container-border-rgb: ${({ theme }) =>
    theme.dark.icons.iconContainerBdrRgb};
  --icon-name-bg-rgb: ${({ theme }) => theme.dark.icons.iconeNameBgRgb};
  --icon-fill: ${({ theme }) => theme.dark.icons.iconFill};
  --icon-name-color: ${({ theme }) => theme.dark.icons.iconeNameColor};
  --icon-placeholder-rgb: ${({ theme }) =>
    theme.dark.icons.iconPlaceHolderBgRgb};
`

export default createGlobalStyle`
  :root {
    // First define fonts
    ${Fonts};

    --inter-font-family: 'Inter', serif;
    --helvetica-font-family: 'HelveticaNeueLT', serif;

    // Then define light theme values as the defaults within the root selector
    ${lightValues};
    
    // Finally override with dark theme values within media query
    @media(prefers-color-scheme: dark) {
      ${darkValues}
    }
  }
  
  // Global native styles

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
            to bottom,
            transparent,
            rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`
