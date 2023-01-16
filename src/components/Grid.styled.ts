import styled from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  width: var(--max-width);
  max-width: 100%;

  /* Mobile */
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-bottom: 120px;
    max-width: 320px;
    text-align: center;
  }

  /* Tablet and Smaller Desktop */
  @media (min-width: 701px) and (max-width: 1120px) {
    grid-template-columns: repeat(2, 50%);
  }
`
