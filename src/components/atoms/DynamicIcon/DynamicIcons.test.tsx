import { composeStories, StoryFn } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import { act } from '@testing-library/react'
import * as DynamicIconsStories from './DynamicIcons.stories'
import { DynamicIconsProps } from './DynamicIcons'
import { smallIcons, mediumIcons, largeIcons } from './iconsGroups'

const { Small, Medium, Large } = composeStories(DynamicIconsStories)

const isDynamicIconInTheDocument = async (
  iconName: string,
  Component: StoryFn<Partial<DynamicIconsProps>>
) => {
  render(<Component />)
  await act(async () => {
    expect(await screen.findByText(iconName)).toBeInTheDocument()
  })

  expect(await screen.getByTestId(iconName)).toBeInTheDocument()
}

describe('Dynamic Icons', () => {
  it.each([smallIcons])(
    'should show all icons in the small weather icon group',
    async (iconName) => {
      await isDynamicIconInTheDocument(iconName, Small)
    }
  )

  it.each([mediumIcons])(
    'should show all icons in the medium weather icon group',
    async (iconName) => {
      await isDynamicIconInTheDocument(iconName, Medium)
    }
  )

  it.each([largeIcons])(
    'should show all icons in the large weather icon group',
    async (iconName) => {
      await isDynamicIconInTheDocument(iconName, Large)
    }
  )
})
