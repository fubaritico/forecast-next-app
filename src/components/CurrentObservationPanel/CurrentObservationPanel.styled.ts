import styled from 'styled-components'
import { SPACING_2 } from '@Styles/constants/spacing'
import { WEATHER_GRADIENTS } from '@Styles/constants/gradients'

type RootProps = {
  /** weather icon name as a basis to choose gradient colors according to current weather */
  weather: string
}

export const Root = styled.article<RootProps>`
  display: flex;
  flex-flow: column;
  background: rgb(${({ weather }) => WEATHER_GRADIENTS[weather][0]});
  background: linear-gradient(
    180deg,
    rgb(${({ weather }) => WEATHER_GRADIENTS[weather][0]}) 0%,
    rgb(${({ weather }) => WEATHER_GRADIENTS[weather][1]}) 30%,
    rgb(${({ weather }) => WEATHER_GRADIENTS[weather][3]}) 63%,
    rgb(${({ weather }) => WEATHER_GRADIENTS[weather][2]}) 100%
  );
  padding: ${SPACING_2};
  min-width: 320px;
  width: 360px;
  height: 800px;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0;
  padding: ${SPACING_2};
`
