import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import { act } from '@testing-library/react'
import * as CurrentObservationPanelStories from './CurrentObservationPanel.stories'

/**
 * Prevent react-charts from throw error:
 * TypeError: Cannot read property 'node' of undefined
 *
 * Because it renders charts as SVGs and SVGs are mocked,
 * it's likely that any charts running in this environment will therefore break
 */
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}))

const { Default } = composeStories(CurrentObservationPanelStories)
describe('CurrentObservationPanel', () => {
  it('should render', async () => {
    render(<Default />)

    await act(async () => {
      expect(await screen.findByText(/Lille/i)).toBeInTheDocument()
    })
  })
})
