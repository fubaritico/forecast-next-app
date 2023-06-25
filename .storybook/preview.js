import { ThemeProvider } from 'styled-components'
import * as NextImage from 'next/image'
import Theme from '../src/styles/Theme'
import GlobalStyle from '../src/styles/Global'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

// Global default decorators
const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Story {...context} />
      </>
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

// Global default parameter
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const preview = {
  decorators,
  parameters,
}

export default preview
