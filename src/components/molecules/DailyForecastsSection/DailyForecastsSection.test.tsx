import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import { currentObservationPanel } from '@Stubs/details'
import * as DailyForecastsSectionStories from './DailyForecastsSection.stories'

const { Default } = composeStories(DailyForecastsSectionStories)

describe('DailyForecastsSection', () => {
  it('should render with data', async () => {
    render(<Default />)

    expect(
      screen.getByRole('heading', { level: 3, name: /next 7 days/i })
    ).toBeInTheDocument()
  })

  it('should render values and timeline on X axis', async () => {
    render(<Default />)

    const { dailyForecasts } = currentObservationPanel

    const chancesOfRainValues = screen.getAllByLabelText(/chances of rain/i)

    for (let i = 0; i < chancesOfRainValues.length; i += 1) {
      expect(chancesOfRainValues[i].innerHTML).toBe(
        dailyForecasts[i].chancesOfRain
      )
    }
  })
})
