import styled from 'styled-components'
import { device } from 'utils/breakpoints'

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: var(--blue-light);
    color: var(--shape);
    font-size: 1rem;

    padding: 0 2rem;
    height: 3rem;

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media ${device.mobileL} {
    flex-direction: column;

    button {
      margin-top: 1.5rem;
    }
  }
`;