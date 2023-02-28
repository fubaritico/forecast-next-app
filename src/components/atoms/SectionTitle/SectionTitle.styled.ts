import styled from 'styled-components'
import { SPACING_1 } from '@Styles/constants/spacing'

export const Root = styled.h3`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: var(--inter-font-family);
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  color: #ffffff;

  &:after {
    content: ' ';
    flex: 1;
    border: 1px solid #ffffff66;
    margin: 0 0 0 ${SPACING_1};
  }
`
