import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  overflow-x: auto;

  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  form {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    input, select {
      height: 4rem;
      padding: 0 1.5rem;
      border-radius: 0.25rem;
      border: 1px solid #D7D7D7;
      background: #E7E9EE;
      font-size: 1rem;
    
      & + select {
        margin-left: 1rem;
      }

      &::placeholder {
        color: var(--text-body);
      }
    }

    input {
      flex: 1;
    }
  }
`;
