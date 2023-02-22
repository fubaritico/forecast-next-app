import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@Utils/reactTestingLibrary'
import { ALL_WEATHER_SMALL_ICONS } from '@Svg/weatherSmallIcons'
import { ALL_WEATHER_MEDIUM_ICONS } from '@Svg/weatherMediumIcons'
import { ALL_WEATHER_LARGE_ICONS } from '@Svg/weatherLargeIcons'

import { act } from '@testing-library/react'
import { StoryFn } from '@storybook/react'
import { AllIconsProps } from '@Components/Icons/AllIcons'
import * as AllIconsStories from './AllIcons.stories'

const { Small, Medium, Large } = composeStories(AllIconsStories)

const smallIcons = ALL_WEATHER_SMALL_ICONS as unknown as string[]
const mediumIcons = ALL_WEATHER_MEDIUM_ICONS as unknown as string[]
const largeIcons = ALL_WEATHER_LARGE_ICONS as unknown as string[]

const isIconInTheDocument = async (
  iconName: string,
  Component: StoryFn<Partial<AllIconsProps>>
) => {
  render(<Component />)
  await act(async () => {
    expect(await screen.findByText(iconName)).toBeInTheDocument()
  })

  expect(await screen.getByTestId(iconName)).toBeInTheDocument()
}

describe('All Icons', () => {
  it.each([smallIcons])(
    'should show all icons in the small weather icon group',
    async (iconName) => {
      await isIconInTheDocument(iconName, Small)
    }
  )

  it.each([mediumIcons])(
    'should show all icons in the medium weather icon group',
    async (iconName) => {
      await isIconInTheDocument(iconName, Medium)
    }
  )

  it.each([largeIcons])(
    'should show all icons in the large weather icon group',
    async (iconName) => {
      await isIconInTheDocument(iconName, Large)
    }
  )
})
