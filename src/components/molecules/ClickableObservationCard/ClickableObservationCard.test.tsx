import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import * as ClickableCardStories from './ClickableObservationCard.stories'

const { AsAnInternalLink } = composeStories(ClickableCardStories)
describe('ClickableCard', () => {
  it('should render as an external link', async () => {
    render(<AsAnInternalLink />)

    expect(await screen.getByLabelText(/Moscow/i)).toBeInTheDocument()
  })
})
