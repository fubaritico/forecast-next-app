import React from 'react'
import { ThemeProvider } from 'styled-components'
import * as NextImage from 'next/image'
import Theme from '../src/styles/Theme'
import GlobalStyle from '../src/styles/Global'
import { Preview } from '@storybook/react'
import { StoryFn } from '@storybook/react'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
})

// Global default decorators
const withThemeProvider = (Story: StoryFn, context: any) => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle />
        <Story {...context} />
      </>
    </ThemeProvider>
  )
}
const decorators = [withThemeProvider]

// Global default parameter
const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const preview: Preview = {
  decorators,
  parameters,
}

export default preview
