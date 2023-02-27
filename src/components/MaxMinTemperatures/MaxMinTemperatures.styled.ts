import styled from 'styled-components'
import { SPACING_1, SPACING_2 } from '@Styles/constants/spacing'

export const Root = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-bottom: ${SPACING_2};
`

export const MaxTemperature = styled.span`
  font-family: var(--inter-font-family);
  font-weight: 200;
  font-size: 24px;
  color: white;
  line-height: 1;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  opacity: 0.3;
  margin: ${SPACING_1} 0;
`

export const MinTemperature = styled.span`
  font-family: var(--inter-font-family);
  font-weight: 200;
  font-size: 24px;
  color: white;
  line-height: 1;
`

export const Degrees = styled.sup`
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: 50%;
  color: inherit;
`
