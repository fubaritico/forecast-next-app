import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@Utils/reactTestingLibrary'

import * as ClickableCardStories from './ClickableCard.stories'

const { AsAnExternalLink } = composeStories(ClickableCardStories)
describe('ClickableCard', () => {
  it('should render as an external link', async () => {
    render(<AsAnExternalLink />)
    expect(await screen.getByLabelText(/paris/i)).toBeInTheDocument()
  })

  it('should display, as an external link, place and weather status', async () => {
    render(<AsAnExternalLink />)
    expect(await screen.findByText(/paris/i)).toBeInTheDocument()
    expect(await screen.findByText(/mostly cloudy/i)).toBeInTheDocument()
  })
})
