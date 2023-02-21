import { AppProps } from 'next/app'
import { ReactElement } from 'react'
import '@Styles/Grid'
import ThemeProvider from '@Styles/ThemeProvider'

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
    <ThemeProvider>{getLayout(<PageComponent {...pageProps} />)}</ThemeProvider>
  )
}
