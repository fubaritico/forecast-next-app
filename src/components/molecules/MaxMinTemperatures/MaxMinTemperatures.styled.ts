import styled, { css } from 'styled-components'
import { SPACING_2 } from '@Styles/constants/spacing'

type RootProps = {
  size: 'small' | 'normal'
}
export const MaxTemperature = styled.span`
  font-family: var(--inter-font-family);
  font-weight: 200;
  font-size: 24px;
  color: white;
  line-height: 1;
  text-align: right;
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  opacity: 0.3;
  margin: 10% 0;
`

export const MinTemperature = styled.span`
  font-family: var(--inter-font-family);
  font-weight: 200;
  font-size: 24px;
  color: white;
  line-height: 1;
  text-align: right;
`

export const Degrees = styled.sup`
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  font-size: 50%;
  color: inherit;
`

export const Root = styled.div<RootProps>`
  display: flex;
  flex-flow: row wrap;
  ${({ size }) =>
    size === 'normal'
      ? css`
          flex: 1;
          flex-flow: column;
        `
      : css`
          flex: 0 1;
          flex-flow: row wrap;
          justify-content: flex-end;
        `}

  ${MaxTemperature} {
    ${({ size }) =>
      size === 'normal'
        ? css`
            font-size: 24px;
          `
        : css`
            font-weight: 300;
            font-size: 16px;
          `}
  }

  ${Separator} {
    ${({ size }) =>
      size === 'normal'
        ? css`
            margin: ${SPACING_2} 0;
          `
        : css`
            margin: 10% 0;
          `}
  }

  ${MinTemperature} {
    ${({ size }) =>
      size === 'normal'
        ? css`
            font-size: 24px;
          `
        : css`
            font-weight: 300;
            font-size: 16px;
            opacity: 0.5;
          `}
  }
`
