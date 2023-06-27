import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import * as HomePageContentStories from './HomePageContent.stories'

const { Default } = composeStories(HomePageContentStories)
describe('HomePage', () => {
  it('should render and display Next.js logo', async () => {
    render(<Default />)
    expect(await screen.findByText(/made with/i)).toBeInTheDocument()
    expect(await screen.getByAltText(/13/i)).toBeInTheDocument()
  })
})
