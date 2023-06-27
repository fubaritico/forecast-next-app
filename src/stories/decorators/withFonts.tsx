/* eslint-disable import/no-extraneous-dependencies */
import { PartialStoryFn } from '@storybook/csf'
import { ReactRenderer } from '@storybook/react'

import { HelveticaNeueLT, Inter } from '@App/localFonts'

export const withFonts = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <div className={`${HelveticaNeueLT.variable} ${Inter.variable}`}>
    <StoryFn {...context} />
  </div>
)
