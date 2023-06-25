/* eslint-disable import/no-extraneous-dependencies */
import { PartialStoryFn } from '@storybook/csf'
import { ReactRenderer } from '@storybook/react'

import Grid from '@Atoms/Grid/Grid'
import MainLayout from '@Components/atoms/Main'
import styled from 'styled-components'
import ThemeProvider from '@Styles/ThemeProvider'

const PaddedContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 100vh;
  flex-flow: row wrap;
`

export const withPadding = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <PaddedContainer>
    <StoryFn {...context} />
  </PaddedContainer>
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
  <MainLayout>
    <StoryFn {...context} />
  </MainLayout>
)

export const withTheme = (
  StoryFn: PartialStoryFn<ReactRenderer>,
  context: JSX.IntrinsicAttributes
) => (
  <ThemeProvider>
    <StoryFn {...context} />
  </ThemeProvider>
)
