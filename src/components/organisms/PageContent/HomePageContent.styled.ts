import styled from 'styled-components'
import Image from 'next/image'

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`

export const NextLogo = styled(Image)`
  position: relative;

  @media (prefers-color-scheme: dark) {
    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
  }
`
