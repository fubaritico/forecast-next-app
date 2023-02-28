import styled from 'styled-components'
import { SPACING_1 } from '@Styles/constants/spacing'

export const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: ${SPACING_1};
`

export const MenuButton = styled.button`
  appearance: none;
  background: none;
  cursor: pointer;
  outline: 0 none;
  border: 0 none;
  width: 32px;
  svg {
    fill: ${({ theme }) => theme.light.icons.iconFill};
  }
`

export const LocationAndDate = styled.div`
  font-family: var(--inter-font-family);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0;
`

export const Location = styled.h1`
  font-weight: 200;
  font-size: 32px;
  color: white;
  text-align: center;
  width: 100%;
`

export const Date = styled.p`
  font-weight: 300;
  font-size: 20px;
  color: white;
  opacity: 0.7;
`

export const MoreButton = styled.button`
  appearance: none;
  background: none;
  cursor: pointer;
  outline: 0 none;
  border: 0 none;
  width: 32px;
  svg {
    fill: ${({ theme }) => theme.light.icons.iconFill};
  }
`
