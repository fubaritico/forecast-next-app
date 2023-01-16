import type { AppProps } from 'next/app'
import theme from '@Styles/Theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@Styles/Global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
