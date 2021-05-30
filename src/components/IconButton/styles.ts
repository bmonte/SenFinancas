import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3rem;
  width: 3rem;

  background: var(--text-body);
  color: var(--shape);

  border: 0;
  border-radius: 100%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
