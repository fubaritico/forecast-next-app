import styled from 'styled-components'
import { Col } from 'react-grid-system'

export const LeftContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 6rem;
  min-height: 100%;
  max-width: 200px;
`
export const RightContentCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 6rem;
  min-height: 100%;
`
