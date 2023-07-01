import { composeStories } from '@storybook/react'
import { render, screen } from '@Utils/reactTestingLibrary'

import { currentObservationPanel } from '@Stubs/details'
import * as ChancesOfRainSectionStories from './ChancesOfRainSection.stories'

const { Default } = composeStories(ChancesOfRainSectionStories)

describe('ChancesOfRainSection', () => {
  it('should render with data', async () => {
    render(<Default />)

    expect(
      screen.getByRole('heading', { level: 3, name: /chances of rain/i })
    ).toBeInTheDocument()
  })

  it('should render values and timeline on X axis', async () => {
    render(<Default />)

    const {
      hourlyForecasts: { chancesOfRain },
    } = currentObservationPanel

    const valueLabels = document.getElementsByClassName('apexcharts-datalabel')

    for (let i = 0; i < valueLabels.length; i += 1) {
      expect(valueLabels[i].innerHTML).toBe(chancesOfRain[i].chartValue)
    }

    const axisXLabels = document.getElementsByClassName(
      'apexcharts-xaxis-label'
    )

    for (let i = 0; i < axisXLabels.length; i += 1) {
      expect(axisXLabels[i].querySelector('title')?.innerHTML).toBe(
        chancesOfRain[i].timestampLocal.display
      )
    }
  })
})
