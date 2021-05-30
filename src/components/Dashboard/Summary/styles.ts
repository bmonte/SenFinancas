import styled from 'styled-components';
import { size, device } from 'utils/breakpoints'

export const Container = styled.div`
  margin-top: -7rem;

  @media (min-width: ${size.tablet - 1}px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  ${device.tablet} {
    div + div {
      margin-top: 1rem;
    }
  }

  .transactions-total {
    background: var(--green);
    color: var(--shape);
  }
`;