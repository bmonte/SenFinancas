import styled from 'styled-components';

interface ContainerProps {
  color?: 'red' | 'green'
}

export const Container = styled.div<ContainerProps>`
  background: ${({ color }) => color ? `var(--${color})` : 'var(--shape)'};
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: ${({ color }) => color ? 'var(--shape)' : 'var(--text-title)'};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
