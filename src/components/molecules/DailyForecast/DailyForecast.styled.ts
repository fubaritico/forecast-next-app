import styled from 'styled-components'
import { SPACING_1, SPACING_2 } from '@Styles/constants/spacing'
import DynamicIcon from '@Atoms/DynamicIcon/DynamicIcon'

export const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 0;
`

export const WeekDay = styled.span`
  font-family: var(--inter-font-family);
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  color: white;
  width: 100%;
  margin-bottom: ${SPACING_1};
`

export const ChancesOfRain = styled.span`
  font-family: var(--inter-font-family);
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  color: white;
  width: 100%;
  min-height: 15px;
`

export const WeatherIcon = styled(DynamicIcon)`
  fill: white;
  margin-bottom: ${SPACING_2};
`
