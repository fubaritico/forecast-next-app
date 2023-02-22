/* eslint-disable import/no-extraneous-dependencies */
import { PartialStoryFn } from '@storybook/csf'
import { ReactFramework } from '@storybook/react'

import Grid from '@Components/Grid/Grid'
import MainLayout from '@Components/Layouts/MainLayout'
import styled from 'styled-components'
import ThemeProvider from '@Styles/ThemeProvider'

const PaddedContainer = styled.div`
  display: flex;
  padding: 2rem;
  min-height: 100vh;
  flex-flow: row wrap;
`

export const withPadding = (
  StoryFn: PartialStoryFn<ReactFramework>,
  context: JSX.IntrinsicAttributes
) => (
  <PaddedContainer>
    <StoryFn {...context} />
  </PaddedContainer>
)

export const withGrid = (
  StoryFn: PartialStoryFn<ReactFramework>,
  context: JSX.IntrinsicAttributes
) => (
  <Grid>
    <StoryFn {...context} />
  </Grid>
)

export const withMainLayout = (
  StoryFn: PartialStoryFn<ReactFramework>,
  context: JSX.IntrinsicAttributes
) => (
  <MainLayout>
    <StoryFn {...context} />
  </MainLayout>
)

export const withTheme = (
  StoryFn: PartialStoryFn<ReactFramework>,
  context: JSX.IntrinsicAttributes
) => (
  <ThemeProvider>
    <StoryFn {...context} />
  </ThemeProvider>
)
