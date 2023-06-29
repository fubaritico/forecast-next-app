/* eslint-disable import/no-extraneous-dependencies */
import { PartialStoryFn } from '@storybook/csf'
import { ReactRenderer } from '@storybook/react'

import Grid from '@Atoms/Grid/Grid'
import Main from '@Components/atoms/Main'

export const withPadding = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <div className="flex p-5 min-h-screen flex-row flex-wrap">
    <StoryFn {...context} />
  </div>
)

export const withGrid = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <Grid>
    <StoryFn {...context} />
  </Grid>
)

export const withMainLayout = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <Main>
    <StoryFn {...context} />
  </Main>
)
