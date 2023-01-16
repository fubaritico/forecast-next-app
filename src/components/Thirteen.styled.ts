import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
  }

  /* Conic Gradient Animation */
  &::before {
    animation: 6s ${rotate} linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);
  }

  &::after {
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }

  @media (prefers-reduced-motion) {
    &::before {
      animation: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
`
