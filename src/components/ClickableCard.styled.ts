import styled, { css } from 'styled-components'
import Link from 'next/link'

const linkMixin = css`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 400;
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;

  span {
    display: inline-block;
    transition: transform 200ms;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
  }

  /* Mobile */
  @media (max-width: 700px) {
    padding: 1rem 2.5rem;

    h2 {
      margin-bottom: 0.5rem;
    }
  }

  /* Enable hover only on non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);

      span {
        transform: translateX(4px);
      }
    }
  }

  @media (prefers-reduced-motion) {
    animation: none;

    &:hover span {
      transform: none;
    }
  }
`

export const AnchorCard = styled.a`
  ${linkMixin}
`
export const NextLinkCard = styled(Link)`
  ${linkMixin}
`
