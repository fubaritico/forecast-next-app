import '../app/globals.css'
import React from 'react'
import * as NextImage from 'next/image'
import { Preview, ReactRenderer } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import { DecoratorFunction } from '@storybook/types'
import { withFonts } from '@Decorators/withFonts'

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
})

const withTailwind = withThemeByDataAttribute({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
  attributeName: 'data-mode',
})

const decorators = [
  withTailwind as DecoratorFunction<ReactRenderer, { [x: string]: any }>,
  withFonts as DecoratorFunction<ReactRenderer, { [x: string]: any }>,
]

// Global default parameter
const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextjs: {
    appDirectory: true,
  },
}

const preview: Preview = {
  decorators,
  parameters,
}

export default preview
