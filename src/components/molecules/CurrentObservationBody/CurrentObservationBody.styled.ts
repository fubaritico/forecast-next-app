import styled from 'styled-components'
import { SPACING_1, SPACING_2 } from '@Styles/constants/spacing'

export const Root = styled.section`
  display: flex;
  align-items: center;
  flex: 1 0;
  margin: ${SPACING_2};
`

export const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
`

export const IconAndDescription = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  width: 100%;
`

export const IconContainer = styled.div`
  width: 48px;
  svg {
    fill: white;
  }
`

export const Description = styled.p`
  font-family: var(--inter-font-family);
  font-weight: 200;
  font-size: 42px;
  color: white;
  flex: 1 0;
  line-height: 1;
  padding: 0 0 0 ${SPACING_1};
`

export const Temperatures = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`

export const CurrentTemperature = styled.div`
  font-family: var(--helvetica-font-family);
  font-size: 124px;
  font-weight: 200;
  line-height: 1;
  color: white;
  letter-spacing: -3px;
`
export const Degrees = styled.sup`
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: 50%;
  color: inherit;
`

export const MaxMinTemperaturesContainer = styled.div`
  margin-bottom: ${SPACING_2};
`
