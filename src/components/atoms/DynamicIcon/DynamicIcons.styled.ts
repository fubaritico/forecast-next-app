import styled, { css } from 'styled-components'
import DynamicIcon from '@Components/atoms/DynamicIcon/DynamicIcon'

type Sizes = 'small' | 'medium' | 'large'

type IconContainerProps = {
  size?: Sizes
  centered?: boolean
}

type IconWrapperProps = {
  width?: number
  fill?: boolean
}

const setMaxWidth = (size?: Sizes): string => {
  switch (size) {
    case 'small':
      return '50px'
    case 'medium':
      return '100px'
    case 'large':
      return '150px'
    default:
      return 'unset'
  }
}

export const IconGrid = styled.div`
  font-family: var(--inter-font-family);
`

export const StandAloneIcon = styled.div`
  font-family: var(--inter-font-family);
  width: 100%;
  margin: 0 0 30px;
`

export const IconGridTitle = styled.h2`
  align-self: stretch;
  overflow: hidden;
  padding-bottom: 16px;
  text-align: center;
  text-overflow: ellipsis;
  color: rgb(var(--icon-grid-title-color-rgb));
`

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  margin: 0 0 30px;
`

export const IconContainer = styled.span<IconContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 2px solid rgb(var(--icon-container-border-rgb));
  border-radius: 3px;
  max-width: ${({ size }) => setMaxWidth(size)};
  ${({ centered }) =>
    centered &&
    css`
      margin: 0 auto;
    `};
`

export const IconPlaceHolder = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(var(--icon-placeholder-rgb));
  width: 100%;
  padding: 5px;
  flex: 1;
`

export const ThemedIcon = styled(DynamicIcon)`
  fill: var(--icon-fill);
`

export const IconWrapper = styled.span<IconWrapperProps>`
  svg {
    fill: var(--icon-fill);
    width: ${({ width }) => `${width}px`};
  }
`

export const IconName = styled.span`
  display: block;
  background-color: rgb(var(--icon-name-bg-rgb));
  color: var(--icon-name-color);
  width: 100%;
  padding: 5px;
  font-size: 12px;
  text-align: center;
`
