import styled from 'styled-components'
import { SPACING_1, SPACING_2 } from '@Styles/constants/spacing'
import SectionTitle from '@Atoms/SectionTitle/SectionTitle'

export const StyledSectionTitle = styled(SectionTitle)``

export const Root = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: ${SPACING_1};
  margin: ${SPACING_2};

  ${StyledSectionTitle} {
    margin-bottom: ${SPACING_1};
  }
`

export const ForecastsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
`
