import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from '@Styles/Theme'
import GlobalStyles from '@Styles/Global'

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </StyledComponentsThemeProvider>
)

export const useTheme = () => theme

export default ThemeProvider
