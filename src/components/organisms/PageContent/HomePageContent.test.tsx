import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@Utils/reactTestingLibrary'

import * as HomePageContentStories from './HomePageContent.stories'

const { Default } = composeStories(HomePageContentStories)
describe('HomePage', () => {
  it('should render and display Next.js logo', async () => {
    render(<Default />)
    expect(await screen.getByAltText(/13/i)).toBeInTheDocument()
  })

  it('should display page contents (text, image, button with a11y label)', async () => {
    render(<Default />)
    expect(
      await screen.findByText(/Get started by editing/i)
    ).toBeInTheDocument()
    expect(
      await screen.findByText(
        /See Forecasts ofr 35 degrees of latitude & 45 degrees of longitude/i
      )
    ).toBeInTheDocument()
    expect(await screen.getByAltText(/Next\.js Logo/i)).toBeInTheDocument()
    expect(await screen.findByLabelText(/Docs/i)).toBeInTheDocument()
  })
})
