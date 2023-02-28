import styled from 'styled-components'
import { SPACING_1 } from '@Styles/constants/spacing'
import { QUARTER_RADIUS } from '@Styles/constants/radius'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--inter-font-family);
  flex-direction: column;
  padding: ${SPACING_1};
  background-color: #ffffff33;
  border-radius: ${QUARTER_RADIUS};
`

export const IconContainer = styled.div`
  width: 32px;

  svg {
    fill: #ffffff;
  }
`

export const Label = styled.span`
  color: white;
  font-size: 13px;
  font-weight: 300;
  text-align: center;
`

export const Value = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 400;
`
