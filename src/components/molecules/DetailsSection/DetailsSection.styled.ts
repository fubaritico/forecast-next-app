import styled from 'styled-components'
import { SPACING_1, SPACING_2 } from '@Styles/constants/spacing'
import ObservationInformation from '@Molecules/ObservationInformation/ObservationInformation'

export const ObservationInformationInGrid = styled(ObservationInformation)``

export const Root = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: ${SPACING_1};
  margin: ${SPACING_2};

  ${ObservationInformationInGrid} {
    flex: 1;
    flex-basis: 31%;
  }
`
