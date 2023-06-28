import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import * as HomePageContentStories from './HomePageContent.stories'

const { Default } = composeStories(HomePageContentStories)
describe('HomePage', () => {
  it('should render and display Next.js logo', async () => {
    render(<Default />)
    expect(await screen.getByAltText(/13/i)).toBeInTheDocument()
  })

  it('should display page contents (text, image, link to application)', async () => {
    render(<Default />)
    expect(
      await screen.findByText(/Get started by editing/i)
    ).toBeInTheDocument()
    expect(await screen.findByText(/GO TO APPLICATION/i)).toBeInTheDocument()
    expect(await screen.getByAltText(/Next\.js Logo/i)).toBeInTheDocument()
  })
})
