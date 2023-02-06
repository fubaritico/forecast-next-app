import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import theme from '@Styles/Theme'
import { ThemeProvider } from 'styled-components'
import '@Styles/Grid'
import GlobalStyles from '@Styles/Global'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component: PageComponent,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout =
    PageComponent.getLayout ?? ((children: ReactElement) => children)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {getLayout(<PageComponent {...pageProps} />)}
    </ThemeProvider>
  )
}
