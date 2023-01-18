import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HomePage from '@Pages/HomePage'
import { withMainLayout } from '@Decorators/withLayout'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [withMainLayout],
} as ComponentMeta<typeof HomePage>

export const Default: ComponentStory<typeof HomePage> = () => <HomePage />
